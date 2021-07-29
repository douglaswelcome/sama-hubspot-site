if(document.querySelector('.bodymove_iconpanel_maxsix')){
    //arrow nav buttons
    document.querySelectorAll('.bodymove_iconpanel_maxsix_slide_panel').forEach(function (control) {
        control.addEventListener('click', e => {
            const currentPanel = document.querySelector('.bodymove_iconpanel_maxsix_panel.active');
            const currentIndex = parseInt(currentPanel.getAttribute('data-at'));
            const nextIndex = (control.classList.contains('next') ? (currentIndex + 1): (currentIndex - 1));

            //remove all current active states
            currentPanel.classList.remove('active');
            document.querySelector('.bodymove_iconpanel_maxsix_nav_item.active').classList.remove('active');

            //add new active states
            document.querySelector('.bodymove_iconpanel_maxsix_panel[data-at="'+nextIndex+'"]').classList.add('active');
            document.querySelector('.bodymove_iconpanel_maxsix_nav_item[data-at="'+nextIndex+'"]').classList.add('active');
            
            if( document.querySelectorAll('.bodymove_iconpanel_maxsix_panel').length === nextIndex || nextIndex === 1){
                e.target.classList.add('inactive');
            }else if(document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.inactive')){
                document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.inactive').classList.remove('inactive');
            }
        });
    });

    //number nav buttons
    document.querySelectorAll('.bodymove_iconpanel_maxsix_nav_item').forEach(function (control) {
        control.addEventListener('click', e => {
            if(e.target.classList.contains('active')) return;

            const currentPanel = document.querySelector('.bodymove_iconpanel_maxsix_panel.active');
            const nextIndex = parseInt(control.getAttribute('data-at'));

            //remove all current active states
            currentPanel.classList.remove('active');
            document.querySelector('.bodymove_iconpanel_maxsix_nav_item.active').classList.remove('active');

            //add new active states
            document.querySelector('.bodymove_iconpanel_maxsix_panel[data-at="'+nextIndex+'"]').classList.add('active');
            control.classList.add('active');
            
            if( document.querySelectorAll('.bodymove_iconpanel_maxsix_panel').length === nextIndex){
                if(document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.prev').classList.contains('inactive')){
                    document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.prev').classList.remove('inactive')
                }
                document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.next').classList.add('inactive');
            }else if(nextIndex === 1) {
                if(document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.next').classList.contains('inactive')){
                    document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.next').classList.remove('inactive')
                }
                document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.prev').classList.add('inactive');
            }else{
                //fix bug on first slide where both arrows get hidden
                document.querySelector('.bodymove_iconpanel_maxsix_slide_panel.inactive').classList.remove('inactive');
            }
        });
    })
}