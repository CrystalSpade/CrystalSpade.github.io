//keyboard-nav-enabled to control which sections can use it
			
document.addEventListener("keydown", e => {
  const toggle = document.getElementById("keyboard_nav_switch");
  const widget = document.getElementById("widgetFunction");

  if (!toggle || !widget) return;
  if (!toggle.checked && widget.style.display === "block") {
    if (["Tab", "ArrowUp", "ArrowDown"].includes(e.key)) {
      e.preventDefault();
    }
  }
});
