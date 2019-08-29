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

    // close menu when a nav link is clicked
    const links = document.getElementsByClassName('menu-link');
    for (let link of links) {
        link.onclick = () => {
            animateMenu();
            toggleOpenClass();
        }
    }


    /**
     * Toggle .hover class ontouchstart for card flippers
     * */
    document.querySelectorAll('.tile').forEach(tile => {
        tile.ontouchstart = function() {
            this.classList.toggle('hover');
        }
    });


    /**
     * show splash screen when clicking a portfolio item
     */
    const portfolioItems = document.getElementsByClassName('modal-link');
    for (let item of portfolioItems) {
        item.onclick = () => {
            console.log('clicked!');
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
    $(window).on("load scroll resize orientationchange", function() {
        if($(window).scrollTop() > 75) {
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
        }
    });
});


$(document).ready(function() {
    $('.portfolio-item a').on("click", function() {
        $(document.body).css("overflow", "hidden");
    });

    $('.modal-content .close-btn').on("click", function() {
        $(document.body).css("overflow", "auto");
    });
});


