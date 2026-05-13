// Toggle Color Impaired (High Contrast Mode with State Broadcast)
(function() {
  const SWITCH_ID = "vision_mode_switch";
  const CLASS_NAME = "vision-mode-enabled";

  const initHighContrast = () => {
    const toggle = document.getElementById(SWITCH_ID);
    if (!toggle) return false;

    toggle.addEventListener("change", () => {
      document.body.classList.toggle(CLASS_NAME, toggle.checked);
      document.dispatchEvent(new CustomEvent("adaStateChange"));
    });
    return true;
  };

  document.addEventListener("adaStateChange", () => {
    const toggle = document.getElementById(SWITCH_ID);
    document.body.classList.toggle(CLASS_NAME, toggle ? toggle.checked : false);
  });

  if (initHighContrast()) return;
  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById(SWITCH_ID)) { initHighContrast(); obs.disconnect(); }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

