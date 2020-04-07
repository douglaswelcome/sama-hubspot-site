$(function() {
  var subState = true; //toggles the menu state


  function moveMenu() {
    if (subState == true) {
      $('.header-desktop-wrapper').addClass('submenu-open');
      $('.header-cta .hubby-cta').removeClass('secondary');
    
      $('body').addClass('scroll-lock');
    } else {
      $('.header-desktop-wrapper').removeClass('submenu-open');
      $('.header-cta .hubby-cta').addClass('secondary');
      $('body').removeClass('scroll-lock');
    }
  }

  $('.desktop-header .desktop-menu, section.submenu .submenu-content').mouseenter(
    function() {
      subState = true;
      moveMenu();
    }
  );

  $('.desktop-header, section.submenu .submenu-content').mouseleave(
    function() {
      subState = false;
      moveMenu();

    }
  );

  $('.header-desktop-wrapper').mouseleave(
    function() {
      $('.desktop-menu li.open').removeClass('open');
    }
  );



  //shows which portions of the menu are active

  $('.desktop-header menu.desktop-menu li').mouseover(function() {
    var t = $(this).attr('id');
    var sub = t + '-sub';

    console.log(t);
    console.log(sub);
    $('.desktop-header menu.desktop-menu li.open').removeClass('open');
    $('#' + t).addClass('open');
    $('section.submenu .submenu-content .submenu-item.visible').removeClass('visible');
    $('#' + sub).addClass('visible');
  });



  

});



