//Toggle Dark Mode (Functions Perfectly)
		function toggleDarkMode() {
  const root = document.documentElement;
  const body = document.body;
  const toggle = document.getElementById("dark_mode_switch");

  if (!toggle) return;

  if (toggle.checked) {
    body.classList.add("dark-mode-enabled");
    root.style.setProperty("--bg-color", "#111");
    root.style.setProperty("--text-color", "#fff");
  } else {
    body.classList.remove("dark-mode-enabled");
    root.style.removeProperty("--bg-color");
    root.style.removeProperty("--text-color");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("dark_mode_switch");
  if (toggle) toggle.addEventListener("change", toggleDarkMode);
});
