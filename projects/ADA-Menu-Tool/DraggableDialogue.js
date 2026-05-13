// Draggable Box
(function() {
  const initDraggable = () => {
    const modal = document.getElementById("widgetFunction");
    if (!modal || modal.dataset.draggableHooked === "true") return;
    modal.dataset.draggableHooked = "true";

    const header = modal.querySelector('h3') || modal;
    header.style.cursor = 'move';
    header.style.userSelect = 'none';

    let offsetX, offsetY, isDragging = false;

    const startDrag = (clientX, clientY) => {
      isDragging = true;
      offsetX = clientX - modal.offsetLeft;
      offsetY = clientY - modal.offsetTop;
      modal.style.position = 'fixed';
      modal.style.right = 'auto';
      modal.style.bottom = 'auto';
    };

    const moveDrag = (clientX, clientY) => {
      if (!isDragging) return;
      let targetLeft = clientX - offsetX;
      let targetTop = clientY - offsetY;

      const viewWidth = window.innerWidth;
      const viewHeight = window.innerHeight;
      const widgetWidth = modal.offsetWidth;
      const widgetHeight = modal.offsetHeight;

      if (targetLeft < 0) targetLeft = 0;
      if (targetLeft + widgetWidth > viewWidth) targetLeft = viewWidth - widgetWidth;
      if (targetTop < 0) targetTop = 0;
      if (targetTop + widgetHeight > viewHeight) targetTop = viewHeight - widgetHeight;

      modal.style.left = targetLeft + "px";
      modal.style.top = targetTop + "px";
    };

    header.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
    document.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
    document.addEventListener("mouseup", () => isDragging = false);

    header.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) startDrag(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: false });

    document.addEventListener("touchmove", (e) => {
      if (isDragging && e.touches.length === 1) {
        e.preventDefault(); // Blocks background mobile scrolling while dragging menu
        moveDrag(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: false });

    document.addEventListener("touchend", () => isDragging = false);
  };

  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById("widgetFunction")) {
      initDraggable();
      obs.disconnect();
    }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
  initDraggable();
})();

