// Check page copy and branding layouts without traversing every lesson or quiz.
const assert = require("node:assert/strict");
const fs = require("node:fs");
const http = require("node:http");
const os = require("node:os");
const path = require("node:path");
const playwright = require(process.env.PLAYWRIGHT_MODULE || "playwright");
const { preparePages } = require("./prepare-pages.js");

const scratch = fs.mkdtempSync(path.join(os.tmpdir(), "workshop-layout-"));
const root = path.join(scratch, "site");
const output = process.env.SMOKE_SCREENSHOTS || path.join(scratch, "screenshots");
const courseIds = (process.env.NAVIGATION_COURSES || "clf,aif").split(",");
assert(courseIds.length && courseIds.every(id => ["clf", "aif"].includes(id)), "Select clf or aif with NAVIGATION_COURSES");
preparePages(path.resolve(__dirname, ".."), root);
fs.mkdirSync(output, { recursive: true });
const brand = fs.readFileSync(path.join(root, "js/site_config.js"), "utf8").match(/window\.SITE_NAME\s*=\s*"([^"]+)"/)[1];
const server = http.createServer((req, res) => {
  const file = path.resolve(root, "." + new URL(req.url, "http://localhost").pathname);
  if (!file.startsWith(root + path.sep)) return res.writeHead(403).end();
  try {
    const content = fs.readFileSync(file);
    res.setHeader("Content-Type", { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png" }[path.extname(file)] || "application/octet-stream");
    res.end(content);
  } catch { res.writeHead(404).end(); }
});

async function main() {
  await new Promise(resolve => server.listen(0, "127.0.0.1", resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  for (const browserName of (process.env.NAVIGATION_BROWSERS || "chromium,webkit").split(",")) {
    assert(["chromium", "webkit"].includes(browserName));
    const browser = await playwright[browserName].launch({ executablePath: browserName === "chromium" ? process.env.CHROMIUM_PATH || undefined : undefined });
    try {
      for (const [size, width, height] of [["desktop", 1440, 1000], ["mobile", 390, 844]]) {
        const context = await browser.newContext({ viewport: { width, height } });
        const page = await context.newPage();
        const errors = [];
        page.on("pageerror", error => errors.push(error.message));
        page.on("response", response => { if (response.url().startsWith(base) && response.status() >= 400) errors.push(response.url()); });
        let state = "login";
        const capture = () => page.screenshot({ path: path.join(output, `${browserName}-${size}-${state}.png`) });
        try {
          await page.goto(`${base}/index.html`);
          await page.locator("#login-modal[open]").waitFor();
          assert.equal(await page.locator("#login-modal h3").innerText(), `Welcome to ${brand}`);
          assert(await page.locator("#login-modal").evaluate(el => el.scrollWidth <= el.clientWidth));
          await capture();
          await page.evaluate(() => localStorage.setItem("4ca_authed", "true"));
          const pages = [["catalog", "index.html"], ...courseIds.flatMap(id => [
            [`${id}-overview`, `courses/${id}/index.html`],
            [`${id}-viewer`, `courses/${id}/viewer.html`],
            [`${id}-export`, `courses/${id}/export.html`],
          ])];
          for (const [label, file] of pages) {
            state = label;
            await page.goto(`${base}/${file}`);
            assert(!new URL(page.url()).searchParams.has("v"));
            if (file.endsWith("export.html")) {
              assert.equal(await page.locator(".cover-kicker").textContent(), `${brand} — Study Guide`);
              assert(await page.locator(".export-slide").count() > 0);
            } else {
              assert.equal(await page.locator("#home-logo-link").textContent(), brand);
              assert.equal(await page.locator("#login-modal").count(), 0);
            }
            if (file.endsWith("viewer.html")) {
              await page.locator(".slide-item.active").waitFor({ state: "attached" });
              assert(await page.locator("#viewer-controls-nav").evaluate(el => el.getBoundingClientRect().bottom <= innerHeight + 1));
            }
            assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${label}: horizontal overflow`);
            await capture();
          }
          assert.deepEqual(errors, []);
          console.log(`OK — ${browserName} ${size}: login, catalog, and ${courseIds.join(", ")} page layouts`);
        } catch (error) {
          state += "-failure";
          await capture().catch(() => {});
          throw error;
        } finally { await context.close(); }
      }
    } finally { await browser.close(); }
  }
  console.log(`Screenshots: ${output}`);
}

main().catch(error => { console.error(error); process.exitCode = 1; }).finally(() => { server.close(); fs.rmSync(root, { recursive: true, force: true }); });
