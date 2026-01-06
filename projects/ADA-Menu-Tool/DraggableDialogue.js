<!-- Draggable Dialog -->

			var draggable = document.getElementById('draggable');
			var offsetX, offsetY, isDragging = false;
			function onMouseDown(event) 
			{
				offsetX = event.clientX - draggable.offsetLeft;
				offsetY = event.clientY - draggable.offsetTop;
				isDragging = true;
				document.addEventListener('mousemove', onMouseMove);
				document.addEventListener('mouseup', onMouseUp);
			}

			function onMouseMove(event) 
			{
				if (isDragging) 
				{
					// Calculate new position
					var x = event.clientX - offsetX;
					var y = event.clientY - offsetY;

					// Set new position
					draggable.style.left = x + 'px';
					draggable.style.top = y + 'px';
				}
			}

			function onMouseUp(event) 
			{
				if (isDragging) 
				{
					// Reset dragging flag
					isDragging = false;

					// Remove event listeners for mouse move and mouse up events
					document.removeEventListener('mousemove', onMouseMove);
					document.removeEventListener('mouseup', onMouseUp);
				}
			}
			
			draggable.addEventListener('mousedown', onMouseDown);
