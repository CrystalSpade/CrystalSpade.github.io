// ADA Loader
(function () {
    const assetBase = "https://crystalspade.github.io/projects/ADA-Menu-Tool/";

    const initAdaWidget = () => {
        if (window.__ADA_WIDGET_LOADED__) return;
        window.__ADA_WIDGET_LOADED__ = true;

        // 1. Inject the HTML into your container
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
                    // If you forgot the div, we'll make a floating one for you
                    const div = document.createElement('div');
                    div.id = 'ada-widget-container';
                    div.style.cssText = "position:fixed; top:20px; right:20px; z-index:9999;";
                    div.innerHTML = html;
                    document.body.appendChild(div);
                }

                // 2. Load the scripts that make the buttons work
                const scripts = ["DraggableDialogue.js", "floatingMenu.js", "darkMode.js", "highContrast.js", "largeFont.js"];
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
