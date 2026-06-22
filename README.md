# 4 Corners Academy - AWS Certification Prep Platform

Welcome to **4 Corners Academy**, a premium study guide and exam preparation platform designed for AWS Certifications. This repository hosts interactive study guides, course outlines, and visualization resources for various AWS Certification tracks.

---

## 📂 Directory Structure

```
.
├── README.md                        # Project documentation
├── training-resources/             # Developer blueprints, outlines, and course assets
│   └── aws/                         # AWS Certification Tracks
│       └── aws cloud practitioner/  # CLF-C02 Course resources
│           ├── clf_resources_guide.md
│           ├── clf_training_material_outline.md
│           ├── clf_visualizations_index.md
│           ├── clf_project_history.md
│           └── clf_visualizations/
└── training-website/               # Platform web codebase (HTML, CSS, JS)
    ├── index.html                   # Main Catalog / Course Dashboard
    ├── css/
    │   └── styles.css               # Premium design stylesheets
    ├── js/
    │   └── app.js                   # Landing page progress dashboard loader
    └── courses/                     # Course contents directory
        └── [course-id]/             # Specific course module resources (e.g. clf/)
```

---

## ✨ Features

- **Multi-Course Catalog:** A responsive dashboard that lets students track their progress across different certification courses, showing active and upcoming courses.
- **Responsive Split Presenter:** Side-by-side split screen view with a 320px accordion navigation sidebar (left) and study viewport (right). Collapses smoothly to a top-bottom stacked layout on tablets and mobile screens.
- **Interactive SVG Architecture Diagrams:** High-quality vector visualizations loaded inside sandboxed `<iframe>` tags to isolate scripting and maintain crisp vectors on scale, responding cleanly to mouse hovers and focus states.
- **Keyboard Navigation Support:** Move forward or backward using Arrow keys (`Left`/`Right`/`Up`/`Down`) and jump instantly to the first or last slides using `Home`/`End` hotkeys.
- **Static Checkpoint Quizzes:** Quizzes are integrated directly inside the slide flow as static pairs: a Question Slide (displaying the problem and options) followed by a Solved Slide (featuring answer keys and interactive incorrect option explanations).
- **Course Progress & Reset:** Training progress is tracked slide-by-slide inside `localStorage`. Users can reset their training logs from scratch via the main catalog cards, course overview page, or slide sidebar.
- **Layout Shift Safeguards:** Styled with `scrollbar-gutter: stable` to reserve scrollbar offsets and lock screen overflow coordinates, preventing layout adjustments when moving between slides of different text lengths.

---

## 🚀 Running Locally

The platform is built using standard, framework-free Web APIs (HTML5, Vanilla CSS, and Client-Side Javascript) and can be run using any standard static file server.

1. Navigate to the `training-website` folder:
   ```bash
   cd training-website
   ```

2. Start a local HTTP server:
   ```bash
   python3 -m http.server 8000
   ```

3. Open your browser and navigate to `http://localhost:8000/`.


