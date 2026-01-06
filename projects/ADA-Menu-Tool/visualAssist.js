	<!-- Visual Focus Control -->
		
			document.addEventListener('DOMContentLoaded', function() 
			{
				var visualFocusSwitch = document.getElementById('visual_focus_switch');
				var body = document.body;
				var root = document.documentElement;
				var focusableElements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, button, img, li');
				var overlayDiv = null;
				var contentDiv = null;

				function enableVisualFocus() 
				{
					body.classList.add('visual-mode-enabled');
					focusableElements.forEach(element => 
					{
						element.classList.add('focusable');
						element.addEventListener('mouseenter', addHighlight);
						element.addEventListener('mouseleave', removeHighlight);
					});
					createOverlay();
					root.style.setProperty('--text-color', '#000000');
					root.style.setProperty('--overlay-color', 'rgba(0, 0, 0, 0.5)');
				}

				function disableVisualFocus() 
				{
					focusableElements.forEach(element => 
					{
						element.classList.remove('highlighted');
						element.classList.remove('focusable');
						element.removeEventListener('mouseenter', addHighlight);
						element.removeEventListener('mouseleave', removeHighlight);
					});
					body.classList.remove('visual-mode-enabled');
					removeOverlay();
					root.style.setProperty('--overlay-color', 'rgba(0, 0, 0, 0)'); 
					root.style.removeProperty('--text-color');
				}

				function addHighlight() 
				{
					this.classList.add('highlighted');
				}

				function removeHighlight() 
				{
					this.classList.remove('highlighted');
				}

				function createOverlay() 
				{
					overlayDiv = document.createElement('div');
					overlayDiv.classList.add('overlay');
					document.body.appendChild(overlayDiv);
					contentDiv = document.createElement('div');
					contentDiv.classList.add('content');
					document.body.appendChild(contentDiv);
				}

				function removeOverlay() 
				{
					if (overlayDiv) 
					{
						overlayDiv.remove();
						overlayDiv = null;
					}
					if (contentDiv) 
					{
						contentDiv.remove();
						contentDiv = null;
					}
				}

				visualFocusSwitch.addEventListener('change', function() 
				{
					if (this.checked) 
					{
						enableVisualFocus();
					} 
					else 
					{
						disableVisualFocus();
					}
				});

				if (visualFocusSwitch.checked) 
				{
					enableVisualFocus();
				} 
				else 
				{
					disableVisualFocus();
				}
			});