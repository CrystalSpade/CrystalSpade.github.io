// Popup dialog box
let isOpen = 0;

function togglePopup() {
  const popup = document.getElementById("myPopup");
  if (!popup) return;

  if (isOpen === 0) {
    popup.style.display = "flex";
    isOpen = 1;
  } else {
    popup.style.display = "none";
    isOpen = 0;
  }
}

