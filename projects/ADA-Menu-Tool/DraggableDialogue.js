// Draggable Dialog
// Draggable Dialog with Complete Mobile Touch Support & Responsive Screen Boundaries
(function() {
  const initDraggable = () => {
    const modal = document.getElementById("widgetFunction");
    if (!modal || modal.dataset.draggableHooked === "true") return;
    
    // Safety lock token to prevent double-initialization bugs
    modal.dataset.draggableHooked = "true";

    // Set the H3 header as the custom "handle" to drag the box
    const header = modal.querySelector('h3') || modal;
    header.style.cursor = 'move';
    header.style.userSelect = 'none'; // Disables highlighting text while sliding

    let offsetX, offsetY, isDragging = false;

    // Unified drag initiation configuration
    const startDrag = (clientX, clientY) => {
      isDragging = true;
      offsetX = clientX - modal.offsetLeft;
      offsetY = clientY - modal.offsetTop;
      
      // CRITICAL OVERRIDE: Destroys layout locks conflicting with left/top coordinates
      modal.style.position = 'fixed';
      modal.style.right = 'auto'; 
      modal.style.bottom = 'auto';
    };

    // Unified movement calculations with viewport edge boundary capping
    const moveDrag = (clientX, clientY) => {
      if (!isDragging) return;

      // Calculate target positions
      let targetLeft = clientX - offsetX;
      let targetTop = clientY - offsetY;

      // RESPONSIVE BOUNDARIES: Fetch current real-time window measurements
      const viewWidth = window.innerWidth;
      const viewHeight = window.innerHeight;
      const widgetWidth = modal.offsetWidth;
      const widgetHeight = modal.offsetHeight;

      // Restrict horizontal movements (Keeps widget inside left/right walls)
      if (targetLeft < 0) targetLeft = 0;
      if (targetLeft + widgetWidth > viewWidth) targetLeft = viewWidth - widgetWidth;

      // Restrict vertical movements (Keeps widget inside header/footer walls)
      if (targetTop < 0) targetTop = 0;
      if (targetTop + widgetHeight > viewHeight) targetTop = viewHeight - widgetHeight;

      // Assign capped coordinates to layout engine
      modal.style.left = targetLeft + "px";
      modal.style.top = targetTop + "px";
    };

    // Desktop Mouse Handlers
    header.addEventListener("mousedown", (e) => startDrag(e.clientX, e.clientY));
    document.addEventListener("mousemove", (e) => moveDrag(e.clientX, e.clientY));
    document.addEventListener("mouseup", () => isDragging = false);

    // Mobile Phone & Tablet Touch Handlers (Corrected Coordinate Mapping Array)
    header.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        startDrag(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });
    
    document.addEventListener("touchmove", (e) => {
      if (isDragging && e.touches.length === 1) {
        moveDrag(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });
    
    document.addEventListener("touchend", () => isDragging = false);

    // RESPONSIVE SCREEN RESIZE CORRECTION:
    // If the browser shifts size (like rotating a tablet), adjust the widget position
    window.addEventListener("resize", () => {
      if (modal.style.left) {
        const viewWidth = window.innerWidth;
        const viewHeight = window.innerHeight;
        const widgetWidth = modal.offsetWidth;
        const widgetHeight = modal.offsetHeight;

        let currentLeft = parseInt(modal.style.left, 10);
        let currentTop = parseInt(modal.style.top, 10);

        if (currentLeft + widgetWidth > viewWidth) {
          modal.style.left = Math.max(0, viewWidth - widgetWidth) + "px";
        }
        if (currentTop + widgetHeight > viewHeight) {
          modal.style.top = Math.max(0, viewHeight - widgetHeight) + "px";
        }
      }
    });
  };

  // Safe mutation loader that kills the observer thread once the menu finishes DOM injection
  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById("widgetFunction")) {
      initDraggable();
      obs.disconnect(); // Terminate background listener process to clear device resources
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  initDraggable(); // Fallback immediate validation check
})();
