// Draggable Dialog 
			document.addEventListener("DOMContentLoaded", () => {
  const dragItem = document.getElementById("draggable");
  if (!dragItem) return;

  let offsetX = 0, offsetY = 0, isDragging = false;

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
});
