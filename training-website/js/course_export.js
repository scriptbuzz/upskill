/**
 * Printable course export renderer for 4 Corners Academy.
 * Reads the course dataset from window.EXPORT_COURSE_DATA and renders every
 * module, slide, diagram, and checkpoint quiz into a single print-friendly
 * document. PDF output is produced via the browser's Print → Save as PDF.
 */

(function () {
  const data = window.EXPORT_COURSE_DATA;
  const root = document.getElementById("export-root");
  if (!root) return;
  if (!data) {
    root.innerHTML = `
      <div class="export-document" style="text-align: center;">
        <h1>Export Unavailable</h1>
        <p>The course data failed to load. Please go back and try again.</p>
        <p><a href="index.html">← Back to Course</a></p>
      </div>
    `;
    return;
  }

  document.title = `${data.title} — Printable Slides`;

  const escapeHtml = window.escapeHtml;
  const formatText = window.formatInlineText;

  // Normalize slide ids for display: "m1-s3" → "1.3", "1.3" stays as-is
  function prettySlideId(id) {
    const match = /^m(\d+)-s(\d+)$/.exec(id);
    return match ? `${match[1]}.${match[2]}` : id;
  }

  function prettyModuleId(id) {
    const match = /^m(\d+)$/.exec(String(id));
    return match ? match[1] : id;
  }

  const totalSlides = data.modules.reduce((sum, m) => sum + m.slides.length, 0);
  const totalQuestions = data.modules.reduce((sum, m) => sum + (m.quiz ? m.quiz.length : 0), 0);

  // ---------- Toolbar (screen only) ----------
  const toolbar = document.createElement("div");
  toolbar.className = "export-toolbar";
  toolbar.innerHTML = `
    <span class="toolbar-title">Printable Export — ${escapeHtml(data.title)}</span>
    <label><input type="checkbox" id="toggle-diagrams" checked> Diagrams</label>
    <label><input type="checkbox" id="toggle-quizzes" checked> Quizzes</label>
    <label><input type="checkbox" id="toggle-answers" checked> Answer Key</label>
    <a href="index.html" class="toolbar-back">← Back to Course</a>
    <button class="toolbar-print-btn" id="export-print-btn">🖨 Print / Save as PDF</button>
  `;
  document.body.insertBefore(toolbar, root);

  document.body.classList.add("show-answers");

  toolbar.querySelector("#toggle-diagrams").addEventListener("change", (e) => {
    document.body.classList.toggle("hide-diagrams", !e.target.checked);
  });
  toolbar.querySelector("#toggle-quizzes").addEventListener("change", (e) => {
    document.body.classList.toggle("hide-quizzes", !e.target.checked);
  });
  toolbar.querySelector("#toggle-answers").addEventListener("change", (e) => {
    document.body.classList.toggle("show-answers", e.target.checked);
  });
  toolbar.querySelector("#export-print-btn").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    btn.disabled = true;
    btn.textContent = "Preparing diagrams…";
    // Wait for every diagram to finish loading/decoding so none print blank
    await Promise.allSettled(
      Array.from(root.querySelectorAll("img")).map((img) => img.decode())
    );
    btn.disabled = false;
    btn.textContent = "🖨 Print / Save as PDF";
    window.print();
  });

  // ---------- Document ----------
  const parts = [];

  parts.push(`
    <section class="export-cover">
      <div class="cover-kicker">4 Corners Academy — Study Guide</div>
      <h1>${escapeHtml(data.title)}</h1>
      ${data.version ? `<div class="cover-version">${escapeHtml(data.version)}</div>` : ""}
      <p class="cover-description">${escapeHtml(data.description)}</p>
      <div class="cover-stats">
        <span><strong>${data.modules.length}</strong> Modules</span>
        <span><strong>${totalSlides}</strong> Slides</span>
        <span><strong>${totalQuestions}</strong> Quiz Questions</span>
      </div>
    </section>
  `);

  data.modules.forEach((module) => {
    const objectivesHtml = (module.objectives || [])
      .map((obj) => `<li>${formatText(obj)}</li>`)
      .join("");

    const slidesHtml = module.slides
      .map((slide) => {
        const bulletsHtml = (slide.bullets || [])
          .map((bullet) => {
            const indentClass = bullet.indent ? `indent-${bullet.indent}` : "";
            return `<li${indentClass ? ` class="${indentClass}"` : ""}>${formatText(bullet.text)}</li>`;
          })
          .join("");

        const diagramHtml = slide.visualization
          ? `<div class="export-diagram"><img src="visualizations/${escapeHtml(slide.visualization)}" alt="${escapeHtml(slide.title)} diagram" decoding="async"></div>`
          : "";

        return `
          <article class="export-slide">
            <div class="slide-label">Slide ${escapeHtml(prettySlideId(slide.id))}</div>
            <h3>${formatText(slide.title)}</h3>
            <ul class="slide-points">${bulletsHtml}</ul>
            ${diagramHtml}
          </article>
        `;
      })
      .join("");

    const quizHtml = (module.quiz || [])
      .map((question) => {
        const correctKeys = window.parseCorrectKeys(question.correct);
        const optionsHtml = Object.keys(question.options)
          .map((letter) => {
            const isCorrect = correctKeys.includes(letter);
            const wrongExplanation =
              !isCorrect && question.wrongExplanations && question.wrongExplanations[letter]
                ? `<div class="wrong-explanation">✘ ${formatText(question.wrongExplanations[letter])}</div>`
                : "";
            return `
              <li class="${isCorrect ? "correct-option" : ""}">
                <span class="option-letter">${escapeHtml(letter)}.</span>${formatText(question.options[letter])}
                ${wrongExplanation}
              </li>
            `;
          })
          .join("");

        return `
          <article class="export-quiz">
            <div class="quiz-label">Module ${escapeHtml(String(prettyModuleId(module.id)))} Checkpoint Quiz — Question ${question.id}</div>
            <p class="quiz-question">${formatText(question.question)}</p>
            <ol class="quiz-options">${optionsHtml}</ol>
            <div class="quiz-explanation"><strong>Explanation:</strong> ${formatText(question.explanation)}</div>
          </article>
        `;
      })
      .join("");

    parts.push(`
      <section class="export-module">
        <header class="export-module-header">
          <h2>${/^\s*Module\s+\d+/i.test(module.title) ? formatText(module.title) : `Module ${escapeHtml(String(prettyModuleId(module.id)))}: ${formatText(module.title)}`}</h2>
          ${objectivesHtml ? `<ul class="module-objectives">${objectivesHtml}</ul>` : ""}
        </header>
        ${slidesHtml}
        ${quizHtml}
      </section>
    `);
  });

  root.innerHTML = `<div class="export-document">${parts.join("")}</div>`;
})();
