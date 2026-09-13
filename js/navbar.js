const navigationLinks = [
  ['Home', 'index.html'],
  ['About Us', 'about/index.html'],
  ['Activities', 'activities/index.html'],
  ['Get Involved', 'membership/index.html'],
  ['Contact', 'contact/index.html']
];

const pageDirectory = window.location.pathname.split('/').slice(-2, -1)[0];
const pathPrefix = ['about', 'activities', 'contact', 'membership'].includes(pageDirectory) ? '../' : '';

export function loadDesktopNavbar() {
  const navbar = document.querySelector('.js-desktop-navbar');
  if (!navbar) return;
  navbar.innerHTML = `<div class="navbar-inner"><a class="brand" href="${pathPrefix}index.html" aria-label="MUMSA home"><span class="brand-name">MUMSA</span></a><nav class="nav-desktop">${navigationLinks.map(([label, href]) => `<a class="nav-link" href="${pathPrefix}${href}">${label}</a>`).join('')}</nav><button class="hamburger" aria-label="Open menu"><i class="fa-solid fa-bars"></i></button></div>`;
}

export function loadMobileNavbar() {
  const container = document.querySelector('.js-mobile-navbar');
  if (!container) return;
  container.innerHTML = `<div class="nav-mobile-container"><div class="nav-mobile-header"><button class="x-mark" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button></div><nav class="nav-mobile">${navigationLinks.map(([label, href]) => `<a class="nav-link" href="${pathPrefix}${href}">${label}</a>`).join('')}</nav></div>`;
  const panel = container.querySelector('.nav-mobile-container');
  const overlay = document.querySelector('.js-body-overlay');
  const open = () => { panel.classList.add('open'); overlay?.classList.add('open'); };
  const close = () => { panel.classList.remove('open'); overlay?.classList.remove('open'); };
  document.querySelector('.hamburger')?.addEventListener('click', open);
  container.querySelector('.x-mark')?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
}

export function applyNavbarShadow() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const update = () => navbar.classList.toggle('scrolled', window.scrollY > 4);
  window.addEventListener('scroll', update, { passive: true });
  update();
}
