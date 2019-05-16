// Fade-out Slides during scrolling
$(function() {
    var documentEl = $(document),
        fadeElem = $('.fade-scroll');
        documentEl.on('scroll', function() {
        var currScrollPos = documentEl.scrollTop();

        fadeElem.each(function() {
        var $this = $(this),
        elemOffsetTop = $this.offset().top;
            if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/500);
        });
    });
});


// play audio on hover
$("a").mouseenter(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'static/audio/Lightsaber Turn On-SoundBible.com-1637663395.mp3');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.play();
});

// $(function() {

//     var $meters = $(".meter > .span");
//     var $section = $('#ProgressBars');
//     var $queue = $({});

//     function loadDaBars() {
//         $meters.each(function() {
//             var $el = $(this);
//             var origWidth = $el.width();
//             $el.width(0);
//             $queue.queue(function(next) {
//                 $el.animate({width: origWidth}, 1200, next);
//             });
//         });
//     }

//     $(document).bind('scroll', function(ev) {
//         var scrollOffset = $(document).scrollTop();
//         var containerOffset = $section.offset().top - window.innerHeight;
//         if (scrollOffset > containerOffset) {
//             loadDaBars();
//             // unbind event not to load scrolsl again
//             $(document).unbind('scroll');
//         }
//     });

// });



