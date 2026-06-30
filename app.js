document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('mobile-active');
      toggle.innerText = isOpen ? '✕' : '☰';
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    nav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (nav.classList.contains('mobile-active')) {
          nav.classList.remove('mobile-active');
          toggle.innerText = '☰';
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
    });
  }
});