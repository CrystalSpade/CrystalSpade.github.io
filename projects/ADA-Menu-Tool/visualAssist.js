(function() {
    const initVisualAssist = () => {
        // Targets the switch by ID or Name attribute
        const toggle = document.getElementById("visual_focus_switch") || 
                       document.getElementsByName("visualFocus")[0];

        if (!toggle) return;

        toggle.onchange = () => {
            // Toggles the class that triggers the "Crown Jewel" CSS shadow logic
            const isActive = toggle.checked;
            document.body.classList.toggle("visual-focus-active", isActive);

            // Logic to prevent the spotlight from getting "stuck" when turning it off
            if (!isActive) {
                console.log("Visual Assist Disabled - Resetting View");
            } else {
                console.log("Crown Jewel Active - Spotlight Engaged");
            }
        };
    };

    // This keeps the script alive even if the widget is injected later
    const observer = new MutationObserver(() => {
        const toggle = document.getElementById("visual_focus_switch") || 
                       document.getElementsByName("visualFocus")[0];
        if (toggle) {
            initVisualAssist();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Run once on load just in case the widget is already there
    initVisualAssist();
})();
