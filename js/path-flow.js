document.addEventListener('DOMContentLoaded', function () {
    var pins = document.querySelectorAll('[data-path-flow-pin]');
    if (!pins.length) {
        return;
    }

    function navOffsetPx() {
        var raw = getComputedStyle(document.documentElement).getPropertyValue('--nav-h').trim();
        var n = parseFloat(raw);
        return isNaN(n) ? 108 : n;
    }

    function pinDocumentTop(pin) {
        var r = pin.getBoundingClientRect();
        return r.top + window.scrollY;
    }

    function stepIndexFromScroll(pin, n, scrollY) {
        var nav = navOffsetPx();
        var start = pinDocumentTop(pin) - nav;
        var scrollable = Math.max(0, pin.offsetHeight - window.innerHeight);
        var inPin = scrollY - start;

        if (n <= 1) {
            return 0;
        }

        if (inPin <= 0) {
            return 0;
        }

        if (inPin >= scrollable || scrollable <= 0) {
            return n - 1;
        }

        var segment = scrollable / (n - 1);
        return Math.min(n - 1, Math.floor(inPin / segment + 1e-6));
    }

    function prefersReducedMotion() {
        return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }

    /** Horizontally center the active step in the path-flow viewport. */
    function centerActiveStepInViewport(flow, step, behavior) {
        var viewport = flow.querySelector('[data-path-flow-viewport]');
        if (!viewport || !step) {
            return;
        }
        var vRect = viewport.getBoundingClientRect();
        var sRect = step.getBoundingClientRect();
        var stepCenterX = viewport.scrollLeft + (sRect.left - vRect.left) + sRect.width / 2;
        var targetLeft = stepCenterX - viewport.clientWidth / 2;
        var maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
        targetLeft = Math.max(0, Math.min(maxScroll, targetLeft));

        if (typeof viewport.scrollTo === 'function') {
            viewport.scrollTo({ left: targetLeft, behavior: behavior || 'auto' });
        } else {
            viewport.scrollLeft = targetLeft;
        }
    }

    var lastStepIndexByPin = new WeakMap();

    function applyPin(pin, options) {
        var flow = pin.querySelector('[data-path-flow]');
        if (!flow) {
            return;
        }

        var steps = flow.querySelectorAll('.path-flow__step');
        var n = steps.length;
        var idx = stepIndexFromScroll(pin, n, window.scrollY);
        var prevIdx = lastStepIndexByPin.get(pin);
        var indexChanged = prevIdx !== idx;

        steps.forEach(function (step, i) {
            step.classList.toggle('is-inview', i === idx);
        });

        if (steps[idx]) {
            var instant = options && options.instantRecenter;
            var isFirstApply = prevIdx === undefined;
            var motion = prefersReducedMotion();
            var shouldRecenter = instant || isFirstApply || indexChanged;
            if (shouldRecenter) {
                var behavior = 'auto';
                if (!instant && !isFirstApply && indexChanged && !motion) {
                    behavior = 'smooth';
                }
                centerActiveStepInViewport(flow, steps[idx], behavior);
            }
        }

        lastStepIndexByPin.set(pin, idx);
    }

    var scheduled = false;
    var pendingResizeRecenter = false;

    function schedule() {
        if (scheduled) {
            return;
        }
        scheduled = true;
        window.requestAnimationFrame(function () {
            scheduled = false;
            var instant = pendingResizeRecenter;
            pendingResizeRecenter = false;
            pins.forEach(function (pin) {
                applyPin(pin, instant ? { instantRecenter: true } : null);
            });
        });
    }

    pins.forEach(function (pin) {
        var flow = pin.querySelector('[data-path-flow]');
        if (!flow) {
            return;
        }

        var n = flow.querySelectorAll('.path-flow__step').length;
        pin.style.setProperty('--path-flow-pin-steps', String(Math.max(1, n)));

        flow.classList.add('path-flow--enhanced');

        if ('IntersectionObserver' in window) {
            var io = new IntersectionObserver(
                function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            flow.classList.add('is-activated');
                            io.unobserve(flow);
                        }
                    });
                },
                { threshold: 0.04, rootMargin: '0px 0px -5% 0px' }
            );
            io.observe(flow);
        } else {
            flow.classList.add('is-activated');
        }
    });

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', function () {
        pendingResizeRecenter = true;
        schedule();
    });

    schedule();
});
