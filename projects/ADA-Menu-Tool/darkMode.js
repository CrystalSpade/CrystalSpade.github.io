// Toggle Dark Mode
const initDarkMode = () => {
  const toggle = document.getElementById("dark_mode_switch");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode-enabled", toggle.checked);
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDarkMode);
} else {
  initDarkMode();
}
