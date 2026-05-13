// Draggable Dialog
(function() {
    const initDraggable = () => {
        const modal = document.getElementById("widgetFunction");
        if (!modal) return;

        // Use the H3 header as the "handle" to drag the box
        const header = modal.querySelector('h3') || modal;
        header.style.cursor = 'move';

        let offsetX, offsetY, isDragging = false;

        header.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - modal.offsetLeft;
            offsetY = e.clientY - modal.offsetTop;
            modal.style.position = 'fixed';
            modal.style.right = 'auto'; // Release the "pin" to the right side
        });

        document.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            modal.style.left = (e.clientX - offsetX) + "px";
            modal.style.top = (e.clientY - offsetY) + "px";
        });

        document.addEventListener("mouseup", () => {
            isDragging = false;
        });
    };

    // Wait for the widget to load
    const observer = new MutationObserver(() => {
        if (document.getElementById("widgetFunction")) {
            initDraggable();
        }
    });
    observer.observe(document.body, { childList: true, subtree: true });
})();
