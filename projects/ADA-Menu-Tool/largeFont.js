<!-- Font Size Increase -->
		
			document.getElementById('font_size_switch').addEventListener('change', function() 
			{
				var elements = document.querySelectorAll('*');
				if (this.checked) 
				{
					elements.forEach(function(element) 
					{
						var computedStyle = window.getComputedStyle(element);
						var fontSize = parseFloat(computedStyle.fontSize);
						if (!isNaN(fontSize)) 
						{
							var newSize = fontSize * 1.06; 
							element.style.fontSize = newSize + 'px';
						}
					});
				} 
				else 
				{
					elements.forEach(function(element) 
					{
						element.style.removeProperty('font-size');
					});
				}
			});