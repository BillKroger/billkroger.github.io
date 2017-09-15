jQuery(document).ready(function($) {

    /**
     * Response Gap animation
     */

    /* declare vars */
    var $responseGap1 = $('#response-gap-1'),
        $responseGap2 = $('#response-gap-2');

    // Init ScrollMagic Controller
    var scrollMagicController1 = new ScrollMagic();

    // build timeline
    var tl1 = new TimelineMax();

    // clear the stage
    tl1.set($responseGap1, {opacity: 1});
    tl1.set($responseGap2, {opacity: 0});

    // build the tweens
    tl1.add("end", 2)
        .to($responseGap2, 2, {opacity: 1, ease:Power1.easeInOut}, "end")
        .to($responseGap1, 2, {opacity: 0, ease:Power1.easeInOut}, "end");

    // build scene and link scrolling to animation
    var scene1 = new ScrollScene({
        triggerElement: '#trigger-1',
        duration: 500
    })
        .setTween(tl1)
        .addTo(scrollMagicController1);


    /**
     * Response Gap animation - mobile
     */
    // var $rgMobile = $('#rg-mobile');
    // var scrollMagicControllerMobile1 = new ScrollMagic();
    // var tlMobile1 = new TimelineMax();
    // tlMobile1.set($rgMobile, {opacity: 0});
    // tlMobile1.to($rgMobile, 2, {opacity: 1, ease:Power1.easeInOut});
    // var sceneMobile1 = new ScrollScene({
    //     triggerElement: '#trigger-1-mobile',
    //     duration: 400
    // })
    //     .setTween(tlMobile1)
    //     .addTo(scrollMagicControllerMobile1);



    /**
     * Automated Response animation
     */

    /* declare vars */
    var $blackArrows = $('#black-arrows'),
        $redArrows = $('#red-arrows'),
        $greenArrows = $('#green-arrows');

    // Init ScrollMagic Controller
    var scrollMagicController2 = new ScrollMagic();

    // build timeline
    var tl2 = new TimelineMax();

    // set the stage
    tl2.set($blackArrows, {opacity: 1});
    tl2.set($redArrows, {opacity: 0});
    tl2.set($greenArrows, {opacity: 0});

    // build the tweens
    tl2.to($redArrows, 1, {opacity: 1, ease:Power1.easeInOut}, 0.5)
        .to($greenArrows, 1, {opacity: 1, ease:Power1.easeInOut}, 1.5);

    // build scene and link scrolling to animation
    var scene2 = new ScrollScene({
        triggerElement: '#trigger-2',
        duration: 400
    })
        .setTween(tl2)
        .addTo(scrollMagicController2);

    /**
     * Automated Response animation - mobile
     */

    var $arMobile = $('#ar-mobile');
    var scrollMagicControllerMobile2 = new ScrollMagic();
    var tlMobile2 = new TimelineMax();
    tlMobile2.set($arMobile, {opacity: 0});
    tlMobile2.to($arMobile, 2, {opacity: 1, ease:Power1.easeInOut});
    var sceneMobile2 = new ScrollScene({
        triggerElement: '#trigger-2-mobile',
        duration: 200
    })
        .setTween(tlMobile2)
        .addTo(scrollMagicControllerMobile2);


    /**
     * Post-Infection animation
     */

    /* declare vars */
    var $postInfection = $('#post-infection'),
        $traditionalEdr = $('#traditional-edr'),
        $piEnsilo = $('#pi-ensilo');

    // Init ScrollMagic Controller
    var scrollMagicController3 = new ScrollMagic();

    // build timeline
    var tl3 = new TimelineMax();

    // set the stage
    tl3.set($postInfection, {opacity: 1});
    tl3.set($traditionalEdr, {opacity: 0});
    tl3.set($piEnsilo, {opacity: 0});

    // build the tweens
    tl3.to($traditionalEdr, 1, {opacity: 1, ease:Power1.easeInOut}, 1.5)
        .to($piEnsilo, 1, {opacity: 1, ease:Power1.easeInOut}, 2.5);

    // build scene and link scrolling to animation
    var scene3 = new ScrollScene({
        triggerElement: '#trigger-3',
        duration: 400
    })
        .setTween(tl3)
        .addTo(scrollMagicController3);

    // if($(window).width() < 1025) {
    //     scene3.destroy(true);
    // }

    /**
     * Post-Infection animation - mobile
     */

    var $piMobile = $('#pi-mobile');
    var scrollMagicControllerMobile3 = new ScrollMagic();
    var tlMobile3 = new TimelineMax();
    tlMobile3.set($piMobile, {opacity: 0});
    tlMobile3.to($piMobile, 2, {opacity: 1, ease:Power1.easeInOut});
    var sceneMobile3 = new ScrollScene({
        triggerElement: '#trigger-3-mobile',
        duration: 200
    })
        .setTween(tlMobile3)
        .addTo(scrollMagicControllerMobile3);

});