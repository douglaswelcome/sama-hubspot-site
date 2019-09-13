$(function() {
  var subState = true; //toggles the menu state


  function moveMenu() {
    if (subState == true) {
      $('.desktop-header').addClass('submenu-open');
      $('.header-cta .hubby-cta').removeClass('secondary');
      $('.submenu').addClass('visible');
    } else {
      $('.desktop-header').removeClass('submenu-open');
      $('.header-cta .hubby-cta').addClass('secondary');
      $('.submenu').removeClass('visible');
    }
  }

  $('.desktop-header .menu, section.submenu .submenu-content').mouseenter(
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
      $('menu.desktop-menu li.open').removeClass('open');
    }
  );



  //shows which portions of the menu are active

  $('.desktop-header .menu menu.desktop-menu li').mouseover(function() {
    var t = $(this).index();
    $('.desktop-header .menu menu.desktop-menu li.open').removeClass('open');
    $('.desktop-header .menu menu.desktop-menu li:eq(' + t + ')').addClass('open');
    $('section.submenu .submenu-content .submenu-item.visible').removeClass('visible');
    $('section.submenu .submenu-content .submenu-item:eq(' + t + ')').addClass('visible');
  });



  

});



