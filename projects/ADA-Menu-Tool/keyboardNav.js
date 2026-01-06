<!-- keyboard-nav-enabled to control which sections can use it -->
			
			function toggleOption(optionId) 
			{
				var checkbox = document.getElementById(optionId);
				var triggerButton = document.getElementById('triggerButton');
				var keyfocusableElements = document.querySelectorAll('#keyfocusable p, #keyfocusable button, #keyfocusable img');

				if (checkbox.checked) 
				{
					keyfocusableElements.forEach(element => 
					{
						element.setAttribute('tabindex', '0');
					});
					triggerButton.removeAttribute('disabled');
				} 
				else 
				{
					keyfocusableElements.forEach(element => 
					{
						element.removeAttribute('tabindex');
					});
					triggerButton.setAttribute('disabled', true);
				}
			}

			document.addEventListener('keydown', function(event) 
			{
				var checkbox = document.getElementById('keyboard_nav_switch');
				if (!checkbox.checked) 
				{
					if (event.key === 'Tab' || event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') 
					{
						event.preventDefault();
					}
				}
			});