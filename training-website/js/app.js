// Catalog cards and their valid progress IDs are generated from course data.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLandingPage);
} else {
  initLandingPage();
}

function initLandingPage() {
  document.querySelectorAll("[data-course-id]").forEach(card => {
    const courseId = card.dataset.courseId;
    const steps = JSON.parse(card.dataset.courseSteps);
    const completed = new Set(window.getCourseProgress(courseId));
    const completedCount = steps.filter(id => completed.has(id)).length;
    const percent = steps.length ? Math.round(completedCount / steps.length * 100) : 0;
    const startButton = document.getElementById(`start-${courseId}-course-btn`);
    const name = card.querySelector("h2").textContent;

    window.initCourseShareButton(`share-${courseId}-course-btn`, startButton.href);
    if (!completedCount) return;

    startButton.textContent = `Continue Learning (${percent}%)`;
    const resetButton = document.createElement("button");
    resetButton.className = "btn btn-secondary btn-icon";
    resetButton.id = `reset-${courseId}-course-btn`;
    resetButton.title = "Reset Progress";
    resetButton.setAttribute("aria-label", `Reset ${name} course progress`);
    resetButton.textContent = "↺";
    startButton.after(resetButton);
    resetButton.addEventListener("click", async () => {
      if (await window.showCustomConfirm()) {
        window.clearCourseProgress(courseId);
        window.location.reload();
      }
    });

    const progress = document.createElement("div");
    progress.className = "card-progress";
    progress.innerHTML = `
      <div class="card-progress-label"><span>COURSE PROGRESS</span><span>${percent}%</span></div>
      <div class="card-progress-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${percent}">
        <div class="card-progress-fill" style="width: ${percent}%"></div>
      </div>`;
    progress.querySelector("[role=progressbar]").setAttribute("aria-label", `${name} course progress`);
    card.querySelector(".course-stats").after(progress);
  });

  window.initCourseShareButton("share-agy-course-btn", new URL("#course-card-agy", window.location.href).href);
}
