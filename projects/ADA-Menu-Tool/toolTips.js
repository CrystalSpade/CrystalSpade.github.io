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
                // Ensure it's clean on start
                tip.classList.remove('tooltip-active');

                // Trigger visibility only on hover
                trigger.addEventListener('mouseenter', () => tip.classList.add('tooltip-active'));
                trigger.addEventListener('mouseleave', () => tip.classList.remove('tooltip-active'));
                
                // Keyboard support for ADA
                const input = trigger.querySelector('input');
                if (input) {
                    input.addEventListener('focus', () => tip.classList.add('tooltip-active'));
                    input.addEventListener('blur', () => tip.classList.remove('tooltip-active'));
                }
            }
        });
    };

    // Watch for the widget to appear
    const observer = new MutationObserver(() => {
        if (document.getElementById("widgetFunction")) {
            initTooltips();
            observer.disconnect(); 
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    if (document.getElementById("widgetFunction")) initTooltips();
})();
