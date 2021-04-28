if(document.querySelector('.side-tabs')){
    
    window.addEventListener('DOMContentLoaded', () => {
        let observerOptions = {
            root: null,
            rootMargin: "0px",
            threshold: [0.0, 0.75]
          };

        const tabObserver = new IntersectionObserver(intersectionCallback, observerOptions);
        
        function intersectionCallback(entries) {
            entries.forEach(function (entry) {
                const id = entry.target.getAttribute('id');
                if (entry.intersectionRatio >= 0.75) {
                    document.querySelector(`.side-tab__title a[href="#${id}"]`).parentElement.classList.add('active');
                    entry.target.classList.add('active');
                } else {
                    document.querySelector(`.side-tab__title a[href="#${id}"]`).parentElement.classList.remove('active');
                    entry.target.classList.remove('active');
                }
            });
        }
      
        // Track all sections that have an `id` applied
        document.querySelectorAll('.side-tab__content[id]').forEach((tab) => {
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