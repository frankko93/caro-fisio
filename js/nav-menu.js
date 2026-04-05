document.addEventListener('DOMContentLoaded', function() {
    const navTop = document.querySelector('.nav-top');
    const menuButton = document.querySelector('.menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const navSectionLinks = document.querySelectorAll('.nav-section-links a');

    function setActiveByHash(hash) {
        navSectionLinks.forEach(function (l) {
            l.classList.toggle('active', l.getAttribute('href') === hash);
        });
    }

    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function () {
            const opening = !mobileMenu.classList.contains('active');
            menuButton.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
            menuButton.setAttribute('aria-expanded', opening ? 'true' : 'false');
        });
    }

    window.addEventListener('scroll', function () {
        if (navTop) {
            if (window.pageYOffset > 40) {
                navTop.classList.add('scrolled');
            } else {
                navTop.classList.remove('scrolled');
            }
        }
    });

    navSectionLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            const href = this.getAttribute('href');
            setActiveByHash(href);

            if (menuButton) {
                menuButton.classList.remove('active');
                menuButton.setAttribute('aria-expanded', 'false');
            }
            if (mobileMenu) mobileMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    window.addEventListener('scroll', function () {
        let current = '';
        document.querySelectorAll('section').forEach(function (section) {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 132) {
                current = section.getAttribute('id');
            }
        });
        if (current) {
            setActiveByHash('#' + current);
        }
    });
});
