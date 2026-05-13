// Font Size Increase
(function() {
    const initLargeFont = () => {
        const toggle = document.getElementById("font_size_switch");
        if (!toggle) return;

        // Clear any old listeners to prevent double-scaling
        toggle.onchange = () => {
            document.documentElement.style.fontSize = toggle.checked ? "125%" : "100%";
        };
    };

    // Watch for when the widget is added to the page
    const observer = new MutationObserver(() => {
        if (document.getElementById("font_size_switch")) {
            initLargeFont();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Try once immediately just in case
    initLargeFont();
})();
