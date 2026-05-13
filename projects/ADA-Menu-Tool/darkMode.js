// Toggle Dark Mode
(function() {
  const SWITCH_ID = "dark_mode_switch";
  const CLASS_NAME = "dark-mode-enabled";

  const initDarkMode = () => {
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

  if (initDarkMode()) return;
  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById(SWITCH_ID)) { initDarkMode(); obs.disconnect(); }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();

