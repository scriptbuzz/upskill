const { ROOT, loadCourses, courseCounts, validateCourse } = require("./course-tools.js");
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
      if (!fs.existsSync(path.join(ROOT, "courses", course.id, page))) errors.push(`${course.id}: missing ${page}`);
    }
    errors.forEach(error => console.error(error));
    failures += errors.length;
    if (!errors.length) console.log(`OK — ${course.id}: ${JSON.stringify(courseCounts(course))}; IDs, answers, lab suffixes, and diagrams valid`);
  }
  process.exitCode = failures ? 1 : 0;
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
