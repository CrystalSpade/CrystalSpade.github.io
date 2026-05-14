// Tooltips

(function() {
    const initTooltips = () => {
        // Updated pairings to match common patterns in your widget
        // Double-check these IDs in your HTML!
        const pairings = [
            ["lblDarkMode", "tooltipDarkMode"],
            ["lblVisionImpaired", "tooltipVisionMode"],
            ["lblFontSize", "tooltipFontSize"],
            ["lblFocus", "toolTipVisualFocus"], 
            ["lblKeyboard", "tooltipKeyNav"]
        ];

        pairings.forEach(([triggerId, tipId]) => {
            const trigger = document.getElementById(triggerId);
            const tip = document.getElementById(tipId);

            if (trigger && tip) {
                // Force tooltip to be hidden initially via JS to ensure state sync
                tip.hidden = true;

                // SHOW logic
                const showTip = () => {
                    tip.hidden = false;
                    tip.style.display = 'block'; // Ensures CSS doesn't block it
                };

                // HIDE logic
                const hideTip = () => {
                    tip.hidden = true;
                };

                // Hover Events
                trigger.addEventListener('mouseenter', showTip);
                trigger.addEventListener('mouseleave', hideTip);
                
                // Keyboard focus for ADA (targets the checkbox/toggle inside the label)
                const input = trigger.querySelector('input');
                if (input) {
                    input.addEventListener('focus', showTip);
                    input.addEventListener('blur', hideTip);
                }
            } else {
                console.warn(`Tooltip pairing failed: Could not find ${triggerId} or ${tipId}`);
            }
        });
    };

    // MutationObserver handles the widget being injected dynamically
    const observer = new MutationObserver((mutations, obs) => {
        const widget = document.getElementById("widgetFunction");
        if (widget) {
            initTooltips();
            obs.disconnect(); 
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    
    // Check if it's already there (e.g. script loaded late)
    if (document.getElementById("widgetFunction")) {
        initTooltips();
    }
})();
