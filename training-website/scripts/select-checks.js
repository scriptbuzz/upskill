// Select browser checks conservatively from the complete change since the tested base.
const fs = require("node:fs");
const { execFileSync } = require("node:child_process");

const allCourses = ["clf", "aif"];
const fullPlan = reason => ({ smoke: false, navigation: true, features: true, courses: allCourses, reasons: [reason] });

function htmlStructure(source) {
  // Keep executable content and all behavior-bearing attributes when comparing page copy.
  return source.replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>|<style\b[^>]*>[\s\S]*?<\/style\s*>|<!--[\s\S]*?-->|<(?:[^"'<>]|"[^"]*"|'[^']*')*>|[^<]+/gi, token => {
    if (/^<(script|style)\b/i.test(token)) return token;
    if (/^<!--/.test(token)) return "";
    if (!token.startsWith("<")) return "";
    if (/^<meta\b/i.test(token) && /\b(?:name|property)=["'](?:author|description|keywords|og:site_name|og:title|og:description|twitter:title|twitter:description)["']/i.test(token)) {
      return token.replace(/\bcontent=("[^"]*"|'[^']*')/i, 'content=""');
    }
    return token;
  });
}

function classifyChanges(changes) {
  const plan = { smoke: false, navigation: false, features: false, courses: [], reasons: [] };
  const courses = new Set();
  const addCourses = ids => ids.forEach(id => courses.add(id));
  for (const { path, before, after } of changes) {
    if (/\.md$/i.test(path) || path === ".gitignore" || /^LICENSE(?:\.|$)/.test(path)) continue;
    if (before == null || after == null) return fullPlan("A runtime file was added or removed.");
    const course = path.match(/^training-website\/courses\/(clf|aif)\//)?.[1];
    const affected = course ? [course] : allCourses;
    if (["training-website/js/course_shared.js", "training-website/js/course_export.js"].includes(path)) {
      const withoutHeader = text => text.replace(/^\/\*[\s\S]*?\*\/\s*/, "");
      if (withoutHeader(before) === withoutHeader(after)) continue;
    }
    if (path === "training-website/js/site_config.js") {
      const name = /window\.SITE_NAME\s*=\s*"[^"\n]*"/;
      if (!name.test(before) || !name.test(after) || before.replace(name, "SITE_NAME") !== after.replace(name, "SITE_NAME")) return fullPlan("Site configuration behavior changed.");
      plan.smoke = true;
      addCourses(allCourses);
      plan.reasons.push("The displayed site name changed.");
    } else if (path.startsWith("training-website/") && path.endsWith(".html") && htmlStructure(before) === htmlStructure(after)) {
      plan.smoke = true;
      addCourses(affected);
      plan.reasons.push("Page wording or descriptive metadata changed.");
    } else if (path === "training-website/js/course_export.js" || path === "training-website/css/export.css" || /\/export\.html$/.test(path) || /^training-website\/courses\/(clf|aif)\/visualizations\//.test(path)) {
      plan.features = true;
      addCourses(affected);
      plan.reasons.push("Exports or workshop diagrams changed.");
    } else if (course && (path.endsWith(`/${course}_data.js`) || /\/(index|viewer)\.html$/.test(path))) {
      plan.navigation = true;
      plan.features = true;
      addCourses(affected);
      plan.reasons.push("Workshop content or page behavior changed.");
    } else return fullPlan("Shared behavior, tests, dependencies, workflow configuration, or an unclassified file changed.");
  }
  plan.courses = allCourses.filter(id => courses.has(id));
  plan.reasons = [...new Set(plan.reasons)];
  if (!plan.reasons.length) plan.reasons.push("Only documentation changed, or there are no changes.");
  return plan;
}

function selectRange(base, head, cwd = process.cwd()) {
  if (![base, head].every(sha => /^[a-f0-9]{40,64}$/.test(sha || ""))) return fullPlan("No verified comparison base is available.");
  const git = args => execFileSync("git", args, { cwd, encoding: "utf8", maxBuffer: 32 * 1024 * 1024, stdio: ["ignore", "pipe", "pipe"] });
  try {
    git(["merge-base", "--is-ancestor", base, head]);
    const paths = git(["diff", "--name-only", "--no-renames", "-z", base, head, "--"]).split("\0").filter(Boolean);
    const read = (sha, path) => {
      try { return git(["show", `${sha}:${path}`]); } catch { return null; }
    };
    return classifyChanges(paths.map(path => ({ path, before: read(base, path), after: read(head, path) })));
  } catch { return fullPlan("The comparison history could not be verified."); }
}

function eventPlan(eventName, event, deployedSha, head, cwd) {
  if (eventName === "workflow_dispatch") return fullPlan("A manual run requests complete browser coverage.");
  if (eventName === "pull_request") return selectRange(event.pull_request?.base?.sha, head, cwd);
  // Compare main with the last successful deployment, so an earlier failed release cannot be skipped.
  if (eventName === "push" && event.ref === "refs/heads/main") return selectRange(deployedSha, head, cwd);
  return fullPlan("The event has no supported comparison base.");
}

if (require.main === module) {
  const event = process.env.GITHUB_EVENT_PATH ? JSON.parse(fs.readFileSync(process.env.GITHUB_EVENT_PATH, "utf8")) : {};
  const plan = process.argv[2] ? selectRange(process.argv[2], process.argv[3]) : eventPlan(process.env.GITHUB_EVENT_NAME, event, process.env.LAST_DEPLOYED_SHA, process.env.GITHUB_SHA);
  console.log(JSON.stringify(plan, null, 2));
  if (process.env.GITHUB_OUTPUT) {
    const outputs = { smoke: plan.smoke, navigation: plan.navigation, features: plan.features, browser_required: plan.smoke || plan.navigation || plan.features, courses: plan.courses.join(",") };
    fs.appendFileSync(process.env.GITHUB_OUTPUT, Object.entries(outputs).map(([key, value]) => `${key}=${value}\n`).join(""));
  }
  if (process.env.GITHUB_STEP_SUMMARY) fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, `## Selected browser checks\n\n${plan.reasons.map(reason => `- ${reason}`).join("\n")}\n\nLayout: ${plan.smoke}; navigation: ${plan.navigation}; features: ${plan.features}; workshops: ${plan.courses.join(", ") || "none"}.\n`);
}

module.exports = { classifyChanges, selectRange, eventPlan };
