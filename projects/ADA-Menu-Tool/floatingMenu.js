// Displays toggled dialog box
// Smarter toggle that works even if the widget loads late
document.addEventListener("click", function(event) {
    const widget = document.getElementById("widgetFunction");
    const openButton = document.getElementById("openButton");

    // If they clicked the open button
    if (event.target && (event.target.id === "openButton" || event.target.closest("#openButton"))) {
        if (widget) {
            widget.style.display = (widget.style.display === "none" || widget.style.display === "") ? "block" : "none";
        }
    }

    // If they clicked a "close" button inside the widget
    if (event.target && event.target.id === "closeWidget") {
        if (widget) widget.style.display = "none";
    }
});
