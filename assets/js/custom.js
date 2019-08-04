/**
 * Toggle header classes on scroll
 */
// $(document).ready(function() {
//
//     console.log('ready!');
//
//     function isElementInView(element, fullyInView) {
//         const pageTop = $(window).scrollTop();
//         const pageBottom = pageTop + $(window).height();
//         const elementTop = $(element).offset().top;
//         const elementBottom = elementTop + $(element).height();
//
//         if (fullyInView === true) {
//             return ((pageTop < elementTop) && (pageBottom > elementBottom));
//         } else {
//             return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
//         }
//     }
//
//     $(window).on('scroll', function() {
//         console.log('scrolling!');
//         const header = $('#header');
//         const section = $('#section1');
//         if (isElementInView(section, true)) {
//             console.log('in view!');
//         }
//     });
//
// });

(function() {

    /**
     * Burger menu toggle
     */
    const menu = document.getElementById('menu-toggle');
    menu.onclick = function() {
        const lines = document.getElementsByClassName('line');
        for (const line of lines) {
            line.classList.toggle('active');
        }

        document.getElementById('menu-wrapper').classList.toggle('open');
    };
})();



