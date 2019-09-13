// $(document).ready(function() {
//
//
//   $('.brag-scroller').endless({
//     direction: 'horizontal',
//     scrollbar: 'disable'
//   });
//
//   container.mousewheel(function(e) {
//     container.scrollLeft(container.scrollLeft() - e.deltaY * multiplier);
//     e.preventDefault();
//   });
//
//   var timeout;
//
//   function loop_next() {
//     timeout = window.setTimeout(function() {
//       container.scrollLeft(container.scrollLeft() + 2);
//       loop_next();
//     }, 20);
//   }
//
//   function loop_prev() {
//     timeout = window.setTimeout(function() {
//       container.scrollLeft(container.scrollLeft() - 2);
//       loop_prev();
//     }, 20);
//   }
//
//   function stop() {
//     window.clearTimeout(timeout);
//   }
//
//   $(".left-arr").hover(loop_prev, stop);
//   $(".right-arr").hover(loop_next, stop);
// });