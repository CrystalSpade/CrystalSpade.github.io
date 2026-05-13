// Font Size Increase
(function() {
  const SWITCH_ID = "font_size_switch";
  const CLASS_NAME = "font-size-adjusted";

  const initLargeFont = () => {
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

  if (initLargeFont()) return;
  const observer = new MutationObserver((mutations, obs) => {
    if (document.getElementById(SWITCH_ID)) { initLargeFont(); obs.disconnect(); }
  });
  observer.observe(document.documentElement, { childList: true, subtree: true });
})();
