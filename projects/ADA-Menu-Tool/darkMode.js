//Toggle Dark Mode (Functions Perfectly)
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark_mode_switch");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode-enabled", toggle.checked);
  });
});

