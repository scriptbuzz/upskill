const { ROOT, loadCourses, courseCounts, validateCourse, listedIds, loadHomeCatalog } = require("./course-tools.js");
const fs = require("node:fs");
const path = require("node:path");

try {
  let failures = 0;
  const orders = new Set();
  const courses = loadCourses();
  const listed = listedIds(courses);
  const homeCatalog = loadHomeCatalog();
  if (homeCatalog) {
    const unknown = (homeCatalog.courses || []).filter(id => !courses.some(course => course.id === id));
    const empty = (homeCatalog.newest || []).filter(prefix => !courses.some(course => listed.has(course.id) && course.id.startsWith(prefix)));
    unknown.forEach(id => console.error(`home-catalog.json: unknown course ${id}`));
    empty.forEach(prefix => console.error(`home-catalog.json: no versioned course folder matches ${prefix}`));
    failures += unknown.length + empty.length;
  }
  for (const course of courses) {
    const errors = validateCourse(course);
    // Versions of one workshop share an order; only cards shown on the home page must differ.
    if (listed.has(course.id)) {
      if (orders.has(course.catalog.order)) errors.push(`${course.id}: duplicate catalog order among home page cards`);
      orders.add(course.catalog.order);
    }
    for (const page of ["index.html", "viewer.html", "export.html"]) {
      const file = path.join(ROOT, "courses", course.id, page);
      if (!fs.existsSync(file)) errors.push(`${course.id}: missing ${page}`);
      else if (course.catalog?.listed === false && !/<meta name="robots" content="noindex">/.test(fs.readFileSync(file, "utf8"))) {
        errors.push(`${course.id}: a course marked unlisted needs a noindex robots tag on ${page}`);
      }
    }
    const homePage = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
    if (!listed.has(course.id) && homePage.includes(`courses/${course.id}/`)) errors.push(`${course.id}: course is linked from the home page but home-catalog.json does not list it`);
    if (listed.has(course.id) && !homePage.includes(`courses/${course.id}/`)) errors.push(`${course.id}: listed course has no home page card; run sync-catalog.js`);
    errors.forEach(error => console.error(error));
    failures += errors.length;
    if (!errors.length) console.log(`OK — ${course.id}: ${JSON.stringify(courseCounts(course))}; IDs, answers, lab suffixes, and diagrams valid`);
  }
  process.exitCode = failures ? 1 : 0;
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
