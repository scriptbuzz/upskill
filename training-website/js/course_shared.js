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

// Wire up a Share button that copies the course page link and shows it.
// `shareLink` is optional and defaults to the current page URL; without an
// output element the button itself flashes a copied state instead.
window.initCourseShareButton = function(buttonId, outputId, shareLink) {
  const btn = document.getElementById(buttonId);
  const output = outputId ? document.getElementById(outputId) : null;
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
    if (output) {
      output.style.display = "block";
      output.textContent = copied ? `✓ Link copied to clipboard: ${link}` : `Copy this link: ${link}`;
    } else if (!btn.dataset.shareFlash) {
      btn.dataset.shareFlash = "1";
      const originalHtml = btn.innerHTML;
      const originalTitle = btn.title;
      btn.innerHTML = copied ? "✓" : "🔗";
      btn.title = copied ? "Link copied to clipboard" : `Copy this link: ${link}`;
      setTimeout(() => {
        btn.innerHTML = originalHtml;
        btn.title = originalTitle;
        delete btn.dataset.shareFlash;
      }, 1500);
    }
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
