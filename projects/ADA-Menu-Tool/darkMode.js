//Toggle Dark Mode (Functions Perfectly)
			function toggleDarkMode() 
			{
				var darkModeSwitch = document.getElementById('dark_mode_switch');
				var body = document.body;
				var root = document.documentElement;

				if (darkModeSwitch.checked) 
				{
					body.classList.add('dark-mode-enabled');
					root.style.setProperty('--text-color', '#ffffff');
					root.style.setProperty('--bg-color', '#333333');
					root.style.setProperty('--button-bg-color', '#000000');
					root.style.setProperty('--button-hover-bg-color', '#5c5c5c');
					root.style.setProperty('--div-bg-color', '#202020');
					root.style.setProperty('--h1-color', '#ffffff');
					root.style.setProperty('--container-bg-color', '#202020');
					root.style.setProperty('--section-bg-color', '#131313');
				} 
				else 
				{
					body.classList.remove('dark-mode-enabled');
					root.style.removeProperty('--text-color');
					root.style.removeProperty('--bg-color');
					root.style.removeProperty('--button-bg-color');
					root.style.removeProperty('--button-hover-bg-color');
					root.style.removeProperty('--div-bg-color');
					root.style.removeProperty('--h1-color');
					root.style.removeProperty('--container-bg-color');
					root.style.removeProperty('--container-bg-color');
					root.style.removeProperty('--section-bg-color');
				}
			}