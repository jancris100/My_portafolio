window.onscroll = function() {
  var header = document.querySelector("#header");
  var scrollY = window.scrollY;

  if (scrollY > 100) {
    header.style.opacity = 0.5;
  } else {
    header.style.opacity = 1;
  }
};