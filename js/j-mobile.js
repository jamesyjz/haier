$(function(){
  var $elems = $('#j-main-wrap > section');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  var IPHONEURL = "https://baidu.com";
  var ANDROIDURL = "http://google.com";
  var UA = navigator.userAgent.toLowerCase();

  if(UA.indexOf('iphone') != -1) {
    $('#j-main-wrap .btn-dld').attr('href', IPHONEURL);
  }else{
    $('#j-main-wrap .btn-dld').attr('href', ANDROIDURL);
  }

  
  $('.hr-logo, .con1-title, .hr-download').addClass('animated');

  $('.j-hr-wrap2').waypoint(function(){
    $('.con2-products, .con2-shopping-cart, .j-hr-wrap2 .common-hand').addClass('animated');
  }, {offset: 150});

  $('.j-hr-wrap3').waypoint(function(){
    $('.con3-gift, .j-hr-wrap3 .common-hand').addClass('animated');
  }, {offset: 150});

  $('.j-hr-wrap4').waypoint(function(){
    $('.con4-dianbingxiang, .con4-car, .con4-round, .j-hr-wrap4 .common-hand').addClass('animated');
  }, {offset: 150});

  $('.j-hr-wrap5').waypoint(function(){
    $('.con5-dianbingxiang, .con5-money, .con5-gift, .con5-round, .j-hr-wrap5 .common-hand').addClass('animated');
  }, {offset: 150});

  $('.j-hr-wrap6').waypoint(function(){
    $('.con6-diandengpao, .con6-jiaoliu, .con6-shuju, .con6-wenhao, .j-hr-wrap6 .common-hand').addClass('animated');
  }, {offset: 150});

  $('.j-hr-wrap7').waypoint(function(){
    $('.con7-leftmobile, .con7-rightmobile, .j-hr-wrap7 .common-hand').addClass('animated');
  }, {offset: 150});

  $(window).bind('touchmove', function(){
    if(($(window).scrollTop()) > 0){
      $('#j-godown').fadeOut(1000);
    }else{
      $('#j-godown').fadeIn(1000);
    }
  });

  // $(window).bind('scroll', function(){
  //   for(var i=0; i<$elems.length;i++) {
  //      if ($(window).scrollTop() > winheight * i + (winheight / 2) ){
  //         $elems.eq(i).children('.common-hand').fadeOut(1000);
  //      }  
  //   };
  // })
  

 // $("#j-main-wrap").onepage_scroll({
 //        sectionContainer: "section",
 //        loop: true
 //    });
  

});