/**
 * visualAssist.js
 * Core system module handling page dimming and element tracking spotlight features.
 */
(function() {
  const SWITCH_ID = "visual_focus_switch"; // Match this with the checkbox ID in your HTML template
  const CLASS_NAME = "visual-focus-active";

  const initVisualAssist = () => {
    const toggle = document.getElementById(SWITCH_ID);
    if (!toggle) return false;

    // Use clean event listeners instead of onchange overrides to avoid asset overriding traps
    toggle.addEventListener("change", () => {
      const isChecked = toggle.checked;
      document.body.classList.toggle(CLASS_NAME, isChecked);
      console.log("Visual Focus Mode:", isChecked ? "Enabled" : "Disabled");
    });

    return true;
  };

  // Sync routine fallback capturing automated Reset Button operations from loader script
  document.addEventListener("adaStateChange", () => {
    const toggle = document.getElementById(SWITCH_ID);
    if (toggle) {
      document.body.classList.toggle(CLASS_NAME, toggle.checked);
    } else {
      document.body.classList.remove(CLASS_NAME);
    }
  });

  // Execute base initialization passes immediately if elements exist in DOM tree
  if (initVisualAssist()) return;

  // MutationObserver ensuring execution logic functions across delayed layout templates
  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById(SWITCH_ID)) {
      initVisualAssist();
      obs.disconnect(); // Terminate observer thread optimization path
    }
  });

  // Watch top root container to capture execution properties cleanly
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
