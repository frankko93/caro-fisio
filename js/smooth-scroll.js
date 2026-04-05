// Smooth scroll functionality for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all links that have a hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#' || !targetId.startsWith('#')) return;
            if (targetId.length < 2) return;
            if (this.hasAttribute('data-modal')) return;

            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;

            e.preventDefault();

            const navTop = document.querySelector('.nav-top');
            const navHeight = navTop ? navTop.offsetHeight : 72;

            const targetPosition = targetElement.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        });
    });
}); 