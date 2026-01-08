//keyboard-nav-enabled to control which sections can use it
			
		document.addEventListener("keydown", function (event) {
  const checkbox = document.getElementById("keyboard_nav_switch");
  const widget = document.getElementById("widgetFunction");

  if (!checkbox || !widget) return;
  if (!checkbox.checked && widget.style.display === "block") {
    if (["Tab","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(event.key)) {
      event.preventDefault();
    }
  }
});
