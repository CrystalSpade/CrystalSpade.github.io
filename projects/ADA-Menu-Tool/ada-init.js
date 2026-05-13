// ADA Loader
(function () {
    // Direct link to your project folder to avoid path errors
    const assetBase = "https://crystalspade.github.io/projects/ADA-Menu-Tool/";

    const initAdaWidget = () => {
        if (window.__ADA_WIDGET_LOADED__) return;
        window.__ADA_WIDGET_LOADED__ = true;

        // 1. Load the CSS
        const css = document.createElement("link");
        css.rel = "stylesheet";
        css.href = assetBase + "ada.css";
        document.head.appendChild(css);

        // 2. Inject the HTML into your container
        const container = document.getElementById('ada-widget-container');
        
        fetch(assetBase + "ada-widget.html")
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
                return res.text();
            })
            .then(html => {
                if (container) {
                    container.innerHTML = html;
                } else {
                    // Safety fallback: if no container, add to end of body
                    document.body.insertAdjacentHTML("beforeend", html);
                }

                // 3. Load all the functional scripts
                const scripts = [
                    "DraggableDialogue.js",
                    "floatingMenu.js",
                    "darkMode.js",
                    "highContrast.js",
                    "largeFont.js"
                ];

                scripts.forEach(file => {
                    const s = document.createElement("script");
                    s.src = assetBase + file;
                    document.body.appendChild(s);
                });
            })
            .catch(err => console.error("ADA Widget failed:", err));
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAdaWidget);
    } else {
        initAdaWidget();
    }
})();
})();
