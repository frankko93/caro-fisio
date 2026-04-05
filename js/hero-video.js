/* Rotating hero background — same cadence as tips.html; respects prefers-reduced-motion */
document.addEventListener('DOMContentLoaded', function () {
    const videos = document.querySelectorAll('.hero-video');
    if (!videos.length) return;

    let currentIndex = 0;
    let intervalId = null;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    function switchVideo() {
        videos[currentIndex].classList.remove('active');

        if (currentIndex === videos.length - 1) {
            currentIndex = 0;
            videos[0].currentTime = 0;
        } else {
            currentIndex += 1;
        }

        videos[currentIndex].classList.add('active');
    }

    function stopRotation() {
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    function startRotation() {
        stopRotation();
        intervalId = window.setInterval(switchVideo, 6000);
    }

    function applyMotionPreference() {
        if (reduceMotion.matches) {
            stopRotation();
            videos.forEach(function (v) {
                v.pause();
            });
            videos.forEach(function (v, i) {
                v.classList.toggle('active', i === 0);
            });
            currentIndex = 0;
        } else {
            videos.forEach(function (v) {
                v.play().catch(function () {});
            });
            startRotation();
        }
    }

    applyMotionPreference();
    reduceMotion.addEventListener('change', applyMotionPreference);
});
