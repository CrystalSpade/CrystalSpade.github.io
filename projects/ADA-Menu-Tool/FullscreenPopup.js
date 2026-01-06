<!-- Popup dailog box -->
	var isOpen = 0;
	
	function togglePopup() {
		const popup = document.getElementById('myPopup');
		if (isOpen == 0)
		{
				popup.style.display = 'flex';
				isOpen = 1;
		}
		else if (isOpen == 1)
		{
				popup.style.display = 'none';
				isOpen = 0;
		}
	}