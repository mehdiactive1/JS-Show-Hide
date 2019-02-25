
$(".hs-j1").click(function(){
  $(".hs-j2").hide();
  $(".hs-j3").hide();
});
$(".hs-j2").click(function(){
  $(".hs-j1").hide();
  $(".hs-j3").hide();
});
$(".hs-j3").click(function(){
  $(".hs-j2").hide();
  $(".hs-j1").hide();
});