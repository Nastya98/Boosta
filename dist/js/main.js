$(document).ready(function() { 
               
  var slides = $(".carousel .slider").children(".slide"); 
  var width = $(".carousel .slider").width(); 
  var i = slides.length; 
  var offset = i * width; 
  var cheki = i-1;
  
  $(".carousel .slider").css('width',offset); 
  
  for (j=0; j < slides.length; j++) {
    if (j==0) {
      $(".carousel .sliderDots").append("<div class='dot activeDot'></div>");
    }
    else {
      $(".carousel .sliderDots").append("<div class='dot'></div>");
    }
  }
  
  var dots = $(".carousel .sliderDots").children(".dot");
  offset = 0; 
  i = 0; 
  
  $('.carousel .sliderDots .dot').click(function(){
    $(".carousel .sliderDots .activeDot").removeClass("active");                 
    $(this).addClass("activeDot");
    i = $(this).index();
    offset = i * width;
    $(".carousel .slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 
  });
  
  
  $("body .carousel .next").click(function(){ 
    if (offset < width * cheki) { 
      offset += width; 
      $(".carousel .slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 
      $(".carousel .sliderDots .activeDot").removeClass("activeDot"); 
      $(dots[++i]).addClass("activeDot");
    }
  });


  $("body .carousel .prev").click(function(){ 
    if (offset > 0) { 
      offset -= width; 
      $(".carousel .slider").css("transform","translate3d(-"+offset+"px, 0px, 0px)"); 
      $(".carousel .sliderDots .activeDot").removeClass("activeDot"); 
      $(dots[--i]).addClass("activeDot");
    }
  });

});