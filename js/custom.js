/*
-----
Collapsible
-----
*/

let Collapsible = function(){
    let collapsibleOpener = $('.collapsible-opener');
    collapsibleOpener.click(function(){
        $('.collapsible-list' + $(this).attr('sw')).slideToggle();
    })
}
Collapsible();

/*
-----
SideNav Active
-----
*/

let sideNavActive = function(){
    var url = window.location.pathname.split( '/' );
    console.log(url);
    path = url[1];

    /* Get URL For Setting Active Nav List Item */
    $('.nav-item-wrapper').find('.nav-item').each(function(){
        var link = $(this).attr('href');

        if (link == path) {
            $(this).addClass('active');
            $(this).parent('.collapsible-list').show();
        }
    })

}
sideNavActive();

/*
-----------------
Anchor, ScrollSpy
-----------------
*/let scrollSpy = function(){

    var link = $('.anchor');
    
    // 點選想去的目標並且前往
    link.on('click', function(e) {
        var target = $($(this).attr('href'));
        $('html, body').animate({
          scrollTop: target.offset().top
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
            offset = $(this).offset().top-1,
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