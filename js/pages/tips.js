/* Tips page: modals, scroll-in cards, section header animation, rail active state */
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.tip-card, .rehab-card');
    const cardObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.12 }
    );
    cards.forEach(function (c) {
        cardObserver.observe(c);
    });

    const modals = document.querySelectorAll('.modal');
    const openModal = function (modal) {
        if (!modal) return;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };
    const closeModal = function (modal) {
        if (!modal) return;
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    document.querySelectorAll('[data-modal]').forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault();
            var id = trigger.getAttribute('data-modal');
            var modal = id ? document.getElementById(id) : null;
            openModal(modal);
        });
    });

    document.querySelectorAll('.close-modal').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var modal = btn.closest('.modal');
            closeModal(modal);
        });
    });

    modals.forEach(function (modal) {
        modal.setAttribute('aria-hidden', 'true');
        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                closeModal(modal);
            }
        });
    });

    document.addEventListener('keydown', function (e) {
        if (e.key !== 'Escape') return;
        modals.forEach(function (modal) {
            if (modal.classList.contains('is-open')) {
                closeModal(modal);
            }
        });
    });

    var sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) return;
                var head = entry.target.querySelector('.tips-animate-head');
                if (head) {
                    head.classList.add('is-visible');
                }
            });
        },
        { threshold: 0.22, rootMargin: '-12% 0px -55% 0px' }
    );

    document.querySelectorAll('main section[id]').forEach(function (section) {
        sectionObserver.observe(section);
    });
});
