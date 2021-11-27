$(function(){

$('.search-open').click(function(){
  $('.layer-search').css('left', '100%').animate({marginLeft: "-100%"}, 500);
});

$('.btn-searchClose').click(function(){
  $('.layer-search').css('left', '0').animate({marginLeft: "100%"}, 500);
});

});//End