function socialScroll() {
  $("html,body").animate({
      scrollTop: $("#sociallinks").offset().top
    },
    "slow");
}

$(document).ready(function(){
  if(window.location.href.indexOf("toplink3") > -1){
      socialScroll();
  }
});

$(function () {
 $("#toplink3").click(function() {
  socialScroll();
 });
});
