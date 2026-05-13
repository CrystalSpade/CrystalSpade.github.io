// Popup dialog box
// Popup dialog box toggle
let isOpen = 0; 

function togglePopup() {
    // We change "myPopup" to "widgetFunction" to match your widget HTML
    const popup = document.getElementById("widgetFunction"); 
    
    if (!popup) return; 

    if (isOpen === 0) {
        popup.style.display = "block"; // Changed from flex to block for better compatibility
        isOpen = 1;
    } else {
        popup.style.display = "none";
        isOpen = 0;
    }
}

// Attach the function to your button automatically
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'openButton') {
        togglePopup();
    }
});
