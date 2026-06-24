/**
 * Shared utility functions for 4 Corners Academy course presentation modules.
 */

// Safe wrapper to fetch completed slide arrays from localStorage
window.getCourseProgress = function(courseId) {
  try {
    const progressRaw = localStorage.getItem(`${courseId}_progress_slides`);
    const parsed = progressRaw ? JSON.parse(progressRaw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error(`Failed to load progress for ${courseId}`, e);
    return [];
  }
};

// Safe wrapper to save progress arrays to localStorage
window.saveCourseProgress = function(courseId, completedSlides) {
  try {
    localStorage.setItem(`${courseId}_progress_slides`, JSON.stringify(completedSlides));
  } catch (e) {
    console.error(`Failed to save progress for ${courseId}`, e);
  }
};

// Safe wrapper to clear progress from localStorage
window.clearCourseProgress = function(courseId) {
  try {
    localStorage.removeItem(`${courseId}_progress_slides`);
  } catch (e) {
    console.error(`Failed to clear progress for ${courseId}`, e);
  }
};

// Event forwarding to prevent iframe focus/mouse scrolling capture locks
window.setupIframeEventForwarding = function(iframe, parentDoc) {
  const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
  if (!iframeDoc) return;

  iframeDoc.addEventListener("wheel", (e) => {
    const viewport = parentDoc.getElementById("active-slide-viewport");
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
    parentDoc.dispatchEvent(newEvent);
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", " "].includes(e.key)) {
      e.preventDefault();
    }
  });
};

// Asynchronous Custom Confirmation Modal
window.showCustomConfirm = function() {
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
};
