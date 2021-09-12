/*
-----------------
Function Library
-----------------
*/
/*
----------
Scroll Top
----------
*/
let scrollTop = function(){
    if (topPos > 100) {
        $(scrollTop).css("opacity", "1");
        $('.nav-inner-btn-wrap').css({
            "position": "fixed",
            "top": "0",
            "z-index": "100",
        })
    } 
    var scrollTop = $(".scrollTop");
    var topPos = $(window).scrollTop();
    $(window).scroll(function() {
      console.log(topPos);
        var topPos = $(window).scrollTop();
        
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
            $('.nav-inner-btn-wrap').css({
                "position": "fixed",
                "top": "0",
                "z-index": "100",
            })
        } 
        
        else {
            $(scrollTop).css("opacity", "0");
            $('.nav-inner-btn-wrap').css({
                "position": "absolute",
                "top": "100%",
                "z-index": "1",
            })
        }
    }); 

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
        $(scrollTop).css("opacity", "0");
        return false;
    }); 

}
/*
------------
Modal Opener
------------
*/
let modalFunction = function(){

    $('.modal-opener').click(function(){
        let tt = $(this).attr('tt-to');
        console.log(tt)
        $('.' + tt).show();
        $('body').css({
            'max-height': '100vh',
            'max-width': '100vw',
            'overflow': 'hidden',
        })
    })

    $('.modal-closer').click(function(){
        $(this).parents('.modal').hide();
        $('body').css({
            'max-height': 'auto',
            'max-width': '100vw',
            'overflow-x': 'hidden',
            'overflow-y': 'auto',
        })
        $('.scrollTop').css('opacity', '1');
    })

}
/*
-----------------
Anchor, ScrollSpy
-----------------
*/
let scrollSpy = function(){

    var link = $('.anchor');
    
    // 點選想去的目標並且前往
    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: target.offset().top - 150
        }, 600);
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
        e.preventDefault();
      });
    
    // 滾動時判定 Active 狀態，呼叫 Function
    $(window).on('scroll', function(){
      scrNav();
    });
    
    // 選單按鈕顯示 Active 狀態，並且自動判定
    function scrNav() {
      var sTop = $(window).scrollTop();
      $('section').each(function() {
        var id = $(this).attr('id'),
            offset = $(this).offset().top - 155,
            height = $(this).height();
        if(sTop >= offset && sTop < offset + height) {
          link.removeClass('active');
          $('.scrollspy').find('[data-scroll="' + id + '"]').addClass('active');
        }
      });
    }

    //呼叫 Function
    scrNav();

}
scrollSpy();
/*
--------
Switcher
--------
*/
let switcher = function(){
    if (window.location.href.indexOf("#A") > -1) {
        $('#tabA').addClass('active');
        $('#tabA').siblings().removeClass('active');
        $('.tabA').addClass('active');
        $('.tabA').siblings().removeClass('active');
      }
      if (window.location.href.indexOf("#B") > -1) {
        $('#tabB').addClass('active');
        $('#tabB').siblings().removeClass('active');
        $('.tabB').addClass('active');
        $('.tabB').siblings().removeClass('active');
      }
      if (window.location.href.indexOf("#C") > -1) {
        $('#tabC').addClass('active');
        $('#tabC').siblings().removeClass('active');
        $('.tabC').addClass('active');
        $('.tabC').siblings().removeClass('active');
      }
      if (window.location.href.indexOf("#D") > -1) {
        $('#tabD').addClass('active');
        $('#tabD').siblings().removeClass('active');
        $('.tabD').addClass('active');
        $('.tabD').siblings().removeClass('active');
      }
    $('.switcher').click(function(){
        console.log($(this).attr('tab'))
        $($(this).attr('tab')).addClass('active');
        $($(this).attr('tab')).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
}