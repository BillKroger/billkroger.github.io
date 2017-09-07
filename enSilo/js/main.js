jQuery(document).ready(function($) {


    /**
     * Response Gap animation
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
    var scrollMagicController1 = new ScrollMagic();

    // build timeline
    var tl1 = new TimelineMax();

    // clear the stage
    tl1.set($horizontalLine, {xPercent: -100});
    tl1.set($verticalLines, {yPercent: -100});
    tl1.set($textPrimary, {opacity: 0});
    tl1.set($textSecondary, {opacity: 0});
    tl1.set($textTop, {opacity: 0});
    tl1.set($arrowLeftSide, {xPercent: -1000});
    tl1.set($arrowRightSide, {xPercent: 1000});
    tl1.set($icons, {opacity: 0, yPercent: 100});

    // build the tweens
    tl1.to($horizontalLine, 2, {xPercent: 0, ease:Power4.easeInOut})
    .to($verticalLines, 2, {yPercent: 0, ease:Power4.easeInOut})
    .to($textPrimary, 2, {opacity: 1, ease:Power4.easeInOut})
    .to($textSecondary, 2, {opacity: 1, ease:Power4.easeInOut})
    .to($textTop, 2, {opacity: 1, ease:Power1.easeInOut})
    .to([$arrowLeftSide, $arrowRightSide], 2, {xPercent: 0, ease:Power1.easeInOut})
    .to($icons, 2, {opacity: 1, yPercent: 0, ease:Power1.easeInOut});

    // build scene and link scrolling to animation
    var scene1 = new ScrollScene({
        triggerElement: '#trigger-1',
        duration: 500
    })
        .setTween(tl1)
        .addTo(scrollMagicController1);


    /**
     * Automated Response animation
     */

    /* declare vars */
    var $textEnsiloAutomation = $('#text-ensilo-automation'),
        $textSecurityProcess = $('#text-security-process'),
        $textRed = $('#text-red'),
        $greenArrow1 = $('#green-arrow-1'),
        $greenArrow2 = $('#green-arrow-2'),
        $blackArrow1 = $('#black-arrow-1'),
        $blackArrow2 = $('#black-arrow-2'),
        $blackArrow3 = $('#black-arrow-3'),
        $blackArrow4 = $('#black-arrow-4'),
        $blackArrow5 = $('#black-arrow-5'),
        $blackArrow6 = $('#black-arrow-6'),
        $blackArrow7 = $('#black-arrow-7'),
        $blackArrow8 = $('#black-arrow-8'),
        $topRedArrow1 = $('#top-red-arrow-1'),
        $topRedArrow2 = $('#top-red-arrow-2'),
        $bottomRedArrow1 = $('#bottom-red-arrow-1'),
        $bottomRedArrow2 = $('#bottom-red-arrow-2'),
        $bottomRedArrow3 = $('#bottom-red-arrow-3'),
        $bottomRedArrow4 = $('#bottom-red-arrow-4'),
        $bottomRedArrow5 = $('#bottom-red-arrow-5');

    // Init ScrollMagic Controller
    var scrollMagicController2 = new ScrollMagic();

    // build timeline
    var tl2 = new TimelineMax();

    // clear the stage
    tl2.set($textEnsiloAutomation, {opacity: 0});
    tl2.set($textSecurityProcess, {opacity: 0});
    tl2.set($textRed, {opacity: 0});
    tl2.set($greenArrow1, {xPercent: -100, opacity: 0});
    tl2.set($greenArrow2, {xPercent: -200, opacity: 0});
    tl2.set($blackArrow1, {xPercent: -100, opacity: 0});
    tl2.set($blackArrow2, {xPercent: -100, opacity: 0});
    tl2.set($blackArrow3, {xPercent: -100, opacity: 0});
    tl2.set($blackArrow4, {xPercent: -100, opacity: 0});
    tl2.set($blackArrow5, {xPercent: -100, opacity: 0});
    tl2.set($blackArrow6, {xPercent: -100, opacity: 0});
    tl2.set($blackArrow7, {xPercent: -100, opacity: 0});
    tl2.set($blackArrow8, {xPercent: -100, opacity: 0});
    tl2.set($topRedArrow1, {xPercent: -100, opacity: 0});
    tl2.set($topRedArrow2, {xPercent: -100, opacity: 0});
    tl2.set($bottomRedArrow1, {xPercent: -100, opacity: 0});
    tl2.set($bottomRedArrow2, {xPercent: -100, opacity: 0});
    tl2.set($bottomRedArrow3, {xPercent: -100, opacity: 0});
    tl2.set($bottomRedArrow4, {xPercent: -100, opacity: 0});
    tl2.set($bottomRedArrow5, {xPercent: -100, opacity: 0});

    // build the tweens
    tl2.to($textEnsiloAutomation, 3, {opacity: 1, ease:Power1.easeInOut})
        .to($textSecurityProcess, 3, {opacity: 1, ease:Power1.easeInOut})
        .to($textRed, 3, {opacity: 1, ease:Power1.easeInOut, delay: 2})
        .to($greenArrow1, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($greenArrow2, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($blackArrow1, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($blackArrow2, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($blackArrow3, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($blackArrow4, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($blackArrow5, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($blackArrow6, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($blackArrow7, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($blackArrow8, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($topRedArrow1, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($topRedArrow2, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($bottomRedArrow1, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($bottomRedArrow2, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($bottomRedArrow3, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($bottomRedArrow4, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($bottomRedArrow5, 3, {opacity: 1, xPercent: 0, ease:Power1.easeInOut});

    // build scene and link scrolling to animation
    var scene2 = new ScrollScene({
        triggerElement: '#trigger-2',
        duration: 500
    })
        .setTween(tl2)
        .addTo(scrollMagicController2);


    /**
     * Post-Infection animation
     */

    /* declare vars */
    var $piTextPostInfection = $('#pi-text-post-infection'),
        $piBlackArrow1 = $('#pi-black-arrow-1'),
        $piBlackArrow2 = $('#pi-black-arrow-2'),
        $piBlackArrow3 = $('#pi-black-arrow-3'),
        $piTextGreenRed = $('#pi-text-green-red'),
        $piEndPoints = $('#pi-end-points'),
        $piTextInfection = $('#pi-text-infection'),
        $piGreenLine = $('#pi-green-line'),
        $piStop1 = $('#pi-stop-1'),
        $piRedLine = $('#pi-red-line'),
        $piGreenAlert = $('#pi-green-alert'),
        $piRedAlert1 = $('#pi-red-alert-1'),
        $piRedAlert2 = $('#pi-red-alert-2'),
        $piRedAlert3 = $('#pi-red-alert-3'),
        $piRedAlert4 = $('#pi-red-alert-4'),
        $piRedAlert5 = $('#pi-red-alert-5'),
        $piRedAlert6 = $('#pi-red-alert-6'),
        $piGreyLine = $('#pi-grey-line'),
        $piStop2 = $('#pi-stop-2');

    // Init ScrollMagic Controller
    var scrollMagicController3 = new ScrollMagic();

    // build timeline
    var tl3 = new TimelineMax();

    // clear the stage
    tl3.set($piTextPostInfection, {opacity: 0});
    tl3.set($piBlackArrow1, {xPercent: -100, opacity: 0});
    tl3.set($piBlackArrow2, {xPercent: -100, opacity: 0});
    tl3.set($piBlackArrow3, {xPercent: -100, opacity: 0});
    tl3.set($piTextGreenRed, {opacity: 0});
    tl3.set($piEndPoints, {yPercent: -100, opacity: 0});
    tl3.set($piTextInfection, {opacity: 0});
    tl3.set($piGreenLine, {opacity: 0, yPercent: 100});
    tl3.set($piStop1, {opacity: 0});
    tl3.set($piRedLine, {yPercent: 100, opacity: 0});
    tl3.set($piGreenAlert, {transform: 'scale(0)', opacity: 0});
    tl3.set($piRedAlert1, {transform: 'scale(0)', opacity: 0});
    tl3.set($piRedAlert2, {transform: 'scale(0)', opacity: 0});
    tl3.set($piRedAlert3, {transform: 'scale(0)', opacity: 0});
    tl3.set($piRedAlert4, {transform: 'scale(0)', opacity: 0});
    tl3.set($piRedAlert5, {transform: 'scale(0)', opacity: 0});
    tl3.set($piRedAlert6, {transform: 'scale(0)', opacity: 0});
    tl3.set($piGreyLine, {yPercent: 100, opacity: 0});
    tl3.set($piStop2, {opacity: 0});

    // build the tweens
    tl3.to($piTextPostInfection, 1.5, {opacity: 1, ease:Power1.easeInOut})
        .to($piBlackArrow1, 1.5, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($piBlackArrow2, 1.5, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($piBlackArrow3, 1.5, {opacity: 1, xPercent: 0, ease:Power1.easeInOut})
        .to($piTextGreenRed, 1.5, {opacity: 1, ease:Power1.easeInOut})
        .to($piEndPoints, 1.5, {opacity: 1, yPercent: 0, bounce: true, ease:Power1.easeInOut})
        .to($piTextInfection, 1.5, {opacity: 1, ease:Power1.easeInOut})
        .to($piGreenLine, 1.5, {opacity: 1, yPercent: 0, ease:Power1.easeInOut})
        .to($piStop1, 1.5, {opacity: 1, ease:Power1.easeInOut})
        .to($piRedLine, 1.5, {opacity: 1, yPercent: 0, ease:Power1.easeInOut})
        .to($piGreenAlert, 1.5, {opacity: 1, transform: 'scale(1)', ease:Power1.easeInOut})
        .to($piRedAlert1, 1.5, {opacity: 1, transform: 'scale(1)', ease:Power1.easeInOut})
        .to($piRedAlert2, 1.5, {opacity: 1, transform: 'scale(1)', ease:Power1.easeInOut})
        .to($piRedAlert3, 1.5, {opacity: 1, transform: 'scale(1)', ease:Power1.easeInOut})
        .to($piRedAlert4, 1.5, {opacity: 1, transform: 'scale(1)', ease:Power1.easeInOut})
        .to($piRedAlert5, 1.5, {opacity: 1, transform: 'scale(1)', ease:Power1.easeInOut})
        .to($piRedAlert6, 1.5, {opacity: 1, transform: 'scale(1)', ease:Power1.easeInOut})
        .to($piGreyLine, 1.5, {opacity: 1, yPercent: 0, ease:Power1.easeInOut})
        .to($piStop2, 1.5, {opacity: 1, ease:Power1.easeInOut});

    // build scene and link scrolling to animation
    var scene3 = new ScrollScene({
        triggerElement: '#trigger-3',
        duration: 450
    })
        .setTween(tl3)
        .addTo(scrollMagicController3);

});