document.addEventListener("DOMContentLoaded", () => {
  initViewer();
});

let allSlides = [];
let currentSlideIndex = 0;

// Progress State
let completedSlides = [];

function initViewer() {
  if (typeof CLF_COURSE_DATA === 'undefined') {
    console.error("CLF_COURSE_DATA not loaded!");
    return;
  }

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
  try {
    const progressRaw = localStorage.getItem("clf_progress_slides");
    completedSlides = progressRaw ? JSON.parse(progressRaw) : [];
  } catch (e) {
    completedSlides = [];
  }
}

function saveProgress() {
  localStorage.setItem("clf_progress_slides", JSON.stringify(completedSlides));
}

function buildSlideList() {
  allSlides = [];
  CLF_COURSE_DATA.modules.forEach(module => {
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

  CLF_COURSE_DATA.modules.forEach(module => {
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
      <span>Module ${module.id}: ${module.title}</span>
      <span class="mod-progress-indicator" style="font-size: 10px; opacity: 0.8;">${completedInMod}/${modSlidesCount}</span>
    `;
    sidebarContainer.appendChild(modHeader);

    // Module Slides container (ul)
    const slidesList = document.createElement("ul");
    slidesList.className = "module-slides";
    slidesList.id = `module-slides-${module.id}`;
    slidesList.style.display = "block"; // Start expanded

    // Slides
    module.slides.forEach(slide => {
      const slideLi = document.createElement("li");
      slideLi.className = "slide-item";
      slideLi.id = `sidebar-item-${slide.id}`;
      slideLi.setAttribute("data-slide-id", slide.id);
      
      const isCompleted = completedSlides.includes(slide.id);
      slideLi.innerHTML = `
        <span class="slide-title-text">${slide.id} ${slide.title}</span>
        <span class="slide-bullet-check" style="${isCompleted ? 'display: inline;' : 'display: none;'}">✓</span>
      `;

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
        qLi.id = `sidebar-item-q-${module.id}.${question.id}`;
        
        const isCompleted = completedSlides.includes(`q-${module.id}.${question.id}`);
        qLi.innerHTML = `
          <span class="slide-title-text" style="color: var(--text-muted);">❓ Q${question.id}: Checkpoint</span>
          <span class="slide-bullet-check" style="${isCompleted ? 'display: inline;' : 'display: none;'}">✓</span>
        `;

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
        qSolvedLi.id = `sidebar-item-q-${module.id}.${question.id}-solved`;
        
        const isSolvedCompleted = completedSlides.includes(`q-${module.id}.${question.id}-solved`);
        qSolvedLi.innerHTML = `
          <span class="slide-title-text" style="color: var(--success); font-weight: 500;">✅ Q${question.id} Solved: Answer</span>
          <span class="slide-bullet-check" style="${isSolvedCompleted ? 'display: inline;' : 'display: none;'}">✓</span>
        `;

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
      } else {
        slidesList.style.display = "none";
      }
    });
  });
}

function closeSidebarOnMobile() {
  if (window.innerWidth <= 768) {
    document.getElementById("viewer-sidebar-aside").style.display = "none";
    const toggleBtn = document.getElementById("toggle-sidebar-btn");
    if (toggleBtn) toggleBtn.innerText = "☰ Outline";
  }
}

function updateSidebarProgress() {
  CLF_COURSE_DATA.modules.forEach(module => {
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
      const check = document.querySelector(`#sidebar-item-${slide.id.replace('.', '\\.')} .slide-bullet-check`);
      if (check) {
        const isCompleted = completedSlides.includes(slide.id);
        check.style.display = isCompleted ? "inline" : "none";
      }
    });

    // Update checkmarks for quiz questions
    if (module.quiz) {
      module.quiz.forEach(q => {
        // Unsolved question
        const checkQ = document.querySelector(`#sidebar-item-q-${module.id}\\.${q.id} .slide-bullet-check`);
        if (checkQ) {
          const isCompleted = completedSlides.includes(`q-${module.id}.${q.id}`);
          checkQ.style.display = isCompleted ? "inline" : "none";
        }
        // Solved question
        const checkQS = document.querySelector(`#sidebar-item-q-${module.id}\\.${q.id}-solved .slide-bullet-check`);
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
        window.location.href = "index.html";
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
  if (toggleSidebarBtn) {
    toggleSidebarBtn.addEventListener("click", () => {
      if (sidebar.style.display === "none") {
        sidebar.style.display = "flex";
        toggleSidebarBtn.innerText = "✕ Outline";
      } else {
        sidebar.style.display = "none";
        toggleSidebarBtn.innerText = "☰ Outline";
      }
    });
  }

  if (closeSidebarBtn) {
    closeSidebarBtn.addEventListener("click", () => {
      sidebar.style.display = "none";
      if (toggleSidebarBtn) {
        toggleSidebarBtn.innerText = "☰ Outline";
      }
    });
  }

  // Reset Progress Button
  const resetCourseBtn = document.getElementById("reset-course-btn");
  if (resetCourseBtn) {
    resetCourseBtn.addEventListener("click", () => {
      showCustomConfirm().then((confirmed) => {
        if (confirmed) {
          localStorage.removeItem("clf_progress_slides");
          window.location.href = "index.html";
        }
      });
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      if (currentSlideIndex > 0) {
        navigateSlide(currentSlideIndex - 1);
      }
      e.preventDefault();
    } else if (e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === " ") {
      if (currentSlideIndex < allSlides.length - 1) {
        navigateSlide(currentSlideIndex + 1);
      } else {
        // Finish course and return home
        window.location.href = "index.html";
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
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (iframeDoc) {
          // Forward scroll wheel
          iframeDoc.addEventListener("wheel", (e) => {
            const viewport = document.getElementById("active-slide-viewport");
            if (viewport) {
              viewport.scrollTop += e.deltaY;
            }
          }, { passive: true });

          // Forward keyboard events for navigation
          iframeDoc.addEventListener("keydown", (e) => {
            const newEvent = new KeyboardEvent("keydown", {
              key: e.key,
              code: e.code,
              bubbles: true,
              cancelable: true,
              view: window,
              ctrlKey: e.ctrlKey,
              altKey: e.altKey,
              shiftKey: e.shiftKey,
              metaKey: e.metaKey
            });
            document.dispatchEvent(newEvent);
            
            if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", " "].includes(e.key)) {
              e.preventDefault();
            }
          });
        }
      } catch (err) {
        console.warn("Could not bind iframe events", err);
      }
    });
  }

  // Responsive initialization
  window.addEventListener("resize", () => {
    adjustSidebarResponsive();
  });
  adjustSidebarResponsive();
}

function adjustSidebarResponsive() {
  const sidebar = document.getElementById("viewer-sidebar-aside");
  const toggleSidebarBtn = document.getElementById("toggle-sidebar-btn");
  const closeSidebarBtn = document.getElementById("close-sidebar-btn");

  if (!sidebar) return;

  if (window.innerWidth <= 768) {
    sidebar.style.display = "none";
    if (toggleSidebarBtn) toggleSidebarBtn.innerText = "☰ Outline";
    if (closeSidebarBtn) closeSidebarBtn.style.display = "inline-block";
  } else {
    sidebar.style.display = "flex";
    if (toggleSidebarBtn) toggleSidebarBtn.innerText = "✕ Outline";
    if (closeSidebarBtn) closeSidebarBtn.style.display = "none";
  }
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
    const modId = parseInt(quizParam);
    // Find the first quiz question of this module
    const idx = allSlides.findIndex(s => s.type === "quiz-question" && s.moduleId === modId);
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

function navigateSlide(index) {
  if (index < 0 || index >= allSlides.length) return;
  currentSlideIndex = index;
  const item = allSlides[index];

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

  if (item.type === "slide") {
    // Show slide viewport, hide quiz
    document.getElementById("active-slide-viewport").style.display = "flex";
    document.getElementById("active-quiz-viewport").style.display = "none";

    // Highlight sidebar item
    const sidebarItem = document.getElementById(`sidebar-item-${item.id}`);
    if (sidebarItem) {
      sidebarItem.classList.add("active");
      
      // Auto expand parent module slides if collapsed
      const parentList = document.getElementById(`module-slides-${item.moduleId}`);
      if (parentList && parentList.style.display === "none") {
        parentList.style.display = "block";
      }
      
      // Scroll sidebar item into view
      sidebarItem.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    // Render slide details
    document.getElementById("active-slide-title").innerText = `Module ${item.moduleId} Outline — Slide ${item.id}`;
    document.getElementById("slide-detail-heading").innerText = item.title;
    
    // Render Bullets
    const bulletsContainer = document.getElementById("slide-detail-bullets");
    bulletsContainer.innerHTML = "";
    item.bullets.forEach(bullet => {
      const li = document.createElement("li");
      li.innerHTML = formatBulletText(bullet.text);
      if (bullet.indent === 1) {
        li.className = "indent-1";
      } else if (bullet.indent === 2) {
        li.className = "indent-2";
      }
      bulletsContainer.appendChild(li);
    });

    // Render SVG diagram
    const iframe = document.getElementById("diagram-frame");
    if (iframe) {
      iframe.src = `visualizations/${item.visualization}`;
    }

  } else if (item.type === "quiz-question") {
    // Show quiz viewport, hide slide viewport
    document.getElementById("active-slide-viewport").style.display = "none";
    
    const quizViewport = document.getElementById("active-quiz-viewport");
    if (quizViewport) {
      quizViewport.style.display = "flex";
      quizViewport.scrollTop = 0;
    }

    // Highlight sidebar quiz item
    const sidebarQuiz = document.getElementById(`sidebar-item-${item.id}`);
    if (sidebarQuiz) {
      sidebarQuiz.classList.add("active");
      
      // Auto expand parent module if collapsed
      const parentList = document.getElementById(`module-slides-${item.moduleId}`);
      if (parentList && parentList.style.display === "none") {
        parentList.style.display = "block";
      }
      
      sidebarQuiz.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    document.getElementById("active-slide-title").innerText = `Module ${item.moduleId} Checkpoint Quiz — Step ${item.id.replace('q-', '')}`;

    // Render options list
    const optionsHtml = Object.entries(item.options).map(([key, val]) => {
      let cardClass = "option-card";
      let cursorStyle = "cursor: default;";
      let isIncorrect = false;
      if (item.solved) {
        if (key === item.correct) {
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
            <span class="option-letter" style="${item.solved && key === item.correct ? 'background-color: var(--success); color: #000;' : ''}">${key}</span>
            <span class="option-text">${formatBulletText(val)}</span>
          </div>
          <div class="wrong-explanation-box" id="wrong-explain-${key}" style="display: none; margin-top: 8px; padding: 12px; border-left: 3px solid var(--error); background-color: rgba(239, 68, 68, 0.04); border-radius: 0 6px 6px 0; font-size: 13px; line-height: 1.45; color: var(--text-main); animation: fadeIn 0.2s ease;">
            <strong style="color: var(--error);">Why Option ${key} is incorrect:</strong>
            <p style="margin-top: 4px; margin-bottom: 0;">${item.wrongExplanations && item.wrongExplanations[key] ? item.wrongExplanations[key] : 'This option is incorrect. Refer to the overall explanation below.'}</p>
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
            ✓ Correct Answer is ${item.correct}
          </div>
          <p style="margin-top: 8px; font-size: 14px; line-height: 1.5; color: var(--text-main);">${item.explanation}</p>
          <p style="margin-top: 12px; font-size: 11px; color: var(--text-muted); font-style: italic;">Tip: Click on the incorrect options above to see why they are wrong.</p>
        </div>
      `;
    }

    const card = document.getElementById("active-quiz-card");
    if (card) {
      card.className = "quiz-card animate-fade";
      card.innerHTML = `
        <div class="quiz-card-header">
          <span class="quiz-title">${item.title}</span>
          <span class="quiz-progress" style="color: var(--brand-blue); font-weight: 700;">
            ${item.solved ? 'Answer Key' : 'Question Slide'}
          </span>
        </div>
        
        <div class="quiz-question" style="font-size: 17.5px; margin-bottom: 24px; color: var(--text-main); font-weight: 600; line-height: 1.45;">${item.question}</div>
        
        <div class="quiz-options" style="display: flex; flex-direction: column; gap: 12px;">
          ${optionsHtml}
        </div>
        
        ${explanationHtml}
      `;

      // Wire up solved incorrect options click listeners
      if (item.solved) {
        const cards = card.querySelectorAll(".option-card.solved-incorrect");
        cards.forEach(c => {
          c.addEventListener("click", () => {
            const key = c.getAttribute("data-option-key");
            const expBox = card.querySelector(`#wrong-explain-${key}`);
            if (expBox) {
              const isActive = c.classList.contains("active");
              if (isActive) {
                c.classList.remove("active");
                expBox.style.display = "none";
              } else {
                c.classList.add("active");
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
    
    if (index === allSlides.length - 1) {
      nextBtn.innerText = "Finish Course";
    } else if (allSlides[index + 1].type === "quiz-question" && !allSlides[index + 1].solved) {
      nextBtn.innerText = "Checkpoint Quiz →";
      nextBtn.style.background = "var(--gradient-blue)";
      nextBtn.style.color = "var(--text-main)";
    } else if (item.type === "quiz-question" && !item.solved) {
      nextBtn.innerText = "Reveal Answer →";
      nextBtn.style.background = "var(--gradient-orange)";
      nextBtn.style.color = "#000";
    } else {
      nextBtn.innerText = "Next →";
      nextBtn.style.background = "var(--gradient-orange)";
      nextBtn.style.color = "#000";
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
  document.getElementById("viewer-progress-text").innerText = `Slide ${index + 1} of ${allSlides.length}`;
}

function formatBulletText(text) {
  let formatted = text;
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  formatted = formatted.replace(/\*\*/g, '');
  return formatted;
}

function showCustomConfirm() {
  return new Promise((resolve) => {
    const modal = document.getElementById("confirm-modal");
    const cancelBtn = document.getElementById("confirm-modal-cancel");
    const okBtn = document.getElementById("confirm-modal-ok");
    
    if (!modal) {
      resolve(confirm("Are you sure you want to reset your training progress? This will delete all completed slide logs and quiz metrics."));
      return;
    }
    
    const handleCancel = () => {
      cleanup();
      resolve(false);
    };
    
    const handleOk = () => {
      cleanup();
      resolve(true);
    };
    
    const handleClose = () => {
      cleanup();
      resolve(false);
    };
    
    const cleanup = () => {
      cancelBtn.removeEventListener("click", handleCancel);
      okBtn.removeEventListener("click", handleOk);
      modal.removeEventListener("close", handleClose);
      modal.close();
    };
    
    cancelBtn.addEventListener("click", handleCancel);
    okBtn.addEventListener("click", handleOk);
    modal.addEventListener("close", handleClose);
    
    modal.showModal();
  });
}
