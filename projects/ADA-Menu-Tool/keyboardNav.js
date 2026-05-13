//keyboard-nav-enabled to control which sections can use it
(function() {
    const toggle = document.getElementsByName("keyboardNav")[0] || document.getElementById("keyboard_nav_switch");

    if (toggle) {
        toggle.onchange = () => {
            // This enables the Red Box focus style globally
            document.body.classList.toggle("keyboard-nav-active", toggle.checked);
        };
    }
})();
