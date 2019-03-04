
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

//slideshow (show,hide)
jQuery(function(){
        jQuery('.bullets').click(function(){
              jQuery('.hide-js').hide();
              jQuery('#div'+$(this).attr('target')).show();
        });
});

//fadeeffect
$(".bullets").click(function(){
  $(".hide-js").fadeIn();
});

//mousemove effect
$(document).ready(function(){
  $('.hs-j1').mousemove(function(e){
        var x = e.pageX - this.offsetLeft - 300;
        var y = e.pageY - this.offsetTop - 300;
        $('.hugetext').css({'top': x,'left': y}); 
  });
});