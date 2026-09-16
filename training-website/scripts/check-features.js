// Exercise the prepared Pages artifact to check clean navigation and share links.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const playwright = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const { courseSteps } = require("./course-tools.js");
const { preparePages } = require("./prepare-pages.js");

const scratch = fs.mkdtempSync(path.join(os.tmpdir(), "course-features-"));
const root = path.join(scratch, "site");
const output = process.env.FEATURE_SCREENSHOTS || path.join(scratch, "screenshots");
const courseIds = (process.env.NAVIGATION_COURSES || "clf,aif").split(",");
assert(courseIds.length && courseIds.every(id => ["clf", "aif"].includes(id)), "Select clf or aif with NAVIGATION_COURSES");
preparePages(path.resolve(__dirname, ".."), root);
fs.mkdirSync(output, { recursive: true });
const plain = text => String(text).replace(/\[([^\]]*)\]\([^)]*\)/g, "$1").replace(/\*\*/g, "").replace(/\s+/g, " ").trim();
const server = http.createServer((req, res) => {
  const file = path.resolve(root, "." + new URL(req.url, "http://localhost").pathname);
  if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
  try {
    const content = fs.readFileSync(file);
    res.setHeader("Content-Type", { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png" }[path.extname(file)] || "application/octet-stream");
    res.end(content);
  } catch { res.writeHead(404).end(); }
});

async function checkExport(page, base, courseId, data, label) {
  await page.goto(`${base}/courses/${courseId}/export.html?v=old-bookmark`);
  assert.equal(new URL(page.url()).search, "");
  assert(await page.locator('script[src], link[rel="stylesheet"], a[href], img[src]').evaluateAll(assets => assets.every(asset => {
    const url = new URL(asset.getAttribute("src") || asset.getAttribute("href"), location.href);
    return url.origin !== location.origin || !url.searchParams.has("v");
  })), "Export links, scripts, data, styles and diagrams must have clean URLs");
  assert.equal(await page.locator("#login-modal").count(), 0, "Exports remain available without signing in");
  assert.equal(await page.locator(".cover-version").innerText(), data.version);
  assert.equal(await page.locator(".cover-last-modified").innerText(), `Last Modified: ${data.lastModified}`);
  assert.equal(await page.locator(".export-cover h1").innerText(), data.title);
  assert.deepEqual(await page.locator(".cover-stats strong").allTextContents(), [data.modules.length, data.modules.flatMap(module => module.slides).length, data.modules.flatMap(module => module.quiz || []).length].map(String));
  const actual = await page.locator(".export-module").evaluateAll(modules => {
    const text = el => el.textContent.replace(/\s+/g, " ").trim();
    return modules.map(module => ({
      title: text(module.querySelector("h2")),
      objectives: [...module.querySelectorAll(".module-objectives li")].map(text),
      slides: [...module.querySelectorAll(".export-slide")].map(slide => ({
        title: text(slide.querySelector("h3")),
        bullets: [...slide.querySelectorAll(".slide-points li")].map(text),
        indents: [...slide.querySelectorAll(".slide-points li")].map(li => Number(li.className.replace("indent-", "")) || 0),
        diagram: slide.querySelector("img")?.getAttribute("src") || null,
      })),
      quizzes: [...module.querySelectorAll(".export-quiz")].map(quiz => ({
        question: text(quiz.querySelector(".quiz-question")),
        options: [...quiz.querySelectorAll(".quiz-options > li")].map(option => {
          const copy = option.cloneNode(true);
          const letter = text(copy.querySelector(".option-letter")).replace(".", "");
          const wrong = copy.querySelector(".wrong-explanation");
          const explanation = wrong ? text(wrong).replace(/^✘\s*/, "") : null;
          wrong?.remove();
          copy.querySelector(".option-letter").remove();
          return { letter, text: text(copy), correct: option.classList.contains("correct-option"), explanation };
        }),
        answer: text(quiz.querySelector(".quiz-explanation")),
        order: [...quiz.querySelectorAll(".quiz-explanation ol li")].map(text),
      })),
    }));
  });
  assert.equal(actual.length, data.modules.length);
  for (const [i, module] of data.modules.entries()) {
    const rendered = actual[i];
    assert.equal(rendered.title, `Module ${String(module.id).replace(/^m/, "")}: ${plain(module.title)}`);
    assert.deepEqual(rendered.objectives, module.objectives.map(plain));
    assert.deepEqual(rendered.slides, module.slides.map(slide => ({
      title: plain(slide.title), bullets: slide.bullets.map(bullet => plain(bullet.text)),
      indents: slide.bullets.map(bullet => bullet.indent),
      diagram: slide.visualization ? `visualizations/${slide.visualization}` : null,
    })), `${label}: every slide must match its source data`);
    assert.equal(rendered.quizzes.length, (module.quiz || []).length);
    for (const [j, quiz] of (module.quiz || []).entries()) {
      const renderedQuiz = rendered.quizzes[j];
      const keys = quiz.correct.split(",").map(key => key.trim());
      assert.equal(renderedQuiz.question, plain(quiz.question));
      assert.deepEqual(renderedQuiz.options, Object.entries(quiz.options).map(([letter, text]) => ({
        letter, text: plain(text), correct: quiz.type !== "ordering" && keys.includes(letter),
        explanation: quiz.type !== "ordering" && !keys.includes(letter) && quiz.wrongExplanations?.[letter] ? plain(quiz.wrongExplanations[letter]) : null,
      })));
      assert(renderedQuiz.answer.endsWith(`Explanation: ${plain(quiz.explanation)}`));
      assert.deepEqual(renderedQuiz.order, quiz.type === "ordering" ? keys.map(key => `${key}. ${plain(quiz.options[key])}`) : []);
    }
  }
  const broken = await page.locator(".export-diagram img").evaluateAll(async images => {
    await Promise.allSettled(images.map(img => img.decode()));
    return images.filter(img => !img.complete || !img.naturalWidth).map(img => img.src);
  });
  assert.deepEqual(broken, [], "Every exported diagram must load");
  await page.screenshot({ path: path.join(output, `${label}-export.png`) });
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${label}: export overflows horizontally`);

  // Toggle both screen and print styles; hiding answers must also hide correctness markers.
  for (const media of ["screen", "print"]) {
    await page.emulateMedia({ media });
    if (media === "print") await page.locator(".export-quiz").first().screenshot({ path: path.join(output, `${label}-print-quiz.png`) });
    for (const [toggle, selector] of [["diagrams", ".export-diagram"], ["quizzes", ".export-quiz"], ["answers", ".quiz-explanation, .wrong-explanation"]]) {
      await page.locator(`#toggle-${toggle}`).evaluate(el => { el.checked = false; el.dispatchEvent(new Event("change")); });
      assert.equal(await page.locator(selector.split(", ").map(part => `${part}:visible`).join(", ")).count(), 0, `${toggle} must be hidden in ${media}`);
      if (toggle === "answers") assert(await page.locator(".correct-option").evaluateAll(options => options.every(el => ["none", "normal", '""'].includes(getComputedStyle(el, "::after").content))));
      await page.locator(`#toggle-${toggle}`).evaluate(el => { el.checked = true; el.dispatchEvent(new Event("change")); });
      assert(await page.locator(selector).first().isVisible());
    }
    assert.equal(await page.locator(".export-toolbar").isVisible(), media === "screen");
  }
  await page.emulateMedia({ media: "screen" });

  // Delay a diagram decode to prove Print waits; rejected decodes must not lock the button.
  for (const reject of [false, true]) {
    await page.evaluate(() => {
      window.printCalls = 0;
      window.print = () => window.printCalls++;
      document.querySelector(".export-diagram img").decode = () => new Promise((resolve, reject) => { window.finishDecode = { resolve, reject }; });
    });
    await page.locator("#export-print-btn").click();
    assert(await page.locator("#export-print-btn").isDisabled());
    assert.equal(await page.evaluate(() => window.printCalls), 0);
    await page.evaluate(reject => window.finishDecode[reject ? "reject" : "resolve"](), reject);
    await page.waitForFunction(() => window.printCalls === 1 && !document.querySelector("#export-print-btn").disabled);
  }
}

async function checkSharing(page, button, expected, captureName) {
  for (const mode of ["clipboard", "fallback", "manual", "unavailable"]) {
    await page.evaluate(mode => {
      window.copyAttempts = [];
      Object.defineProperty(navigator, "clipboard", { configurable: true, value: mode === "unavailable" ? undefined : { writeText: async link => {
        window.copyAttempts.push(link);
        if (mode !== "clipboard") throw new Error("Clipboard access denied");
      } } });
      document.execCommand = command => {
        if (command === "copy") window.copyAttempts.push(document.querySelector("textarea").value);
        if (mode === "unavailable") throw new Error("Legacy clipboard access denied");
        return mode === "fallback";
      };
    }, mode);
    await page.locator(button).click();
    await page.locator("#share-toast").waitFor();
    assert.deepEqual(await page.evaluate(() => window.copyAttempts), ["clipboard", "unavailable"].includes(mode) ? [expected] : [expected, expected]);
    assert.equal(await page.locator("textarea").count(), 0);
    if (["clipboard", "fallback"].includes(mode)) {
      assert.match(await page.locator(".share-toast-msg").innerText(), /Link copied/);
      assert(!(await page.locator(".share-toast-link").isVisible()));
      await page.locator(".share-toast-show").click();
    } else assert.match(await page.locator(".share-toast-msg").innerText(), /Couldn't copy/);
    assert(await page.locator(".share-toast-link").isVisible());
    assert.equal(await page.locator(".share-toast-link").innerText(), expected);
    if (captureName && mode === "clipboard") await page.screenshot({ path: path.join(output, `${captureName}.png`) });
    await page.locator(".share-toast-close").click();
    assert.equal(await page.locator("#share-toast").count(), 0);
  }
}

async function checkProgress(page, base, courseId, data) {
  const steps = courseSteps(data);
  const cases = [
    ["broken json", []], ["null", []], ['{"old":true}', []],
    [JSON.stringify([steps[0], steps[0], "removed-slide", null, 7, {}, steps[2]]), [steps[0], steps[2]]],
    [JSON.stringify([...steps, steps[0], "removed-slide"]), steps],
  ];
  for (const [stored, completed] of cases) {
    await page.evaluate(({ courseId, stored }) => localStorage.setItem(`${courseId}_progress_slides`, stored), { courseId, stored });
    const percent = Math.round(completed.length / steps.length * 100);
    await page.goto(`${base}/index.html`);
    const bar = page.locator(`#course-card-${courseId} [role="progressbar"]`);
    if (completed.length) {
      assert.equal(await bar.getAttribute("aria-valuenow"), String(percent));
      assert.equal(await page.locator(`#start-${courseId}-course-btn`).innerText(), `Continue Learning (${percent}%)`);
    } else {
      assert.equal(await bar.count(), 0);
      assert.equal(await page.locator(`#reset-${courseId}-course-btn`).count(), 0);
    }
    await page.locator(`#start-${courseId}-course-btn`).click();
    await page.waitForURL(`${base}/courses/${courseId}/index.html`);
    assert.equal(await page.locator("#overall-progress-text").innerText(), `${percent}% Completed (${completed.length}/${steps.length} Slides)`);
    const target = steps.find(id => !completed.includes(id)) || steps[0];
    assert.equal(new URL(await page.locator("#course-cta-btn").getAttribute("href"), page.url()).searchParams.get("slide"), target);
  }
  const other = courseId === "clf" ? "aif" : "clf";
  await page.evaluate(({ courseId, other }) => {
    localStorage.setItem(`${courseId}_quiz_responses`, '{"test":["A"]}');
    localStorage.setItem(`${other}_progress_slides`, '["keep"]');
    localStorage.setItem(`${other}_quiz_responses`, '{"keep":["B"]}');
  }, { courseId, other });
  await page.goto(`${base}/index.html`);
  await page.locator(`#reset-${courseId}-course-btn`).click();
  await page.locator("#confirm-modal-cancel").click();
  assert.equal(await page.locator(`#course-card-${courseId} [role="progressbar"]`).getAttribute("aria-valuenow"), "100");
  await page.locator(`#reset-${courseId}-course-btn`).click();
  await page.locator("#confirm-modal-ok").click();
  await page.locator(`#reset-${courseId}-course-btn`).waitFor({ state: "detached" });
  assert.deepEqual(await page.evaluate(({ courseId, other }) => [
    localStorage.getItem(`${courseId}_progress_slides`), localStorage.getItem(`${courseId}_quiz_responses`),
    localStorage.getItem(`${other}_progress_slides`), localStorage.getItem(`${other}_quiz_responses`),
  ], { courseId, other }), [null, null, '["keep"]', '{"keep":["B"]}']);
}

async function main() {
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const browserName of (process.env.NAVIGATION_BROWSERS || "chromium,webkit").split(",")) {
    assert(["chromium", "webkit"].includes(browserName));
    const browser = await playwright[browserName].launch({ executablePath: browserName === "chromium" ? process.env.CHROMIUM_PATH || undefined : undefined });
    try {
      for (const courseId of courseIds) {
        const data = require(path.resolve(__dirname, "..", "courses", courseId, `${courseId}_data.js`));
        for (const [size, width, height] of [["desktop", 1440, 1000], ["mobile", 390, 844]]) {
          const label = `${browserName}-${courseId}-${size}`;
          console.log(`Checking ${label} exports, sharing and progress…`);
          const context = await browser.newContext({ viewport: { width, height } });
          const page = await context.newPage();
          const errors = [];
          page.on("pageerror", error => errors.push(error.message));
          page.on("response", response => { if (response.url().startsWith(base) && response.status() >= 400) errors.push(response.url()); });
          try {
            await checkExport(page, base, courseId, data, label);
            await page.evaluate(() => localStorage.setItem("4ca_authed", "true"));
            await page.goto(`${base}/index.html?v=old-bookmark#course-card-${courseId}`);
            assert.equal(page.url(), `${base}/index.html#course-card-${courseId}`);
            await checkSharing(page, `#share-${courseId}-course-btn`, `${base}/courses/${courseId}/index.html`, `${label}-catalog-share`);
            if (courseId === "clf") await checkSharing(page, "#share-agy-course-btn", `${base}/index.html#course-card-agy`);
            await page.locator(`#start-${courseId}-course-btn`).click();
            await page.waitForURL(`${base}/courses/${courseId}/index.html`);
            await checkSharing(page, "#course-share-btn", `${base}/courses/${courseId}/index.html`, `${label}-overview-share`);
            await page.locator("#course-export-btn").click();
            await page.waitForURL(`${base}/courses/${courseId}/export.html`);
            assert.equal(await page.locator(".cover-version").innerText(), data.version);
            await checkProgress(page, base, courseId, data);
            assert.deepEqual(errors, []);
            console.log(`OK — ${label}: source-matched export, print controls, sharing fallbacks and progress recovery`);
          } catch (error) {
            await page.screenshot({ path: path.join(output, `${label}-failure.png`) }).catch(() => {});
            throw error;
          } finally { await context.close(); }
        }
      }
    } finally { await browser.close(); }
  }
  console.log(`Screenshots: ${output}`);
}

main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => { server.close(); fs.rmSync(root, { recursive: true, force: true }); });
