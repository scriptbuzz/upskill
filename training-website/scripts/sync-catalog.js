// Update checked-in static catalog metadata, or fail CI if it has drifted.
const fs = require("node:fs");
const path = require("node:path");
const { ROOT, loadCourses, courseCounts, courseSteps, validateCourse } = require("./course-tools.js");
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
const markdown = value => String(value).replace(/\|/g, "&#124;").replace(/[\r\n]/g, " ");

function renderCard(course) {
  const { id, title, version, lastModified, catalog } = course;
  const counts = courseCounts(course);
  const name = title.replace(` (${catalog.tag})`, "");
  return `      <article class="course-card ${catalog.theme}" id="course-card-${id}" data-course-id="${id}" data-course-steps="${escapeHtml(JSON.stringify(courseSteps(course)))}">
        <div class="course-card-header">
          <span class="badge badge-${catalog.theme}">${escapeHtml(catalog.tag)}</span>
          <span class="badge badge-blue">Active</span>
        </div>
        <h2>${escapeHtml(name)}</h2>
        <div class="course-metadata">
          <span class="badge badge-muted">${escapeHtml(version)}</span>
          <span>Last Modified: ${escapeHtml(lastModified)}</span>
        </div>
        <p>${escapeHtml(catalog.description)}</p>
        <div class="course-stats">
${Object.entries(counts).map(([label, count]) => `          <div class="stat-item">
            <span class="stat-label">${label[0].toUpperCase() + label.slice(1)}</span>
            <span class="stat-value">${count}</span>
          </div>`).join("\n")}
        </div>
        <div class="course-card-actions" id="${id}-course-actions">
          <a href="courses/${id}/index.html" class="btn btn-primary" id="start-${id}-course-btn">Start Learning</a>
          <button class="btn btn-secondary btn-icon" id="share-${id}-course-btn" title="Copy a shareable link to this course" aria-label="Copy a shareable link to ${escapeHtml(name)}">🔗</button>
        </div>
      </article>`;
}

function replaceSection(file, content, indent = "") {
  const before = fs.readFileSync(file, "utf8");
  const start = `${indent}<!-- BEGIN GENERATED COURSES -->`;
  const end = `${indent}<!-- END GENERATED COURSES -->`;
  const startAt = before.indexOf(start);
  const endAt = before.indexOf(end);
  if (startAt < 0 || endAt < startAt) throw new Error(`${file}: missing catalog markers`);
  const after = before.slice(0, startAt) + `${start}\n${content}\n${end}` + before.slice(endAt + end.length);
  if (before === after) return;
  if (process.argv.includes("--check")) throw new Error(`${path.relative(ROOT, file)} is stale. Run node training-website/scripts/sync-catalog.js`);
  fs.writeFileSync(file, after);
  console.log(`Updated ${path.relative(ROOT, file)}`);
}

try {
  const courses = loadCourses();
  const errors = courses.flatMap(course => validateCourse(course));
  if (errors.length) throw new Error(errors.join("\n"));
  replaceSection(path.join(ROOT, "index.html"), courses.map(renderCard).join("\n\n"), "      ");
  const rows = courses.map(course => {
    const counts = courseCounts(course);
    return `| **${markdown(course.title)}** | ${counts.modules} | ${counts.slides} | ${counts.quizzes} |`;
  });
  replaceSection(path.join(ROOT, "..", "README.md"), [
    "| Workshop | Modules | Slides | Quizzes |",
    "| :--- | ---: | ---: | ---: |", ...rows
  ].join("\n"));
  console.log("OK — catalog and README match course data");
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
