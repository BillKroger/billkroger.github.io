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
        document.getElementById('menu-wrapper').classList.toggle('open');
        document.body.classList.toggle('nav-open');
        document.getElementById('menu-toggle').classList.toggle('open');
    };

    const menu = document.getElementById('menu-toggle');
    const content = document.getElementById('content');

    menu.onclick = function() {
        animateMenu();
        toggleOpenClass();

        // disable scrolling of main content
        if (document.getElementById('menu-toggle').classList.contains('open')) {
            console.log('disable scrolling');
            fullpage_api.setAllowScrolling(false);
        } else {
            fullpage_api.setAllowScrolling(true);
        }

    };

    content.onclick = function() {
        if (document.body.classList.contains('nav-open')) {
            animateMenu();
            toggleOpenClass();
            fullpage_api.setAllowScrolling(true);
        }
    }
})();



