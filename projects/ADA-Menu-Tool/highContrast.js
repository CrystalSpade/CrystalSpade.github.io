// Toggle Color Impaired
const initHighContrast = () => {
  const toggle = document.getElementById("vision_mode_switch");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("vision-mode-enabled", toggle.checked);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initHighContrast);
} else {
  initHighContrast();
}
