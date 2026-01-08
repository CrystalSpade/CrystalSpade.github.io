// Font Size Increase 
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("font_size_switch");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    document.documentElement.style.fontSize =
      toggle.checked ? "120%" : "";
  });
});

