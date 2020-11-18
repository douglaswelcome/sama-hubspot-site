function tabWindow() {

    if ($(".tabs__tab")[0]) {

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

            if ($('.tab-window__feature').length > 0) {
                $('.tab-window__feature').removeClass('active');
                tabContent[i].classList.add('active');
            }

            const width = tabSelector[i].getBoundingClientRect().width;
            const left = tabSelector[i].offsetLeft;


            underline.style.width = `${width}px`;
            underline.style.left = `${left}px`;



        });
    }

}

function resizeActiveLine() {
    if ($(".tabs__tab")[0]) {
        const underline = document.querySelector('.tabs__tab-underline');
        const active = document.querySelector('.tabs__tab.active');

        const left = active.offsetLeft;
        const initWidth = active.getBoundingClientRect().width;

        underline.style.width = `${initWidth}px`;
        underline.style.left = `${left}px`;

    }



}

$(tabWindow());

$( window ).resize(resizeActiveLine);