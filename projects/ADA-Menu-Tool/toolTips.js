document.addEventListener("DOMContentLoaded", () => {
  const tips = [
    ["lblDarkMode", "tooltipDarkMode"],
    ["lblVisionImpaired", "tooltipVisionMode"],
    ["lblFontSize", "tooltipFontSize"],
    ["lblFocus", "toolTipVisualFocus"],
    ["lblKeyboard", "tooltipKeyNav"]
  ];

  tips.forEach(([labelId, tipId]) => {
    const label = document.getElementById(labelId);
    const tip = document.getElementById(tipId);

    if (!label || !tip) return;

    label.addEventListener("mouseenter", () => tip.hidden = false);
    label.addEventListener("mouseleave", () => tip.hidden = true);
  });
});

