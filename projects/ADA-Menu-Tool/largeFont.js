// Font Size Increase
const initLargeFont = () => {
  const toggle = document.getElementById("font_size_switch");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    document.documentElement.style.fontSize = toggle.checked ? "120%" : "";
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initLargeFont);
} else {
  initLargeFont();
}

