const { ROOT, loadCourses, courseCounts, validateCourse, isListed } = require("./course-tools.js");
const fs = require("node:fs");
const path = require("node:path");

try {
  let failures = 0;
  const orders = new Set();
  for (const course of loadCourses()) {
    const errors = validateCourse(course);
    if (orders.has(course.catalog.order)) errors.push(`${course.id}: duplicate catalog order`);
    orders.add(course.catalog.order);
    for (const page of ["index.html", "viewer.html", "export.html"]) {
      const file = path.join(ROOT, "courses", course.id, page);
      if (!fs.existsSync(file)) errors.push(`${course.id}: missing ${page}`);
      else if (!isListed(course) && !/<meta name="robots" content="noindex">/.test(fs.readFileSync(file, "utf8"))) {
        errors.push(`${course.id}: unlisted course page ${page} needs a noindex robots tag`);
      }
    }
    const homePage = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
    if (!isListed(course) && homePage.includes(`courses/${course.id}/`)) errors.push(`${course.id}: unlisted course is linked from the home page`);
    errors.forEach(error => console.error(error));
    failures += errors.length;
    if (!errors.length) console.log(`OK — ${course.id}: ${JSON.stringify(courseCounts(course))}; IDs, answers, lab suffixes, and diagrams valid`);
  }
  process.exitCode = failures ? 1 : 0;
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
