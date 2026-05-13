(function() {
    const initVisualAssist = () => {
        const toggle = document.getElementById("visual_focus_switch") || 
                       document.getElementsByName("visualFocus")[0];

        if (!toggle) return;

        // Use 'change' event for better checkbox compatibility
        toggle.addEventListener('change', () => {
            const isActive = toggle.checked;
            
            // This MUST match the class name in your Section 4 of ada.css
            document.body.classList.toggle("visual-focus-active", isActive);

            if (!isActive) {
                console.log("Crown Jewel: Disengaged");
            } else {
                console.log("Crown Jewel: Spotlight Active");
            }
        });
    };

    // The Observer: Waits for the separate widget HTML to load
    const observer = new MutationObserver((mutations, obs) => {
        const toggle = document.getElementById("visual_focus_switch");
        if (toggle) {
            initVisualAssist();
            obs.disconnect(); // Stop observing once we've found and hooked the button
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Initial check
    initVisualAssist();
})();
