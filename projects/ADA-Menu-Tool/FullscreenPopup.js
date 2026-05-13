// Popup dialog box
// Function to toggle the ADA widget visibility
function togglePopup() {
  const popup = document.getElementById("widgetFunction");
  if (!popup) return;

  // Checks the actual current style to determine whether to hide or show
  if (popup.style.display === "none" || popup.style.display === "") {
    popup.style.display = "block";
  } else {
    popup.style.display = "none";
  }
}

// Attach event listener safely using the closest() method
document.addEventListener('click', function(e) {
  // .closest('#openButton') ensures clicking the ♿ emoji still triggers the button
  if (e.target && e.target.closest('#openButton')) {
    togglePopup();
  }
});
