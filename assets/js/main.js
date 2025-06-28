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

// Intercept form submit to show success message without redirection
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form redirect

      const formData = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then(response => {
          if (response.ok) {
            form.reset(); // Clear form
            successMsg.style.display = "block";
            successMsg.scrollIntoView({ behavior: "smooth" });
          } else {
            alert("Oops! Something went wrong. Please try again.");
          }
        })
        .catch(error => {
          alert("Network error. Please check your connection and try again.");
        });
    });
  }
});

// Auto close on scroll
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (nav && nav.classList.contains('open')) {
    nav.classList.remove('open');
  }
});