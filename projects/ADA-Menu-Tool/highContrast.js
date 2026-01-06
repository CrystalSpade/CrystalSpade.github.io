//Toggle Color Impaired
	
			function toggleVisionMode() 
			{
				var visionModeSwitch = document.getElementById('vision_mode_switch');
				var body = document.body;
				var root = document.documentElement;

				if (visionModeSwitch.checked) 
				{
					body.classList.add('vision-mode-enabled');
					root.style.setProperty('--text-color', '#000000');
					root.style.setProperty('--bg-color', '#000000');
					root.style.setProperty('--button-bg-color', '#00ffff');
					root.style.setProperty('--button-hover-bg-color', '#00cccc');
					root.style.setProperty('--div-bg-color', '#000000');
					root.style.setProperty('--h1-color', '#ffff00');
					root.style.setProperty('--container-bg-color', '#000000');
				} 
				else 
				{
					body.classList.remove('vision-mode-enabled');
					root.style.removeProperty('--text-color');
					root.style.removeProperty('--bg-color');
					root.style.removeProperty('--button-bg-color');
					root.style.removeProperty('--button-hover-bg-color');
					root.style.removeProperty('--div-bg-color');
					root.style.removeProperty('--h1-color');
					root.style.removeProperty('--container-bg-color');
				}
			}