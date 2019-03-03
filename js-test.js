
$(document).ready(function(){
  $(".hs-j2,.hs-j3").hide();
});

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
});

$(document).ready(function(){
  $('.hs-j1').mousemove(function(e){
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        $('.hugetext').css({'top': x,'left': y}); 
  });
});