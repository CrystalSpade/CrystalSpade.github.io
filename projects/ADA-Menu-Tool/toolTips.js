// Tooltips
/* ============================================================
   7. TOOLTIP STYLING (THE STABLE GHOST FIX)
   ============================================================ */

/* Anchor the tooltips to the list items */
.ada-widget-list li {
  position: relative !important;
}

[id^="tooltip"], [id^="toolTip"] {
  position: absolute !important; 
  top: 50%;
  right: 115%; /* Pushes them to the left side of the widget */
  transform: translateY(-50%);
  
  background: #000000 !important; 
  color: #ffffff !important;
  padding: 10px 16px !important; 
  border-radius: 6px;
  font-size: 14px !important;
  font-weight: 700 !important;
  white-space: nowrap;
  
  /* Layering: Stays on top of everything */
  z-index: 10500 !important; 
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.6);

  /* THE FIX: Invisible by default, and a "ghost" so it doesn't flicker */
  opacity: 0;
  pointer-events: none !important; 
  transition: opacity 0.15s ease;
  display: block !important; 
}

/* This class is what the JavaScript will toggle */
.tooltip-active {
  opacity: 1 !important;
}

/* High Contrast / Vision Mode Overrides */
body.vision-mode-enabled [id^="tooltip"], 
body.vision-mode-enabled [id^="toolTip"] {
  background: #000000 !important;
  color: #ffff00 !important;
  border: 3px solid #ffff00 !important;
}
