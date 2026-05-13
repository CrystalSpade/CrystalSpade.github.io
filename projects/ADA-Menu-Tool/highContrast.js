// Toggle Color Impaired (High Contrast Mode with State Broadcast)
(function() {
  const initHighContrast = () => {
    const toggle = document.getElementById("vision_mode_switch");
    if (!toggle) return;

    toggle.onchange = () => {
      const isChecked = toggle.checked;
      document.body.classList.toggle("vision-mode-enabled", isChecked);
      console.log("High Contrast:", isChecked ? "Activated" : "Deactivated");
      
      // BROADCAST STATE CHANGE: Tells visualAssist.js to refresh its styles
      document.dispatchEvent(new CustomEvent("adaStateChange"));
    };
  };

  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById("vision_mode_switch")) {
      initHighContrast();
      obs.disconnect(); // Clear observer thread
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
  initHighContrast();
})();
