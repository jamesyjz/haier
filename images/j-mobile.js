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

  $(window).scrollTop(0);
  var nowPage =0;
  var maxPage = 6;
  var isFirst = true;
  var isScroll = false;
  var hammertime = new Hammer($('.j-main-wrap')[0]);
  hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
  hammertime.on('swipe', function(ev) {
    //if(isScroll) return false;
    var dir = ev.direction;
    if(dir == 8){
      switch (nowPage){
        case 0 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap2').offset().top
          }, 500, function(){
            $('#j-godown').fadeOut(500);
          });
          nowPage++;
          break;

        case 1 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap3').offset().top
          }, 500, function(){
            
          });
          nowPage++;
          break;

        case 2 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap4').offset().top
          }, 500, function(){
            
          });
          nowPage++;
          break;

        case 3 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap5').offset().top
          }, 500, function(){
            
          });
          nowPage++;
          break;

        case 4 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap6').offset().top
          }, 500, function(){
            
          });
          nowPage++;
          break;

        case 5 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap7').offset().top
          }, 500, function(){
            
          });
          nowPage++;
          break;
      }
    }else{
      switch (nowPage){
        case 6 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap6').offset().top
          }, 500, function(){
           
          });
          nowPage--;
          break;

        case 5 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap5').offset().top
          }, 500, function(){
           
          });
          nowPage--;
          break;
        case 4 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap4').offset().top
          }, 500, function(){
           
          });
          nowPage--;
          break;
        case 3 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap3').offset().top
          }, 500, function(){
           
          });
          nowPage--;
          break;
        case 2 : 
          $('html, body').animate({
            'scrollTop' : $('.j-hr-wrap2').offset().top
          }, 500, function(){
           
          });
          nowPage--;
          break;
        case 1 : 
          $('html, body').animate({
            'scrollTop' : 0
          }, 500, function(){
           
          });
          nowPage--;
          break;
      }
    }
    
  });

  
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



  //GA
  $('#j-main-wrap .btn-dld').bind('click', function(){
    _smq.push(['custom','海尔生活家APP推广','Haier-立即下载button']);
  });

  $('#j-godown').bind('click', function(){
    $('html, body').animate({
      'scrollTop' : $('.j-hr-wrap2').offset().top
    }, 500, function(){
      $('#j-godown').fadeOut(500);
    });
    nowPage = 1;
    _smq.push(['custom','海尔生活家APP推广','Haier-进入下一页箭头']);
  })


});