# 4 Corners Academy - Tech & Cloud Certification Prep Platform

<div align="center">

[![Live Demo](https://img.shields.io/badge/Live%20Demo-scriptbuzz.github.io%2Fupskill-00A3E0?style=for-the-badge&logo=githubpages&logoColor=white)](https://scriptbuzz.github.io/upskill/)

![Deploy Status](https://github.com/scriptbuzz/upskill/actions/workflows/deploy.yml/badge.svg)
![Design](https://img.shields.io/badge/Design-Slate-0F172A?style=flat-square)
![Style](https://img.shields.io/badge/Codebase-Vanilla_JS%20%26%20CSS-F7DF1E?style=flat-square)

</div>

Welcome to **4 Corners Academy**, a study guide and exam preparation platform designed for cloud and technology certifications. The platform displays course outlines, SVG architecture diagrams, and slide-by-slide checkpoint quizzes.

---

## ⚡ Course Catalog Summary

| Course Tag | Course Name | Status | Modules | Slides | Checkpoint Quizzes | Access |
| :--- | :--- | :--- | :---: | :---: | :---: | :--- |
| ![AWS CLF-C02](https://img.shields.io/badge/AWS_CLF--C02-FF9900?style=flat-square) | **AWS Certified Cloud Practitioner** | `v1.3 beta` | 6 | 79 | 5 | Free |
| ![AWS AIF-C01](https://img.shields.io/badge/AWS_AIF--C01-8B5CF6?style=flat-square) | **AWS Certified AI Practitioner** | `v0.4 beta` | 7 | 135 | 11 | Requires Subscription |
| ![AGY-101](https://img.shields.io/badge/AGY--101-A1A1AA?style=flat-square) | **Agentic AI Essentials** | `Locked` | 6 | 64 | 4 | Locked |

---

## 📂 Repository Directory Structure

```text
.
├── .agents/                        # AI coding assistant workspace configs
│   └── AGENTS.md                   # Customization rules (copyrights, lab suffixes)
├── training-resources/             # Developer outlines and course assets
│   ├── new_course_guide.md         # Course integration blueprints (source of truth)
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
        ├── clf/                    # CLF Course space (homes, viewers, SVGs)
        └── aif/                    # AIF Course space (homes, viewers, SVGs)
```

---

## ✨ Features & Architecture

* **🎨 Multi-Course Dashboard:** A responsive catalog listing active and upcoming training paths, reading user progress keys from `localStorage` to render completion stats and progress indicators.
* **📱 Responsive Split Presenter:** A layout featuring a 320px accordion navigation sidebar (left) and study viewport (right) that collapses to a vertical flow on mobile screens.
* **⚡ Sandboxed SVG Architectures:** Visualizations are loaded inside isolated `<iframe>` elements to prevent style collisions, avoid double scrollbars, and forward keyboard/scroll events back to the parent layout.
* **⌨️ Keyboard Navigation:** Navigate linearly through slides and check-point questions using Arrow keys (`Left`/`Right`/`Up`/`Down`) or spacebar, and jump to bookends using `Home`/`End` hotkeys.
* **📝 Slide Checkpoint Quizzes:** Quizzes are integrated inside the slide streams as slide-pairs: a Question Slide followed by a Solved Slide featuring answer keys and interactive incorrect option explanation cards.
* **🧹 Promise-Based Custom Dialogs:** System/browser native `confirm()` triggers are replaced with HTML `<dialog>` confirmation overlays executing inside asynchronous Promise handlers.

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


