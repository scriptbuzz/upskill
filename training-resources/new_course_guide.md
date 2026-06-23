# 4 Corners Academy - New Course Integration Guide

This guide outlines the standard architecture, directory layout, naming conventions, and data structures required to integrate a new training course (like **AWS Certified AI Practitioner - AIF**) into the platform, ensuring it is fully aligned with the established design principles.

---

## 📂 1. Directory Structure

Each course must be isolated in its own folder inside `training-website/courses/[course-id]/`. For example, for AI Practitioner (`aif`):

```
training-website/courses/aif/
├── index.html           # Course Overview Page (modules listing & progress)
├── course_home.js       # Homepage logic (last-viewed routing & accordion lists)
├── viewer.html          # Interactive Slide & Quiz Viewport
├── viewer.js            # Viewer state machine (slide rendering & keyboard hooks)
├── aif_data.js          # Course syllabus & quiz datasets
└── visualizations/      # Course-specific interactive SVG diagrams
    ├── aif_m1_s1.svg
    └── ...
```

*Note: General styling remains shared under `training-website/css/styles.css`.*

---

## 📋 2. HTML Templates

### A. Course Overview (`courses/[course-id]/index.html`)
The overview page should include:
1. **Disclaimer Banner:** The `.hero-disclaimer` div under the descriptive paragraph in the hero section:
   ```html
   <div class="hero-disclaimer" id="demo-banner-notification">
     <span class="demo-badge">Notice</span>
     <span class="demo-text">This is a demo website. This is not an official website.</span>
   </div>
   ```
2. **No Metadata Header:** The page header should not contain any course version or "Last Modified" timestamp metadata. These details are restricted exclusively to the main landing page (`index.html`) course cards.
3. **Overall Course Progress Card:** Shows percentage completion and a progress bar.
4. **Reset Progress Button:** Triggers confirmation `<dialog id="confirm-modal">` to purge tracking logs from local storage.
5. **Dynamic Module List Container:** An empty `<div id="modules-list">` where modules are injected by JavaScript.
6. **Scripts:** Load `[course-id]_data.js` and `course_home.js`.
7. **No Copyright Notices:** Do not include any copyright notices, symbols (e.g. `©`), or trademarks in the footer or elsewhere.

### B. Slide Viewer (`courses/[course-id]/viewer.html`)
The slide viewer must utilize the same split presenter structure:
1. **Left Sidebar (`aside`):** Houses module outline headers and slide lists with completion status checkboxes, plus a fixed bottom footer with the `🗑 Reset Progress` button:
   ```html
   <div class="sidebar-footer" style="padding: 16px; border-top: 1px solid var(--border-main); background-color: #0b0f19;">
     <button id="reset-course-btn" class="btn btn-secondary" style="width: 100%; font-size: 12px; padding: 8px 12px; gap: 6px; justify-content: center;">
       🗑 Reset Progress
     </button>
   </div>
   ```
2. **Right Viewport (`main`):**
   - **Slide Header:** Title only (do not include version badge or modified date metadata).
   - **Details Card:** Text bullets container (`<ul id="slide-detail-bullets">`).
   - **Diagram Card:** Sandboxed `<iframe>` pointing to the SVG file.
   - **Quiz Viewport:** Container for question cards and solved explanation cards.
3. **Controls Panel:** Bottom bar with `First`, `Prev`, `Next`, and `Last` buttons.
4. **No Copyright Notices:** Do not include copyright notices or symbols in any slide element.

---

## 📊 3. Course Syllabus Data Structure (`[course-id]_data.js`)

The data file defines the course metadata and a flat hierarchical list of modules. Format the file as a global variable:

```javascript
const AIF_COURSE_DATA = {
  "id": "aif",
  "title": "AWS Certified AI Practitioner (AIF-C01)",
  "description": "Prepare and master your AWS Certified AI Practitioner exam...",
  "modules": [
    {
      "id": "m1",
      "title": "Fundamentals of AI and ML",
      "objectives": [
        "Explain basic AI concepts and terminologies.",
        "Identify practical use cases for AI."
      ],
      "slides": [
        {
          "id": "m1-s2",
          "title": "What is Artificial Intelligence?",
          "bullets": [
            { "text": "AI concepts...", "indent": 0 }
          ],
          "visualization": "aif_m1_s2.svg"
        },
        {
          "id": "m1-s4",
          "title": "Traditional AI vs. Generative AI",
          "bullets": [
            { "text": "Text-only slide...", "indent": 0 }
          ],
          "visualization": "" // Empty if no visualization is needed
        }
      ],
      "quiz": [
        {
          "id": 1,
          "question": "Which of the following best describes supervised learning?",
          "options": {
            "A": "Option text...",
            "B": "Option text..."
          },
          "correct": "A",
          "explanation": "Overall explanation...",
          "wrongExplanations": {
            "B": "Detailed explanation of why B is incorrect..."
          }
        }
      ]
    }
  ]
};
```

---

## ⚡ 4. Core Presentation & Tracking Logic

### A. Progress Tracking (Local Storage)
All tracking must be prefixed with the `courseId` to isolate local logs from other courses:
- `[courseId]_progress_slides`: Array of slide/quiz IDs that have been viewed (e.g., `["m1-s1", "q-m1.1"]`).

### B. Slide Viewer State Machine
When loading the viewer page:
1. **Flat Sequence Construction:** Iterate through `modules`, flat-mapping slides and quizzes into a single indexable array.
2. **Quiz Expansion:** For each item of type `quiz`, the viewer script must expand it into **two consecutive states** in the linear flow:
   - **State 1 (Unsolved):** Render question and options. Let user choose options (saved locally).
   - **State 2 (Solved):** Render the question with the correct answer highlighted in green and incorrect options in red.
3. **Interactive Wrong-Option Popups:** Click listeners must be attached to incorrect options on Solved Quiz states. Clicking them toggles an inline detail card displaying the option-specific `wrongExplanations[letter]` explanation.
4. **Keyboard Navigation Hooks:**
   - `ArrowRight` / `ArrowDown` / `Space` $\rightarrow$ Next slide. If on the final slide, redirects the user back to the course overview homepage `index.html`.
   - `ArrowLeft` / `ArrowUp` $\rightarrow$ Previous slide.
   - `Home` $\rightarrow$ First slide.
   - `End` $\rightarrow$ Last slide.
5. **Diagram Iframe Event Forwarding:**
   - To prevent the nested SVG `<iframe>` from trapping mouse scrolling gestures and keyboard focus, bind event listeners inside the iframe's `load` handler to forward events to the parent document:
     ```javascript
     iframeDoc.addEventListener("wheel", (e) => {
       const viewport = document.getElementById("active-slide-viewport");
       if (viewport) viewport.scrollTop += e.deltaY;
     }, { passive: true });

     iframeDoc.addEventListener("keydown", (e) => {
       const newEvent = new KeyboardEvent("keydown", {
         key: e.key,
         code: e.code,
         bubbles: true,
         cancelable: true,
         view: window
       });
       document.dispatchEvent(newEvent);
       if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", " "].includes(e.key)) {
         e.preventDefault();
       }
     });
     ```

### C. Sidebar Progress Highlighting
- Check completed slide IDs in local storage.
- Highlight the active slide node in the sidebar accordion.
- Automatically trigger `sidebarItem.scrollIntoView({ behavior: "smooth", block: "nearest" })` to keep the highlighted item viewport-centered.

### D. Resume Study Position Redirect
- The "View Slides" buttons on the course homepage must direct the user to the last viewed/completed slide of that specific module (if any slides have been completed) instead of always defaulting to slide 1.
- Iterate backward through the completed slide list in local storage, locate the first slide ID that matches the current module, and set the anchor link accordingly.

### E. Asynchronous Custom Modals
- Replace browser-native, blocking `confirm()` popup alerts with a promise-based HTML `<dialog>` confirmation modal styled to match the dark theme:
  ```javascript
  function showCustomConfirm() {
    return new Promise((resolve) => {
      const modal = document.getElementById("confirm-modal");
      const okBtn = document.getElementById("confirm-modal-ok");
      const cancelBtn = document.getElementById("confirm-modal-cancel");
      // Open dialog modal and resolve true on OK click, false on Cancel click or close.
    });
  }
  ```

### F. Conditional Visualization Display
- If a slide does not require a diagram (e.g., text-only slide in the source PowerPoint decks), the `"visualization"` attribute in the data JSON must be set to `""` or omitted.
- The slide viewer state machine must dynamically handle this:
  - If `"visualization"` is set, show the `#active-slide-diagram` card (`display: flex`) and set the `<iframe>` source.
  - If `"visualization"` is empty or missing, hide the `#active-slide-diagram` card (`display: none`). The left details card (`#active-slide-details`) will automatically expand to take up 100% width of the viewport due to `flex: 1` styling.

---

## 🎨 5. Naming & CSS Guidelines

### A. Layout Shifts & Double Scrollbar Locks
- **Viewport Layout Locks:** To keep the slide viewer layouts locked and prevent double-scrollbar viewport shifts, assign `overflow: hidden !important; height: 100vh !important;` to the course body tags in `styles.css`:
  ```css
  #clf-viewer-body,
  #aif-viewer-body {
    overflow: hidden !important;
    height: 100vh !important;
    max-height: 100vh !important;
  }
  ```
- **Scrollbar Gutter Settings:** Set `scrollbar-gutter: stable;` on scrollable panels (`.slide-text-content`, `.slide-viewport`, and `.slide-list`) to reserve layout width for the scrollbars. This guarantees that margins and text line wraps remain identical during transitions.

### B. Text Styling
- **Glowing Vector Markers:**
  - Standard items (`li` in `.slide-bullets`) use glowing orange rects as bullets.
  - Nested items (`li.indent-1`) use glowing blue circles as bullets.
  - Double-nested items (`li.indent-2`) use small white squares as bullets.
- **Monospace Codes:** Use `Menlo, Monaco, Consolas, "Courier New", monospace` for inline code blocks inside text elements, highlighted with brand-blue styling.

---

## 🔒 6. General Constraints & Rules

### A. No Copyright Notices
- Do not include copyright lines, symbols, or trademarks (e.g., "© 2026 4 Corners Academy. All rights reserved.") anywhere on the website, including catalog landing page, course overview indices, and presenter headers/footers.

### B. Lab Title Pricing Suffixes
- Append pricing status suffixes directly to lab slide titles.
  - For AWS Cloud Practitioner (CLF) labs, suffix titles with ` (Free)`.
  - For AWS AI Practitioner (AIF) labs, suffix titles with ` (Requires Subscription)`.
- This ensures the compiler scripts dynamically propagate the suffixes to sidebar lists and details cards.

---

## 🔄 7. Development Workflow (Research to Deployment)

To build a new course, always follow these exact sequential phases:

### Phase 1: Research & Planning
1. **Syllabus Investigation:** Query exam guidelines, requirements, official guides, and reference resources.
2. **Resource Compilation:** Create the `[courseId]_resources_guide.md` document mapping domains, exam lengths, and reference links.

### Phase 2: Slide Deck Analysis, Rephrasing & Outlining
1. **Source Slide Analysis:** Locate the raw training decks (e.g. instructor PPTX files in `training-resources/`) and study them to understand the core technical concepts, services, and diagrams they convey.
2. **Copyright & Rephrasing Check:** Do **not** copy the text or visual layouts word-for-word. Re-word and re-explain every concept to make it fully original, developer-friendly, and compliant with copyrights.
3. **Slide-by-Slide Outline:** Create `[courseId]_training_material_outline.md` listing modules, learning objectives, rephrased slide bullet points, and check-point quizzes.
4. **Visual Blueprinting:** For every slide containing a concept diagram, write a `Visualization:` bullet detailing the SVG layout, elements, text tags, and styling guidelines.

### Phase 3: Visualization Generation
1. **SVG Generation:** Build out high-quality SVG vector diagrams matching the existing styling guides, saving them in `courses/[courseId]/visualizations/`.
2. **Visualizations Index:** Create `[courseId]_visualizations_index.md` listing and describing every graphic alongside its mapped slide.

### Phase 4: Web Application Setup
1. **Data Binding:** Convert the outline and quiz slides into the structured JSON/JS format inside `[courseId]_data.js`.
2. **Overview Page:** Create the overview page `index.html` referencing the syllabus data, and wire up `course_home.js` to render the module cards and calculate progress states.
3. **Slide Presenter:** Set up the presenter viewport `viewer.html` and wire up the state machine, sidebar highlights, keyboard inputs, and solved quiz listeners in `viewer.js`.

### Phase 5: Verification & Testing
1. **Local Server Testing:** Run a local Python server to verify that accordion outlines expand, sidebar links scroll active items into view, and slides render diagrams seamlessly.
2. **Interactive Explanations Audit:** Click incorrect options on solved quizzes to verify that specific error popups render correctly.
3. **SVG Mappings Script:** Run a script checking that all image paths in `[courseId]_data.js` exist in `courses/[courseId]/visualizations/`.

### Phase 6: Commit Tracking & Push
1. **GitHub Page Config:** Update `.github/workflows/deploy.yml` path parameters if needed.
2. **Git Commit & Publish:** Stage changed files, commit them to the repository, and push to trigger automated pages publishing.
