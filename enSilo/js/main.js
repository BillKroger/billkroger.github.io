jQuery(document).ready(function($) {


    /**
     * Response Gap
     */

    /* declare vars */
    var $horizontalLine = $('#horizontal-line'),
        $verticalLines = $('#vertical-lines'),
        $textPrimary = $('#text-primary'),
        $textSecondary = $('#text-secondary'),
        $textTop = $('#text-top'),
        $arrowLeftSide = $('#arrow-left-side'),
        $arrowRightSide = $('#arrow-right-side'),
        $icons = $('#icons');

    // Init ScrollMagic Controller
    var scrollMagicController = new ScrollMagic();

    // build timeline
    var tl = new TimelineMax();

    // clear the stage
    tl.set($horizontalLine, {xPercent: -100});
    tl.set($verticalLines, {yPercent: -100});
    tl.set($textPrimary, {opacity: 0});
    tl.set($textSecondary, {opacity: 0});
    tl.set($textTop, {opacity: 0});
    tl.set($arrowLeftSide, {xPercent: -1000});
    tl.set($arrowRightSide, {xPercent: 1000});
    tl.set($icons, {opacity: 0, yPercent: 100});

    // build the tweens
    tl.to($horizontalLine, 2, {xPercent: 0, ease:Power4.easeInOut})
    .to($verticalLines, 2, {yPercent: 0, ease:Power4.easeInOut})
    .to($textPrimary, 2, {opacity: 1, ease:Power4.easeInOut})
    .to($textSecondary, 2, {opacity: 1, ease:Power4.easeInOut})
    .to($textTop, 2, {opacity: 1, ease:Power1.easeInOut})
    .to([$arrowLeftSide, $arrowRightSide], 2, {xPercent: 0, ease:Power1.easeInOut})
    .to($icons, 1, {opacity: 1, yPercent: 2, ease:Power1.easeInOut});

    // build scene and link scrolling to animation
    var scene1 = new ScrollScene({
        triggerElement: '#trigger1',
        duration: 500
    })
        .setTween(tl)
        .addTo(scrollMagicController);


    /**
     *
     */
});