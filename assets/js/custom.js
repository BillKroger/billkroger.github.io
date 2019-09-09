(function() {

    /**
     * Burger menu toggle
     */

    // animate menu button
    const animateMenu = () => {
        const lines = document.getElementsByClassName('line');
        for (const line of lines) {
            line.classList.toggle('active');
        }
    };

    // toggle classes for body, burger and menu
    const toggleOpenClass = () => {
        document.getElementById('active-menu-overlay').classList.toggle('active');
        document.body.classList.toggle('nav-open');
    };

    const menu = document.getElementById('menu-toggle');
    const content = document.getElementById('content');
    const logo = document.getElementById('bk-logo');
    const scrollBtn = document.getElementById('scroll-btn');

    menu.onclick = function() {
        animateMenu();
        toggleOpenClass();
    };

    content.onclick = function() {
        if (document.body.classList.contains('nav-open')) {
            animateMenu();
            toggleOpenClass();
        }
    };

    const links = document.getElementsByClassName('menu-link');
    for (let link of links) {
        link.onclick = () => {
            animateMenu();
            toggleOpenClass();
            const anchor = link.getAttribute('href').replace(/[#]/, '');
            document.getElementById(anchor).scrollIntoView();
            return false;
        }
    }

    logo.onclick = function() {
        if (document.getElementById('active-menu-overlay').classList.contains('active')) {
            animateMenu();
            toggleOpenClass();
        }
        const anchor = this.getAttribute('href').replace(/[#]/, '');
        document.getElementById(anchor).scrollIntoView();
        return false;
    };

    scrollBtn.onclick = function() {
        const anchor = this.getAttribute('href').replace(/[#]/, '');
        // document.getElementById(anchor).scrollIntoView({
        //     behavior: 'smooth'
        // });
        return false;
    };

    /**
     * show splash screen when clicking a portfolio item
     */
    const portfolioItems = document.getElementsByClassName('modal-link');
    for (let item of portfolioItems) {
        item.onclick = () => {
            document.body.classList.toggle('loaded');
            document.getElementById('loader').classList.toggle('spinning');
            setTimeout(function(){
                document.body.classList.toggle('loaded');
                document.getElementById('loader').classList.toggle('spinning');
            }, 1000);
        }
    }

})();


$(document).ready(function() {

    /**
     * Toggle overflow on body when viewing/closing modal window
     */
    $('.portfolio-item a').on("click", function() {
        $(document.body).css("overflow", "hidden");
    });

    $('.modal-content .close-btn').on("click", function() {
        $(document.body).css("overflow", "auto");
    });


    /**
     * Active class for header on scroll
     */
    $(window).on("load scroll resize orientationchange", function() {
        if($(window).scrollTop() > 75) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    });

    $('#scroll-btn').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).position().top
        }, 300, 'swing');
    });

    // $(window).on("load scroll resize orientationchange", function() {
    //     let contactHeight = $('#contact')[0].clientHeight;
    //     let docHeight = document.body.clientHeight;
    //     if($(window).scrollTop() > (docHeight - (contactHeight * 2) + 100)) {
    //         $("#header").addClass("footer-active");
    //     } else {
    //         $("#header").removeClass("footer-active");
    //     }
    // });

});

