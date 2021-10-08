if(document.querySelector('.bodymove_tabs')){

    const setOrder = function(active){
        const current = document.querySelector('.bodymove_tabs_nav_item.active');
        const reverse = (parseInt(current.getAttribute('data-at')) > active ? true : false);
         
        //underline direction
        if(reverse){
            document.querySelector('.bodymove_tabs_navInner').classList.add('slide-back');
        }else{
            document.querySelector('.bodymove_tabs_navInner').classList.remove('slide-back');
        }
        
        current.classList.remove('active');
        document.querySelectorAll('.bodymove_tabs_nav_item')[active].classList.add('active');

        document.querySelector('.bodymove_tabs_tabsInner').style.left = ((100 * active) * -1 ) + '%';
    };


    document.querySelectorAll('.bodymove_tabs_nav_item').forEach(function (tab, i) {
        tab.addEventListener('click', setOrder.bind(null, i), false);
    });
}