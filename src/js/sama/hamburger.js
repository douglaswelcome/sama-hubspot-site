// Look for .hamburger
var hamburger = document.querySelector('.hamburger');
var mobileSubMenu = document.querySelector('.mobile-submenu');
var body = document.querySelector('body');
var html = document.querySelector('html');
// On click
hamburger.addEventListener('click', function() {
  // Toggle class "is-active"
  hamburger.classList.toggle('is-active');
  mobileSubMenu.classList.toggle('is-active');
  body.classList.toggle('burger-time');
  html.classList.toggle('burger-time');
  // hmm lolzin
  //
});
//
$(window).resize(function() {


  if ($(window).width() > 1080) {
    $('.hamburger').removeClass('is-active');
    $('.mobile-submenu').removeClass('is-active');
    $('body').removeClass('burger-time');
  }

  // if (window.width() > 800 px) {


  // hamburger.removeClass('is-active');
  // mobileSubMenu.removeClass('is-active')
});