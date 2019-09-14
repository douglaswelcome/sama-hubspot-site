$(window).on("resize", function() {

  $('.strip-block').each(function() {
    var h = $(this).find('.strip-img').height();
    console.log(h);
    $(this).find('.strip-img img').height(h + 100);
  })
}).resize();