var slider_content
document.addEventListener("DOMContentLoaded", function(){
   slider_content =  document.getElementById('box');
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// script for auto slider
setInterval(nextImage , 6000)var image = ['/rules', '/balthazar', '/chenmapo', '/platillo-voladores', '/100hours'];

var i = image.length;
//function for next slide
function nextImage(){
  if (i>image.length) {
    i= i+1;
      }else{
        i = 1;
      }
      slider_content.innerHTML = `<img src="${image[i-1]}.jpg">`;
}

function prewImage(){
  if (i<image.length) {
  i= i-1;
    }else{
      i = image.length ;
    }
    slider_content.innerHTML = `<img src="${image[i-1]}.jpg">`;

}

// script for auto slider
setInterval(nextImage , 6000)
