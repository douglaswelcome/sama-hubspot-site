window.addEventListener('scroll', function(e) {
  var scrolled = window.pageYOffset;

  const background = document.querySelector('.pattern');
  background.style.transform = 'translateY(' + (scrolled * .2) + 'px' + ')';
});