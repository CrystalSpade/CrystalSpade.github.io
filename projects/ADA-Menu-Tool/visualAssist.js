/**
 * visualAssist.js
 * Core system module handling page dimming and element tracking spotlight features.
 */
(function() {
  const SWITCH_ID = "visual_focus_switch";
  const CLASS_NAME = "visual-focus-active";

  const initVisualAssist = () => {
    const toggle = document.getElementById(SWITCH_ID);
    if (!toggle) return false;

    toggle.addEventListener("change", () => {
      document.body.classList.toggle(CLASS_NAME, toggle.checked);
    });
    return true;
  };

  document.addEventListener("adaStateChange", () => {
    const toggle = document.getElementById(SWITCH_ID);
    document.body.classList.toggle(CLASS_NAME, toggle ? toggle.checked : false);
  });

  if (initVisualAssist()) return;
  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById(SWITCH_ID)) { initVisualAssist(); obs.disconnect(); }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

