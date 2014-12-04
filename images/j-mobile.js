$(function(){
  var $elems = $('#j-main-wrap > section');
  var winheight = $(window).height();
  var fullheight = $(document).height();
  var IPHONEURL = "https://itunes.apple.com/cn/app/yi-xin-mian-fei-liao-tian/id683688634?mt=8";
  var ANDROIDURL = "http://www.haier.com/bigfiles/directory/cn/downloadCenter/20141129/bf556433132.apk";
  var UA = navigator.userAgent.toLowerCase();

  if(UA.indexOf('iphone') != -1) {
    $('#j-main-wrap .btn-dld').attr('href', IPHONEURL);
  }else{
    $('#j-main-wrap .btn-dld').attr('href', ANDROIDURL);
  }


  $('.hr-logo, .con1-title, .hr-download').addClass('animated');

  var mySwiper = new Swiper('.swiper-container',{
    //Your options here:
    mode:'vertical',
    //etc..
    onSlideChangeStart : function(index) {
      //Do something when you touch the slide
      if($('.j-hr-wrap1').hasClass('swiper-slide-visible')){
        $('#j-godown').fadeIn(1000);
      }else{
        $('#j-godown').fadeOut(1000);
      }
      if($('.j-hr-wrap2').hasClass('swiper-slide-visible')){
        $('.con2-products, .con2-shopping-cart, .j-hr-wrap2 .common-hand').addClass('animated');
      }
      if($('.j-hr-wrap3').hasClass('swiper-slide-visible')){
        $('.con3-gift, .j-hr-wrap3 .common-hand').addClass('animated');
      }
      if($('.j-hr-wrap4').hasClass('swiper-slide-visible')){
        $('.con4-dianbingxiang, .con4-car, .con4-round, .j-hr-wrap4 .common-hand').addClass('animated');
      }
      if($('.j-hr-wrap5').hasClass('swiper-slide-visible')){
        $('.con5-dianbingxiang, .con5-money, .con5-gift, .con5-round, .j-hr-wrap5 .common-hand').addClass('animated');
      }
      if($('.j-hr-wrap6').hasClass('swiper-slide-visible')){
        $('.con6-diandengpao, .con6-jiaoliu, .con6-shuju, .con6-wenhao, .j-hr-wrap6 .common-hand').addClass('animated');
      }
      if($('.j-hr-wrap7').hasClass('swiper-slide-visible')){
        $('.con7-leftmobile, .con7-rightmobile, .j-hr-wrap7 .common-hand').addClass('animated');
      }
    }
  });

  $('#j-godown').bind('click', function(){
    mySwiper.swipeNext();
    _smq.push(['custom','海尔生活家APP推广','Haier-进入下一页箭头']);
  })

  //GA 
  $('#j-main-wrap .btn-dld').bind('click', function(){
    if(UA.indexOf('android') != -1 && UA.indexOf('micromessenger') != -1) {
      $('#j-mask').show();
    }
    _smq.push(['custom','海尔生活家APP推广','Haier-立即下载button']);
  });


});