$(function(){
  var $elems = $('#j-main-wrap > section');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  var IPHONEURL = "https://itunes.apple.com/cn/app/yi-xin-mian-fei-liao-tian/id683688634?mt=8";
  var ANDROIDURL = "http://yixin.dl.126.net/update/installer/yixin.apk";
  var UA = navigator.userAgent.toLowerCase();

  if(UA.indexOf('iphone') != -1) {
    $('#j-main-wrap .btn-dld').attr('href', IPHONEURL);
  }else{
    $('#j-main-wrap .btn-dld').attr('href', ANDROIDURL);
  }

  if(UA.indexOf('iphone') != -1 && UA.indexOf('micromessenger') != -1 || UA.indexOf('android') != -1 && UA.indexOf('micromessenger') != -1) {
    $('#j-mask').show();
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



  //GA
  $('#j-main-wrap .btn-dld').bind('click', function(){
    _smq.push(['custom','海尔生活家APP推广','Haier-立即下载button']);
  });

  $('#j-godown').bind('click', function(){
    _smq.push(['custom','海尔生活家APP推广','Haier-进入下一页箭头']);
  })


});