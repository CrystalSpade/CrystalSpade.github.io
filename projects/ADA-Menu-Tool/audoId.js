/**
 * ADA Auto-ID Generator
 * Scans the page and assigns unique IDs to elements that don't have them.
 */
(function() {
    const autoId = () => {
        // 1. Target the elements you want to control (paragraphs, headers, images, etc.)
        const selectors = ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section', 'button', 'a', 'img'];

        selectors.forEach(tag => {
            const elements = document.querySelectorAll(tag);
            elements.forEach((el, index) => {
                // 2. Only add an ID if one doesn't exist
                if (!el.id) {
                    // This creates IDs like "ada-p-0", "ada-h1-1", etc.
                    el.id = `ada-${tag}-${index}`;
                }
            });
        });
        console.log("ADA IDs automatically assigned.");
    };

    // Run when the page is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', autoId);
    } else {
        autoId();
    }
})();
