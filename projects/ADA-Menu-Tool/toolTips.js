const darkLabel = document.getElementById('lblDarkMode');
const darkToolTip = document.getElementById('tooltipDarkMode');
darkLabel.addEventListener('mouseover', function()
{
	darkToolTip.style.display = 'block';
});
darkLabel.addEventListener('mouseout', function()
{
	darkToolTip.style.display = 'none';
});

const highContrast = document.getElementById('lblVisionImpaired');
const contrastToolTip = document.getElementById('tooltipVisionMode');
highContrast.addEventListener('mouseover', function()
{
	contrastToolTip.style.display = 'block';
});
highContrast.addEventListener('mouseout', function()
{
	contrastToolTip.style.display = 'none';
});

const fontSize = document.getElementById('lblFontSize');
const fontToolTip = document.getElementById('tooltipFontSize');
fontSize.addEventListener('mouseover', function()
{
	fontToolTip.style.display = 'block';
});
fontSize.addEventListener('mouseout', function()
{
	fontToolTip.style.display = 'none';
});

const visualFocus = document.getElementById('lblFocus');
const visualToolTip = document.getElementById('toolTipVisualFocus');
visualFocus.addEventListener('mouseover', function()
{
	visualToolTip.style.display = 'block';
});
visualFocus.addEventListener('mouseout', function()
{
	visualToolTip.style.display = 'none';
});

const keyboardNav = document.getElementById('lblKeyboard');
const keyboardToolTip = document.getElementById('tooltipKeyNav');
keyboardNav.addEventListener('mouseover', function()
{
	keyboardToolTip.style.display = 'block';
});
keyboardNav.addEventListener('mouseout', function()
{
	keyboardToolTip.style.display = 'none';
});