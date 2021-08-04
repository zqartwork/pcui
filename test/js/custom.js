$(document).ready(function () {
  
  // Resize for sticky footer and adjusting wrapper.
  let windowWidth = $(window).width();
  let submit = $('.submit-zone').length > 0;
  let posi = $('.btn-bot-posi-wrap').length > 0;
  let dyct = $('.dynamic-center');
  let dyctChat = $('.dynamic-center.chat');
  let isDyct = $('.dynamic-center').length > 0;

  console.log(isDyct)

  /* tiny-web */
  if (windowWidth < 1367) {
    if (!submit && !posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() + 'px'
      })
      /* no posi no bottom */
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.nav').outerHeight() + 'px'
      })
      dyct.css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.btn-bot-posi-wrap').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.btn-bot-posi-wrap').outerHeight() + $('.nav').outerHeight() +'px'
      })
      $('.btn-bot-posi-wrap').css({
        'bottom': 10 + $('.nav').outerHeight() +'px',
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (submit && !isDyct) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.submit-zone').outerHeight() - $('.nav').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.nav').outerHeight() +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (submit && isDyct) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.submit-zone').outerHeight() - 50 + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.nav').outerHeight() +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (submit && posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.btn-bot-posi-wrap').outerHeight() + $('.nav').outerHeight() +'px'
      })
      $('.btn-bot-posi-wrap').css({
        'bottom': 10 + $('.nav').outerHeight() +'px',
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - 81 - 59 - 75 - 59 - 71 + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - 81 - 59 - 75 - 59 - 71 + 'px'
      })
    }
  }
  /* web */
  if (windowWidth >= 1367) {
    if (!submit && !posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() + 'px'
      })
      /* no posi no bottom */
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + 'px'
      })
      dyct.css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.btn-bot-posi-wrap').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.btn-bot-posi-wrap').outerHeight() +'px'
      })
      $('.btn-bot-posi-wrap').css({
        'bottom': 10,
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (submit && !isDyct) {
 
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.submit-zone').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (submit && isDyct) {
 
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.submit-zone').outerHeight() - 10 + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() - 30 + 'px'
      })
      setTimeout(function(){
        $('.box-divi.vt').css({
          'height': dyct.outerHeight() - 30 + 'px',
        })
      }, 100)
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() - 30 + 'px'
      })
    }
    if (submit && posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.btn-bot-posi-wrap').outerHeight() +'px'
      })
      $('.btn-bot-posi-wrap').css({
        'bottom': 10,
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() - $('.submit-zone').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() - $('.submit-zone').outerHeight() + 'px'
      })
    }  
  }
  $(window).resize(function () {
  windowWidth = $(window).width();
  /* tiny-web */
  if (windowWidth < 1367) {
    if (!submit && !posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() + 'px'
      })
      /* no posi no bottom */
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.nav').outerHeight() + 'px'
      })
      dyct.css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.btn-bot-posi-wrap').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.btn-bot-posi-wrap').outerHeight() + $('.nav').outerHeight() +'px'
      })
      $('.btn-bot-posi-wrap').css({
        'bottom': 10 + $('.nav').outerHeight() +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (submit && !isDyct) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.submit-zone').outerHeight()+ 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.nav').outerHeight() +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      
    }
    if (submit && isDyct) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.submit-zone').outerHeight() - 50 + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.nav').outerHeight() +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.nav').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      
    }
    if (submit && posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.btn-bot-posi-wrap').outerHeight() + $('.nav').outerHeight() +'px'
      })
      $('.btn-bot-posi-wrap').css({
        'bottom': 10 + $('.nav').outerHeight() +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - 81 - 59 - 75 - 59 - 71 + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - 81 - 59 - 75 - 59 - 71 + 'px'
      })
      
    }
  }
  /* web */
  if (windowWidth >= 1367) {
    if (!submit && !posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() + 'px'
      })
      /* no posi no bottom */
      $('footer').css({
        'padding-bottom': 20 + 'px'
      })
      $('.btn-bot-posi-wrap').css({
        'bottom': 10
      })
      dyct.css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.btn-bot-posi-wrap').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.btn-bot-posi-wrap').outerHeight() +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (submit && !isDyct) {
 
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.submit-zone').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() + 'px'
      })
    }
    if (submit && isDyct) {
 
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('footer').outerHeight() - $('.submit-zone').outerHeight() - 10 + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 +'px'
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() - 30 + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() - 30 + 'px'
      })
      setTimeout(function(){
        $('.box-divi.vt').css({
          'height': dyct.outerHeight() - 30 + 'px',
        })
      }, 100)
      console.log(dyct.outerHeight())
    }
    if (submit && posi) {
      $('.wrapper').css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('.submit-zone').outerHeight() - $('footer').outerHeight() + 'px'
      })
      $('footer, .cs-wrap').css({
        'padding-bottom': 20 + $('.btn-bot-posi-wrap').outerHeight() +'px'
      })
      $('.btn-bot-posi-wrap').css({
        'bottom': 10
      })
      /* 動態置中空間 */
      dyct.css({
        'min-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() - $('.submit-zone').outerHeight() + 'px'
      })
      dyctChat.css({
        'max-height': $(window).innerHeight() - $('.btn-bot-posi-wrap').outerHeight() - $('footer').outerHeight() - $('.toolbar').outerHeight() - $('.submit-zone').outerHeight() + 'px'
      })
    }  
  }
  })
})

window.setTimeout(function() {
  var elem = document.getElementById('matchChat');
  elem.scrollTop = elem.scrollHeight;
}, 1000);

//tapbar
if($('.tapbar-item').is('.active')) {
  let target = $('.tapbar-item.active').attr('ct');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    console.log('.ct-item.' + target)
    $('.ct-item.' + target).show();
    $('.ct-item.' + target).siblings('.ct-item').hide();
}
if($('.tapbar-item-sys').is('.active')) {
  let target = $('.tapbar-item.active').attr('ct');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    console.log('.ct-item.' + target)
    $('.ct-item.' + target).show();
    $('.ct-item.' + target).siblings('.ct-item').hide();
}
$('.tapbar-item, .tapbar-item-sys').click(function () {
  let target = $(this).attr('ct');
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    console.log('.ct-item.' + target)
    $('.ct-item.' + target).show();
    $('.ct-item.' + target).siblings('.ct-item').hide();
});
//inner
$('.inner-opener').click(function () {
  let target = $(this).attr('inner');
  $(this).parent().hide();
  $('.' + target).show();
});
$('.backer-wrap.inner').click(function () {
  let target = $(this).attr('inner');
  $(this).parent().hide();
  $(this).parent().siblings('.list').show();
});

/*
----------------
Modal Opener
----------------
*/

// Class Version 
$('.alert-opener').click(function () {
  let alert = $(this).attr('alert-to');
  console.log(alert)
  $('.' + alert).show();
})
$('.alert-closer').click(function () {
  $(this).parents('.alert-box').hide();
})

// ID Version
$('.alert-opener').click(function () {
  let alert = $(this).attr('alert-to');
  let alertself = $(document.getElementById(alert))
  alertself.toggle();
})
$('.alert-closer').click(function () {
  $(this).parents('.alert-box').hide();
})


/*
--------------------
Custom upload files
--------------------
*/
var inputs = document.querySelectorAll('.upload-file');
Array.prototype.forEach.call(inputs, function (input) {
  var label = input.nextElementSibling;
  var labelVal = label.innerHTML;

  input.addEventListener('change', function (e) {
    var fileName = '已上傳';
    if (this.files && this.files.length > 1) {
      fileName = (this.getAttribute('data-multiple-caption') || '').replace('已上傳');
    } else {
      fileName = e.target.value.split('').pop();
    }
    if (fileName) {
      label.querySelector('.item-subtitle').innerHTML = '已上傳';
    } else {
      label.innerHTML = labelVal;
    }
  })
})

/*
--------------------
Go Backer
--------------------
*/
function goBack() {
  console.log(window.history)
  window.history.back();
}

/*
--------------------
Custom Dropdown
--------------------
*/
function create_custom_dropdowns() {
  var isMobile = false; //initiate as false
  // device detection
  if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
      || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
      isMobile = true;
  }
  console.log(isMobile)
  if(!isMobile) {
    $('.web-select').each(function(i, select) {
      if (!$(this).next().hasClass('dropdown')) {
        $(this).after('<div class="dropdown ' + ($(this).attr('class') || '') + '" tabindex="0"><span class="current"></span><div class="list"><ul></ul></div></div>');
        var dropdown = $(this).next();
        var options = $(select).find('option');
        var selected = $(this).find('option:selected');
        dropdown.find('.current').html(selected.data('display-text') || selected.text());
        options.each(function(j, o) {
          var display = $(o).data('display-text') || '';
          dropdown.find('ul').append('<li class="option ' + ($(o).is(':selected') ? 'selected' : '') + '" data-value="' + $(o).val() + '" data-display-text="' + display + '">' + $(o).text() + '</li>');
        });
      }
    });
  }
  if(isMobile) {
    $('#mobileSelect').css({
      'display': 'inline-flex',
      'align-items': 'center',
      'justify-content': 'center',
      'text-align': 'center',
    });
  }
}

// Event listeners

// Open/close
$(document).on('click', '.dropdown', function(event) {
  $('.dropdown').not($(this)).removeClass('open');
  $(this).toggleClass('open');
  if ($(this).hasClass('open')) {
    $(this).find('.option').attr('tabindex', 0);
    $(this).find('.selected').focus();
  } else {
    $(this).find('.option').removeAttr('tabindex');
    $(this).focus();
  }
});
// Close when clicking outside
$(document).on('click', function(event) {
  if ($(event.target).closest('.dropdown').length === 0) {
    $('.dropdown').removeClass('open');
    $('.dropdown .option').removeAttr('tabindex');
  }
  event.stopPropagation();
});
// Option click
$(document).on('click', '.dropdown .option', function(event) {
  $(this).closest('.list').find('.selected').removeClass('selected');
  $(this).addClass('selected');
  var text = $(this).data('display-text') || $(this).text();
  $(this).closest('.dropdown').find('.current').text(text);
  $(this).closest('.dropdown').prev('select').val($(this).data('value')).trigger('change');
});

// Keyboard events
$(document).on('keydown', '.dropdown', function(event) {
  var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
  // Space or Enter
  if (event.keyCode == 32 || event.keyCode == 13) {
    if ($(this).hasClass('open')) {
      focused_option.trigger('click');
    } else {
      $(this).trigger('click');
    }
    return false;
    // Down
  } else if (event.keyCode == 40) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      focused_option.next().focus();
    }
    return false;
    // Up
  } else if (event.keyCode == 38) {
    if (!$(this).hasClass('open')) {
      $(this).trigger('click');
    } else {
      var focused_option = $($(this).find('.list .option:focus')[0] || $(this).find('.list .option.selected')[0]);
      focused_option.prev().focus();
    }
    return false;
  // Esc
  } else if (event.keyCode == 27) {
    if ($(this).hasClass('open')) {
      $(this).trigger('click');
    }
    return false;
  }
});

$(document).ready(function() {
  create_custom_dropdowns();
});

/*----- 檢舉選項 ----- */

$('.report-option').change(function(){
  if($(this).val() == 'other') {
      $('.report-other-reason').show()
  }
  else{
      $('.report-other-reason').hide()
  }
})

$(".match-team-item.pick-team").click(function(){
  $(this).toggleClass('selected');
  $(this).siblings().removeClass('selected')
})