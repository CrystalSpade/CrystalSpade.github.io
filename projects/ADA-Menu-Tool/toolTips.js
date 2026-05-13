(function() {
    const initTooltips = () => {
        const tips = [
            ["lblDarkMode", "tooltipDarkMode"],
            ["lblVisionImpaired", "tooltipVisionMode"],
            ["lblFontSize", "tooltipFontSize"],
            ["lblFocus", "toolTipVisualFocus"],
            ["lblKeyboard", "tooltipKeyNav"]
        ];

        tips.forEach(([labelId, tipId]) => {
            const label = document.getElementById(labelId);
            const tip = document.getElementById(tipId);

            if (label && tip) {
                // Ensure they don't have duplicate listeners
                label.onmouseenter = () => { tip.hidden = false; };
                label.onmouseleave = () => { tip.hidden = true; };
            }
        });
    };

    // This "Observer" waits for the widget to be injected into the DOM
    const observer = new MutationObserver((mutations, obs) => {
        const widget = document.getElementById('widgetFunction');
        if (widget) {
            initTooltips();
            // Optional: stop watching once found
            // obs.disconnect(); 
        }
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Also try running it immediately just in case
    initTooltips();
})();
