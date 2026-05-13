// Toggle Color Impaired (High Contrast Mode with Cohesive Synchronization)
(function() {
  const initHighContrast = () => {
    const toggle = document.getElementById("vision_mode_switch");
    if (!toggle) return;

    toggle.onchange = () => {
      const isChecked = toggle.checked;
      document.body.classList.toggle("vision-mode-enabled", isChecked);
      console.log("High Contrast:", isChecked ? "Activated" : "Deactivated");
      
      // BROADCAST STATE CHANGE: Crucial for waking up visualHighlight listeners
      document.dispatchEvent(new CustomEvent("adaStateChange"));
    };
  };

  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById("vision_mode_switch")) {
      initHighContrast();
      obs.disconnect(); // Terminate observer thread to optimize performance
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  initHighContrast(); // Initial baseline confirmation pass
})();

