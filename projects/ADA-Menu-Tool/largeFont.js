// Font Size Increase
(function() {
    const initLargeFont = () => {
        const toggle = document.getElementById("font_size_switch");
        if (!toggle) return;

        toggle.onchange = () => {
            // This hooks directly into Section 6 of your CSS
            document.body.classList.toggle("font-size-adjusted", toggle.checked);
            console.log("Font Scaling:", toggle.checked ? "Enabled" : "Disabled");
        };
    };

    const observer = new MutationObserver((mutations, obs) => {
        if (document.getElementById("font_size_switch")) {
            initLargeFont();
            obs.disconnect(); // Clean up the observer
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    initLargeFont();
})();
