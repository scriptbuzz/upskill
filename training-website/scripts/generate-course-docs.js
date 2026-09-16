// Create disposable Markdown references from the course data used by the website.
const fs = require("node:fs");
const path = require("node:path");
const { ROOT, loadCourses, courseCounts, courseSteps, validateCourse } = require("./course-tools.js");

const OUTPUT = path.resolve(ROOT, "../generated-docs");
const cell = value => String(value).replace(/\|/g, "&#124;").replace(/[\r\n]/g, " ");
const label = value => cell(value).replace(/\[/g, "&#91;").replace(/\]/g, "&#93;");
const relativeUrl = (from, target) => path.relative(from, target).split(path.sep).map(encodeURIComponent).join("/");

function timestamp(date) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", hourCycle: "h23", timeZoneName: "short"
  }).formatToParts(date).map(part => [part.type, part.value]));
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute} ${parts.timeZoneName}`;
}

function renderCourseDocs(course, outputDir = OUTPUT, date = new Date()) {
  const folder = path.join(ROOT, "courses", course.id);
  const slideLink = slide => `[${label(slide.id)}](${relativeUrl(outputDir, path.join(folder, "viewer.html"))}?slide=${encodeURIComponent(slide.id)})`;
  const graphicLink = slide => slide.visualization
    ? `[${label(slide.visualization)}](${relativeUrl(outputDir, path.join(folder, "visualizations", slide.visualization))})`
    : "This slide has no diagram.";
  const counts = courseCounts(course);
  const slides = course.modules.flatMap(module => module.slides);
  const intro = title => `# ${course.title}: ${title}\n\n_Last modified: ${timestamp(date)}_\n\n` +
    `Course ${course.version}; course content updated ${course.lastModified}.\n\n` +
    "This reference is generated from the course data. Edit the data and run `node training-website/scripts/generate-course-docs.js` again.\n\n";
  let outline = intro("course outline") +
    `${counts.modules} modules; ${counts.slides} slides; ${slides.filter(slide => slide.visualization).length} diagrams; ${counts.quizzes} checkpoints; ${courseSteps(course).length} progress steps.\n`;
  outline += "\n## Quiz teaching references\n\nEach checkpoint lists slides taught before it in this workshop. The links record the teaching sources reviewed for the question; structural checks verify the references, while a content review must verify that the slides still teach the answer.\n\n" +
    "| Checkpoint | Teaching slides |\n| --- | --- |\n" +
    course.modules.flatMap(module => (module.quiz || []).map(quiz =>
      `| ${slideLink({ id: `q-${module.id}.${quiz.id}` })} | ${quiz.teachingSlideIds.map(id => slideLink({ id })).join(", ")} |`
    )).join("\n") + "\n";
  for (const module of course.modules) {
    outline += `\n## ${module.id}: ${module.title}\n\n${module.objectives.map(text => `- ${text}`).join("\n")}\n`;
    for (const slide of module.slides) {
      outline += `\n### ${slide.id}: ${slide.title}\n\nView slide ${slideLink(slide)}.\n\n`;
      if (slide.examObjectives?.length) outline += `Exam objectives: ${slide.examObjectives.join(", ")}.\n\n`;
      outline += slide.bullets.map(bullet => `${"  ".repeat(bullet.indent)}- ${bullet.text}`).join("\n");
      outline += `\n\nDiagram: ${graphicLink(slide)}\n`;
    }
    for (const quiz of module.quiz || []) {
      outline += `\n### Checkpoint ${module.id}.${quiz.id}\n\n${quiz.question}\n\n`;
      outline += Object.entries(quiz.options).map(([key, text]) => `- **${key}:** ${text}`).join("\n");
      outline += `\n\n${quiz.type === "ordering" ? "Correct order" : "Correct answer"}: ${quiz.correct}.\n\n${quiz.explanation}\n`;
      outline += `\nThe answer is taught in slides ${quiz.teachingSlideIds.map(id => slideLink({ id })).join(", ")}.\n`;
      for (const [key, explanation] of Object.entries(quiz.wrongExplanations || {})) {
        outline += `\n- **Why ${key} is incorrect:** ${explanation}\n`;
      }
    }
  }
  const index = intro("diagram index") +
    "| Slide | Title | Diagram |\n| --- | --- | --- |\n" +
    slides.map(slide => `| ${slideLink(slide)} | ${cell(slide.title)} | ${graphicLink(slide)} |`).join("\n") + "\n";
  const docs = { [`${course.id}_outline.md`]: outline, [`${course.id}_visualizations.md`]: index };
  const objectives = new Map();
  for (const slide of slides) {
    for (const objective of slide.examObjectives || []) {
      if (!objectives.has(objective)) objectives.set(objective, []);
      objectives.get(objective).push(slide);
    }
  }
  if (objectives.size) {
    docs[`${course.id}_exam_alignment.md`] = intro("objective-to-slide map") +
      `${objectives.size} objectives are mapped in the data. A mapping records teaching locations; it does not establish depth or exam readiness. See the local course backlog for open issues.\n\n` +
      "| Objective | Teaching slides |\n| --- | --- |\n" +
      [...objectives].sort(([a], [b]) => a.localeCompare(b, "en", { numeric: true }))
        .map(([id, mapped]) => `| ${cell(id)} | ${mapped.map(slideLink).join(", ")} |`).join("\n") + "\n";
  }
  return docs;
}

function generateDocs(outputDir = OUTPUT) {
  const courses = loadCourses();
  const errors = courses.flatMap(course => validateCourse(course));
  if (errors.length) throw new Error(errors.join("\n"));
  const date = new Date();
  const docs = Object.assign({}, ...courses.map(course => renderCourseDocs(course, outputDir, date)));
  fs.mkdirSync(outputDir, { recursive: true });
  for (const [name, content] of Object.entries(docs)) fs.writeFileSync(path.join(outputDir, name), content);
  return Object.keys(docs);
}

if (require.main === module) {
  try {
    console.log(`Generated ${generateDocs().length} course references in ${OUTPUT}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { renderCourseDocs, generateDocs };
