(function() {
    const initVisualAssist = () => {
        // We check for both the ID and the Name just to be safe!
        const toggle = document.getElementById("visual_focus_switch") || document.getElementsByName("visualFocus")[0];
        
        if (!toggle) return;

        toggle.onchange = () => {
            // This is the "Light Switch" for your CSS baby
            document.body.classList.toggle("visual-focus-active", toggle.checked);
        };
    };

    const observer = new MutationObserver(() => {
        if (document.getElementById("visual_focus_switch") || document.getElementsByName("visualFocus")[0]) {
            initVisualAssist();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
    initVisualAssist();
})();
