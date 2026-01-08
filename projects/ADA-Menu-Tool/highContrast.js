//Toggle Color Impaired
	
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("vision_mode_switch");
  if (!toggle) return;

  toggle.addEventListener("change", () => {
    document.body.classList.toggle("vision-mode-enabled", toggle.checked);
  });
});
