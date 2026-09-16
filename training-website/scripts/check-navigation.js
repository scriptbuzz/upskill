// Run with PLAYWRIGHT_MODULE and CHROMIUM_PATH when using an external browser install.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const playwright = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const { courseSteps } = require("./course-tools.js");
const { preparePages } = require("./prepare-pages.js");

const scratch = fs.mkdtempSync(path.join(os.tmpdir(), "navigation-site-"));
const root = path.join(scratch, "site");
preparePages(path.resolve(__dirname, ".."), root);
const courseIds = (process.env.NAVIGATION_COURSES || "clf,aif").split(",");
assert(courseIds.every(id => ["clf", "aif"].includes(id)), "Select clf or aif with NAVIGATION_COURSES");
const sizes = (process.env.NAVIGATION_SIZES || "desktop,tablet,mobile").split(",");
assert(sizes.every(size => ["desktop", "tablet", "mobile"].includes(size)), "Select desktop, tablet or mobile with NAVIGATION_SIZES");
const output = process.env.NAVIGATION_SCREENSHOTS || fs.mkdtempSync(path.join(os.tmpdir(), "navigation-"));
fs.mkdirSync(output, { recursive: true });
const server = http.createServer((req, res) => {
  const file = path.resolve(root, "." + new URL(req.url, "http://localhost").pathname);
  if (!file.startsWith(root + path.sep)) {
    res.writeHead(403).end();
    return;
  }
  try {
    const content = fs.readFileSync(file);
    res.setHeader("Content-Type", {
      ".html": "text/html", ".js": "text/javascript", ".css": "text/css",
      ".svg": "image/svg+xml", ".png": "image/png",
    }[path.extname(file)] || "application/octet-stream");
    res.end(content);
  } catch {
    res.writeHead(404).end();
  }
});

async function checkBrowser(browserName, base) {
  assert(["chromium", "webkit"].includes(browserName), `Unsupported browser: ${browserName}`);
  const browser = await playwright[browserName].launch({
    executablePath: browserName === "chromium" ? process.env.CHROMIUM_PATH || undefined : undefined,
  });
  try {
    for (const courseId of courseIds) {
      const data = require(path.join(root, "courses", courseId, `${courseId}_data.js`));
      const steps = courseSteps(data);
      const firstModule = data.modules[0];
      const quizId = `q-${firstModule.id}.${firstModule.quiz[0].id}`;
      const diagramSlide = data.modules.flatMap(module => module.slides).find(slide => slide.visualization);
      const textSlide = data.modules.flatMap(module => module.slides).find(slide => !slide.visualization);
      for (const [size, width, height] of [["desktop", 1440, 1000], ["tablet", 820, 1180], ["mobile", 390, 844]]) {
        if (!sizes.includes(size)) continue;
        console.log(`Checking ${browserName} ${courseId} ${size}…`);
        const hasDrawer = width <= 1024;
        const context = await browser.newContext({ viewport: { width, height } });
        const page = await context.newPage();
        const capture = state => page.screenshot({
          path: path.join(output, `${browserName}-${courseId}-${size}-${state}.png`), animations: "disabled",
        });
        const errors = [];
        page.on("pageerror", error => errors.push(error.message));
        page.on("response", response => {
          if (response.url().startsWith(base) && response.status() >= 400) errors.push(response.url());
        });
        const courseUrl = `${base}/courses/${courseId}/index.html`;
        const viewerUrl = `${base}/courses/${courseId}/viewer.html`;
        const currentStep = () => new URL(page.url()).searchParams.get("slide");
        const expectStep = async id => {
          try {
            await page.waitForFunction(expected => new URL(location.href).searchParams.get("slide") === expected, id);
          } catch (error) {
            await capture("failure").catch(() => {});
            throw new Error(`${browserName} ${courseId} ${size}: expected step ${id}, got ${currentStep()}; page errors: ${errors.join(", ")}`, { cause: error });
          }
          assert.equal(currentStep(), id);
          assert(!new URL(page.url()).searchParams.has("v"), "Lesson address must omit the old version parameter");
          assert(await page.locator('a[href], iframe[src], script[src], link[rel="stylesheet"]').evaluateAll(elements => elements.every(element => {
            const url = new URL(element.getAttribute("href") || element.getAttribute("src"), location.href);
            return url.origin !== location.origin || !url.searchParams.has("v");
          })), "Navigation and asset URLs must stay clean");
          assert.equal(await page.locator(".slide-item.active").count(), 1);
          assert.equal(await page.locator(".slide-item.active").getAttribute("id"), `sidebar-item-${id.replace(/\./g, "_")}`);
          assert.equal(await page.locator("#viewer-progress-text").innerText(), `Step ${steps.indexOf(id) + 1} of ${steps.length}`);
        };
        const go = async query => {
          await page.goto(`${viewerUrl}?${query}`);
          await page.locator(".slide-item.active").waitFor({ state: "attached" });
        };

        // Catalog, overview, module and quiz links must resolve to the expected course.
        await page.goto(`${base}/index.html`);
        await page.locator("#login-modal[open]").waitFor();
        await page.keyboard.press("Escape");
        assert(await page.locator("#login-modal").evaluate(el => el.open));
        await page.locator("#login-username").fill("student");
        await page.locator("#login-password").fill("incorrect-password");
        await page.locator('#login-form button[type="submit"]').click();
        assert.equal(await page.locator("#login-error").innerText(), "Incorrect username or password.");
        assert.equal(await page.locator("#login-password").inputValue(), "");
        assert.equal(await page.evaluate(() => localStorage.getItem("4ca_authed")), null);
        await capture("login");
        await page.locator("#login-password").fill("workshop");
        await page.locator("#login-password").press("Enter");
        await page.locator("#login-modal").waitFor({ state: "detached" });
        await page.reload();
        assert.equal(await page.locator("#login-modal").count(), 0);
        await page.locator(`#start-${courseId}-course-btn`).click();
        await page.waitForURL(courseUrl);
        assert.equal(page.url(), courseUrl);
        await capture("overview");
        await page.locator("#course-cta-btn").click();
        await expectStep(steps[0]);
        await page.locator("#viewer-back-btn").click();
        await page.locator('#modules-list a[href*="quiz="]').first().click();
        await expectStep(quizId);

        // Continue Learning must stop at unfinished quiz questions and answer steps.
        for (const includeQuestion of [false, true]) {
          await page.evaluate(({ courseId, slideIds }) => {
            localStorage.setItem(`${courseId}_progress_slides`, JSON.stringify(slideIds));
          }, { courseId, slideIds: [...firstModule.slides.map(slide => slide.id), ...(includeQuestion ? [quizId] : [])] });
          await page.goto(courseUrl);
          await page.locator("#course-cta-btn").click();
          await expectStep(includeQuestion ? `${quizId}-solved` : quizId);
        }

        // All sequential transitions update content, position, URL and outline selection.
        await go(`slide=${steps[0]}&v=test-release`);
        assert(await page.locator("#prev-btn").isDisabled());
        assert(await page.locator("#first-btn").isDisabled());
        for (let i = 1; i < steps.length; i++) {
          await page.locator("#next-btn").click();
          await expectStep(steps[i]);
          if (steps[i].startsWith("q-")) {
            const position = await page.locator("#active-quiz-viewport").evaluate(el => ({
              scrollTop: el.scrollTop, top: el.getBoundingClientRect().top,
              cardTop: el.firstElementChild.getBoundingClientRect().top,
            }));
            assert.equal(position.scrollTop, 0);
            assert(position.cardTop >= position.top, `${courseId} ${steps[i]} starts above the scrollable area`);
          }
        }
        assert(await page.locator("#last-btn").isDisabled());
        assert.equal(await page.locator("#next-btn").innerText(), "Finish Course");
        await page.locator("#next-btn").click();
        await page.waitForURL(courseUrl);
        assert.equal(page.url(), courseUrl);

        // Deep links, reloads, boundaries and keyboard shortcuts preserve the current step.
        await go(`slide=${steps[1]}`);
        await page.reload();
        await expectStep(steps[1]);
        await page.locator("#next-btn").click();
        await page.keyboard.press("ArrowLeft");
        await expectStep(steps[1]);
        await page.keyboard.press("End");
        await expectStep(steps.at(-1));
        await page.keyboard.press("Home");
        await expectStep(steps[0]);
        await page.locator("#last-btn").click();
        await expectStep(steps.at(-1));
        await page.locator("#first-btn").click();
        await expectStep(steps[0]);
        await page.evaluate(() => {
          for (let i = 0; i < 121; i++) {
            document.dispatchEvent(new KeyboardEvent("keydown", { key: i % 2 ? "ArrowLeft" : "ArrowRight", bubbles: true }));
          }
        });
        await expectStep(steps[1]);
        await page.reload();
        await expectStep(steps[1]);
        await page.locator("#first-btn").click();
        await expectStep(steps[0]);
        await page.keyboard.press("Control+ArrowRight");
        await expectStep(steps[0]);
        await page.evaluate(() => {
          const input = document.createElement("input");
          input.id = "navigation-test-input";
          document.body.append(input);
          input.focus();
        });
        await page.keyboard.press("ArrowRight");
        await expectStep(steps[0]);
        await page.locator("#navigation-test-input").evaluate(el => el.remove());

        const outline = page.locator("#viewer-sidebar-aside");
        if (hasDrawer) {
          assert(await outline.evaluate(el => el.inert));
          await page.locator("#toggle-sidebar-btn").click();
          assert.equal(await page.evaluate(() => document.activeElement.id), "close-sidebar-btn");
          assert(await page.locator("#viewer-content-panel").evaluate(el => el.inert));
          await page.keyboard.press("Shift+Tab");
          assert.equal(await page.evaluate(() => document.activeElement.id), "reset-course-btn");
          await page.keyboard.press("Tab");
          assert.equal(await page.evaluate(() => document.activeElement.id), "close-sidebar-btn");
          await page.keyboard.press("Escape");
          assert(await outline.evaluate(el => el.inert));
          assert.equal(await page.evaluate(() => document.activeElement.id), "toggle-sidebar-btn");
          await page.locator("#toggle-sidebar-btn").click();
          await page.locator("#sidebar-backdrop").click({ position: { x: width - 10, y: 100 } });
          assert(await outline.evaluate(el => el.inert));
          await page.locator("#toggle-sidebar-btn").click();
        }

        await page.locator("#reset-course-btn").click();
        const beforeReset = currentStep();
        for (const key of ["ArrowRight", "ArrowLeft", "Home", "End"]) await page.keyboard.press(key);
        await expectStep(beforeReset);
        await page.locator("#confirm-modal-cancel").click();
        if (hasDrawer) {
          await capture("outline");
          await page.locator(".slide-item").nth(1).press("Space");
          await expectStep(steps[1]);
          assert(await outline.evaluate(el => el.inert));
          assert.equal(await page.evaluate(() => document.activeElement.id), "toggle-sidebar-btn");
          await page.setViewportSize({ width: 1440, height: 1000 });
          await page.waitForFunction(() => !document.querySelector("#viewer-sidebar-aside").inert);
        }
        await page.locator(".module-header").first().click();
        await page.locator("#next-btn").click();
        assert.equal(await page.locator(".module-header").first().getAttribute("aria-expanded"), "true");
        await page.locator("#toggle-sidebar-btn").click();
        assert(await outline.evaluate(el => el.inert));
        await page.locator("#toggle-sidebar-btn").click();
        if (hasDrawer) await page.setViewportSize({ width, height });

        // Diagram focus must preserve shortcuts and modifiers for SVG and raster frames.
        await go(`slide=${diagramSlide.id}`);
        if (hasDrawer) await page.locator("#tab-diagram-btn").click();
        const diagram = page.locator("#diagram-frame").contentFrame();
        await diagram.locator("svg, img").first().click({ position: { x: 20, y: 20 } });
        // Give the viewport overflow so wheel forwarding can be measured at either size.
        await page.locator("#active-slide-viewport").evaluate(el => {
          el.style.maxHeight = "100px";
          document.getElementById("active-slide-diagram").style.minHeight = "1000px";
          el.scrollTop = 0;
        });
        await diagram.locator("svg, img").first().dispatchEvent("wheel", { deltaY: 80 });
        assert(await page.locator("#active-slide-viewport").evaluate(el => el.scrollTop > 0));
        await page.keyboard.press("Control+ArrowRight");
        await expectStep(diagramSlide.id);
        await page.keyboard.press("Space");
        await expectStep(steps[steps.indexOf(diagramSlide.id) + 1]);
        await go(`slide=${diagramSlide.id}`);
        await capture("viewer");
        if (hasDrawer) {
          await page.locator("#tab-diagram-btn").click();
          await capture("diagram");
          await page.locator("#tab-details-btn").click();
        }
        await page.locator("#toggle-sidebar-btn").click();
        if (!hasDrawer) await page.locator("#toggle-sidebar-btn").click();
        await page.locator(`[id="sidebar-item-${quizId.replace(/\./g, "_")}"]`).click();
        await expectStep(quizId);
        assert.equal(await page.locator("#diagram-frame").getAttribute("src"), "about:blank");
        assert.equal(await page.locator("#diagram-frame").getAttribute("srcdoc"), null);
        await page.locator(".option-card").first().press("Space");
        await expectStep(quizId);
        assert.equal(await page.locator(".option-card").first().getAttribute("aria-pressed"), "true");
        await page.locator("#next-btn").click();
        await expectStep(`${quizId}-solved`);
        await capture("quiz");

        // Answer choices and ordering attempts must survive navigation and reloads.
        const questions = data.modules.flatMap(module => (module.quiz || []).map(question => ({
          ...question, stepId: `q-${module.id}.${question.id}`,
        })));
        const examples = [
          questions.find(q => q.type !== "ordering" && !q.correct.includes(",")),
          questions.find(q => q.type !== "ordering" && q.correct.includes(",")),
          questions.find(q => q.type === "ordering"),
        ].filter(Boolean);
        for (const question of examples) {
          await go(`slide=${question.stepId}`);
          const keys = Object.keys(question.options);
          let expected;
          let readResponse;
          if (question.type === "ordering") {
            expected = [keys[1], keys[0], ...keys.slice(2)];
            await page.locator(`button[data-key="${keys[0]}"][data-direction="1"]`).press("Space");
            readResponse = () => page.locator(".ordering-text strong").allTextContents()
              .then(values => values.map(value => value.replace(/\.$/, "")));
          } else {
            const options = page.locator(".option-card");
            await options.nth(0).press("Space");
            await options.nth(1).press("Space");
            expected = question.correct.includes(",") ? [keys[0], keys[1]] : [keys[1]];
            if (question.correct.includes(",")) {
              await options.nth(0).press("Space");
              assert.equal(await options.nth(0).getAttribute("aria-pressed"), "false");
              await options.nth(0).press("Space");
            }
            readResponse = () => page.locator('.option-card[aria-pressed="true"] .option-letter').allTextContents();
          }
          assert.deepEqual(await readResponse(), expected);
          await page.locator("#next-btn").click();
          await expectStep(`${question.stepId}-solved`);
          if (question.type === "ordering") {
            assert((await page.locator(".ordering-attempt").innerText()).includes(expected.join(" → ")));
          }
          await page.locator("#prev-btn").click();
          await expectStep(question.stepId);
          assert.deepEqual(await readResponse(), expected);
          await page.reload();
          await expectStep(question.stepId);
          assert.deepEqual(await readResponse(), expected);
          await capture(question.type === "ordering" ? "ordering" : question.correct.includes(",") ? "multiple-answer" : "single-answer");
          if (question.type === "ordering") {
            const overlaps = await page.locator(".ordering-item").evaluateAll(items => items.filter(item => {
              const text = item.querySelector(".ordering-text").getBoundingClientRect();
              const controls = item.querySelector(".ordering-controls").getBoundingClientRect();
              return text.left < controls.right && text.right > controls.left &&
                text.top < controls.bottom && text.bottom > controls.top;
            }).length);
            assert.equal(overlaps, 0, "Ordering controls must not overlap the step text");
          }
        }
        if (textSlide) {
          await go(`slide=${textSlide.id}`);
          assert.equal(await page.locator("#diagram-frame").getAttribute("src"), "about:blank");
          assert(!(await page.locator("#mobile-viewport-tabs").isVisible()));
        }
        await page.evaluate(courseId => localStorage.removeItem(`${courseId}_progress_slides`), courseId);
        await go("slide=missing");
        await expectStep(steps[0]);
        await go("quiz=m1");
        await expectStep(quizId);
        await page.locator("#viewer-back-btn").click();
        await page.waitForURL(courseUrl);
        await page.goBack();
        await expectStep(quizId);
        const geometry = await page.locator("#viewer-controls-nav").evaluate(el => ({
          right: el.getBoundingClientRect().right, bottom: el.getBoundingClientRect().bottom,
          width: innerWidth, height: innerHeight, scrollWidth: document.documentElement.scrollWidth,
        }));
        assert(geometry.right <= geometry.width && geometry.bottom <= geometry.height + 1);
        assert(geometry.scrollWidth <= geometry.width);
        if (hasDrawer) await page.locator("#toggle-sidebar-btn").click();
        await page.locator("#reset-course-btn").click();
        await page.locator("#confirm-modal-ok").click();
        await page.waitForURL(courseUrl);
        assert.equal(await page.evaluate(courseId => localStorage.getItem(`${courseId}_progress_slides`), courseId), null);
        assert.equal(await page.evaluate(courseId => localStorage.getItem(`${courseId}_quiz_responses`), courseId), null);

        // Opening a deep link while signed out must keep shortcuts inside the login dialog.
        await page.evaluate(() => localStorage.removeItem("4ca_authed"));
        await go(`slide=${steps[1]}`);
        await page.locator("#login-modal[open]").waitFor();
        await page.locator('#login-form button[type="submit"]').focus();
        for (const key of ["ArrowRight", "ArrowLeft", "Home", "End", "Escape"]) await page.keyboard.press(key);
        await expectStep(steps[1]);
        assert(await page.locator("#login-modal").evaluate(el => el.open));
        await page.locator("#login-username").fill("student");
        await page.locator("#login-password").fill("workshop");
        await page.locator("#login-password").press("Enter");
        await page.locator("#login-modal").waitFor({ state: "detached" });
        await expectStep(steps[1]);
        await page.locator("#next-btn").click();
        await expectStep(steps[2]);
        assert.deepEqual(errors, []);
        console.log(`OK — ${browserName} ${courseId} ${size}: ${steps.length} steps, navigation, login and saved answers`);
        await context.close();
      }
    }
    console.log(`Screenshots: ${output}`);
  } finally {
    await browser.close();
  }
}

async function main() {
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  const browserNames = (process.env.NAVIGATION_BROWSERS || "chromium,webkit").split(",").map(name => name.trim());
  for (const browserName of browserNames) await checkBrowser(browserName, base);
}

main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => { server.close(); fs.rmSync(scratch, { recursive: true, force: true }); });
