// Toggle Dark Mode
(function() {
    const initDarkMode = () => {
        const toggle = document.getElementById("dark_mode_switch");
        if (!toggle) return;

        // Use onchange so it only fires when someone actually clicks
        toggle.onchange = () => {
            document.body.classList.toggle("dark-mode-enabled", toggle.checked);
        };
    };

    // This "Observer" waits for the menu to be injected by your init script
    const observer = new MutationObserver(() => {
        if (document.getElementById("dark_mode_switch")) {
            initDarkMode();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Try once immediately just in case it's already there
    initDarkMode();
})();
