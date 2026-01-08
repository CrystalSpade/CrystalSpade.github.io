document.addEventListener("DOMContentLoaded", () => {
  const pairs = [
    ["lblDarkMode", "tooltipDarkMode"],
    ["lblVisionImpaired", "tooltipVisionMode"],
    ["lblFontSize", "tooltipFontSize"],
    ["lblFocus", "toolTipVisualFocus"],
    ["lblKeyboard", "tooltipKeyNav"]
  ];

  pairs.forEach(([labelId, tipId]) => {
    const label = document.getElementById(labelId);
    const tip = document.getElementById(tipId);

    if (!label || !tip) return;

    label.addEventListener("mouseover", () => tip.style.display = "block");
    label.addEventListener("mouseout", () => tip.style.display = "none");
  });
});
