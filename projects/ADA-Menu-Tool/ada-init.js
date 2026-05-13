// ADA Loader with Auto-Reset Generation & Tooltip Event Core
(function () {
  const assetBase = "https://crystalspade.github.io/projects/ADA-Menu-Tool/";
  
  const initAdaWidget = () => {
    if (window.__ADA_WIDGET_LOADED__) return;
    window.__ADA_WIDGET_LOADED__ = true;
    
    const container = document.getElementById('ada-widget-container');
    
    fetch(assetBase + "ada-widget.html")
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load: ${res.status}`);
        return res.text();
      })
      .then(html => {
        // 1. Inject core HTML layout templates safely
        if (container) {
          container.innerHTML = html;
        } else {
          const div = document.createElement('div');
          div.id = 'ada-widget-container';
          div.style.cssText = "position:fixed; top:20px; right:20px; z-index:9999;";
          div.innerHTML = html;
          document.body.appendChild(div);
        }

        // 2. DYNAMIC UPGRADE: Inject a responsive Reset Settings Button inside the container
        const targetContainer = document.getElementById('draggable') || document.getElementById('widgetFunction');
        if (targetContainer) {
          const resetBtn = document.createElement('button');
          resetBtn.id = 'ada-reset-all';
          resetBtn.innerHTML = '<strong>Reset Settings</strong>';
          // Clean inline styles to prevent theme leaking rules from smashing it
          resetBtn.style.cssText = "width:100% !important; margin-top:15px !important; padding:10px !important; background-color:#cc0000 !important; color:#ffffff !important; border:none !important; border-radius:6px !important; cursor:pointer !important; font-size:14px !important; transition: background-color 0.2s !important;";
          
          // Hover color animation
          resetBtn.onmouseenter = () => resetBtn.style.backgroundColor = '#a30000';
          resetBtn.onmouseleave = () => resetBtn.style.backgroundColor = '#cc0000';
          
          // Reset Button Business Logic Handler
          resetBtn.addEventListener('click', () => {
            // Find all checkboxes inside our specific accessibility widget list
            const switches = document.querySelectorAll('.ada-widget-list input[type="checkbox"]');
            switches.forEach(sw => {
              if (sw.checked) {
                sw.checked = false;
                // Dispatch a manual change event so individual scripts catch the state change
                sw.dispatchEvent(new Event('change'));
              }
            });
            console.log("ADA Framework: All accessibility features cleared.");
          });
          
          targetContainer.appendChild(resetBtn);
        }

        // 3. DYNAMIC UPGRADE: Universal Tooltip Hover and Keyboard Focus Engine
        document.addEventListener('mouseover', handleTooltipToggle);
        document.addEventListener('mouseout', handleTooltipToggle);
        document.addEventListener('focusin', handleTooltipToggle);
        document.addEventListener('focusout', handleTooltipToggle);

        function handleTooltipToggle(e) {
          // Identify if target or parent is a switch row element
          const row = e.target.closest('.ada-widget-list li');
          if (!row) return;
          
          // Locate the hidden tooltip div inside this row container
          const tooltip = row.querySelector('[id^="tooltip"], [id^="toolTip"]');
          if (!tooltip) return;

          if (e.type === 'mouseover' || e.type === 'focusin') {
            tooltip.removeAttribute('hidden');
          } else {
            tooltip.setAttribute('hidden', '');
          }
        }

        // 4. LOAD SUPPORT SCRIPTS AFTER GENERATION PASS
        const scripts = [
          "DraggableDialogue.js",
          "floatingMenu.js",
          "darkMode.js",
          "highContrast.js",
          "largeFont.js",
          "visualAssist.js"
        ];
        
        scripts.forEach(file => {
          const s = document.createElement("script");
          s.src = assetBase + file;
          document.body.appendChild(s);
        });
        
        console.log("ADA Widget and Brains loaded cohesively with dynamic upgrades.");
      })
      .catch(err => console.error("ADA Widget failed:", err));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAdaWidget);
  } else {
    initAdaWidget();
  }
})();
