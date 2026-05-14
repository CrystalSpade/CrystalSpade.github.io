// Tooltips
(function() {
    const initTooltips = () => {
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
                // FORCE HIDDEN ON LOAD
                tip.hidden = true;

                // Show on Hover
                trigger.addEventListener('mouseenter', () => tip.hidden = false);
                trigger.addEventListener('mouseleave', () => tip.hidden = true);
                
                // Show on Keyboard Focus
                const input = trigger.querySelector('input');
                if (input) {
                    input.addEventListener('focus', () => tip.hidden = false);
                    input.addEventListener('blur', () => tip.hidden = true);
                }
            }
        });
    };

    const observer = new MutationObserver((mutations, obs) => {
        if (document.getElementById("widgetFunction")) {
            initTooltips();
            obs.disconnect(); 
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    if (document.getElementById("widgetFunction")) { initTooltips(); }
})();
