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

// Persist the course's true step total so the landing page never relies on
// stale hard-coded counts (it only shows progress after a course was visited)
window.saveCourseTotal = function(courseId, total) {
  try {
    localStorage.setItem(`${courseId}_total_steps`, String(total));
  } catch (e) {
    // Non-critical; landing page falls back to its default constant
  }
};

window.getCourseTotal = function(courseId) {
  try {
    const raw = localStorage.getItem(`${courseId}_total_steps`);
    const total = parseInt(raw, 10);
    return Number.isFinite(total) && total > 0 ? total : null;
  } catch (e) {
    return null;
  }
};

// Make a non-button element keyboard-operable (Enter/Space trigger its click)
window.makeActionable = function(el) {
  el.setAttribute("tabindex", "0");
  el.setAttribute("role", "button");
  el.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      el.click();
    }
  });
};

// Escape HTML special characters, including quotes for attribute contexts
window.escapeHtml = function(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
};

// Convert inline markdown (**bold**, [text](url)) in course content to HTML
window.formatInlineText = function(text) {
  let formatted = window.escapeHtml(text);
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  formatted = formatted.replace(/\*\*/g, "");
  formatted = formatted.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="content-link">$1</a>');
  return formatted;
};

// Parse a quiz "correct" field ("B" or multi-answer "A, D") into a key array
window.parseCorrectKeys = function(correct) {
  return String(correct).split(",").map((s) => s.trim()).filter(Boolean);
};

// Toast confirming a share link was copied, with an option to reveal the link.
// If the copy failed, the link is revealed immediately so the user can copy it by hand.
let shareToastTimer = null;
window.showShareToast = function(link, copied) {
  const existing = document.getElementById("share-toast");
  if (existing) existing.remove();
  if (shareToastTimer) {
    clearTimeout(shareToastTimer);
    shareToastTimer = null;
  }

  const toast = document.createElement("div");
  toast.id = "share-toast";
  toast.className = "share-toast";
  toast.setAttribute("role", "status");

  const msg = document.createElement("span");
  msg.className = "share-toast-msg" + (copied ? "" : " share-toast-msg-warn");
  msg.textContent = copied ? "✓ Link copied to clipboard" : "Couldn't copy automatically — copy the link below";
  toast.appendChild(msg);

  const linkBox = document.createElement("div");
  linkBox.className = "share-toast-link";
  linkBox.textContent = link;
  linkBox.hidden = true;

  const dismiss = () => {
    toast.remove();
    if (shareToastTimer) {
      clearTimeout(shareToastTimer);
      shareToastTimer = null;
    }
  };

  if (copied) {
    const showBtn = document.createElement("button");
    showBtn.type = "button";
    showBtn.className = "share-toast-show";
    showBtn.textContent = "Show link";
    showBtn.addEventListener("click", () => {
      linkBox.hidden = false;
      showBtn.remove();
      // Keep the toast up while the user reads/copies the revealed link
      if (shareToastTimer) {
        clearTimeout(shareToastTimer);
        shareToastTimer = null;
      }
    });
    toast.appendChild(showBtn);
  } else {
    linkBox.hidden = false;
  }

  const closeBtn = document.createElement("button");
  closeBtn.type = "button";
  closeBtn.className = "share-toast-close";
  closeBtn.setAttribute("aria-label", "Dismiss notification");
  closeBtn.textContent = "✕";
  closeBtn.addEventListener("click", dismiss);
  toast.appendChild(closeBtn);

  toast.appendChild(linkBox);
  document.body.appendChild(toast);

  if (copied) {
    shareToastTimer = setTimeout(dismiss, 6000);
  }
};

// Wire up a Share button that copies the page link and confirms via toast.
// `shareLink` is optional and defaults to the current page URL.
window.initCourseShareButton = function(buttonId, shareLink) {
  const btn = document.getElementById(buttonId);
  if (!btn) return;

  btn.addEventListener("click", async () => {
    const link = shareLink || (window.location.origin + window.location.pathname);
    let copied = false;
    try {
      await navigator.clipboard.writeText(link);
      copied = true;
    } catch (e) {
      // Fallback for browsers without clipboard API access
      const helper = document.createElement("textarea");
      helper.value = link;
      helper.style.position = "fixed";
      helper.style.opacity = "0";
      document.body.appendChild(helper);
      helper.select();
      try {
        copied = document.execCommand("copy");
      } catch (err) {
        copied = false;
      }
      helper.remove();
    }
    window.showShareToast(link, copied);
  });
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
