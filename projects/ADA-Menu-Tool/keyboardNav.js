//keyboard-nav-enabled to control which sections can use it
			
(function() {
    document.addEventListener("keydown", (e) => {
        const toggle = document.getElementById("keyboard_nav_switch");
        const widget = document.getElementById("widgetFunction");

        // If the menu isn't open, don't do anything
        if (!widget || widget.style.display !== "block") return;

        // If Keyboard Nav is ENABLED, let's help the user stay in the menu
        if (toggle && toggle.checked) {
            const focusableElements = widget.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            const firstElement = focusableElements[0];
            const lastElement = focusableElements[focusableElements.length - 1];

            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        }
    });
})();
