// ADA Widget Loader

(function () {
  const scriptUrl = new URL(
    (document.currentScript && document.currentScript.src) || "ada-init.js",
    document.baseURI
  );
  const assetBase = new URL("./", scriptUrl);

  const initAdaWidget = () => {
    // Prevent double-loading
    if (window.__ADA_WIDGET_LOADED__) return;
    window.__ADA_WIDGET_LOADED__ = true;

    // 1. Load CSS
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = new URL("ada.css", assetBase).href;
    document.head.appendChild(css);

    // 2. Inject widget HTML
    fetch(new URL("ada-widget.html", assetBase).href)
      .then(res => {
        if (!res.ok) {
          throw new Error(`Failed to load ADA widget HTML: ${res.status}`);
        }
        return res.text();
      })
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
          s.src = new URL(file, assetBase).href;
          document.body.appendChild(s);
        });
      })
      .catch(err => console.error("ADA Widget failed to load:", err));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAdaWidget);
  } else {
    initAdaWidget();
  }
})();
