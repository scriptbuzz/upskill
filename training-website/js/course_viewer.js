// Shared slide/quiz viewer controller.
// Each course viewer page defines window.COURSE_CONFIG = { courseId, data } before loading this file.

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initViewer);
} else {
  initViewer();
}

let courseId = null;
let courseData = null;
let allSlides = [];
let currentSlideIndex = 0;
let lastUrlSyncTime = -Infinity;
let urlSyncTimer = null;

// Progress State
let completedSlides = [];

// Display number for module/slide ids across both id schemes ("m1-s2" -> "1.2", "1.2" -> "1.2")
function displayNum(id) {
  return String(id).replace(/^m/, "").replace("-s", ".");
}

// DOM-safe element id fragment (dots are invalid in query selectors without escaping)
function domSafe(id) {
  return String(id).replace(/\./g, "_");
}

function initViewer() {
  if (!window.COURSE_CONFIG || !window.COURSE_CONFIG.data) {
    console.error("COURSE_CONFIG not loaded!");
    return;
  }
  courseId = window.COURSE_CONFIG.courseId;
  courseData = window.COURSE_CONFIG.data;

  // Load progress
  loadProgress();

  // Build flat list of slides and insert quizzes
  buildSlideList();

  // Render Sidebar
  renderSidebar();

  // Attach Event Listeners
  setupEventListeners();

  // Load initial content from URL or progress
  loadInitialContent();
}

function loadProgress() {
  completedSlides = window.getCourseProgress(courseId);
}

function saveProgress() {
  window.saveCourseProgress(courseId, completedSlides);
}

function buildSlideList() {
  allSlides = [];
  courseData.modules.forEach(module => {
    // Add slides of this module
    module.slides.forEach(slide => {
      allSlides.push({
        type: "slide",
        id: slide.id,
        title: slide.title,
        bullets: slide.bullets,
        visualization: slide.visualization,
        moduleId: module.id
      });
    });

    // Add quiz questions as slide pairs (if module has quiz)
    if (module.quiz && module.quiz.length > 0) {
      module.quiz.forEach(question => {
        // Unsolved slide
        allSlides.push({
          type: "quiz-question",
          id: `q-${module.id}.${question.id}`,
          questionId: question.id,
          quizType: question.type || "choice",
          title: `Quiz Checkpoint — Question ${question.id}`,
          question: question.question,
          options: question.options,
          correct: question.correct,
          explanation: question.explanation,
          wrongExplanations: question.wrongExplanations,
          moduleId: module.id,
          solved: false
        });

        // Solved slide
        allSlides.push({
          type: "quiz-question",
          id: `q-${module.id}.${question.id}-solved`,
          questionId: question.id,
          quizType: question.type || "choice",
          title: `Quiz Checkpoint — Question ${question.id} (Solved)`,
          question: question.question,
          options: question.options,
          correct: question.correct,
          explanation: question.explanation,
          wrongExplanations: question.wrongExplanations,
          moduleId: module.id,
          solved: true
        });
      });
    }
  });
}

function renderSidebar() {
  const sidebarContainer = document.getElementById("sidebar-slide-list");
  if (!sidebarContainer) return;

  sidebarContainer.innerHTML = "";

  courseData.modules.forEach(module => {
    // Module Header
    const modHeader = document.createElement("div");
    modHeader.className = "module-header";
    modHeader.setAttribute("data-module-id", module.id);

    // Count module progress (slides + quiz question steps)
    const modSlidesCount = module.slides.length + (module.quiz ? module.quiz.length * 2 : 0);
    let completedInMod = 0;

    module.slides.forEach(s => {
      if (completedSlides.includes(s.id)) completedInMod++;
    });
    if (module.quiz) {
      module.quiz.forEach(q => {
        if (completedSlides.includes(`q-${module.id}.${q.id}`)) completedInMod++;
        if (completedSlides.includes(`q-${module.id}.${q.id}-solved`)) completedInMod++;
      });
    }

    modHeader.innerHTML = `
      <span>Module ${displayNum(module.id)}: ${window.escapeHtml(module.title)}</span>
      <span class="mod-progress-indicator" style="font-size: 10px; opacity: 0.8;">${completedInMod}/${modSlidesCount}</span>
    `;
    window.makeActionable(modHeader);
    modHeader.setAttribute("aria-expanded", "true");
    sidebarContainer.appendChild(modHeader);

    // Module Slides container (ul)
    const slidesList = document.createElement("ul");
    slidesList.className = "module-slides";
    slidesList.id = `module-slides-${domSafe(module.id)}`;
    slidesList.style.display = "block"; // Start expanded

    // Slides
    module.slides.forEach(slide => {
      const slideLi = document.createElement("li");
      slideLi.className = "slide-item";
      slideLi.id = `sidebar-item-${domSafe(slide.id)}`;
      slideLi.setAttribute("data-slide-id", slide.id);

      const isCompleted = completedSlides.includes(slide.id);
      slideLi.innerHTML = `
        <span class="slide-title-text">${displayNum(slide.id)} ${window.escapeHtml(slide.title)}</span>
        <span class="slide-bullet-check" style="${isCompleted ? 'display: inline;' : 'display: none;'}">✓</span>
      `;
      window.makeActionable(slideLi);

      slideLi.addEventListener("click", () => {
        const idx = allSlides.findIndex(s => s.type === "slide" && s.id === slide.id);
        if (idx !== -1) {
          navigateSlide(idx);
          closeSidebarOnMobile();
        }
      });

      slidesList.appendChild(slideLi);
    });

    // Add Checkpoint Quizzes
    if (module.quiz && module.quiz.length > 0) {
      // Small visual divider label inside slide list
      const quizDivider = document.createElement("li");
      quizDivider.style.padding = "8px 20px 4px 20px";
      quizDivider.style.fontSize = "10px";
      quizDivider.style.textTransform = "uppercase";
      quizDivider.style.color = "var(--brand-blue)";
      quizDivider.style.fontWeight = "700";
      quizDivider.style.borderTop = "1px dashed var(--border-main)";
      quizDivider.style.marginTop = "8px";
      quizDivider.style.listStyle = "none";
      quizDivider.innerText = "Module Checkpoint Quiz";
      slidesList.appendChild(quizDivider);

      module.quiz.forEach(question => {
        // Unsolved question
        const qLi = document.createElement("li");
        qLi.className = "slide-item";
        qLi.id = `sidebar-item-${domSafe(`q-${module.id}.${question.id}`)}`;

        const isCompleted = completedSlides.includes(`q-${module.id}.${question.id}`);
        qLi.innerHTML = `
          <span class="slide-title-text" style="color: var(--text-muted);">❓ Q${question.id}: Checkpoint</span>
          <span class="slide-bullet-check" style="${isCompleted ? 'display: inline;' : 'display: none;'}">✓</span>
        `;
        window.makeActionable(qLi);

        qLi.addEventListener("click", () => {
          const idx = allSlides.findIndex(s => s.type === "quiz-question" && s.id === `q-${module.id}.${question.id}`);
          if (idx !== -1) {
            navigateSlide(idx);
            closeSidebarOnMobile();
          }
        });
        slidesList.appendChild(qLi);

        // Solved question
        const qSolvedLi = document.createElement("li");
        qSolvedLi.className = "slide-item";
        qSolvedLi.id = `sidebar-item-${domSafe(`q-${module.id}.${question.id}-solved`)}`;

        const isSolvedCompleted = completedSlides.includes(`q-${module.id}.${question.id}-solved`);
        qSolvedLi.innerHTML = `
          <span class="slide-title-text" style="color: var(--success); font-weight: 500;">✅ Q${question.id} Solved: Answer</span>
          <span class="slide-bullet-check" style="${isSolvedCompleted ? 'display: inline;' : 'display: none;'}">✓</span>
        `;
        window.makeActionable(qSolvedLi);

        qSolvedLi.addEventListener("click", () => {
          const idx = allSlides.findIndex(s => s.type === "quiz-question" && s.id === `q-${module.id}.${question.id}-solved`);
          if (idx !== -1) {
            navigateSlide(idx);
            closeSidebarOnMobile();
          }
        });
        slidesList.appendChild(qSolvedLi);
      });
    }

    sidebarContainer.appendChild(slidesList);

    // Toggle collapse on module header click
    modHeader.addEventListener("click", () => {
      if (slidesList.style.display === "none") {
        slidesList.style.display = "block";
        modHeader.setAttribute("aria-expanded", "true");
      } else {
        slidesList.style.display = "none";
        modHeader.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function closeSidebarOnMobile() {
  if (window.innerWidth <= 1024) setSidebarState(false);
}

function setSidebarState(isOpen) {
  const sidebar = document.getElementById("viewer-sidebar-aside");
  const backdrop = document.getElementById("sidebar-backdrop");
  const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
  const viewerContent = document.getElementById("viewer-content-panel");
  const closeBtn = document.getElementById("close-sidebar-btn");
  if (!sidebar) return;
  const isMobile = window.innerWidth <= 1024;
  const wasOpen = sidebar.classList.contains("open");
  const restoreFocus = !isOpen && sidebar.contains(document.activeElement);
  sidebar.classList.toggle("open", isMobile && isOpen);
  sidebar.classList.toggle("collapsed", !isMobile && !isOpen);
  sidebar.inert = !isOpen;
  if (backdrop) backdrop.classList.toggle("active", isMobile && isOpen);
  if (viewerContent) viewerContent.inert = isMobile && isOpen;
  if (closeBtn) closeBtn.style.display = isMobile ? "" : "none";
  if (toggleSidebarBtn) setSidebarToggleState(toggleSidebarBtn, isOpen);
  if (restoreFocus) toggleSidebarBtn?.focus({ preventScroll: true });
  if (isMobile && isOpen && !wasOpen) {
    closeBtn?.focus({ preventScroll: true });
  }
}

function setSidebarToggleState(btn, isOpen) {
  btn.innerText = isOpen ? "✕ Outline" : "☰ Outline";
  btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function updateSidebarProgress() {
  courseData.modules.forEach(module => {
    // Update progress numbers
    const modSlidesCount = module.slides.length + (module.quiz ? module.quiz.length * 2 : 0);
    let completedInMod = 0;

    module.slides.forEach(s => {
      if (completedSlides.includes(s.id)) completedInMod++;
    });
    if (module.quiz) {
      module.quiz.forEach(q => {
        if (completedSlides.includes(`q-${module.id}.${q.id}`)) completedInMod++;
        if (completedSlides.includes(`q-${module.id}.${q.id}-solved`)) completedInMod++;
      });
    }

    const modIndicator = document.querySelector(`.module-header[data-module-id="${module.id}"] .mod-progress-indicator`);
    if (modIndicator) {
      modIndicator.innerText = `${completedInMod}/${modSlidesCount}`;
    }

    // Update individual checkmarks for slides
    module.slides.forEach(slide => {
      const check = document.querySelector(`#sidebar-item-${domSafe(slide.id)} .slide-bullet-check`);
      if (check) {
        const isCompleted = completedSlides.includes(slide.id);
        check.style.display = isCompleted ? "inline" : "none";
      }
    });

    // Update checkmarks for quiz questions
    if (module.quiz) {
      module.quiz.forEach(q => {
        // Unsolved question
        const checkQ = document.querySelector(`#sidebar-item-${domSafe(`q-${module.id}.${q.id}`)} .slide-bullet-check`);
        if (checkQ) {
          const isCompleted = completedSlides.includes(`q-${module.id}.${q.id}`);
          checkQ.style.display = isCompleted ? "inline" : "none";
        }
        // Solved question
        const checkQS = document.querySelector(`#sidebar-item-${domSafe(`q-${module.id}.${q.id}-solved`)} .slide-bullet-check`);
        if (checkQS) {
          const isCompleted = completedSlides.includes(`q-${module.id}.${q.id}-solved`);
          checkQS.style.display = isCompleted ? "inline" : "none";
        }
      });
    }
  });
}

function setupEventListeners() {
  // Navigation controls
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const firstBtn = document.getElementById("first-btn");
  const lastBtn = document.getElementById("last-btn");
  const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
  const closeSidebarBtn = document.getElementById("close-sidebar-btn");
  const sidebar = document.getElementById("viewer-sidebar-aside");

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentSlideIndex > 0) {
        navigateSlide(currentSlideIndex - 1);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentSlideIndex < allSlides.length - 1) {
        navigateSlide(currentSlideIndex + 1);
      } else {
        // Finish course and return home
        window.location.href = window.courseAssetUrl("index.html");
      }
    });
  }

  if (firstBtn) {
    firstBtn.addEventListener("click", () => {
      navigateSlide(0);
    });
  }

  if (lastBtn) {
    lastBtn.addEventListener("click", () => {
      navigateSlide(allSlides.length - 1);
    });
  }

  // Sidebar Toggles
  const backdrop = document.getElementById("sidebar-backdrop");
  if (toggleSidebarBtn) {
    toggleSidebarBtn.setAttribute("aria-controls", "viewer-sidebar-aside");
    toggleSidebarBtn.addEventListener("click", () => {
      if (!sidebar) return;
      const isOpen = window.innerWidth <= 1024
        ? sidebar.classList.contains("open") : !sidebar.classList.contains("collapsed");
      setSidebarState(!isOpen);
    });
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", closeSidebarOnMobile);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeSidebarOnMobile);
  }

  // Mobile Viewport Tabs
  const tabDetailsBtn = document.getElementById("tab-details-btn");
  const tabDiagramBtn = document.getElementById("tab-diagram-btn");
  const viewerContent = document.getElementById("viewer-content-panel");

  if (tabDetailsBtn && tabDiagramBtn && viewerContent) {
    tabDetailsBtn.addEventListener("click", () => {
      tabDetailsBtn.classList.add("active");
      tabDiagramBtn.classList.remove("active");
      viewerContent.classList.add("show-details");
      viewerContent.classList.remove("show-diagram");
    });

    tabDiagramBtn.addEventListener("click", () => {
      tabDiagramBtn.classList.add("active");
      tabDetailsBtn.classList.remove("active");
      viewerContent.classList.add("show-diagram");
      viewerContent.classList.remove("show-details");
    });
  }

  // Reset Progress Button
  const resetCourseBtn = document.getElementById("reset-course-btn");
  if (resetCourseBtn) {
    resetCourseBtn.addEventListener("click", () => {
      window.showCustomConfirm().then((confirmed) => {
        if (confirmed) {
          window.clearCourseProgress(courseId);
          window.location.href = window.courseAssetUrl("index.html");
        }
      });
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.defaultPrevented || e.isComposing || e.altKey || e.ctrlKey || e.metaKey) return;
    if (document.querySelector("dialog[open]")) return;
    if (window.innerWidth <= 1024 && sidebar?.classList.contains("open")) {
      if (e.key === "Escape") {
        closeSidebarOnMobile();
        e.preventDefault();
      } else if (e.key === "Tab") {
        const controls = [...sidebar.querySelectorAll('button:not(:disabled), a[href], [tabindex="0"]')]
          .filter(el => el.getClientRects().length > 0);
        const first = controls[0], last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          last?.focus();
          e.preventDefault();
        } else if (!e.shiftKey && document.activeElement === last) {
          first?.focus();
          e.preventDefault();
        }
      }
      return;
    }
    // Never hijack keys while the user is typing. Buttons are fine: arrow keys have no
    // native meaning on a focused button, and Space is guarded separately below, so
    // clicking Next with the mouse must not disable keyboard navigation afterwards.
    if (e.target.closest?.("input, select, textarea, [contenteditable]")) return;
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      if (currentSlideIndex > 0) {
        navigateSlide(currentSlideIndex - 1);
      }
      e.preventDefault();
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
      // Leave Space to focused controls; diagram frames forward it to advance.
      if (e.key === " " && document.activeElement && document.activeElement !== document.body &&
          document.activeElement.id !== "diagram-frame") {
        return;
      }
      if (currentSlideIndex < allSlides.length - 1) {
        navigateSlide(currentSlideIndex + 1);
      } else {
        // Finish course and return home
        window.location.href = window.courseAssetUrl("index.html");
      }
      e.preventDefault();
    } else if (e.key === "Home") {
      navigateSlide(0);
      e.preventDefault();
    } else if (e.key === "End") {
      navigateSlide(allSlides.length - 1);
      e.preventDefault();
    }
  });

  // Prevent diagram iframe from trapping scroll wheel and keyboard events
  const iframe = document.getElementById("diagram-frame");
  if (iframe) {
    iframe.addEventListener("load", () => {
      try {
        window.setupIframeEventForwarding(iframe, document);
      } catch (err) {
        console.warn("Could not bind iframe events", err);
      }
    });
  }

  // Bottom progress bar semantics
  const progressBarBg = document.querySelector(".viewer-controls .progress-bar-bg");
  if (progressBarBg) {
    progressBarBg.setAttribute("role", "progressbar");
    progressBarBg.setAttribute("aria-label", "Course position");
    progressBarBg.setAttribute("aria-valuemin", "0");
    progressBarBg.setAttribute("aria-valuemax", "100");
  }

  // Responsive initialization
  window.addEventListener("resize", () => {
    adjustSidebarResponsive();
  });
  adjustSidebarResponsive();
}

function adjustSidebarResponsive() {
  const sidebar = document.getElementById("viewer-sidebar-aside");

  if (!sidebar) return;

  // Clear any inline styles that interfere with CSS responsive rules
  sidebar.style.display = "";

  setSidebarState(window.innerWidth <= 1024
    ? sidebar.classList.contains("open") : !sidebar.classList.contains("collapsed"));
}

function loadInitialContent() {
  const urlParams = new URLSearchParams(window.location.search);
  const slideParam = urlParams.get("slide");
  const quizParam = urlParams.get("quiz");

  if (slideParam) {
    const idx = allSlides.findIndex(s => s.id === slideParam);
    if (idx !== -1) {
      navigateSlide(idx);
      return;
    }
  } else if (quizParam) {
    // Accept both "1" and "m1" regardless of the course's module id scheme
    const wanted = displayNum(quizParam);
    const idx = allSlides.findIndex(s => s.type === "quiz-question" && displayNum(s.moduleId) === wanted);
    if (idx !== -1) {
      navigateSlide(idx);
      return;
    }
  }

  // Fallback to first uncompleted step
  let targetIdx = 0;
  for (let i = 0; i < allSlides.length; i++) {
    const slide = allSlides[i];
    if (!completedSlides.includes(slide.id)) {
      targetIdx = i;
      break;
    }
  }
  navigateSlide(targetIdx);
}

function syncSlideUrl() {
  clearTimeout(urlSyncTimer);
  // Space out history writes during rapid navigation to stay within browser limits.
  const delay = 350 - (performance.now() - lastUrlSyncTime);
  if (delay > 0) {
    urlSyncTimer = setTimeout(syncSlideUrl, delay);
    return;
  }
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("slide", allSlides[currentSlideIndex].id);
    url.searchParams.delete("quiz");
    if (url.href === window.location.href) return;
    window.history.replaceState(null, "", url.toString());
    lastUrlSyncTime = performance.now();
  } catch (err) {
    // Ignore: navigation still works without a synced address bar
  }
}

function navigateSlide(index) {
  if (!Number.isInteger(index) || index < 0 || index >= allSlides.length) return;
  currentSlideIndex = index;
  const item = allSlides[index];

  // Keep reloads and shared links on the current step without adding history entries.
  syncSlideUrl();

  // Close sidebar drawer on mobile upon navigation
  closeSidebarOnMobile();

  // Highlight in sidebar
  document.querySelectorAll(".slide-item").forEach(el => el.classList.remove("active"));

  // Reset scroll position on content containers when navigating
  const textContainer = document.querySelector(".slide-text-content");
  if (textContainer) {
    textContainer.scrollTop = 0;
  }
  const viewport = document.getElementById("active-slide-viewport");
  if (viewport) {
    viewport.scrollTop = 0;
  }

  // Mark as completed
  if (!completedSlides.includes(item.id)) {
    completedSlides.push(item.id);
    saveProgress();
    updateSidebarProgress();
  }

  // Tab selector visibility and default tab state
  const tabContainer = document.getElementById("mobile-viewport-tabs");
  const tabDetails = document.getElementById("tab-details-btn");
  const tabDiagram = document.getElementById("tab-diagram-btn");
  const viewerContent = document.getElementById("viewer-content-panel");

  if (item.type === "slide") {
    // Show slide viewport, hide quiz
    document.getElementById("active-slide-viewport").style.display = "flex";
    document.getElementById("active-quiz-viewport").style.display = "none";

    if (item.visualization) {
      if (tabContainer) tabContainer.style.display = "flex";
      if (tabDetails && tabDiagram && viewerContent) {
        tabDetails.classList.add("active");
        tabDiagram.classList.remove("active");
        viewerContent.classList.add("show-details");
        viewerContent.classList.remove("show-diagram");
      }
    } else {
      if (tabContainer) tabContainer.style.display = "none";
      if (viewerContent) {
        viewerContent.classList.add("show-details");
        viewerContent.classList.remove("show-diagram");
      }
    }

    // Highlight sidebar item
    const sidebarItem = document.getElementById(`sidebar-item-${domSafe(item.id)}`);
    if (sidebarItem) {
      sidebarItem.classList.add("active");

      // Auto expand parent module slides if collapsed
      const parentList = document.getElementById(`module-slides-${domSafe(item.moduleId)}`);
      if (parentList && parentList.style.display === "none") {
        parentList.style.display = "block";
        parentList.previousElementSibling.setAttribute("aria-expanded", "true");
      }

      // Scroll sidebar item into view
      sidebarItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Render slide details
    document.getElementById("active-slide-title").innerText = `Module ${displayNum(item.moduleId)} Outline — Slide ${displayNum(item.id)}`;
    document.getElementById("slide-detail-heading").innerText = item.title;

    // Render Bullets
    const bulletsContainer = document.getElementById("slide-detail-bullets");
    bulletsContainer.innerHTML = "";
    item.bullets.forEach(bullet => {
      const li = document.createElement("li");
      li.innerHTML = window.formatInlineText(bullet.text);
      if ([1, 2, 3].includes(bullet.indent)) {
        li.className = `indent-${bullet.indent}`;
      }
      bulletsContainer.appendChild(li);
    });

    // Render diagram (SVG documents scale themselves to the iframe; raster
    // images don't, so they're wrapped in a tiny responsive srcdoc page)
    const diagramCard = document.getElementById("active-slide-diagram");
    if (diagramCard) {
      const iframe = document.getElementById("diagram-frame");
      if (item.visualization) {
        diagramCard.style.display = "flex";
        if (iframe) {
          if (item.visualization.toLowerCase().endsWith(".svg")) {
            iframe.removeAttribute("srcdoc");
            iframe.src = window.courseAssetUrl(`visualizations/${item.visualization}`);
          } else {
            const imgSrc = window.courseAssetUrl(`visualizations/${item.visualization}`);
            iframe.srcdoc = `<!doctype html><html><head><style>html,body{margin:0;height:100%;background:#fff;}img{width:100%;height:100%;object-fit:contain;display:block;}</style></head><body><img src="${window.escapeHtml(imgSrc)}" alt=""></body></html>`;
          }
        }
      } else {
        diagramCard.style.display = "none";
        // Clear the stale diagram so it can never flash or reappear on text-only slides
        if (iframe) {
          iframe.removeAttribute("srcdoc");
          iframe.src = "about:blank";
        }
      }
    }

  } else if (item.type === "quiz-question") {
    // Show quiz viewport, hide slide viewport
    document.getElementById("active-slide-viewport").style.display = "none";
    const diagram = document.getElementById("active-slide-diagram");
    const iframe = document.getElementById("diagram-frame");
    if (diagram) diagram.style.display = "none";
    if (iframe) {
      iframe.removeAttribute("srcdoc");
      iframe.src = "about:blank";
    }
    if (tabContainer) tabContainer.style.display = "none";
    if (viewerContent) {
      viewerContent.classList.add("show-details");
      viewerContent.classList.remove("show-diagram");
    }

    const quizViewport = document.getElementById("active-quiz-viewport");
    if (quizViewport) {
      quizViewport.style.display = "flex";
      quizViewport.scrollTop = 0;
    }

    // Highlight sidebar quiz item
    const sidebarQuiz = document.getElementById(`sidebar-item-${domSafe(item.id)}`);
    if (sidebarQuiz) {
      sidebarQuiz.classList.add("active");

      // Auto expand parent module if collapsed
      const parentList = document.getElementById(`module-slides-${domSafe(item.moduleId)}`);
      if (parentList && parentList.style.display === "none") {
        parentList.style.display = "block";
        parentList.previousElementSibling.setAttribute("aria-expanded", "true");
      }

      sidebarQuiz.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    document.getElementById("active-slide-title").innerText =
      `Module ${displayNum(item.moduleId)} Checkpoint Quiz — Question ${item.questionId}${item.solved ? " (Answer)" : ""}`;

    // Helper to see if an option is correct (supports multi-answer keys like "A, D")
    const correctKeys = window.parseCorrectKeys(item.correct);

    // Render options list
    let optionsHtml = Object.entries(item.options).map(([key, val]) => {
      let cardClass = "option-card";
      let cursorStyle = "cursor: default;";
      let isIncorrect = false;
      const isCorrectKey = correctKeys.includes(key);

      if (item.solved) {
        if (isCorrectKey) {
          cardClass = "option-card correct";
        } else {
          cardClass = "option-card solved-incorrect";
          cursorStyle = "cursor: pointer;";
          isIncorrect = true;
        }
      }

      return `
        <div class="option-container" style="display: flex; flex-direction: column; width: 100%;">
          <div class="${cardClass}" style="${cursorStyle}" ${isIncorrect ? `data-option-key="${key}"` : ''}>
            <span class="option-letter" style="${item.solved && isCorrectKey ? 'background-color: var(--success); color: #000;' : ''}">${key}</span>
            <span class="option-text">${window.formatInlineText(val)}</span>
          </div>
          <div class="wrong-explanation-box" id="wrong-explain-${key}" style="display: none; margin-top: 8px; padding: 12px; border-left: 3px solid var(--error); background-color: rgba(239, 68, 68, 0.04); border-radius: 0 6px 6px 0; font-size: 13px; line-height: 1.45; color: var(--text-main); animation: fadeIn 0.2s ease;">
            <strong style="color: var(--error);">Why Option ${key} is incorrect:</strong>
            <p style="margin-top: 4px; margin-bottom: 0;">${item.wrongExplanations && item.wrongExplanations[key] ? window.formatInlineText(item.wrongExplanations[key]) : 'This option is incorrect. Refer to the overall explanation below.'}</p>
          </div>
        </div>
      `;
    }).join('');

    // Render explanation if solved is true
    let explanationHtml = "";
    if (item.solved) {
      explanationHtml = `
        <div class="explanation-card animate-fade" style="margin-top: 24px;">
          <div class="explanation-title" style="color: var(--success);">
            ✓ Correct Answer is ${window.escapeHtml(item.correct)}
          </div>
          <p style="margin-top: 8px; font-size: 14px; line-height: 1.5; color: var(--text-main);">${window.formatInlineText(item.explanation)}</p>
          <p style="margin-top: 12px; font-size: 11px; color: var(--text-muted); font-style: italic;">Tip: Click on the incorrect options above to see why they are wrong.</p>
        </div>
      `;
    }

    const answerId = `q-${item.moduleId}.${item.questionId}`;
    if (item.quizType === "ordering") {
      optionsHtml = '<div id="ordering-question"></div>';
      explanationHtml = item.solved ? `<div class="explanation-card"><div class="explanation-title">Correct order: ${window.escapeHtml(correctKeys.join(" → "))}</div><p>${window.formatInlineText(item.explanation)}</p></div>` : "";
    }
    const card = document.getElementById("active-quiz-card");
    if (card) {
      card.className = "quiz-card animate-fade";
      card.innerHTML = `
        <div class="quiz-card-header">
          <span class="quiz-title">${window.escapeHtml(item.title)}</span>
          <span class="quiz-progress" style="color: var(--brand-blue); font-weight: 700;">
            ${item.solved ? 'Answer Key' : 'Question Slide'}
          </span>
        </div>

        <div class="quiz-question" style="font-size: 17.5px; margin-bottom: 24px; color: var(--text-main); font-weight: 600; line-height: 1.45;">${window.formatInlineText(item.question)}</div>

        <div class="quiz-options" style="display: flex; flex-direction: column; gap: 12px;">
          ${optionsHtml}
        </div>

        ${explanationHtml}
      `;

      if (item.quizType === "ordering") {
        window.renderOrderingQuiz(card.querySelector("#ordering-question"), courseId, answerId, item);
      } else if (!item.solved) {
        let selected = window.getQuizResponse(courseId, answerId).filter(key => Object.hasOwn(item.options, key));
        const optionCards = [...card.querySelectorAll(".option-card")];
        const refresh = () => optionCards.forEach((option, i) => {
          const active = selected.includes(Object.keys(item.options)[i]);
          option.classList.toggle("selected", active);
          option.setAttribute("aria-pressed", String(active));
        });
        optionCards.forEach((option, i) => {
          window.makeActionable(option);
          option.addEventListener("click", () => {
            const key = Object.keys(item.options)[i];
            selected = correctKeys.length === 1 ? [key] : selected.includes(key) ? selected.filter(value => value !== key) : [...selected, key];
            window.saveQuizResponse(courseId, answerId, selected);
            refresh();
          });
        });
        refresh();
      }
      // Wire up solved incorrect options click listeners
      if (item.solved) {
        const cards = card.querySelectorAll(".option-card.solved-incorrect");
        cards.forEach(c => {
          window.makeActionable(c);
          c.setAttribute("aria-expanded", "false");
          c.addEventListener("click", () => {
            const key = c.getAttribute("data-option-key");
            const expBox = card.querySelector(`#wrong-explain-${key}`);
            if (expBox) {
              const isActive = c.classList.contains("active");
              if (isActive) {
                c.classList.remove("active");
                c.setAttribute("aria-expanded", "false");
                expBox.style.display = "none";
              } else {
                c.classList.add("active");
                c.setAttribute("aria-expanded", "true");
                expBox.style.display = "block";
              }
            }
          });
        });
      }
    }
  }

  // Update bottom nav controls
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const firstBtn = document.getElementById("first-btn");
  const lastBtn = document.getElementById("last-btn");

  if (prevBtn) {
    prevBtn.disabled = (index === 0);
    prevBtn.style.opacity = (index === 0) ? "0.5" : "1";
  }

  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.background = "var(--gradient-orange)";
    nextBtn.style.color = "#000";

    if (index === allSlides.length - 1) {
      nextBtn.innerText = "Finish Course";
    } else if (allSlides[index + 1].type === "quiz-question" && !allSlides[index + 1].solved) {
      nextBtn.innerText = "Checkpoint Quiz →";
      nextBtn.style.background = "var(--gradient-blue)";
      nextBtn.style.color = "var(--text-main)";
    } else if (item.type === "quiz-question" && !item.solved) {
      nextBtn.innerText = "Reveal Answer →";
    } else {
      nextBtn.innerText = "Next →";
    }
  }

  if (firstBtn) {
    firstBtn.disabled = (index === 0);
    firstBtn.style.opacity = (index === 0) ? "0.5" : "1";
  }

  if (lastBtn) {
    lastBtn.disabled = (index === allSlides.length - 1);
    lastBtn.style.opacity = (index === allSlides.length - 1) ? "0.5" : "1";
  }

  // Progress bar
  const progressPercent = Math.round((index + 1) / allSlides.length * 100);
  document.getElementById("viewer-progress-bar").style.width = `${progressPercent}%`;
  document.getElementById("viewer-progress-text").innerText = `Step ${index + 1} of ${allSlides.length}`;
  const progressBarBg = document.querySelector(".viewer-controls .progress-bar-bg");
  if (progressBarBg) {
    progressBarBg.setAttribute("aria-valuenow", String(progressPercent));
  }
}
