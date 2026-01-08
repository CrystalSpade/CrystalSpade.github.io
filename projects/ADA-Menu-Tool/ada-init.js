(function () {
  // Prevent double-loading
  if (window.__ADA_WIDGET_LOADED__) return;
  window.__ADA_WIDGET_LOADED__ = true;

  // 1. Load CSS
  const css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = "ada-widget/ada.css";
  document.head.appendChild(css);

  // 2. Inject widget HTML
  fetch("ada-widget/ada-widget.html")
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("beforeend", html);

      // 3. Load feature scripts AFTER widget exists
      const scripts = [
        "DraggableDialogue.js",
        "FullscreenPopup.js",
        "floatingMenu.js",
        "darkMode.js",
        "highContrast.js",
        "largeFont.js",
        "visualAssist.js",
        "keyboardNav.js",
        "toolTips.js"
      ];

      scripts.forEach(file => {
        const s = document.createElement("script");
        s.src = `ada-widget/${file}`;
        s.defer = true;
        document.body.appendChild(s);
      });
    })
    .catch(err => console.error("ADA Widget failed to load:", err));
})();
