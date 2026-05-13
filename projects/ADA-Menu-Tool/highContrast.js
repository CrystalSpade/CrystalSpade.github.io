// Toggle Color Impaired
(function() {
    const initHighContrast = () => {
        const toggle = document.getElementById("vision_mode_switch");
        if (!toggle) return;

        // Use onchange to ensure it only fires when the user toggles it
        toggle.onchange = () => {
            document.body.classList.toggle("vision-mode-enabled", toggle.checked);
        };
    };

    // Watch for the widget to be added to the page
    const observer = new MutationObserver(() => {
        if (document.getElementById("vision_mode_switch")) {
            initHighContrast();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial check just in case
    initHighContrast();
})();
