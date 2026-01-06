<!-- Displays Toggled dialog box -->
			const openButton = document.getElementById('openButton');
			const widgetFunction = document.getElementById('widgetFunction');;
			openButton.addEventListener('click', () => 
			{
				widgetFunction.style.display = widgetFunction.style.display === 'none' ? 'block' : 'none';
			});
<!-- Toggles Options -->
			function toggleOption(optionId) 
			{
				var option = document.getElementById(optionId);
				if (option.checked) 
				{
					console.log(optionId + ' is enabled');
				} 
				else 
				{
					console.log(optionId + ' is disabled');
				}
			}