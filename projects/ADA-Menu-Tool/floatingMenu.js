// Displays toggled dialog box
const initFloatingMenu = () => {
  const openButton = document.getElementById("openButton");
  const widget = document.getElementById("widgetFunction");

  if (!openButton || !widget) return;

  openButton.addEventListener("click", () => {
    widget.style.display =
      widget.style.display === "none" || widget.style.display === ""
        ? "block"
        : "none";
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initFloatingMenu);
} else {
  initFloatingMenu();
}
