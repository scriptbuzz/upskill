/**
 * Shared utility functions for Four Points Technology Training Website (Internal Use Only) course presentation modules.
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
    localStorage.removeItem(`${courseId}_quiz_responses`);
  } catch (e) {
    console.error(`Failed to clear progress for ${courseId}`, e);
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
    const shareUrl = new URL(shareLink || (window.location.origin + window.location.pathname), window.location.href);
    shareUrl.searchParams.delete("v");
    const link = shareUrl.href;
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
    if (e.defaultPrevented || e.isComposing || e.target.closest?.("input, select, textarea, [contenteditable]")) return;
    const newEvent = new KeyboardEvent("keydown", {
      key: e.key,
      code: e.code,
      altKey: e.altKey,
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      shiftKey: e.shiftKey,
      repeat: e.repeat,
      bubbles: true,
      cancelable: true,
      view: window
    });
    parentDoc.dispatchEvent(newEvent);
    if (newEvent.defaultPrevented) {
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

// Responses use a separate course-scoped key so viewing and answering remain distinct.
window.getQuizResponse = function(courseId, questionId) {
  try {
    const value = JSON.parse(localStorage.getItem(`${courseId}_quiz_responses`) || "{}")[questionId];
    return Array.isArray(value) ? value : [];
  } catch { return []; }
};
window.saveQuizResponse = function(courseId, questionId, response) {
  try {
    let responses;
    try { responses = JSON.parse(localStorage.getItem(`${courseId}_quiz_responses`) || "{}"); } catch { responses = {}; }
    if (!responses || typeof responses !== "object" || Array.isArray(responses)) responses = {};
    responses[questionId] = response;
    localStorage.setItem(`${courseId}_quiz_responses`, JSON.stringify(responses));
  } catch { /* Practice remains usable when browser storage is unavailable. */ }
};

window.renderOrderingQuiz = function(root, courseId, questionId, item) {
  const keys = Object.keys(item.options);
  const saved = window.getQuizResponse(courseId, questionId);
  let order = saved.length === keys.length && new Set(saved).size === keys.length && saved.every(key => keys.includes(key)) ? saved : [...keys];
  const correct = window.parseCorrectKeys(item.correct);
  const draw = (announcement = "") => {
    const displayed = item.solved ? correct : order;
    root.innerHTML = `<p>${item.solved ? "Compare the correct sequence below with your attempt." : "Use Move up and Move down to arrange the steps, then reveal the answer."}</p>
      ${item.solved ? `<p class="ordering-attempt">Your order: ${window.escapeHtml(order.join(" → "))}. ${order.join() === correct.join() ? "Your sequence matches." : "Review the sequence and explanation."}</p>` : ""}
      <ol class="ordering-list">${displayed.map((key, index) => `<li class="ordering-item ${item.solved ? "ordering-correct" : ""}"><span class="ordering-position">${index + 1}</span><span class="ordering-text"><strong>${window.escapeHtml(key)}.</strong> ${window.formatInlineText(item.options[key])}</span>${item.solved ? "" : `<span class="ordering-controls"><button type="button" data-key="${key}" data-direction="-1" aria-label="Move step ${key} up" ${index === 0 ? "disabled" : ""}>↑ <span>Move up</span></button><button type="button" data-key="${key}" data-direction="1" aria-label="Move step ${key} down" ${index === order.length - 1 ? "disabled" : ""}>↓ <span>Move down</span></button></span>`}</li>`).join("")}</ol>
      <p class="ordering-status" role="status" aria-live="polite"></p>`;
    root.querySelector(".ordering-status").textContent = announcement;
    root.querySelectorAll("button").forEach(button => button.addEventListener("click", () => {
      const key = button.dataset.key;
      const direction = Number(button.dataset.direction);
      const from = order.indexOf(key), to = from + direction;
      if (to < 0 || to >= order.length) return;
      [order[from], order[to]] = [order[to], order[from]];
      window.saveQuizResponse(courseId, questionId, order);
      draw(`Step ${key} moved to position ${to + 1} of ${order.length}.`);
      const preferred = root.querySelector(`button[data-key="${key}"][data-direction="${direction}"]`);
      (preferred.disabled ? root.querySelector(`button[data-key="${key}"]:not(:disabled)`) : preferred).focus();
    }));
  };
  draw();
};


// Keep old version parameters out of links while preserving lesson destinations.
window.courseAssetUrl = function(value) {
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(value)) return value;
  const [beforeHash, ...fragment] = value.split("#");
  const [pathname, query = ""] = beforeHash.split("?");
  const params = new URLSearchParams(query);
  if (!params.has("v")) return value;
  params.delete("v");
  const search = params.toString();
  return `${pathname}${search ? `?${search}` : ""}${fragment.length ? `#${fragment.join("#")}` : ""}`;
};

// Old bookmarks open the same lesson with a clean address, without reloading.
if (window.location) {
  const url = new URL(window.location.href);
  if (url.searchParams.has("v")) {
    url.searchParams.delete("v");
    window.history.replaceState(window.history.state, "", url.href);
  }
}
