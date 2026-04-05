/* Testimonials: simple track + index (no Swiper). Autoplay pauses on hover over the section. */
document.addEventListener('DOMContentLoaded', function () {
    var carousel = document.querySelector('[data-testimonial-carousel]');
    if (!carousel) return;

    var wrap = document.querySelector('[data-testimonials-wrap]');
    var viewport = carousel.querySelector('.testimonials-carousel__viewport');
    var track = carousel.querySelector('[data-carousel-track]');
    var slides = carousel.querySelectorAll('[data-carousel-slide]');
    var dotsRoot = carousel.querySelector('[data-carousel-dots]');
    var btnPrev = document.querySelector('[data-carousel-prev]');
    var btnNext = document.querySelector('[data-carousel-next]');

    var n = slides.length;
    if (n === 0 || !viewport || !track || !dotsRoot) return;

    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var current = 0;
    var autoplayTimer = null;
    var AUTOPLAY_MS = 2300;

    function trackGapPx() {
        var g = window.getComputedStyle(track).gap;
        if (g && g !== 'normal') {
            var parsed = parseFloat(g);
            return isNaN(parsed) ? 16 : parsed;
        }
        return 16;
    }

    function updateTrack() {
        var slide = slides[current];
        if (!slide) return;
        var slideW = slide.offsetWidth;
        var gap = trackGapPx();
        var vw = viewport.clientWidth;
        var offset = vw / 2 - slideW / 2 - current * (slideW + gap);
        track.style.transform = 'translate3d(' + offset + 'px,0,0)';
    }

    function updateSlidesState() {
        slides.forEach(function (slide, i) {
            var on = i === current;
            slide.classList.toggle('is-active', on);
            slide.setAttribute('aria-hidden', on ? 'false' : 'true');
        });
    }

    function updateDots() {
        var buttons = dotsRoot.querySelectorAll('.testimonials-carousel__dot');
        buttons.forEach(function (btn, i) {
            var on = i === current;
            btn.classList.toggle('is-active', on);
            btn.setAttribute('aria-selected', on ? 'true' : 'false');
            btn.tabIndex = on ? 0 : -1;
        });
    }

    function goTo(index) {
        current = ((index % n) + n) % n;
        updateSlidesState();
        updateDots();
        updateTrack();
    }

    function buildDots() {
        dotsRoot.innerHTML = '';
        for (var i = 0; i < n; i += 1) {
            (function (idx) {
                var btn = document.createElement('button');
                btn.type = 'button';
                btn.className = 'testimonials-carousel__dot';
                btn.setAttribute('role', 'tab');
                btn.setAttribute('aria-label', 'Testimonio ' + (idx + 1) + ' de ' + n);
                btn.addEventListener('click', function () {
                    goTo(idx);
                    stopAutoplay();
                    startAutoplay();
                });
                dotsRoot.appendChild(btn);
            })(i);
        }
    }

    function stopAutoplay() {
        if (autoplayTimer !== null) {
            window.clearInterval(autoplayTimer);
            autoplayTimer = null;
        }
    }

    function startAutoplay() {
        stopAutoplay();
        if (reduced) return;
        autoplayTimer = window.setInterval(function () {
            goTo(current + 1);
        }, AUTOPLAY_MS);
    }

    buildDots();
    goTo(0);

    var touchStartX = null;
    var touchStartY = null;
    viewport.addEventListener(
        'touchstart',
        function (e) {
            if (!e.changedTouches || e.changedTouches.length !== 1) {
                return;
            }
            var t = e.changedTouches[0];
            touchStartX = t.screenX;
            touchStartY = t.screenY;
        },
        { passive: true }
    );
    viewport.addEventListener(
        'touchend',
        function (e) {
            if (touchStartX == null || touchStartY == null || !e.changedTouches || e.changedTouches.length !== 1) {
                touchStartX = null;
                touchStartY = null;
                return;
            }
            var t = e.changedTouches[0];
            var dx = t.screenX - touchStartX;
            var dy = t.screenY - touchStartY;
            touchStartX = null;
            touchStartY = null;
            if (Math.abs(dx) < 52) {
                return;
            }
            if (Math.abs(dx) < Math.abs(dy) * 1.15) {
                return;
            }
            if (dx < 0) {
                goTo(current + 1);
            } else {
                goTo(current - 1);
            }
            stopAutoplay();
            startAutoplay();
        },
        { passive: true }
    );

    window.requestAnimationFrame(function () {
        window.requestAnimationFrame(function () {
            updateTrack();
        });
    });

    if (typeof ResizeObserver !== 'undefined') {
        var ro = new ResizeObserver(function () {
            updateTrack();
        });
        ro.observe(viewport);
    } else {
        window.addEventListener('resize', function () {
            updateTrack();
        });
    }

    if (btnPrev) {
        btnPrev.addEventListener('click', function () {
            goTo(current - 1);
            stopAutoplay();
            startAutoplay();
        });
    }
    if (btnNext) {
        btnNext.addEventListener('click', function () {
            goTo(current + 1);
            stopAutoplay();
            startAutoplay();
        });
    }

    viewport.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goTo(current - 1);
            stopAutoplay();
            startAutoplay();
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            goTo(current + 1);
            stopAutoplay();
            startAutoplay();
        }
    });

    var section = document.querySelector('.testimonials-section--carousel');
    var hoverTarget = section || wrap || carousel;

    hoverTarget.addEventListener('mouseenter', stopAutoplay, { passive: true });
    hoverTarget.addEventListener('mouseleave', startAutoplay, { passive: true });

    startAutoplay();

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            stopAutoplay();
        } else if (!reduced) {
            startAutoplay();
        }
    });
});
