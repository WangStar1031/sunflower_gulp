
// var widthForMobile = '840',
    widthForMobileSection = '12',
    widthForMobileSectionExpanded = '64',
    fontSize = '25',
    fontSizeMobile = '15';

var isWindowsTouch,
    isTouch,
    edown = 'mousedown',
    emove = 'mousemove',
    eup = 'mouseup';

    (function(elm,elm2){

      isWindowsTouch = (function(elm){ return elm.PointerEvent || elm.navigator.msPointerEnabled; })(elm);
      isTouch = (function(elm){ return 'createTouch' in elm.document && "ontouchstart" in elm; })(elm);

      if(isWindowsTouch){

        if(elm.PointerEvent) {

          edown = 'pointerdown';
          emove = 'pointermove';
          eup = 'pointerup';

        }else{

          edown = 'MSPointerDown';
          emove = 'MSPointerMove';
          eup = 'MSPointerUp';

          }

        }else if(isTouch){

          edown = 'touchstart';
          emove = 'touchmove';
          eup = 'touchend';

        }

    })(window,document);

var isMousedown = edown == 'mousedown';

var $uno = $('#uno'),
    $dos = $('#dos'),
    $cuatro = $('#cuatro'),
    $tres = $('#tres'),
    $box = $('.box'),
    $merchContainer = $('#merch-wrapper'),
    $contactContainer = $('#contact'),
    $liveContainer = $('#music'),
    $section_expanded_portrait = widthForMobileSectionExpanded + "%",
    $section_portrait = widthForMobileSection + "%",
    $font_size = fontSize + "px",
    $font_size_mobile = fontSizeMobile + "px",
    siteColors,
    swipeDirection = 0,
    browserIsSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor),
    transitionEnd = browserIsSafari ? 'webkitTransitionEnd' : 'transitionend';

function activate_elm_modification($el){

    TweenLite.to($el.find('.content'), siteColors.animeSpeed, {
        scaleX: '1',
        scaleY: '1',
        opacity: '1'
    });
    TweenLite.to($el.find('.hover-text'), siteColors.animeSpeed, {
        opacity: '0',
        fontSize: '1px'
    });
}

function activate_box_modified($el){
    swipeDirection = $el.index() - 1;

    activate_box($el);
    elmBefore = $el;

    switch($el.attr('id')){
        case 'uno': initOnSpacebar = 1;
        break;
        case 'dos': initOnSpacebar = 2;
        break;
        case 'tres': initOnSpacebar = 3;
        break;
        case 'cuatro': initOnSpacebar = 4;
        break;
    }

}

function activate_box($el) {
    var orientationPortrait = $(window).width() <= $(window).height(),
        orientationMobile = (orientationPortrait && $(window).width() <= 480) || (!orientationPortrait && $(window).width() <= 757);
    console.log("orientationPortrait : " + orientationPortrait);
    $box.removeClass('active inactive-side inactive-up-down');
    $box.not($el).addClass('small');

    $el.addClass('active');
    TweenLite.to($('.content:not(.content-uno)'), siteColors.animeSpeed -0.3, {
        opacity: '0'
    });
    TweenLite.to($box.not('.active').find('.content:not(.content-uno)'), siteColors.animeSpeed, {
        scaleX: '0.01',
        scaleY: '0.01'
    });
    TweenLite.to($box.not('.active').find('.hover-text'), siteColors.animeSpeed, {
        opacity: '1',
        fontSize: orientationMobile ? $font_size_mobile : $font_size
    });
    TweenLite.to($box.not('.active').find('.content-uno'), siteColors.animeSpeed, {
        scaleX: '1',
        scaleY: '1'
    });

    $box.find('.content-uno')[!$el.is('#uno') ? 'addClass' : 'removeClass']('content-uno-not-active');
    if(!orientationPortrait){
        if( $(window).width() <= 1023){
            if ($el.is('#uno')) {
                TweenLite.to($el, siteColors.animeSpeed, {
                    height: '100%',
                    bottom: '0',
                    top: '0%',
                    right: '0',
                    width: '100%'
                });
                TweenLite.to($dos, siteColors.animeSpeed, {
                    height: '0%',
                    bottom: '0%',
                    left: '0%',
                    top: '100%',
                    width: '100%'
                });
                TweenLite.to($cuatro, siteColors.animeSpeed, {
                    height: '0%',
                    right: '0%',
                    top: '100%',
                    width: '100%'
                });
                TweenLite.to($tres, siteColors.animeSpeed, {
                    height: '0%',
                    left: '0%',
                    top: '100%',
                    width: '100%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#dos')) {
                TweenLite.to($el, siteColors.animeSpeed, {
                    height: '100%',
                    bottom: '0%',
                    top: '0%',
                    left: '0%',
                    width: '100%'
                });
                TweenLite.to($uno, siteColors.animeSpeed, {
                    height: '0%',
                    bottom: '0%',
                    right: '0%',
                    width: '100%'
                });
                TweenLite.to($cuatro, siteColors.animeSpeed, {
                    height: '0%',
                    right: '0%',
                    top: '100%',
                    width: '100%'
                });
                TweenLite.to($tres, siteColors.animeSpeed, {
                    height: '0%',
                    left: '0%',
                    top: '100%',
                    width: '100%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#cuatro')) {
                TweenLite.to($el, siteColors.animeSpeed, {
                    height: '100%',
                    right: '0%',
                    top: '0%',
                    width: '100%'
                });
                TweenLite.to($uno, siteColors.animeSpeed, {
                    height: '0%',
                    bottom: '0%',
                    right: '0%',
                    width: '100%'
                });
                TweenLite.to($dos, siteColors.animeSpeed, {
                    height: '0%',
                    left: '0%',
                    top: '0%',
                    bottom: '0%',
                    width: '100%'
                });
                TweenLite.to($tres, siteColors.animeSpeed, {
                    height: '0%',
                    top: '0%',
                    left: '0%',
                    bottom: '0%',
                    width: '100%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#tres')) {
                TweenLite.to($el, siteColors.animeSpeed, {
                    height: '100%',
                    left: '0%',
                    top: '0%',
                    width: '100%'
                });
                TweenLite.to($uno, siteColors.animeSpeed, {
                    height: '0%',
                    bottom: '0%',
                    right: '0%',
                    width: '100%'
                });
                TweenLite.to($dos, siteColors.animeSpeed, {
                    height: '0%',
                    left: '0%',
                    bottom: '0%',
                    width: '100%'
                });
                TweenLite.to($cuatro, siteColors.animeSpeed, {
                    height: '0%',
                    top: '100%',
                    right: '0%',
                    width: '100%'
                });
                activate_elm_modification($el);
            }
        } else{
            if ($el.is('#uno')) {
                TweenLite.to($el, siteColors.animeSpeed, {
                    height: '80%',
                    bottom: '20%',
                    right: '20%',
                    width: '80%'
                });
                TweenLite.to($dos, siteColors.animeSpeed, {
                    height: '80%',
                    bottom: '20%',
                    left: '80%',
                    width: '20%'
                });
                TweenLite.to($cuatro, siteColors.animeSpeed, {
                    height: '20%',
                    right: '20%',
                    top: '80%',
                    width: '80%'
                });
                TweenLite.to($tres, siteColors.animeSpeed, {
                    height: '20%',
                    left: '80%',
                    top: '80%',
                    width: '20%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#dos')) {
                TweenLite.to($el, siteColors.animeSpeed, {
                    height: '80%',
                    bottom: '20%',
                    left: '20%',
                    width: '80%'
                });
                TweenLite.to($uno, siteColors.animeSpeed, {
                    height: '80%',
                    bottom: '20%',
                    right: '80%',
                    width: '20%'
                });
                TweenLite.to($cuatro, siteColors.animeSpeed, {
                    height: '20%',
                    right: '80%',
                    top: '80%',
                    width: '20%'
                });
                TweenLite.to($tres, siteColors.animeSpeed, {
                    height: '20%',
                    left: '20%',
                    top: '80%',
                    width: '80%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#cuatro')) {
                TweenLite.to($el, siteColors.animeSpeed, {
                    height: '80%',
                    right: '20%',
                    top: '20%',
                    width: '80%'
                });
                TweenLite.to($uno, siteColors.animeSpeed, {
                    height: '20%',
                    bottom: '80%',
                    right: '20%',
                    width: '80%'
                });
                TweenLite.to($dos, siteColors.animeSpeed, {
                    height: '20%',
                    left: '80%',
                    bottom: '80%',
                    width: '20%'
                });
                TweenLite.to($tres, siteColors.animeSpeed, {
                    height: '80%',
                    top: '20%',
                    left: '80%',
                    width: '20%'
                });
                activate_elm_modification($el);
            } else if ($el.is('#tres')) {
                TweenLite.to($el, siteColors.animeSpeed, {
                    height: '80%',
                    left: '20%',
                    top: '20%',
                    width: '80%'
                });
                TweenLite.to($uno, siteColors.animeSpeed, {
                    height: '20%',
                    bottom: '80%',
                    right: '80%',
                    width: '20%'
                });
                TweenLite.to($dos, siteColors.animeSpeed, {
                    height: '20%',
                    left: '20%',
                    bottom: '80%',
                    width: '80%'
                });
                TweenLite.to($cuatro, siteColors.animeSpeed, {
                    height: '80%',
                    top: '20%',
                    right: '80%',
                    width: '20%'
                });
                activate_elm_modification($el);
            }
        }

    }else{
        if ($el.is('#uno')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#dos')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#cuatro')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($tres, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        } else if ($el.is('#tres')) {
            TweenLite.to($el, siteColors.animeSpeed, {
                height: $section_expanded_portrait
            });
            TweenLite.to($uno, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($dos, siteColors.animeSpeed, {
                height: $section_portrait
            });
            TweenLite.to($cuatro, siteColors.animeSpeed, {
                height: $section_portrait
            });
            activate_elm_modification($el);
        }

    }

}

var elmBefore = $uno;

$box[isMousedown ? 'hover' : 'mouseover'](function(e) {
    var $this_ = $(this);

    if(!$this_.hasClass('active')){
        activate_box_modified($this_);

        e.stopPropagation();
        e.stopImmediatePropagation();

        }

    });



siteColors = {
    animeSpeed : parseFloat($('.transitionTime').css('transition-duration'))
}
function onResizeEvent(){
    var orientationPortrait = $(window).width() <= $(window).height(),
        orientationMobile = (orientationPortrait && $(window).width() <= 480) || (!orientationPortrait && $(window).width() <= 757);
    if( !orientationPortrait){
        if( $(window).width() <= 1023){
            $box.css("display", "none");
            $(".active").css("display", "block");
            $(".active").css("width", "100%");
            $(".active").css("height", "100%");
            $(".active").css("left", "0");
            $(".active").css("right", "0");
        } else{
            $box.css("display", "block");
            var elemActiveId = $(".active").eq(0).attr('id');
            switch(elemActiveId){
                case 'uno':case 'dos':
                    $uno.css("height", "80%");
                    $dos.css("height", "80%");
                    $tres.css("height", "20%");
                    $cuatro.css("height", "20%");
                    $tres.css("top", "80%");
                    $cuatro.css("top", "80%");
                break;
                case 'tres':case 'cuatro':
                    $uno.css("height", "20%");
                    $dos.css("height", "20%");
                    $tres.css("height", "80%");
                    $cuatro.css("height", "80%");
                    $tres.css("top", "20%");
                    $cuatro.css("top", "20%");
                break;
            }
            switch(elemActiveId){
                case 'uno':case 'cuatro':
                    $uno.css("right", "20%");
                    $dos.css("left", "80%");
                    $tres.css("left", "80%");
                    $cuatro.css("right", "20%");

                    $uno.css("width", "80%");
                    $dos.css("width", "20%");
                    $tres.css("width", "20%");
                    $cuatro.css("width", "80%");
                break;
                case 'dos':case 'tres':
                    $uno.css("right", "80%");
                    $dos.css("left", "20%");
                    $tres.css("left", "20%");
                    $cuatro.css("right", "80%");

                    $uno.css("width", "20%");
                    $dos.css("width", "80%");
                    $tres.css("width", "80%");
                    $cuatro.css("width", "20%");
                break;
            }
        }
    } else{
        $box.css("display", "block");
        var elemActiveId = $(".active").eq(0).attr('id');
        $box.css("height", widthForMobileSection + "%");
        $box.css("left", "0");
        $box.css("top", "0");
        $box.css("width", "100%");
        $("#" + elemActiveId).css("height", widthForMobileSectionExpanded + "%");
    }

}
window.onresize = function(event) {
    onResizeEvent();
};
var touchStartTime = 0;
var touchEndTime = 0;
var touchStartPosition = {x:0, y:0};
var touchEndPosition = {x:0, y:0};
function calcTouchEvent(){
    var orientationPortrait = $(window).width() <= $(window).height();
    if( !orientationPortrait){
        if( $(window).width() > 1024){
            return;
        }
    }
    var xLen = touchEndPosition.x - touchStartPosition.x;
    var yLen = touchEndPosition.y - touchStartPosition.y;
    var nDir = 0;
    if( Math.abs(yLen) >= $(window).height() / 5){
        if( yLen < 0){
            console.log("next");
            nDir = 1;
        } else{
            console.log("prev");
            nDir = -1;
        }
    } else{
        console.log("none");
    }
    switch(nDir){
        case 1:
            switch($(".active").eq(0).attr('id')){
                case 'uno':
                    $uno.removeClass('active');
                    $dos.addClass('active');
                break;
                case 'dos':
                    $dos.removeClass('active');
                    $tres.addClass('active');
                break;
                case 'tres':
                    $tres.removeClass('active');
                    $cuatro.addClass('active');
                break;
                case 'cuatro':
                break;
            }
        break;
        case -1:
            switch($(".active").eq(0).attr('id')){
                case 'uno':
                break;
                case 'dos':
                    $uno.addClass('active');
                    $dos.removeClass('active');
                break;
                case 'tres':
                    $dos.addClass('active');
                    $tres.removeClass('active');
                break;
                case 'cuatro':
                    $cuatro.removeClass('active');
                    $tres.addClass('active');
                break;
            }
        break;
    }
    activate_box_modified($(".active").eq(0));
    onResizeEvent();
}
document.addEventListener("touchstart", function(e){
    touchStartPosition.x = e.touches[0].clientX;
    touchStartPosition.y = e.touches[0].clientY;
    var date = new Date();
    touchStartTime = date.getTime();
}, true);

// document.addEventListener("touchmove", function(){
// // console.log("1234");
// }, true);

document.addEventListener("touchend", function(e){
    touchEndPosition.x = e.changedTouches[0].clientX;
    touchEndPosition.y = e.changedTouches[0].clientY;
    var date = new Date();
    touchEndTime = date.getTime();
    calcTouchEvent();
}, true);
