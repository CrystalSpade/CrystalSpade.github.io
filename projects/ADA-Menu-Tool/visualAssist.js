(function() {
    const toggle = document.getElementsByName("visualFocus")[0] || document.getElementById("visual_focus_switch");
    
    if (toggle) {
        toggle.onchange = () => {
            // This applies the "Spotlight" class to the whole body
            document.body.classList.toggle("visual-focus-active", toggle.checked);
        };
    }
})();
