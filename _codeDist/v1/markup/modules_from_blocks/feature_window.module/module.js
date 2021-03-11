//handle lottie loading
if(lottie.getRegisteredAnimations().length > 0){
    
    const moduleTop = document.querySelector('.feature-window__img');

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        //return true if element is 50% visible
        return (
            rect.top + (rect.height/2) > 0 && // top
            rect.left + (rect.width/2) > 0 && // left
            rect.top + (rect.height/2) < (window.innerHeight || document.documentElement.clientHeight) && // bottom
            rect.left + (rect.width/2) < (window.innerWidth || document.documentElement.clientWidth) // right
        );
    }

    function onVisibilityChange(el, callback) {
        return function () {
            const visible = isElementInViewport(el);
            if (visible) {
                callback();
            }
        }
    }
    
    const  handleAnimationStart = onVisibilityChange(moduleTop, function() {
        lottie.getRegisteredAnimations()[0].play();
    });
    
    window.addEventListener('scroll', handleAnimationStart, false);

}
