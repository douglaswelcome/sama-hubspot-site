if(document.querySelector('.side-tabs')){
    
    window.addEventListener('DOMContentLoaded', () => {
        const headerHeight = document.querySelector('.side-tabs__header').getBoundingClientRect().height;
        const sideTabs = document.querySelector('.side-tabs').style;
        sideTabs.setProperty('--headerHeight', headerHeight+"px");


        let observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: [0.66, 1.0]
        };
        const tabObserver = new IntersectionObserver(intersectionCallback, observerOptions);
        
        function intersectionCallback(entries) {
            entries.forEach(function (entry) {
                const current = entry.target.getAttribute('data-at');
                //first tab gets triggered when sticky scroll is activated
                //other tabs when they're 1/2 in viewport
                const visibilityTrigger = (current == "1" ? 1.0 : 0.66);

                if(entry.intersectionRatio >= visibilityTrigger){
                    document.querySelector(`.side-tab__title a[href="#tab-${current}"]`).parentElement.classList.add('active');
                    document.querySelector('.side-tabs__media.active').classList.remove('active');
                    document.querySelector(`.side-tabs__media[data-at="${current}"]`).classList.add('active');

                    document.querySelector('.side-tab__content.active').classList.remove('active');
                    entry.target.classList.add('active');
                }
            });
        }
      
        document.querySelectorAll('.side-tab__content').forEach((tab) => {
            tabObserver.observe(tab);
        });

        //prevent header and nav overalapping at end of sticky
        let headerObserverOptions = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0
        };
        function headerObserverCallback(entries){
            entries.forEach(function (entry) {
                if(entry.intersectionRatio >= 1 && !document.querySelector(".side-tabs").classList.contains("side-tabs-pinned")){
                    document.querySelector(".side-tabs").classList.add("side-tabs-pinned");
                }else{
                    document.querySelector(".side-tabs").classList.remove("side-tabs-pinned");
                }
            });
        }
        const headerObserver = new IntersectionObserver(headerObserverCallback, headerObserverOptions);
        headerObserver.observe(document.querySelector(".side-tabs__nav"));
    });



    document.querySelectorAll('.side-tab__title a').forEach(function (title) {
        title.addEventListener('click', e => {
            e.preventDefault();
            const id = e.target.getAttribute('href').substring(1);
            const parent = e.target.parentElement;

            parent.classList.add('active');
            document.querySelector(`.side-tab__content[id="${id}"]`).scrollIntoView({behavior: "smooth", block: "center"});
        });
    });
}