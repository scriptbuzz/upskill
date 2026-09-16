// Dependency-free tooling for the course data shared by the website and catalog.
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");

function loadCourses() {
  return fs.readdirSync(path.join(ROOT, "courses"), { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(entry => {
      const file = path.join(ROOT, "courses", entry.name, `${entry.name}_data.js`);
      const data = require(file);
      if (data.id !== entry.name) throw new Error(`${file}: course id must match its directory`);
      return data;
    })
    .sort((a, b) => a.catalog.order - b.catalog.order);
}

function courseSteps(course) {
  return course.modules.flatMap(module => [
    ...module.slides.map(slide => slide.id),
    ...(module.quiz || []).flatMap(quiz => [
      `q-${module.id}.${quiz.id}`, `q-${module.id}.${quiz.id}-solved`
    ])
  ]);
}

function courseCounts(course) {
  return {
    modules: course.modules.length,
    slides: course.modules.reduce((sum, module) => sum + module.slides.length, 0),
    quizzes: course.modules.reduce((sum, module) => sum + (module.quiz || []).length, 0)
  };
}

function validateCourse(course, assetExists = fs.existsSync) {
  const errors = [];
  const check = (condition, message) => { if (!condition) errors.push(`${course.id || "course"}: ${message}`); };
  const hasText = value => typeof value === "string" && value.trim().length > 0;
  for (const key of ["id", "title", "description", "version", "lastModified"]) {
    check(hasText(course[key]), `${key} must be nonempty text`);
  }
  check(/^[a-z][a-z0-9-]*$/.test(course.id), "id must be safe for URLs and DOM ids");
  check(/^v\d+\.\d+(?:\.\d+)?(?: .+)?$/.test(course.version), "invalid version");
  check(/^\d{4}-\d{2}-\d{2}(?: .+)?$/.test(course.lastModified), "invalid lastModified date");
  const catalog = course.catalog || {};
  for (const key of ["tag", "description", "labAccess"]) check(hasText(catalog[key]), `catalog.${key} must be nonempty text`);
  check(["orange", "purple", "blue"].includes(catalog.theme), "unsupported catalog theme");
  check(Number.isInteger(catalog.order), "catalog.order must be an integer");
  check(Array.isArray(course.modules) && course.modules.length > 0, "modules must be a nonempty array");
  const moduleIds = new Set();
  const stepIds = new Set();
  const taughtSlideIds = new Set();
  const addStep = (id, location) => {
    check(typeof id === "string" && /^[a-zA-Z0-9.-]+$/.test(id), `${location}: invalid step id`);
    check(!stepIds.has(id), `${location}: duplicate step id ${id}`);
    stepIds.add(id);
  };
  for (const module of Array.isArray(course.modules) ? course.modules : []) {
    const label = `module ${module.id}`;
    check(/^(?:[1-9]\d*|m[1-9]\d*)$/.test(String(module.id)), `${label}: invalid module id`);
    check(!moduleIds.has(String(module.id)), `${label}: duplicate module id`);
    moduleIds.add(String(module.id));
    check(hasText(module.title) && !/^Module\s+\d/i.test(module.title), `${label}: title must be nonempty and omit the Module N prefix`);
    check(Array.isArray(module.objectives) && module.objectives.length > 0 && module.objectives.every(hasText), `${label}: objectives must contain text`);
    check(Array.isArray(module.slides) && module.slides.length > 0, `${label}: slides must be a nonempty array`);
    for (const slide of Array.isArray(module.slides) ? module.slides : []) {
      const location = `${label}, slide ${slide.id}`;
      addStep(slide.id, location);
      taughtSlideIds.add(slide.id);
      check(hasText(slide.title), `${location}: missing title`);
      check(Array.isArray(slide.bullets) && slide.bullets.every(bullet => hasText(bullet.text) && [0, 1, 2, 3].includes(bullet.indent)), `${location}: invalid bullets`);
      if (/^LAB:/i.test(slide.title)) check(slide.title.endsWith(`(${catalog.labAccess})`), `${location}: missing lab pricing suffix`);
      if (slide.visualization) {
        const safe = typeof slide.visualization === "string" && /^[a-zA-Z0-9_-]+\.(?:svg|png|jpe?g)$/.test(slide.visualization);
        check(safe, `${location}: invalid visualization filename`);
        if (safe) check(assetExists(path.join(ROOT, "courses", course.id, "visualizations", slide.visualization)), `${location}: missing diagram ${slide.visualization}`);
      }
    }
    check(module.quiz === undefined || Array.isArray(module.quiz), `${label}: quiz must be an array`);
    for (const quiz of Array.isArray(module.quiz) ? module.quiz : []) {
      const location = `${label}, quiz ${quiz.id}`;
      check(Number.isInteger(quiz.id) && quiz.id > 0, `${location}: invalid quiz id`);
      addStep(`q-${module.id}.${quiz.id}`, location);
      addStep(`q-${module.id}.${quiz.id}-solved`, location);
      check(hasText(quiz.question) && hasText(quiz.explanation), `${location}: missing question or explanation`);
      const teachingSlides = quiz.teachingSlideIds;
      check(Array.isArray(teachingSlides) && teachingSlides.length > 0, `${location}: missing teaching slide references`);
      if (Array.isArray(teachingSlides)) {
        check(new Set(teachingSlides).size === teachingSlides.length, `${location}: duplicate teaching slide reference`);
        for (const id of teachingSlides) {
          check(typeof id === "string" && taughtSlideIds.has(id), `${location}: teaching slide ${id} must exist in this course before the checkpoint`);
        }
      }
      const options = quiz.options && typeof quiz.options === "object" && !Array.isArray(quiz.options) ? quiz.options : {};
      const keys = Object.keys(options);
      check(keys.length >= 2 && keys.every(key => /^[A-Z]$/.test(key) && hasText(options[key])), `${location}: invalid options`);
      const correct = typeof quiz.correct === "string" ? quiz.correct.split(",").map(key => key.trim()).filter(Boolean) : [];
      check(correct.length > 0 && new Set(correct).size === correct.length && correct.every(key => keys.includes(key)), `${location}: invalid answer key`);
      check(quiz.type === undefined || ["choice", "ordering"].includes(quiz.type), `${location}: unsupported quiz type`);
      if (quiz.type === "ordering") {
        check(keys.length >= 3 && keys.length <= 5 && correct.length === keys.length, `${location}: ordering answer must arrange all 3–5 options`);
      }
      for (const key of keys.filter(key => !correct.includes(key))) {
        check(hasText(quiz.wrongExplanations?.[key]), `${location}: missing explanation for incorrect option ${key}`);
      }
    }
  }
  return errors;
}

module.exports = { ROOT, loadCourses, courseSteps, courseCounts, validateCourse };
