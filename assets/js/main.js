window.addEventListener('DOMContentLoaded', () => {
    let lastScroll = 0;
    const hero = document.querySelector('.hero');
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;

        // Header appearance
        if (header) {
            if (currentScroll > 60) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }

        // Hero fade transition (use offset for smoother timing)
        if (hero) {
            const triggerFadeOffset = 450; // fade only after scrolling 300px

            if (currentScroll > triggerFadeOffset) {
                hero.classList.add('fade-out');
            } else {
                hero.classList.remove('fade-out');
            }
        }

        lastScroll = currentScroll;
    });
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
}
