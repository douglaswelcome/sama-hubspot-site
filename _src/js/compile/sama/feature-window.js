function featureWindow() {

    const featureSelector = document.querySelectorAll('.feature-window__selector');
    const windowContent = document.querySelectorAll('.feature-window__detail-wrapper');

    console.log(featureSelector);
    console.log(windowContent);
    
    // add the active to 
    $('.feature-window__selector').click(function () {
        var i = $(this).index()

        $('.feature-window__selector').removeClass('active');
        featureSelector[i].classList.add('active');

        
        $('.feature-window__detail-wrapper').removeClass('active');
        windowContent[i].classList.add('active');
    });


  



}

$(featureWindow());


