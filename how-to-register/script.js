/* Add a scrolled styling to the navbar when one starts scrolling */
document.addEventListener('DOMContentLoaded', () => {
  const officialsPageNavbar = document.querySelector('.how-to-register-header');

  window.addEventListener('scroll', () => {
    officialsPageNavbar.classList.toggle('scrolled', window.scrollY > 0);
  }, { passive: true });
});