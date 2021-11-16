if(document.querySelector('.bodymove_accordion')){

    const setOpenPanel = function(open){
        const current = document.querySelector('.bodymove_accordion_panel.active');
        const newPanel = document.querySelectorAll(".bodymove_accordion_panel")[open];
        if(current){
            current.querySelector('.bodymove_accordion_panel_body').style.maxHeight = null;
            current.classList.remove('active');
        }
        if(current == newPanel) return;
        newPanel.classList.add('active');
        const panel = document.querySelector('.bodymove_accordion_panel.active .bodymove_accordion_panel_body');

        openPanel(panel);
    }

    const openPanel = function(panel){
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    }

    document.querySelectorAll(".bodymove_accordion_panel_head").forEach(function (panel, i) {
        panel.addEventListener("click", setOpenPanel.bind(null, i), false);
    });
}