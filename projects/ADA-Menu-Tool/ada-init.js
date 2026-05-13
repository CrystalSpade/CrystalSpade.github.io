// ADA Loader
// ADA Loader
(function () {
    const assetBase = "https://crystalspade.github.io/projects/ADA-Menu-Tool/";

    const initAdaWidget = () => {
        if (window.__ADA_WIDGET_LOADED__) return;
        window.__ADA_WIDGET_LOADED__ = true;

        const container = document.getElementById('ada-widget-container');

        fetch(assetBase + "ada-widget.html")
            .then(res => {
                if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
                return res.text();
            })
            .then(html => {
                // 1. Inject HTML first
                if (container) {
                    container.innerHTML = html;
                } else {
                    const div = document.createElement('div');
                    div.id = 'ada-widget-container';
                    div.style.cssText = "position:fixed; top:20px; right:20px; z-index:9999;";
                    div.innerHTML = html;
                    document.body.appendChild(div);
                }

                // 2. ONLY LOAD SCRIPTS AFTER HTML IS IN THE DOM
                // This ensures visualAssist.js can find its switches!
                const scripts = [
                    "DraggableDialogue.js", 
                    "floatingMenu.js", 
                    "darkMode.js", 
                    "highContrast.js", 
                    "largeFont.js", 
                    "visualAssist.js"
                ];

                scripts.forEach(file => {
                    const s = document.createElement("script");
                    s.src = assetBase + file;
                    document.body.appendChild(s);
                });
                
                console.log("ADA Widget and Brains loaded cohesively.");
            })
            .catch(err => console.error("ADA Widget failed:", err));
    };

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initAdaWidget);
    } else {
        initAdaWidget();
    }
})();
