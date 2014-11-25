$(function(){
  var $elems = $('#j-main-wrap .j-hr-wrap > div');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  
  $('.hr-logo, .con1-title, .hr-download').addClass('animated');

  $('.j-hr-wrap2').waypoint(function(){
    $('.con2-products, .con2-shopping-cart, .j-hr-wrap2 .common-hand').addClass('animated');
  });

  $('.j-hr-wrap3').waypoint(function(){
    $('.con3-gift, .j-hr-wrap3 .common-hand').addClass('animated');
  });

  $('.j-hr-wrap4').waypoint(function(){
    $('.con4-dianbingxiang, .con4-car, .con4-round, .j-hr-wrap4 .common-hand').addClass('animated');
  });

  $('.j-hr-wrap5').waypoint(function(){
    $('.con5-dianbingxiang, .con5-money, .con5-gift, .con5-round, .j-hr-wrap5 .common-hand').addClass('animated');
  });

  $('.j-hr-wrap6').waypoint(function(){
    $('.con6-diandengpao, .con6-jiaoliu, .con6-shuju, .con6-wenhao, .j-hr-wrap6 .common-hand').addClass('animated');
  });

  $('.j-hr-wrap7').waypoint(function(){
    $('.con7-leftmobile, .con7-rightmobile, .j-hr-wrap7 .common-hand').addClass('animated');
  });

  $(window).bind('touchmove', function(){
    if(($(window).scrollTop()) > 0){
      $('#j-godown').fadeOut(1000);
    }else{
      $('#j-godown').fadeIn(1000);
    }
  })
  

});