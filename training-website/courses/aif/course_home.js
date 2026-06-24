if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initCourseHome);
} else {
  initCourseHome();
}

function initCourseHome() {
  if (typeof AIF_COURSE_DATA === 'undefined') {
    console.error("AIF_COURSE_DATA not loaded!");
    return;
  }

  // Load progress
  let completedSlides = window.getCourseProgress("aif");

  // Count total slides (outlines + quiz steps)
  let totalSlides = 0;
  let completedCount = 0;

  AIF_COURSE_DATA.modules.forEach(module => {
    totalSlides += module.slides.length + (module.quiz ? module.quiz.length * 2 : 0);
    module.slides.forEach(slide => {
      if (completedSlides.includes(slide.id)) {
        completedCount++;
      }
    });
    if (module.quiz) {
      module.quiz.forEach(q => {
        if (completedSlides.includes(`q-${module.id}.${q.id}`)) {
          completedCount++;
        }
        if (completedSlides.includes(`q-${module.id}.${q.id}-solved`)) {
          completedCount++;
        }
      });
    }
  });

  // Calculate overall percentage
  const percent = totalSlides > 0 ? Math.min(Math.round((completedCount / totalSlides) * 100), 100) : 0;

  // Update UI progress elements
  const progressText = document.getElementById("overall-progress-text");
  const progressBar = document.getElementById("overall-progress-bar");
  const ctaBtn = document.getElementById("course-cta-btn");

  if (progressText) {
    progressText.innerText = `${percent}% Completed (${completedCount}/${totalSlides} Slides)`;
  }
  if (progressBar) {
    progressBar.style.width = `${percent}%`;
  }
  if (ctaBtn) {
    if (completedCount > 0) {
      ctaBtn.innerText = "Continue Learning";
      // Find the first uncompleted slide to navigate to
      let targetSlideId = null;
      for (const module of AIF_COURSE_DATA.modules) {
        for (const slide of module.slides) {
          if (!completedSlides.includes(slide.id)) {
            targetSlideId = slide.id;
            break;
          }
        }
        if (targetSlideId) break;
      }
      // If all completed, start from slide 1.1
      if (!targetSlideId && AIF_COURSE_DATA.modules[0] && AIF_COURSE_DATA.modules[0].slides[0]) {
        targetSlideId = AIF_COURSE_DATA.modules[0].slides[0].id;
      }
      if (targetSlideId) {
        ctaBtn.href = `viewer.html?slide=${targetSlideId}`;
      }
      
      // Inject Reset button next to the Continue button
      if (!document.getElementById("course-reset-btn")) {
        const btnContainer = ctaBtn.parentNode;
        btnContainer.style.display = "flex";
        btnContainer.style.gap = "8px";
        
        const resetBtn = document.createElement("button");
        resetBtn.className = "btn btn-secondary";
        resetBtn.id = "course-reset-btn";
        resetBtn.title = "Reset Progress";
        resetBtn.innerHTML = "🗑 Reset";
        btnContainer.appendChild(resetBtn);
        
        resetBtn.addEventListener("click", () => {
          window.showCustomConfirm().then((confirmed) => {
            if (confirmed) {
              window.clearCourseProgress("aif");
              window.location.reload();
            }
          });
        });
      }
    } else {
      ctaBtn.innerText = "Start Course";
      if (AIF_COURSE_DATA.modules[0] && AIF_COURSE_DATA.modules[0].slides[0]) {
        ctaBtn.href = `viewer.html?slide=${AIF_COURSE_DATA.modules[0].slides[0].id}`;
      }
      // Remove reset button if it exists (in case progress goes to 0)
      const resetBtn = document.getElementById("course-reset-btn");
      if (resetBtn) {
        resetBtn.remove();
      }
    }
  }

  // Generate modules list
  const modulesListContainer = document.getElementById("modules-list");
  if (!modulesListContainer) return;

  modulesListContainer.innerHTML = "";

  AIF_COURSE_DATA.modules.forEach(module => {
    // Count module slides progress (outlines + quiz steps)
    const moduleTotal = module.slides.length + (module.quiz ? module.quiz.length * 2 : 0);
    let moduleCompleted = 0;
    module.slides.forEach(slide => {
      if (completedSlides.includes(slide.id)) {
        moduleCompleted++;
      }
    });
    if (module.quiz) {
      module.quiz.forEach(q => {
        if (completedSlides.includes(`q-${module.id}.${q.id}`)) {
          moduleCompleted++;
        }
        if (completedSlides.includes(`q-${module.id}.${q.id}-solved`)) {
          moduleCompleted++;
        }
      });
    }

    const modulePercent = Math.min(Math.round((moduleCompleted / moduleTotal) * 100), 100);

    // Build objectives html list
    let objectivesHtml = "";
    if (module.objectives && module.objectives.length > 0) {
      objectivesHtml = `
        <div class="module-objectives-container" style="margin-top: 8px;">
          <h4 style="font-size: 13px; text-transform: uppercase; color: var(--text-muted); margin-bottom: 8px;">Learning Objectives</h4>
          <ul style="list-style: none; padding-left: 0; font-size: 14px; color: var(--text-main); display: flex; flex-direction: column; gap: 6px;">
            ${module.objectives.map(obj => `
              <li style="position: relative; padding-left: 20px; line-height: 1.4;">
                <span style="position: absolute; left: 0; color: var(--brand-blue);">✔</span>
                ${obj}
              </li>
            `).join('')}
          </ul>
        </div>
      `;
    }

    const firstSlideId = module.slides[0] ? module.slides[0].id : "";

    // Determine last viewed slide in this module
    let targetSlideId = firstSlideId;
    const moduleSlideIds = module.slides.map(s => s.id);
    if (module.quiz) {
      module.quiz.forEach(q => {
        moduleSlideIds.push(`q-${module.id}.${q.id}`);
        moduleSlideIds.push(`q-${module.id}.${q.id}-solved`);
      });
    }
    for (let i = completedSlides.length - 1; i >= 0; i--) {
      if (moduleSlideIds.includes(completedSlides[i])) {
        targetSlideId = completedSlides[i];
        break;
      }
    }

    // Card structure
    const card = document.createElement("article");
    card.className = "course-card";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.gap = "16px";
    card.style.borderLeft = "4px solid var(--brand-orange)";

    card.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
        <div>
          <span class="badge badge-muted" style="margin-bottom: 8px;">Module ${module.id.replace('m', '')}</span>
          <h3 style="margin-bottom: 4px; font-size: 22px;">${module.title}</h3>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 13px; color: var(--text-muted); font-weight: 600;">
            ${moduleCompleted}/${moduleTotal} Slides (${modulePercent}%)
          </span>
        </div>
      </div>

      <div style="width: 100%; height: 4px; background-color: var(--bg-hover); border-radius: 2px; overflow: hidden;">
        <div style="width: ${modulePercent}%; height: 100%; background: var(--gradient-orange); border-radius: 2px;"></div>
      </div>

      ${objectivesHtml}

      <div style="display: flex; gap: 12px; margin-top: 12px; border-top: 1px solid var(--border-main); padding-top: 16px; flex-wrap: wrap;">
        <a href="viewer.html?slide=${targetSlideId}" class="btn btn-secondary" style="font-size: 13px; padding: 8px 16px;">
          View Slides
        </a>
        ${module.quiz && module.quiz.length > 0 ? `
          <a href="viewer.html?quiz=${module.id.replace('m', '')}" class="btn btn-secondary" style="font-size: 13px; padding: 8px 16px; border-color: rgba(16, 185, 129, 0.3); color: var(--success); background-color: rgba(16, 185, 129, 0.03);">
            Take Checkpoint Quiz
          </a>
        ` : ''}
      </div>
    `;

    modulesListContainer.appendChild(card);
  });
}

