/*
-----------------
Function Library
-----------------
*/
/*
----------
Nav opener
----------
*/
let navOpener = function(){
    $(".ham").click(function(){
        $('.nav-wrapper').toggleClass('active')
    })
}
/*
----------
Scroll Top
----------
*/
let scrollTop = function(){

    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

        } else {
        $(scrollTop).css("opacity", "0");
        }
    }); 

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        }, 800);
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
            'max-width': 'auto',
            'overflow': 'auto',
        })
    })

}
/*
--------
Switcher
--------
*/
let switcher = function(){
    $('.switcher').click(function(){
        console.log($(this).attr('tab'))
        $($(this).attr('tab')).addClass('active');
        $($(this).attr('tab')).siblings().removeClass('active');
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
    })
}

/*
--------------------
Custom upload files
--------------------
*/
let customUpload = function(){

    //找到自訂上傳區，新增js名稱
    $(".custom_upload").addClass('js');

    //定義input, 按鈕, 檔名顯示區
    var fileInput  = $(".input-file"),  
        button     = $(".input-file-trigger"),
        the_return = $(".file-return");
    
    //上傳按鈕
    // $(".input-file-trigger").keydown(function(e){
    //     if ( e.keyCode == 13 || e.keyCode == 32 ) {  
    //         $(this).siblings(".input-file").active();  
    //     }
    // })
    // button.addEventListener( "keydown", function( event ) {  
    //     if ( event.keyCode == 13 || event.keyCode == 32 ) {  
    //         fileInput.focus();  
    //     }  
    // });

    //上傳按鈕
    // $(".input-file-trigger").click(function(event){
    //     $(this).siblings(".input-file").active();
    //     return false;
    // })
    // button.addEventListener( "click", function( event ) {
    //     fileInput.focus();
    //     return false;
    // });  

    //檔名顯示區
    $(".input-file").change(function(event){
        console.log($(this).val())
        $(this).parents('.input-file-container').siblings('.file-return').html($(this).val())
    })
    // fileInput.addEventListener( "change", function( event ) {  
    //     the_return.innerHTML = this.value;  
    // });

}