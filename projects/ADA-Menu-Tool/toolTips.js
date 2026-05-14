// Tooltips
(function() {
    const initTooltips = () => {
        // Find all list items in your widget
        const menuItems = document.querySelectorAll('.ada-widget-list li');

        menuItems.forEach(item => {
            // Find the tooltip and the label/trigger inside this specific li
            const tip = item.querySelector('[id^="tooltip"], [id^="toolTip"]');
            const trigger = item.querySelector('label') || item;

            if (tip && trigger) {
                // Remove any accidental stuck classes
                tip.classList.remove('tooltip-active');

                // Show on Hover
                trigger.addEventListener('mouseenter', () => tip.classList.add('tooltip-active'));
                trigger.addEventListener('mouseleave', () => tip.classList.remove('tooltip-active'));
                
                // Show on Keyboard Focus (checks for the checkbox inside)
                const input = item.querySelector('input');
                if (input) {
                    input.addEventListener('focus', () => tip.classList.add('tooltip-active'));
                    input.addEventListener('blur', () => tip.classList.remove('tooltip-active'));
                }
            }
        });
    };

    // Wait for widget injection
    const observer = new MutationObserver(() => {
        if (document.querySelector(".ada-widget-list")) {
            initTooltips();
            observer.disconnect(); 
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    if (document.querySelector(".ada-widget-list")) initTooltips();
})();
