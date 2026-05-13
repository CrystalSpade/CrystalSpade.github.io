(function() {
    const initTooltips = () => {
        // Mapping Labels/Switches to their respective Tooltip IDs
        const tips = [
            ["lblDarkMode", "tooltipDarkMode"],
            ["lblVisionImpaired", "tooltipVisionMode"],
            ["lblFontSize", "tooltipFontSize"],
            ["lblFocus", "toolTipVisualFocus"],
            ["lblKeyboard", "tooltipKeyNav"]
        ];

        tips.forEach(([containerId, tipId]) => {
            const container = document.getElementById(containerId);
            const tip = document.getElementById(tipId);

            if (container && tip) {
                // Show tooltip on hover
                container.onmouseenter = () => { tip.hidden = false; };
                container.onmouseleave = () => { tip.hidden = true; };
                
                // Also show when focusing via keyboard for true ADA compliance
                container.onfocusin = () => { tip.hidden = false; };
                container.onfocusout = () => { tip.hidden = true; };
            }
        });
    };

    // The "Watcher" waits for the loader to inject the menu
    const observer = new MutationObserver((mutations, obs) => {
        const widget = document.getElementById('widgetFunction');
        if (widget) {
            initTooltips();
            obs.disconnect(); // Task complete, stop watching
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    // Check once immediately
    initTooltips();
})();
