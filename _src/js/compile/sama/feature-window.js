function featureWindow(){
    const featureSelectors = document.querySelectorAll('.feature-window__selector');
    const featureDetails = document.querySelectorAll('.feature-window__detail-wrapper');
    const lottieAnimation = (lottie.getRegisteredAnimations().length > 0 ? true : false);
    let activeFeature = 0;

    const handleFeatureChange = function(i) {
        
        featureSelectors[activeFeature].classList.remove('active');
        featureDetails[activeFeature].classList.remove('active');

        featureSelectors[i].classList.add('active');
        featureDetails[i].classList.add('active');

        if(lottieAnimation){
            lottie.getRegisteredAnimations()[i].play();
            lottie.getRegisteredAnimations()[activeFeature].pause();
        }

        activeFeature = i;
    }

    featureSelectors.forEach(function (featureSelector, i) {

        if(featureSelector.classList.contains('active') && activeFeature !== i){
            activeFeature = i;
        }

        featureSelector.addEventListener('click', function () {
            handleFeatureChange(i);
        });
    });

    //handle lottie loading
    if(lottieAnimation){
        function firstAnimationPlay(){
            const moduleTop = document.querySelector('.feature-window__detail-wrapper.active .feature-window__img');

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
                window.removeEventListener('scroll', handleAnimationStart, false);
            });
            
            window.addEventListener('DOMContentLoaded', handleAnimationStart, false);
            window.addEventListener('scroll', handleAnimationStart, false);
        }
        
        firstAnimationPlay();
    }
}

if(document.querySelector('.feature-window')){
    featureWindow();
}