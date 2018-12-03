// Fad-out Slides during the scrolling
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
// Progress Bar Animation
$(window).scroll(function() {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $('#ProgressBars').offset().top - window.innerHeight;
    if (scrollOffset > containerOffset) {
        $(window).off("scroll");
        $('.progress-bar').each(function() {
            var valueNow = $(this).attr('aria-valuenow');
            $(this).animate({
            width: valueNow + '%',
            percent: 100,
            }, {
                duration: 2000,
                easing: "swing",
            progress: function(a, p, n) {
                $(this)
                .css('width', (valueNow * p + '%'));
                }
            });
        });
    }
});


