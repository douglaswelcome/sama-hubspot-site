if(document.querySelector('.bodymove_splitimgtxt_maxsix')){
	window.onload = function(){ 
		const carouselContent = document.querySelector('.bodymove_splitimgtxt_maxsix_carousel_slides');
		const items = document.querySelectorAll('.bodymove_splitimgtxt_maxsix_carousel_slide');
		
		/**
		* toggleReverse change class of .carousel-content element
		* @param check {bool} compare if .carousel-content element contains .carousel-reverse
		* @param action {string} [add, remove]
		*/
		const toggleReverse = function(check, action){
			if(carouselContent.classList.contains('carousel-reverse') == check){
				carouselContent.classList[action]('carousel-reverse');
			} 
		};
		/**
		* toggleAnimate add or remove .carousel-animate to .carousel-content element
		*/
		const toggleAnimate = function(){
			carouselContent.classList.toggle('carousel-animate');
		};
		
		/**
		* setOrder change dynamically the order of all .carousel-item elements
		*/
		const setOrder = function(direction){
			if(direction === 'left'){
				direction = 1;
			} else if(direction === "right"){
				direction = -1;
			}
		
			for(var i = 0, c = items.length; i < c ; i++){
				if(items[i].style.order){
					var newValue = (parseInt(items[i].style.order, 10) + direction) % c;
					items[i].style.order = newValue ? newValue : c;
					if(newValue == 1){
						document.querySelector('.bodymove_splitimgtxt_maxsix_top_nav_item.active').classList.remove('active');
						document.querySelector('.bodymove_splitimgtxt_maxsix_top_nav_item[data-at="'+i+'"]').classList.add('active');
					}
				} else {
					items[i].style.order = i+1;
				}
			}
		};
	
		// initiliaze
		setOrder();
	
		const onRightClick = function(evt){
			toggleReverse(true, "remove");
			toggleAnimate();
			setOrder('right');
			setTimeout(toggleAnimate, 50);      
		};

		const onLeftClick = function(evt){
			toggleReverse(false, "add");
			toggleAnimate();
			setOrder('left');
			setTimeout(toggleAnimate, 50);      
		};

		const toggleSlide = function(slide){
			let itemsArray = Array.prototype.slice.call(items, 0);
			let nextSlide = itemsArray.splice(parseInt(slide), items.length); 
			let slideOrder = 1;
			nextSlide.slice().reverse().forEach(function (slide) {
				itemsArray.unshift(slide);
			});
			
			for(var i = 0, c = items.length; i < c ; i++){
				itemsArray[i].style.order = slideOrder;
				slideOrder++;
			}

			document.querySelector('.bodymove_splitimgtxt_maxsix_top_nav_item.active').classList.remove('active');
			document.querySelector('.bodymove_splitimgtxt_maxsix_top_nav_item[data-at="'+slide+'"]').classList.add('active');
		}

		document.querySelector('.bodymove_splitimgtxt_maxsix_carousel_nav-left').addEventListener('click', onLeftClick, false);  
		document.querySelector('.bodymove_splitimgtxt_maxsix_carousel_nav-right').addEventListener('click', onRightClick, false);  

		document.querySelectorAll('.bodymove_splitimgtxt_maxsix_top_nav_item').forEach(function (item) {
			item.addEventListener('click', e => {
				const slide = e.target.getAttribute('data-at');
				toggleSlide(slide);
			});
		});

		if(document.querySelector('.btn_carousel_slider')){
			document.querySelectorAll('.btn_carousel_slider').forEach(function (btn) {
				btn.addEventListener('click', e => {
					e.preventDefault();
					//smooth scroll
					document.querySelector('.bodymove_splitimgtxt_maxsix').parentElement.scrollIntoView({
						behavior: 'smooth'
					});
					//get slide # using regex
					for (var i=0, l = btn.classList.length; i<l; ++i) {
						if(/btn_carousel_slide-.*/.test(btn.classList[i])) {
							let slide = btn.classList[i].split('-')[1];
							toggleSlide(slide);
							break;
						}
					}
				})
			})
		}
	};
}