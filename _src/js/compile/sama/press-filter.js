

function filterPress () {
    $('a[type="Press Release"]').hide();

    $('.press-table-header__category:nth-of-type(1)').click(function(){
        $('a[type="News"]').show();
        $('a[type="Press Release"]').hide();
        console.log('dd007');
    })

    $('.press-table-header__category:nth-of-type(2)').click(function(){
        $('a[type="Press Release"]').show();
        $('a[type="News"]').hide();
        console.log('dd007');
    })
}
$(filterPress());