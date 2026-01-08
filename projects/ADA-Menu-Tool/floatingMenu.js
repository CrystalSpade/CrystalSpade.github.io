// Displays Toggled dialog box
document.addEventListener("DOMContentLoaded", () => {
  const openButton = document.getElementById("openButton");
  const widget = document.getElementById("widgetFunction");

  if (!openButton || !widget) return;

  openButton.addEventListener("click", () => {
    widget.style.display =
      widget.style.display === "none" || widget.style.display === ""
        ? "block"
        : "none";
  });
});
