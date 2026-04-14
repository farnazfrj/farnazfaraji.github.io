// Minimal Bootstrap 5 collapse toggle for navbar
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-bs-toggle='collapse']").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = document.querySelector(btn.getAttribute("data-bs-target"));
      if (target) {
        target.classList.toggle("show");
      }
    });
  });
});
