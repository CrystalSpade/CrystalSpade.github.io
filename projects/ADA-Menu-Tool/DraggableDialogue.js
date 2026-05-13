// Draggable Dialog

const initDraggableDialog = () => {
    // We update this to match your widget's ID
    const dragItem = document.getElementById("widgetFunction"); 
    if (!dragItem) return;

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    // Use the header as the "handle" to drag
    const header = dragItem.querySelector('h3') || dragItem;
    header.style.cursor = 'move';

    header.addEventListener("mousedown", e => {
        isDragging = true;
        offsetX = e.clientX - dragItem.offsetLeft;
        offsetY = e.clientY - dragItem.offsetTop;
        dragItem.style.position = 'fixed'; // Ensure it stays pinned to the screen
    });

    document.addEventListener("mousemove", e => {
        if (!isDragging) return;
        dragItem.style.left = `${e.clientX - offsetX}px`;
        dragItem.style.top = `${e.clientY - offsetY}px`;
        dragItem.style.right = 'auto'; // Disable the 'right' pin so it can move
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
    });
};

// Run after the widget is injected
setTimeout(initDraggableDialog, 500);
