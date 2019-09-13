function openWindow(evt, stuff, vid) {
  document.getElementById(vid).currentTime = 0;
  
  // Declare all variables
  var i, tabcontent, tablinks, vidlinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("stuff");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("clicker");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }

  vidlinks = document.getElementsByClassName("vid");
  for (i = 0; i < vidlinks.length; i++) {
    vidlinks[i].className = vidlinks[i].className.replace("active", "");
  }

  

  //change the button
  evt.currentTarget.className += " active";

  //change the video content
  document.getElementById(vid).classList.add("active");

  //set the new height for the container

  document.getElementById(stuff).classList.add("active");

  setTimeout(function() {
    resizeSC(stuff)}, 500);

  //transition the content of the box





}


$(window).resize(function() {
  
  var dogmeat = $('.stuff.active').attr('id');
  console.log(dogmeat);
  resizeSC(dogmeat);
});




//function to resize the stuff-container
function resizeSC(stuff) {
  const stuffHeight = document.getElementById(stuff).clientHeight;

  const stuffContainer = document.getElementsByClassName('stuff-container')[0];

  console.log(stuffHeight + 'px');
  stuffContainer.style.height = stuffHeight + 'px';

}

var pigmeat = $('.stuff.active').attr('id');
console.log(pigmeat);
resizeSC(pigmeat);

