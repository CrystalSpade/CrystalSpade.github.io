// Visual Focus Control
(function() {
    const initVisualAssist = () => {
        const toggle = document.getElementById("visual_focus_switch");
        if (!toggle) return;

        // Use onchange to toggle the highlighted class on all text elements
        toggle.onchange = () => {
            document.querySelectorAll("p, h1, h2, h3, li, button").forEach(el => {
                el.classList.toggle("highlighted", toggle.checked);
            });
        };
    };

    // Watch for the widget to be added to the page
    const observer = new MutationObserver(() => {
        if (document.getElementById("visual_focus_switch")) {
            initVisualAssist();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Try once immediately
    initVisualAssist();
})();
