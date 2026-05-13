// Displays toggled dialog box
document.addEventListener("click", function(event) {
  const widget = document.getElementById("widgetFunction");
  const openButton = document.getElementById("openButton");

  if (event.target && (event.target.id === "openButton" || event.target.closest("#openButton"))) {
    if (widget) {
      const isHidden = window.getComputedStyle(widget).display === "none";
      widget.style.setProperty("display", isHidden ? "block" : "none", "important");
      openButton.setAttribute("aria-expanded", isHidden ? "true" : "false");
    }
    return;
  }

  // Closes dialog immediately if user clicks completely out of bounds on the open page
  if (widget && window.getComputedStyle(widget).display === "block") {
    if (!widget.contains(event.target)) {
      widget.style.setProperty("display", "none", "important");
      if (openButton) openButton.setAttribute("aria-expanded", "false");
    }
  }
});

