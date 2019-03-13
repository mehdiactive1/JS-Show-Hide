$(document).ready(function(){
  $(".hs-j2,.hs-j3").hide();
});

/*
$(".bullet1").click(function(){
  $(".hs-j1").show();
  $(".hs-j2").hide();
  $(".hs-j3").hide();
});
$(".bullet2").click(function(){
  $(".hs-j2").show();
  $(".hs-j3").hide();
  $(".hs-j1").hide();
});
$(".bullet3").click(function(){
  $(".hs-j3").show();
  $(".hs-j2").hide();
  $(".hs-j1").hide();
});*/

//Slideshow (show,hide)
$(function(){
        $('.bullets').click(function(){
              $('.hide-js').hide();
              $('#div'+ $(this).attr('target')).show();
        });
});

//Fadeeffect
$(".bullets").click(function(){
  $(".hide-js").fadeIn();
});

//Mousemove Effect
$(document).ready(function(){
  $('.hs-j1').mousemove(function(e){
        var x = e.pageX - this.offsetLeft - 300;
        var y = e.pageY - this.offsetTop - 300;
        $('.hugetext').css({'top': x,'left': y}); 
  });
});

//Append
$(function(){

$('.hs-j3').one("click", function(){
  $(this).prepend("<div class='appendtext'><b>Appended text</b></div>");
   });	
})

