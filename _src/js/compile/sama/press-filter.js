// function pressSlider() {

//     $('.press-table-header__category:nth-of-type(1)').click(function(){
//         $('.press-table-header__category:nth-of-type(2)').removeClass('press-table-header__category--selected');
//         $(this).addClass('press-table-header__category--selected');
//         $('#slider-divider').removeClass('divider-line--right');
//         $('#slider-divider').addClass('divider-line--left');
//     })

//     $('.press-table-header__category:nth-of-type(2)').click(function(){  
//         $('.press-table-header__category:nth-of-type(1)').removeClass('press-table-header__category--selected');
//         $(this).addClass('press-table-header__category--selected');
//         $('#slider-divider').removeClass('divider-line--left');
//         $('#slider-divider').addClass('divider-line--right');
//     })
// }
// $(pressSlider());

function filterPress () {

    
    $('a[type="Press Release"]').hide();

    $('.press-table-tab__category:nth-of-type(1)').click(function(){
        $('a[type="News"]').show();
        $('a[type="Press Release"]').hide();
    })

    $('.press-table-tab__category:nth-of-type(2)').click(function(){
        $('a[type="Press Release"]').show();
        $('a[type="News"]').hide();
    })
}

$(filterPress());