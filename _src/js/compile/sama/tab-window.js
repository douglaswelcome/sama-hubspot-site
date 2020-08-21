function tabWindow() {

    const tabSelector = document.querySelectorAll('.tabs__tab');
    const tabContent = document.querySelectorAll('.tab-window__feature');

    
    //add the active to 
    $('.tabs__tab').click(function () {
        var i = $(this).index()

        $('.tabs__tab').removeClass('active');
        tabSelector[i].classList.add('active');

        
        $('.tab-window__feature').removeClass('active');
        tabContent[i].classList.add('active');
    });

}

$(tabWindow());



