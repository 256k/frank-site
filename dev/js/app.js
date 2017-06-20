$(document).ready(function(){
 var navbarPosition = 0; 
 var isFixed = false;

 
 
$(window).on('scroll', function(navbarPosition){
  navbarPosition = ($(".js-navbar-marker").offset().top - $(window).scrollTop());
  
  if (navbarPosition < 0 && !isFixed){
    isFixed = true;
    $(".navbar-wrapper").addClass("js-fixedPos");
    $('.scrolled-title').css({height: '50px'});
  } 
  if (navbarPosition > 0 && navbarPosition) {
      isFixed = false;
      $(".navbar-wrapper").removeClass("js-fixedPos");
      $('.scrolled-title').css({height: '0'});
      
    }
  
 
});

});



// waypoints:

