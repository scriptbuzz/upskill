const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { loadCourses } = require("./course-tools.js");
const { renderCourseDocs, generateDocs } = require("./generate-course-docs.js");

test("generated references preserve lesson text, quizzes, and every objective mapping", () => {
  for (const course of loadCourses()) {
    const docs = renderCourseDocs(course, path.join(os.tmpdir(), "course docs"), new Date("2026-09-15T18:43:00Z"));
    const outline = docs[`${course.id}_outline.md`];
    assert.match(outline, /Last modified: 2026-09-15 14:43 EDT/);
    for (const module of course.modules) {
      for (const text of module.objectives) assert(outline.includes(text));
      for (const slide of module.slides) {
        assert(outline.includes(`### ${slide.id}: ${slide.title}`));
        for (const bullet of slide.bullets) assert(outline.includes(bullet.text));
        for (const objective of slide.examObjectives || []) {
          const row = docs[`${course.id}_exam_alignment.md`].split("\n").find(line => line.startsWith(`| ${objective} |`));
          assert(row?.includes(`?slide=${slide.id})`), `${objective} is missing ${slide.id}`);
        }
      }
      for (const quiz of module.quiz || []) {
        for (const text of [quiz.question, quiz.explanation, ...Object.values(quiz.options), ...Object.values(quiz.wrongExplanations || {})]) assert(outline.includes(text));
        assert(outline.includes(`${quiz.type === "ordering" ? "Correct order" : "Correct answer"}: ${quiz.correct}.`));
        const coverage = outline.split("\n").find(line => line.startsWith(`| [q-${module.id}.${quiz.id}]`));
        assert(coverage, `Missing teaching references for ${module.id}.${quiz.id}`);
        for (const id of quiz.teachingSlideIds) assert(coverage.includes(`?slide=${id})`));
      }
    }
  }
});

test("generated catalogs link to existing portable assets and keep text-only slides", () => {
  const outputDir = fs.mkdtempSync(path.join(os.tmpdir(), "course docs "));
  try {
    const names = generateDocs(outputDir);
    assert.equal(names.length, 5);
    for (const name of names.filter(name => !name.endsWith("_outline.md"))) {
      const content = fs.readFileSync(path.join(outputDir, name), "utf8");
      assert(!content.includes("file://"));
      for (const [, target] of content.matchAll(/\]\(([^)]+)\)/g)) {
        const [file, query] = target.split("?");
        const resolved = path.resolve(outputDir, decodeURIComponent(file));
        assert(fs.existsSync(resolved), `${name}: ${target}`);
        if (query) assert.match(query, /^slide=[\w.-]+$/);
      }
    }
    const clf = fs.readFileSync(path.join(outputDir, "clf_visualizations.md"), "utf8");
    for (const id of ["1.9", "1.15", "1.16"]) {
      assert(clf.split("\n").find(line => line.startsWith(`| [${id}]`)).includes("This slide has no diagram."));
    }
  } finally {
    fs.rmSync(outputDir, { recursive: true, force: true });
  }
});
