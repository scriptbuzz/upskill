// Core platform JS loader
document.addEventListener("DOMContentLoaded", () => {
  initLandingPage();
});

function initLandingPage() {
  // Check if course progress exists in localStorage
  const progressSlidesRaw = localStorage.getItem("clf_progress_slides");
  let completedSlides = [];
  try {
    completedSlides = progressSlidesRaw ? JSON.parse(progressSlidesRaw) : [];
  } catch (e) {
    completedSlides = [];
  }

  // Check if there's any active progress
  if (completedSlides.length > 0) {
    const totalSlides = 99; // CLF has 99 steps (75 slides + 24 quiz steps)
    const percent = Math.min(Math.round((completedSlides.length / totalSlides) * 100), 100);
    
    // Update the button on the CLF course card to support a reset button next to it
    const clfBtn = document.getElementById("start-clf-course-btn");
    if (clfBtn) {
      clfBtn.innerText = `Continue Learning (${percent}%)`;
      clfBtn.style.width = "auto";
      clfBtn.style.flex = "1";
      
      // Create a wrapper to hold the buttons
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.gap = "8px";
      wrapper.style.marginTop = "12px";
      wrapper.style.width = "100%";
      
      clfBtn.parentNode.insertBefore(wrapper, clfBtn);
      wrapper.appendChild(clfBtn);
      
      // Create the Reset button
      const resetBtn = document.createElement("button");
      resetBtn.className = "btn btn-secondary";
      resetBtn.id = "reset-clf-course-btn";
      resetBtn.title = "Reset Progress";
      resetBtn.style.padding = "10px 14px";
      resetBtn.innerHTML = "🗑";
      wrapper.appendChild(resetBtn);
      
      resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showCustomConfirm().then((confirmed) => {
          if (confirmed) {
            localStorage.removeItem("clf_progress_slides");
            window.location.reload();
          }
        });
      });
    }
    
    // Inject a small progress bar into the card dynamically
    const statsContainer = document.querySelector("#course-card-clf .course-stats");
    if (statsContainer) {
      const progDiv = document.createElement("div");
      progDiv.style.width = "100%";
      progDiv.style.marginTop = "16px";
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
  const aifProgressSlidesRaw = localStorage.getItem("aif_progress_slides");
  let aifCompletedSlides = [];
  try {
    aifCompletedSlides = aifProgressSlidesRaw ? JSON.parse(aifProgressSlidesRaw) : [];
  } catch (e) {
    aifCompletedSlides = [];
  }

  if (aifCompletedSlides.length > 0) {
    const aifTotalSlides = 132; // AIF has 132 steps (110 slides + 22 quiz steps)
    const aifPercent = Math.min(Math.round((aifCompletedSlides.length / aifTotalSlides) * 100), 100);
    
    const aifBtn = document.getElementById("start-aif-course-btn");
    if (aifBtn) {
      aifBtn.innerText = `Continue Learning (${aifPercent}%)`;
      aifBtn.style.width = "auto";
      aifBtn.style.flex = "1";
      
      const wrapper = document.createElement("div");
      wrapper.style.display = "flex";
      wrapper.style.gap = "8px";
      wrapper.style.marginTop = "12px";
      wrapper.style.width = "100%";
      
      aifBtn.parentNode.insertBefore(wrapper, aifBtn);
      wrapper.appendChild(aifBtn);
      
      const resetBtn = document.createElement("button");
      resetBtn.className = "btn btn-secondary";
      resetBtn.id = "reset-aif-course-btn";
      resetBtn.title = "Reset Progress";
      resetBtn.style.padding = "10px 14px";
      resetBtn.innerHTML = "🗑";
      wrapper.appendChild(resetBtn);
      
      resetBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showCustomConfirm().then((confirmed) => {
          if (confirmed) {
            localStorage.removeItem("aif_progress_slides");
            window.location.reload();
          }
        });
      });
    }
    
    const statsContainer = document.querySelector("#course-card-aif .course-stats");
    if (statsContainer) {
      const progDiv = document.createElement("div");
      progDiv.style.width = "100%";
      progDiv.style.marginTop = "16px";
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
