const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { execFileSync } = require("node:child_process");
const { classifyChanges, selectRange, eventPlan } = require("./select-checks.js");
const change = (path, before = "before", after = "after") => ({ path, before, after });

test("documentation skips browser checks while wording keeps a layout check", () => {
  const docs = classifyChanges([change("README.md"), change("LICENSE", null, "new")]);
  assert.equal(docs.navigation || docs.features || docs.smoke, false);
  const heading = classifyChanges([change("training-website/index.html", '<h1>On-Demand <span>Certification</span> Workshops</h1>', '<h1><span>Digital</span> Workshops</h1>')]);
  assert.equal(heading.smoke, true);
  assert.equal(heading.navigation || heading.features, false);
});

test("a brand-only change runs layout checks without hiding script changes", () => {
  const name = change("training-website/js/site_config.js", 'window.SITE_NAME = "Old name";', 'window.SITE_NAME = "New name";');
  const plan = classifyChanges([name, change("training-website/js/course_shared.js", '/** Old name */\nrun();', '/** New name */\nrun();')]);
  assert.equal(plan.smoke, true);
  assert.equal(plan.navigation, false);
  assert.equal(classifyChanges([{ ...name, after: name.after + "run();" }]).navigation, true);
});

test("HTML behavior and inline code cannot be mistaken for a wording change", () => {
  for (const [before, after] of [
    ['<a href="a.html">Go</a>', '<a href="b.html">Go</a>'],
    ['<button onclick="a()">Go</button>', '<button onclick="b()">Go</button>'],
    ['<button title="a > b" onclick="a()">Go</button>', '<button title="a > b" onclick="b()">Go</button>'],
    ['<script>run(1)</script>', '<script>run(2)</script>'],
    ['<style>h1{display:block}</style>', '<style>h1{display:none}</style>'],
    ['<meta http-equiv="refresh" content="1">', '<meta http-equiv="refresh" content="9">'],
  ]) assert.equal(classifyChanges([change("training-website/index.html", before, after)]).navigation, true);
  const metadata = classifyChanges([change("training-website/index.html", '<meta name="author" content="Old">', '<meta name="author" content="New">')]);
  assert.equal(metadata.smoke, true);
  assert.equal(metadata.navigation, false);
});

test("course-specific content uses its workshop while shared behavior uses both", () => {
  const plan = classifyChanges([change("training-website/courses/clf/clf_data.js")]);
  assert.equal(plan.navigation && plan.features, true);
  assert.deepEqual(plan.courses, ["clf"]);
  for (const file of ["training-website/js/course_shared.js", "training-website/css/styles.css", ".github/workflows/navigation.yml", "package-lock.json", "unknown.file"]) {
    assert.deepEqual(classifyChanges([change(file)]).courses, ["clf", "aif"]);
    assert.equal(classifyChanges([change(file)]).navigation, true);
  }
});

test("exports select feature checks; combined changes retain all relevant checks", () => {
  const files = [change("training-website/js/course_export.js"), change("training-website/index.html", "<h1>Old</h1>", "<h1>New</h1>")];
  const plan = classifyChanges(files);
  assert.equal(plan.features && plan.smoke, true);
  assert.equal(plan.navigation, false);
  assert.equal(classifyChanges([change("training-website/js/app.js", null, "new")]).navigation, true);
  assert.equal(classifyChanges([change("training-website/courses/clf/viewer.html", "old", null)]).navigation, true);
});

test("missing history and manual runs retain full coverage", () => {
  assert.equal(selectRange("", "").navigation, true);
  assert.equal(selectRange("a".repeat(40), "b".repeat(40)).navigation, true);
  assert.equal(eventPlan("workflow_dispatch", {}).navigation, true);
});

test("main compares all changes since the last successful deployment", () => {
  const cwd = fs.mkdtempSync(path.join(os.tmpdir(), "check-selection-"));
  const git = (...args) => execFileSync("git", args, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
  try {
    git("init");
    fs.mkdirSync(path.join(cwd, "training-website/js"), { recursive: true });
    fs.writeFileSync(path.join(cwd, "training-website/js/course_viewer.js"), "old");
    const commit = () => { git("add", "."); git("-c", "user.name=Test", "-c", "user.email=test@example.invalid", "commit", "-m", "Fixture"); return git("rev-parse", "HEAD"); };
    const deployed = commit();
    fs.writeFileSync(path.join(cwd, "training-website/js/course_viewer.js"), "changed behavior");
    const failed = commit();
    fs.writeFileSync(path.join(cwd, "README.md"), "Updated description");
    const head = commit();
    assert.equal(selectRange(failed, head, cwd).navigation, false);
    assert.equal(eventPlan("push", { ref: "refs/heads/main", before: failed }, deployed, head, cwd).navigation, true);
    assert.equal(eventPlan("pull_request", { pull_request: { base: { sha: failed } } }, null, head, cwd).navigation, false);
  } finally { fs.rmSync(cwd, { recursive: true, force: true }); }
});
