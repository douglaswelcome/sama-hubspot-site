window.addEventListener('scroll', function(e) {
  var scrolled = window.pageYOffset;

  var background = document.querySelector('.pattern');
  background.style.transform = 'translateY(' + (scrolled * .2) + 'px' + ')';
});