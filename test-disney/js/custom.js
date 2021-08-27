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

    var scrollTop = $(".scrollTop");
    var status = false;
    var topPos = $(this).scrollTop();
    if (topPos > 800) {
        numberCounter();
        status = true
    }

    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        
        if (topPos > 100) {
        $(scrollTop).css("opacity", "1");

        } 
        
        else {
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
----------
Count Down
----------
*/
let countDown = function(){
    // Specify the deadline date
    const deadlineDate = new Date('November 1, 2021 23:59:59').getTime();
    
    // Cache all countdown boxes into consts
    const countdownDays = document.querySelector('.countdown__days .number');
    const countdownHours= document.querySelector('.countdown__hours .number');
    const countdownMinutes= document.querySelector('.countdown__minutes .number');
    const countdownSeconds= document.querySelector('.countdown__seconds .number');
  
    // Update the count down every 1 second (1000 milliseconds)
    setInterval(() => {    
      // Get current date and time
      const currentDate = new Date().getTime();
  
      // Calculate the distance between current date and time and the deadline date and time
      const distance = deadlineDate - currentDate;
  
      // Calculations the data for remaining days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Insert the result data into individual countdown boxes
      countdownDays.innerHTML = days;
      countdownHours.innerHTML = hours;
      countdownMinutes.innerHTML = minutes;
      countdownSeconds.innerHTML = seconds;
    }, 1000);
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
-------------
Animate Counter
-------------
*/
let numberCounter = function(){
    $('.counter').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count').replace(/,/g, '');
      
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 2000,
          easing: 'linear',
          step: function() {
            $this.text(numberWithCommas(Math.floor(this.countNum)));
          },
          complete: function() {
            $this.text(numberWithCommas(this.countNum));
          }
        });
      });
      
      function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
}

/*
---------------
Cick Anouncement
---------------
*/

let clickIssue = function(){
    $('.brand-radio label').click(function(event){
        var x = event.clientX;     
        var y = event.clientY;
        $('.heart').css({
            "display": "inline-flex",
            "z-index": "100",
            "opacity": "1",
            "top": y - 50 + 'px',
            "left": x - 30 + 'px',
            "transition": "0s",
        })
        setTimeout(function(){
            $('.heart').css({
                "opacity": "0",
                "top": y - 30 - 30 + 'px',
                "left": x - 30 + 'px',
                "transition": "0.5s",
            })
        }, 300)
    })
}