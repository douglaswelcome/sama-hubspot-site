function tabWindow() {

    const tabSelector = document.querySelectorAll('.tabs__tab');
    const tabContent = document.querySelectorAll('.tab-window__feature');
    const underline = document.querySelector('.tabs__tab-underline');
    const initWidth = tabSelector[0].getBoundingClientRect().width;

    underline.style.width = `${initWidth}px`;
    underline.style.left = `0px`;

    
    //add the active to 
    $('.tabs__tab').click(function () {
        var i = $(this).index();

        $('.tabs__tab').removeClass('active');
        tabSelector[i].classList.add('active');

        
        // $('.tab-window__feature').removeClass('active');
        // tabContent[i].classList.add('active');

        const width = tabSelector[i].getBoundingClientRect().width;
        // const height = this.getBoundingClientRect().height;
        const left = tabSelector[i].offsetLeft;
        // const top = this.getBoundingClientRect().top;


        console.log (left);
       
        underline.style.width = `${width}px`;
        // target.style.height = `${height}px`;
        underline.style.left = `${left}px`;
        // target.style.top = `${top}px`;
        // target.style.transform = "none";


    });

}

$(tabWindow());



