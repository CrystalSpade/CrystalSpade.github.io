// Visual Focus Control
const initVisualAssist = () => {
  const toggle = document.getElementById("visual_focus_switch");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    document.querySelectorAll("p, h1, h2, h3, li, button").forEach(el => {
      el.classList.toggle("highlighted", toggle.checked);
    });
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initVisualAssist);
} else {
  initVisualAssist();
}
