# Four Points Technology (Internal Use Only) - Tech & Cloud Certification Prep Platform

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-scriptbuzz.github.io%2Fupskill-00A3E0?style=for-the-badge&logo=githubpages&logoColor=white)](https://scriptbuzz.github.io/upskill/)

![Deploy Status](https://github.com/scriptbuzz/upskill/actions/workflows/deploy.yml/badge.svg)
![Design](https://img.shields.io/badge/Design-Slate-0F172A?style=flat-square)
![Style](https://img.shields.io/badge/Codebase-Vanilla_JS%20%26%20CSS-F7DF1E?style=flat-square)

</div>

Welcome to **Four Points Technology (Internal Use Only)**, a study guide and exam preparation platform designed for cloud and technology certifications. The platform displays course outlines, architecture diagrams, and slide-by-slide checkpoint quizzes. Access is gated behind a simple login screen (see [Access](#-access) below).

---

## ⚡ Course Catalog Summary

| Course Tag | Course Name | Status | Modules | Slides | Checkpoint Quizzes | Access |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| ![AWS CLF-C02](https://img.shields.io/badge/AWS_CLF--C02-FF9900?style=flat-square) | **AWS Certified Cloud Practitioner** | `v1.8 beta` | 6 | 80 | 12 | Free |
| ![AWS AIF-C01](https://img.shields.io/badge/AWS_AIF--C01-8B5CF6?style=flat-square) | **AWS Certified AI Practitioner** | `v0.7 beta` | 7 | 115 | 11 | Requires Subscription |
| ![AGY-101](https://img.shields.io/badge/AGY--101-A1A1AA?style=flat-square) | **Agentic AI Essentials** | `Locked` | 6 | 64 | 4 | Locked |

---

## 📂 Repository Directory Structure

```text
.
├── .agents/                        # AI coding assistant workspace configs
│   └── AGENTS.md                   # Customization rules (copyrights, lab suffixes)
├── training-resources/             # Developer outlines and course assets
│   └── aws/                        # AWS Certification Tracks
│       ├── aws cloud practitioner/ # CLF-C02 raw outlines & project history
│       └── aws ai practitioner/    # AIF-C01 raw outlines & project history
└── training-website/               # Platform web codebase (HTML, CSS, JS)
    ├── index.html                  # Main Catalog / Course Dashboard
    ├── css/
    │   └── styles.css              # Responsive layout styles
    ├── js/
    │   └── app.js                  # Landing page progress dashboard loader
    └── courses/                    # Course contents directory
        ├── clf/                    # CLF Course space (homes, viewers, raster PNG diagrams)
        └── aif/                    # AIF Course space (homes, viewers, vector SVG diagrams)
```

---

## ✨ Features & Architecture

* **🎨 Multi-Course Dashboard:** A responsive catalog listing active and upcoming training paths, reading user progress keys from `localStorage` to render completion stats and progress indicators.
* **📱 Responsive Split Presenter:** A layout featuring a 320px accordion navigation sidebar (left) and study viewport (right) that collapses to a vertical flow on mobile screens.
* **⚡ Sandboxed Diagram Architectures:** Visualizations are loaded inside isolated `<iframe>` elements to prevent style collisions, avoid double scrollbars, and forward keyboard/scroll events back to the parent layout. SVG diagrams (AIF) scale natively; raster PNG diagrams (CLF) are wrapped in a small responsive page so they scale to fit instead of cropping.
* **🔒 Login Gate:** A lightweight client-side login screen (see [Access](#-access)) blocks the landing page and both course pages until the workshop credentials are entered; the session persists via `localStorage`.
* **⌨️ Keyboard Navigation:** Navigate linearly through slides and check-point questions using Arrow keys (`Left`/`Right`/`Up`/`Down`) or spacebar, and jump to bookends using `Home`/`End` hotkeys.
* **📝 Slide Checkpoint Quizzes:** Quizzes are integrated inside the slide streams as slide-pairs: a Question Slide followed by a Solved Slide featuring answer keys and interactive incorrect option explanation cards.
* **🧹 Promise-Based Custom Dialogs:** System/browser native `confirm()` triggers are replaced with HTML `<dialog>` confirmation overlays executing inside asynchronous Promise handlers.
* **🖨 Printable PDF Export:** Every course ships a print-optimized export page rendering all modules, slides, diagrams, and quizzes into a single document, with toggles for diagrams/quizzes/answer key, saved to PDF via the browser's native print dialog.
* **🔗 Course Share Links:** Each course overview page has a one-click Share button that copies the course URL to the clipboard and displays the copied link.

---

## 🔒 Access

The site (landing page + both course viewers) is gated behind a simple login dialog implemented in `training-website/js/auth_gate.js`. It is **not** a real auth system — credentials are checked client-side and are not meant to keep out a motivated visitor, just to keep the site from being casually browsed:

| Username | Password |
| :--- | :--- |
| `student` | `workshop` |

A successful login sets a `localStorage` flag (`4ca_authed`) so the dialog won't reappear on that browser. `export.html` (the printable PDF pages) is intentionally left ungated since it's only reached by clicking through from an already-gated page.

---

## 🏷️ Company Name

The company name (`Four Points Technology (Internal Use Only)`) has one source of truth for JS-rendered text: `training-website/js/site_config.js` (`window.SITE_NAME`), used by the login modal and the PDF export cover.

It's duplicated as literal text in each page's `<title>`, `<meta name="author">`, `og:site_name`, `og:title`, and header logo link, because those are read by search crawlers and social-share scrapers that never execute JS — templating them from `SITE_NAME` at runtime would silently break page titles and link previews. There's no build step in this project to template them at deploy time instead.

To rename the company: update `SITE_NAME` in `site_config.js`, then update the literal occurrences listed above in each HTML file, then run:

```bash
node training-website/scripts/check-brand.js
```

It fails with the mismatched file/tag if anything was missed.

---

## 🚀 Running Locally

The platform is built using standard Web APIs (HTML5, Vanilla CSS, and Client-Side Javascript) and can be run using any standard static file server.

1. Navigate to the `training-website` folder:
   ```bash
   cd training-website
   ```

2. Start a local HTTP server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser and navigate to `http://localhost:8000/`.


