if(document.querySelector('.side-tabs')){
    
    window.addEventListener('DOMContentLoaded', () => {

        let observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: [0.5, 1.0]
          };

        const tabObserver = new IntersectionObserver(intersectionCallback, observerOptions);
        
        function intersectionCallback(entries) {
            entries.forEach(function (entry) {
                const id = entry.target.getAttribute('id');
                //first tab gets triggered when sticky scroll is activated
                //other tabs when they're 1/2 in viewport
                const visibilityTrigger = (id == "tab-1" ? 1.0 : 0.5);

                if(entry.intersectionRatio >= visibilityTrigger){
                    document.querySelector(`.side-tab__title a[href="#${id}"]`).parentElement.classList.add('active');
                    entry.target.classList.add('active');
                }
            });
        }
      
        // Track all sections that have an `id` applied
        document.querySelectorAll('.side-tab__content').forEach((tab) => {
            tabObserver.observe(tab);
        });
    });

    document.querySelectorAll('.side-tab__title a').forEach(function (title) {
        title.addEventListener('click', e => {
            e.preventDefault();

            const id = e.target.getAttribute('href').substring(1);
            const parent = e.target.parentElement;
            if(parent.classList.contains('active')) return;

            document.querySelector('.side-tab__title.active').classList.remove('active');
            parent.classList.add('active');

            document.querySelector(`.side-tab__content[id="${id}"]`).scrollIntoView({behavior: "smooth", block: "center"});
        });
    });
}