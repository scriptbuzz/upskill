const test = require("node:test");
const assert = require("node:assert/strict");
const { validateCourse, courseCounts, courseSteps } = require("./course-tools.js");

function fixture() {
  return {
    id: "example", title: "Example", description: "Example course", version: "v1.0 beta", lastModified: "2026-09-15",
    catalog: { tag: "EX-1", theme: "blue", description: "Example", order: 1, labAccess: "Free" },
    modules: [{ id: "m1", title: "Introduction", objectives: ["Learn"], slides: [
      { id: "m1-s1", title: "LAB: Example (Free)", bullets: [{ text: "Example", indent: 3 }], visualization: "example.svg" }
    ], quiz: [{ id: 1, teachingSlideIds: ["m1-s1"], question: "Select two", options: { A: "First", B: "Second", C: "Third" }, correct: "A, C", explanation: "Both apply", wrongExplanations: { B: "Does not apply" } }] }]
  };
}

test("counts content and preserves both quiz steps with either course ID format", () => {
  const course = fixture();
  assert.deepEqual(validateCourse(course, () => true), []);
  assert.deepEqual(courseCounts(course), { modules: 1, slides: 1, quizzes: 1 });
  assert.deepEqual(courseSteps(course), ["m1-s1", "q-m1.1", "q-m1.1-solved"]);
  course.modules[0].id = 1;
  course.modules[0].slides[0].id = "1.1";
  assert.deepEqual(courseSteps(course), ["1.1", "q-1.1", "q-1.1-solved"]);
});

test("reports missing assets, unsafe paths, and malformed bullets", () => {
  const course = fixture();
  assert.match(validateCourse(course, () => false).join("\n"), /missing diagram/);
  course.modules[0].slides[0].visualization = "../example.svg";
  course.modules[0].slides[0].bullets[0].indent = 4;
  const errors = validateCourse(course, () => true).join("\n");
  assert.match(errors, /invalid visualization filename/);
  assert.match(errors, /invalid bullets/);
});

test("rejects duplicate modules and colliding slide/quiz progress IDs", () => {
  const course = fixture();
  course.modules[0].slides[0].id = "q-m1.1";
  course.modules.push(structuredClone(course.modules[0]));
  const errors = validateCourse(course, () => true).join("\n");
  assert.match(errors, /duplicate module id/);
  assert.match(errors, /duplicate step id/);
});

test("rejects invalid answer keys and missing incorrect-answer explanations", () => {
  const course = fixture();
  const quiz = course.modules[0].quiz[0];
  quiz.correct = "A, Z";
  quiz.wrongExplanations = {};
  const errors = validateCourse(course, () => true).join("\n");
  assert.match(errors, /invalid answer key/);
  assert.match(errors, /missing explanation for incorrect option B/);
});

test("rejects invalid catalog metadata and missing lab pricing suffixes", () => {
  const course = fixture();
  course.catalog.theme = "unknown";
  course.modules[0].slides[0].title = "LAB: Example";
  const errors = validateCourse(course, () => true).join("\n");
  assert.match(errors, /unsupported catalog theme/);
  assert.match(errors, /missing lab pricing suffix/);
});

test("ordering questions require a complete permutation and a supported type", () => {
  const course = fixture();
  const quiz = course.modules[0].quiz[0];
  Object.assign(quiz, { type: "ordering", correct: "C,A,B", wrongExplanations: {} });
  assert.deepEqual(validateCourse(course, () => true), []);
  quiz.correct = "A,C";
  assert(validateCourse(course, () => true).some(error => error.includes("arrange all")));
  quiz.correct = "A,A,B";
  assert(validateCourse(course, () => true).some(error => error.includes("invalid answer key")));
  quiz.correct = "C,A,B";
  quiz.type = "unknown";
  assert(validateCourse(course, () => true).some(error => error.includes("unsupported quiz type")));
});

test("quiz teaching references must identify earlier slides in the same workshop", () => {
  const course = fixture();
  const quiz = course.modules[0].quiz[0];
  course.modules.push({ id: "m2", title: "Later lesson", objectives: ["Learn more"], slides: [
    { id: "m2-s1", title: "Later topic", bullets: [{ text: "Later evidence", indent: 0 }], visualization: "" }
  ], quiz: [] });
  for (const refs of [undefined, [], ["missing"], ["m2-s1"], ["1.1"], ["q-m1.1"], ["m1-s1", "m1-s1"]]) {
    quiz.teachingSlideIds = refs;
    assert(validateCourse(course, () => true).some(error => error.includes("teaching slide")), JSON.stringify(refs));
  }
  quiz.teachingSlideIds = ["m1-s1"];
  assert.deepEqual(validateCourse(course, () => true), []);
  course.modules[1].quiz.push({ ...structuredClone(quiz), teachingSlideIds: ["m1-s1", "m2-s1"] });
  assert.deepEqual(validateCourse(course, () => true), []);
  course.modules[0].slides[0].id = "renamed-slide";
  assert(validateCourse(course, () => true).some(error => error.includes("teaching slide m1-s1")));
});

test("AIF alignment preserves slide, quiz, diagram, and progress distributions", () => {
  const course = require("../courses/aif/aif_data.js");
  const slideCounts = [38, 15, 22, 24, 41, 7, 3];
  const quizCounts = [3, 2, 2, 2, 2, 0, 0];
  assert.deepEqual(course.modules.map(module => module.slides.length), slideCounts);
  assert.deepEqual(course.modules.map(module => module.quiz.length), quizCounts);
  assert.equal(course.modules.flatMap(module => module.slides).filter(slide => slide.visualization).length, 78);
  const slideOrder = [
    [1, 2, 3, 4, 5, 6, 7, 21, 22, 8, 9, 23, 10, 24, 11, 25, 26, 27, 28, 12, 13, 29, 14, 30, 31, 15, 32, 16, 33, 17, 34, 35, 18, 19, 36, 37, 38, 20],
    [1, 12, 2, 3, 4, 13, 5, 6, 14, 7, 8, 9, 15, 10, 11],
    [1, 2, 3, 4, 20, 5, 6, 7, 8, 9, 10, 11, 12, 13, 21, 14, 15, 16, 17, 18, 19, 22],
    [1, 2, 3, 4, 5, 6, 7, 8, 21, 9, 22, 10, 11, 12, 13, 14, 15, 16, 17, 23, 18, 19, 24, 20],
    [1, 2, 3, 37, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 38, 14, 15, 16, 17, 18, 19, 39, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 40, 30, 41, 31, 32, 33, 34, 35, 36],
    [1, 2, 3, 4, 5, 7, 6],
    [1, 2, 3]
  ];
  const expectedSteps = slideOrder.flatMap((numbers, i) => [
    ...numbers.map(n => `m${i + 1}-s${n}`),
    ...Array.from({ length: quizCounts[i] }, (_, j) => [`q-m${i + 1}.${j + 1}`, `q-m${i + 1}.${j + 1}-solved`]).flat()
  ]);
  assert.deepEqual(courseSteps(course), expectedSteps);
  const taskCounts = { "1.1": 5, "1.2": 6, "1.3": 6, "2.1": 6, "2.2": 4, "2.3": 4, "3.1": 6, "3.2": 5, "3.3": 3, "3.4": 5, "4.1": 7, "4.2": 4, "5.1": 5, "5.2": 3 };
  const objectives = Object.entries(taskCounts).flatMap(([task, count]) => Array.from({ length: count }, (_, i) => `${task}.${i + 1}`));
  const slides = course.modules.flatMap(module => module.slides);
  for (const slide of slides) assert(slide.examObjectives.length && slide.examObjectives.every(id => objectives.includes(id)), slide.id);
  assert.deepEqual([...new Set(slides.flatMap(slide => slide.examObjectives))].sort(), objectives.sort());
  assert.equal(course.modules[1].quiz[1].type, "ordering");
});

test("quiz storage survives malformed values and resets only the selected course", () => {
  const vm = require("node:vm");
  const fs = require("node:fs");
  const values = new Map();
  const context = { window: {}, localStorage: { getItem: key => values.get(key) ?? null, setItem: (key, value) => values.set(key, value), removeItem: key => values.delete(key) }, console };
  vm.runInNewContext(fs.readFileSync(require.resolve("../js/course_shared.js"), "utf8"), context);
  values.set("aif_quiz_responses", "null");
  context.window.saveQuizResponse("aif", "q-m2.2", ["C", "A", "D", "B"]);
  assert.equal(context.window.getQuizResponse("aif", "q-m2.2").join(), "C,A,D,B");
  values.set("clf_quiz_responses", '{"q-1.1":["A"]}');
  values.set("aif_progress_slides", '["m1-s1"]');
  context.window.clearCourseProgress("aif");
  assert(!values.has("aif_progress_slides"));
  assert(!values.has("aif_quiz_responses"));
  assert(values.has("clf_quiz_responses"));
  values.set("aif_quiz_responses", "broken json");
  assert.equal(context.window.getQuizResponse("aif", "q-m2.2").length, 0);
});

test("progress helpers recover from malformed data and unavailable browser storage", () => {
  const vm = require("node:vm");
  const fs = require("node:fs");
  let stored;
  let unavailable = false;
  const calls = [];
  const context = { window: {}, console: { error() {} }, localStorage: Object.fromEntries(
    ["getItem", "setItem", "removeItem"].map(method => [method, (...args) => {
      calls.push(method);
      if (unavailable) throw new Error("Storage unavailable");
      if (method === "getItem") return stored;
      stored = method === "setItem" ? args[1] : null;
    }])
  ) };
  vm.runInNewContext(fs.readFileSync(require.resolve("../js/course_shared.js"), "utf8"), context);
  for (const value of [null, "broken json", "null", "{}", '"old value"', "7"]) {
    stored = value;
    assert.equal(context.window.getCourseProgress("clf").length, 0);
  }
  context.window.saveCourseProgress("clf", ["1.1", "q-1.1"]);
  assert.equal(context.window.getCourseProgress("clf").join(), "1.1,q-1.1");
  unavailable = true;
  calls.length = 0;
  assert.equal(context.window.getCourseProgress("clf").length, 0);
  assert.doesNotThrow(() => context.window.saveCourseProgress("clf", ["1.2"]));
  assert.doesNotThrow(() => context.window.clearCourseProgress("clf"));
  assert.equal(context.window.getQuizResponse("clf", "q-1.1").length, 0);
  assert.doesNotThrow(() => context.window.saveQuizResponse("clf", "q-1.1", ["B"]));
  for (const method of ["getItem", "setItem", "removeItem"]) assert(calls.includes(method));
});

test("Pages artifact preserves every published URL and excludes maintenance scripts", () => {
  const fs = require("node:fs"), os = require("node:os"), path = require("node:path");
  const { preparePages } = require("./prepare-pages.js");
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "pages-test-"));
  try {
    const source = path.resolve(__dirname, ".."), output = path.join(temp, "output");
    preparePages(source, output);
    for (const file of fs.readdirSync(output, { recursive: true }).filter(file => file.endsWith(".html"))) {
      const built = fs.readFileSync(path.join(output, file), "utf8");
      assert.equal(built, fs.readFileSync(path.join(source, file), "utf8"), file);
      assert.doesNotMatch(built, /asset-version/, file);
      for (const [, value] of built.matchAll(/\b(?:href|src)=["']([^"']+)["']/g)) {
        const url = new URL(value.replaceAll("&amp;", "&"), "https://workshops.test/");
        if (url.origin === "https://workshops.test") assert(!url.searchParams.has("v"), `${file}: ${value}`);
      }
    }
    assert(!fs.existsSync(path.join(output, "scripts")));
    assert.throws(() => preparePages(source, output), /new directory/);
  } finally { fs.rmSync(temp, { recursive: true, force: true }); }
});

test("course URLs and old bookmarks drop only version parameters", () => {
  const vm = require("node:vm"), fs = require("node:fs");
  const calls = [];
  const state = { lesson: "saved" };
  const context = { window: { location: { href: "https://workshops.test/viewer.html?v=old&slide=q-m2.2&v=older#content" }, history: { state, replaceState: (...args) => calls.push(args) } }, URL, URLSearchParams };
  vm.runInNewContext(fs.readFileSync(require.resolve("../js/course_shared.js"), "utf8"), context);
  assert.deepEqual(calls, [[state, "", "https://workshops.test/viewer.html?slide=q-m2.2#content"]]);
  assert.equal(context.window.courseAssetUrl("viewer.html?v=old&quiz=2#content"), "viewer.html?quiz=2#content");
  assert.equal(context.window.courseAssetUrl("visualizations/a.svg?v=1.4.0"), "visualizations/a.svg");
  assert.equal(context.window.courseAssetUrl("export.html?v=old&answers=hide#quiz"), "export.html?answers=hide#quiz");
  assert.equal(context.window.courseAssetUrl("https://example.com/watch?v=video"), "https://example.com/watch?v=video");
  assert.equal(context.window.courseAssetUrl("#content"), "#content");
  assert.equal(context.window.courseAssetUrl("viewer.html?slide=m2-s2"), "viewer.html?slide=m2-s2");
});
