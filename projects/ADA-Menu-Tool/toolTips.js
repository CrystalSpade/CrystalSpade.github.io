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
                // Ensure it starts hidden
                tip.classList.remove('tooltip-visible');

                const show = () => tip.classList.add('tooltip-visible');
                const hide = () => tip.classList.remove('tooltip-visible');

                // Hover triggers
                trigger.addEventListener('mouseenter', show);
                trigger.addEventListener('mouseleave', hide);
                
                // Keyboard focus triggers (for the toggle inside)
                const input = trigger.querySelector('input');
                if (input) {
                    input.addEventListener('focus', show);
                    input.addEventListener('blur', hide);
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
