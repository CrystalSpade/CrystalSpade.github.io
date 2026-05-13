// Toggle Color Impaired
(function() {
    const initHighContrast = () => {
        const toggle = document.getElementById("vision_mode_switch");
        if (!toggle) return;

        toggle.onchange = () => {
            document.body.classList.toggle("vision-mode-enabled", toggle.checked);
            console.log("High Contrast:", toggle.checked ? "Activated" : "Deactivated");
        };
    };

    const observer = new MutationObserver((mutations, obs) => {
        if (document.getElementById("vision_mode_switch")) {
            initHighContrast();
            obs.disconnect(); // <--- This is the "Pro" cleanup
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    initHighContrast();
})();
