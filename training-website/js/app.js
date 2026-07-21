// Core platform JS loader
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLandingPage);
} else {
  initLandingPage();
}

function initLandingPage() {
  // Check if course progress exists in localStorage
  let completedSlides = [];
  try {
    const progressSlidesRaw = localStorage.getItem("clf_progress_slides");
    const parsed = progressSlidesRaw ? JSON.parse(progressSlidesRaw) : [];
    completedSlides = Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    completedSlides = [];
  }

  // Check if there's any active progress
  if (completedSlides.length > 0) {
    const totalSlides = 104; // CLF has 104 steps (80 slides + 24 quiz steps)
    const percent = Math.min(Math.round((completedSlides.length / totalSlides) * 100), 100);
    
    // Update the button on the CLF course card and add a reset button next to it
    const clfBtn = document.getElementById("start-clf-course-btn");
    if (clfBtn) {
      clfBtn.innerText = `Continue Learning (${percent}%)`;

      // Insert the Reset button into the card's static actions row
      const resetBtn = document.createElement("button");
      resetBtn.className = "btn btn-secondary btn-icon";
      resetBtn.id = "reset-clf-course-btn";
      resetBtn.title = "Reset Progress";
      resetBtn.innerHTML = "↺";
      clfBtn.after(resetBtn);
      
      resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showCustomConfirm().then((confirmed) => {
          if (confirmed) {
            try {
              localStorage.removeItem("clf_progress_slides");
            } catch (err) {
              console.error(err);
            }
            window.location.reload();
          }
        });
      });
    }
    
    // Inject a small progress bar into the card dynamically
    const statsContainer = document.querySelector("#course-card-clf .course-stats");
    if (statsContainer) {
      const progDiv = document.createElement("div");
      progDiv.className = "card-progress";
      progDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; font-size:11px; margin-bottom:4px; color:var(--text-muted);">
          <span>COURSE PROGRESS</span>
          <span>${percent}%</span>
        </div>
        <div style="width:100%; height:4px; background-color:var(--bg-hover); border-radius:2px; overflow:hidden;">
          <div style="width:${percent}%; height:100%; background:var(--gradient-blue); border-radius:2px;"></div>
        </div>
      `;
      statsContainer.after(progDiv);
    }
  }

  // Check if AIF course progress exists in localStorage
  let aifCompletedSlides = [];
  try {
    const aifProgressSlidesRaw = localStorage.getItem("aif_progress_slides");
    const parsed = aifProgressSlidesRaw ? JSON.parse(aifProgressSlidesRaw) : [];
    aifCompletedSlides = Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    aifCompletedSlides = [];
  }

  if (aifCompletedSlides.length > 0) {
    const aifTotalSlides = 137; // AIF has 137 steps (115 slides + 22 quiz steps)
    const aifPercent = Math.min(Math.round((aifCompletedSlides.length / aifTotalSlides) * 100), 100);
    
    const aifBtn = document.getElementById("start-aif-course-btn");
    if (aifBtn) {
      aifBtn.innerText = `Continue Learning (${aifPercent}%)`;

      const resetBtn = document.createElement("button");
      resetBtn.className = "btn btn-secondary btn-icon";
      resetBtn.id = "reset-aif-course-btn";
      resetBtn.title = "Reset Progress";
      resetBtn.innerHTML = "↺";
      aifBtn.after(resetBtn);
      
      resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showCustomConfirm().then((confirmed) => {
          if (confirmed) {
            try {
              localStorage.removeItem("aif_progress_slides");
            } catch (err) {
              console.error(err);
            }
            window.location.reload();
          }
        });
      });
    }
    
    const statsContainer = document.querySelector("#course-card-aif .course-stats");
    if (statsContainer) {
      const progDiv = document.createElement("div");
      progDiv.className = "card-progress";
      progDiv.innerHTML = `
        <div style="display:flex; justify-content:space-between; font-size:11px; margin-bottom:4px; color:var(--text-muted);">
          <span>COURSE PROGRESS</span>
          <span>${aifPercent}%</span>
        </div>
        <div style="width:100%; height:4px; background-color:var(--bg-hover); border-radius:2px; overflow:hidden;">
          <div style="width:${aifPercent}%; height:100%; background:var(--gradient-blue); border-radius:2px;"></div>
        </div>
      `;
      statsContainer.after(progDiv);
    }
  }

  // Wire the per-course Share buttons (helper from course_shared.js)
  if (window.initCourseShareButton) {
    window.initCourseShareButton("share-clf-course-btn", null, new URL("courses/clf/index.html", window.location.href).href);
    window.initCourseShareButton("share-aif-course-btn", null, new URL("courses/aif/index.html", window.location.href).href);
    window.initCourseShareButton("share-agy-course-btn", null, new URL("#course-card-agy", window.location.href).href);
  }
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
