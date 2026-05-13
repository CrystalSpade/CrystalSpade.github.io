// ADA Loader with Auto-Reset Generation & Tooltip Event Core
(function () {
  // CONFIGURATION: Set this to your live folder path or leave blank if testing locally
  const assetBase = ""; 

  const initAdaWidget = () => {
    if (window.__ADA_WIDGET_LOADED__) return;
    window.__ADA_WIDGET_LOADED__ = true;

    let container = document.getElementById('ada-widget-container');
    
    fetch(assetBase + "ada-widget.html")
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load widget structure: ${res.status}`);
        return res.text();
      })
      .then(html => {
        // 1. Safe layout deployment pass
        if (container) {
          container.style.cssText = "position:fixed; top:20px; right:20px; z-index:10050 !important;";
          container.innerHTML = html;
        } else {
          container = document.createElement('div');
          container.id = 'ada-widget-container';
          container.style.cssText = "position:fixed; top:20px; right:20px; z-index:10050 !important;";
          container.innerHTML = html;
          document.body.appendChild(container);
        }

        // 2. DYNAMIC UPGRADE: Inject responsive Reset Settings Button inside container panel
        const targetContainer = document.getElementById('draggable') || document.getElementById('widgetFunction');
        if (targetContainer) {
          const resetBtn = document.createElement('button');
          resetBtn.id = 'ada-reset-all';
          resetBtn.innerHTML = '<strong>Reset Settings</strong>';
          resetBtn.style.cssText = "width:100% !important; margin-top:15px !important; padding:10px !important; background-color:#cc0000 !important; color:#ffffff !important; border:none !important; border-radius:6px !important; cursor:pointer !important; font-size:14px !important; transition: background-color 0.2s !important;";

          resetBtn.onmouseenter = () => resetBtn.style.backgroundColor = '#a30000';
          resetBtn.onmouseleave = () => resetBtn.style.backgroundColor = '#cc0000';

          resetBtn.addEventListener('click', () => {
            const switches = document.querySelectorAll('.ada-widget-list input[type="checkbox"]');
            switches.forEach(sw => {
              if (sw.checked) {
                sw.checked = false;
                sw.dispatchEvent(new Event('change', { bubbles: true }));
              }
            });
            // Fires state broadcast so all independent functional scripts clear their variables simultaneously
            document.dispatchEvent(new CustomEvent("adaStateChange"));
            console.log("ADA Framework: All accessibility features cleared.");
          });
          targetContainer.appendChild(resetBtn);
        }

        // 3. DYNAMIC UPGRADE: Follow-Mouse Tooltip & Keyboard Focus Engine
        document.addEventListener('mouseover', handleTooltipToggle);
        document.addEventListener('mouseout', handleTooltipToggle);
        document.addEventListener('mousemove', handleTooltipMouseMove);
        document.addEventListener('focusin', handleTooltipToggle);
        document.addEventListener('focusout', handleTooltipToggle);

        function handleTooltipToggle(e) {
          const row = e.target.closest('.ada-widget-list li');
          if (!row) return;

          const tooltip = row.querySelector('[id^="tooltip"], [id^="toolTip"]');
          if (!tooltip) return;

          if (e.type === 'mouseover' || e.type === 'focusin') {
            tooltip.removeAttribute('hidden');
            
            // Keyboard tab focus fallback: static anchoring beneath the targeted row item
            if (e.type === 'focusin') {
              tooltip.style.position = 'absolute';
              tooltip.style.left = '0px';
              tooltip.style.top = '30px';
            }
          } else {
            tooltip.setAttribute('hidden', '');
          }
        }

        // Live cursor metric tracking loop
        function handleTooltipMouseMove(e) {
          const row = e.target.closest('.ada-widget-list li');
          if (!row) return;

          const tooltip = row.querySelector('[id^="tooltip"], [id^="toolTip"]');
          if (!tooltip || tooltip.hasAttribute('hidden')) return;

          // Assign target bounding coordinates dynamically with a safe 15px pointer offset cusion
          tooltip.style.position = 'fixed'; 
          tooltip.style.left = (e.clientX + 15) + 'px'; 
          tooltip.style.top = (e.clientY + 15) + 'px';  
        }

        // 4. LOAD SUPPORT SCRIPTS SEQUENTIALLY
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
          s.defer = true; 
          document.body.appendChild(s);
        });

        console.log("ADA Widget engine loaded cohesively.");
      })
      .catch(err => console.error("ADA Engine Initialization Fault:", err));
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAdaWidget);
  } else {
    initAdaWidget();
  }
})();
