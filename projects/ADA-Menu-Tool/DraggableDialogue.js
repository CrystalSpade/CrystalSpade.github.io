// Draggable Dialog

const initDraggableDialog = () => {
  const dragItem = document.getElementById("draggable");
  if (!dragItem) return;

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  dragItem.addEventListener("mousedown", e => {
    isDragging = true;
    offsetX = e.clientX - dragItem.offsetLeft;
    offsetY = e.clientY - dragItem.offsetTop;
  });

  document.addEventListener("mousemove", e => {
    if (!isDragging) return;
    dragItem.style.left = `${e.clientX - offsetX}px`;
    dragItem.style.top = `${e.clientY - offsetY}px`;
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initDraggableDialog);
} else {
  initDraggableDialog();
}
