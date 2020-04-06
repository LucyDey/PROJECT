var image = ['a', 'b', 'c', 'd', 'e'];

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
