(function() {
    const initTooltips = () => {
        // Pairing the Label ID with the Tooltip ID from your HTML
        const pairings = [
            ["lblDarkMode", "tooltipDarkMode"],
            ["lblVisionImpaired", "tooltipVisionMode"],
            ["lblFontSize", "tooltipFontSize"],
            ["lblFocus", "toolTipVisualFocus"], // Matches your uppercase 'T'
            ["lblKeyboard", "tooltipKeyNav"]
        ];

        pairings.forEach(([triggerId, tipId]) => {
            const trigger = document.getElementById(triggerId);
            const tip = document.getElementById(tipId);

            if (trigger && tip) {
                // Show on Hover
                trigger.addEventListener('mouseenter', () => tip.hidden = false);
                trigger.addEventListener('mouseleave', () => tip.hidden = true);
                
                // Show on Keyboard Focus (for real ADA compliance)
                const input = trigger.querySelector('input');
                if (input) {
                    input.addEventListener('focus', () => tip.hidden = false);
                    input.addEventListener('blur', () => tip.hidden = true);
                }
            }
        });
    };

    // The Observer waits for your widget HTML to be injected
    const observer = new MutationObserver((mutations, obs) => {
        if (document.getElementById("widgetFunction")) {
            initTooltips();
            obs.disconnect(); // Stop watching once found
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    // Initial check in case it's already there
    initTooltips();
})();
