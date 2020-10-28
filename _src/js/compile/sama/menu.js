// $(function() {
//   var subState = true; //toggles the menu state


//   function moveMenu() {
//     if (subState == true) {
//       $('.desktop-header').addClass('desktop-header--submenu-open');
    
//       $('body').addClass('scroll-lock');

//     } else {
//       $('.desktop-header').removeClass('desktop-header--submenu-open');
//       $('body').removeClass('scroll-lock');
//     }
//   }

//   $('.desktop-header .desktop-header__nav, desktop-submenu__content').mouseenter(
//     function() {
//       subState = true;
//       // moveMenu();
//       console.log(subState);
//     }
//   );

//   $('.desktop-header .desktop-header__nav, desktop-submenu__content').mouseleave(
//     function() {
//       subState = false;
//       // moveMenu();
//       console.log(subState);

//     }
//   );

//   // $('.header-desktop-wrapper').mouseleave(
//   //   function() {
//   //     $('.desktop-menu li.open').removeClass('open');
//   //   }
//   // );



//   //shows which portions of the menu are active

//   $('.desktop-header menu.desktop-menu li').mouseover(function() {
//     var t = $(this).attr('id');
//     var sub = t + '-sub';

//     console.log(t);
//     console.log(sub);
//     $('.desktop-header menu.desktop-menu li.open').removeClass('open');
//     $('#' + t).addClass('open');
//     $('section.submenu .submenu-content .submenu-item.visible').removeClass('visible');
//     $('#' + sub).addClass('visible');
//   });



  

// });



