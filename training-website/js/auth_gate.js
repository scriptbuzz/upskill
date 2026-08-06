// Simple client-side login gate. Not secure — just keeps casual visitors
// out of the workshop site; credentials live in this file in plain text.
(function () {
  "use strict";

  var STORAGE_KEY = "4ca_authed";
  var VALID_USER = "sudent";
  var VALID_PASS = "workshop";

  if (localStorage.getItem(STORAGE_KEY) === "true") {
    return;
  }

  function init() {
    var modal = document.createElement("dialog");
    modal.id = "login-modal";
    modal.className = "custom-modal login-modal";
    modal.innerHTML =
      '<form method="dialog" class="modal-content" id="login-form">' +
        '<div class="modal-header">' +
          '<span class="modal-icon">🔒</span>' +
          '<h3>Welcome to 4 Corners Academy</h3>' +
        "</div>" +
        '<p>Sign in with your workshop credentials to continue.</p>' +
        '<div class="login-field">' +
          '<label for="login-username">Username</label>' +
          '<input type="text" id="login-username" name="username" autocomplete="username" autocapitalize="off" autocorrect="off" spellcheck="false" required>' +
        "</div>" +
        '<div class="login-field">' +
          '<label for="login-password">Password</label>' +
          '<input type="password" id="login-password" name="password" autocomplete="current-password" required>' +
        "</div>" +
        '<p class="login-error" id="login-error" role="alert"></p>' +
        '<div class="modal-actions login-actions">' +
          '<button type="submit" class="btn btn-primary">Sign In</button>' +
        "</div>" +
      "</form>";

    document.body.appendChild(modal);

    var form = modal.querySelector("#login-form");
    var errorEl = modal.querySelector("#login-error");
    var userInput = modal.querySelector("#login-username");
    var passInput = modal.querySelector("#login-password");

    // Not authenticated yet — don't let Esc / backdrop dismiss the dialog.
    modal.addEventListener("cancel", function (e) {
      e.preventDefault();
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var okUser = userInput.value.trim() === VALID_USER;
      var okPass = passInput.value === VALID_PASS;

      if (okUser && okPass) {
        localStorage.setItem(STORAGE_KEY, "true");
        modal.close();
        modal.remove();
        return;
      }

      errorEl.textContent = "Incorrect username or password.";
      errorEl.style.display = "block";
      modal.classList.remove("shake");
      void modal.offsetWidth; // restart the animation on repeated failures
      modal.classList.add("shake");
      passInput.value = "";
      passInput.focus();
    });

    modal.showModal();
    userInput.focus();
  }

  if (document.body) {
    init();
  } else {
    document.addEventListener("DOMContentLoaded", init);
  }
})();
