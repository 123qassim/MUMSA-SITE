const navigationLinks = [
  ['Home', 'index.html', 'home'],
  ['About MUMSA', 'about/index.html', 'about'],
  ['Programmes', 'programmes/index.html', 'programmes'],
  ['Events', 'events/index.html', 'events'],
  ['Resources', 'resources/index.html', 'resources'],
  ['Leadership', 'leadership/index.html', 'leadership'],
  ['First-Year Hub', 'first-year-hub/index.html', 'first-year-hub'],
  ['Maseno Masjid', 'maseno-masjid/index.html', 'maseno-masjid'],
  ['Join MUMSA', 'register/index.html', 'register'],
  ['Contact', 'contact/index.html', 'contact']
];

const navigationDirectories = navigationLinks
  .map(([, , directory]) => directory)
  .filter((directory) => directory !== 'home');
const nestedDirectories = [...navigationDirectories, 'activities', 'membership', 'how-to-register'];
const currentDirectory = navigationDirectories.find((directory) => window.location.pathname.includes(`/${directory}/`)) || 'home';
const pathPrefix = nestedDirectories.some((directory) => window.location.pathname.includes(`/${directory}/`)) ? '../' : '';

function renderLink([label, href, directory]) {
  const isActive = directory === currentDirectory;
  return `<a class="nav-link${isActive ? ' active' : ''}" href="${pathPrefix}${href}"${isActive ? ' aria-current="page"' : ''}>${label}</a>`;
}

export function loadDesktopNavbar() {
  const navbar = document.querySelector('.js-desktop-navbar');
  if (!navbar) return;
  navbar.innerHTML = `<div class="navbar-inner"><a class="brand" href="${pathPrefix}index.html" aria-label="MUMSA home"><img class="brand-logo" src="${pathPrefix}assets/images/MUMSA%20Logo.jpeg" alt="MUMSA logo"><span class="brand-name">MUMSA</span></a><nav class="nav-desktop" aria-label="Primary navigation">${navigationLinks.map(renderLink).join('')}</nav><button class="hamburger" aria-label="Open menu" aria-expanded="false"><i class="fa-solid fa-bars"></i></button></div>`;
}

export function loadMobileNavbar() {
  const container = document.querySelector('.js-mobile-navbar');
  if (!container) return;
  container.innerHTML = `<div class="nav-mobile-container"><div class="nav-mobile-header"><button class="x-mark" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button></div><nav class="nav-mobile" aria-label="Mobile navigation">${navigationLinks.map(renderLink).join('')}</nav></div>`;
  const panel = container.querySelector('.nav-mobile-container');
  const overlay = document.querySelector('.js-body-overlay');
  const hamburger = document.querySelector('.hamburger');
  const open = () => { panel.classList.add('open'); overlay?.classList.add('open'); hamburger?.setAttribute('aria-expanded', 'true'); };
  const close = () => { panel.classList.remove('open'); overlay?.classList.remove('open'); hamburger?.setAttribute('aria-expanded', 'false'); };
  hamburger?.addEventListener('click', open);
  container.querySelector('.x-mark')?.addEventListener('click', close);
  overlay?.addEventListener('click', close);
  container.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') close(); });
}

export function applyNavbarShadow() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  const update = () => navbar.classList.toggle('scrolled', window.scrollY > 4);
  window.addEventListener('scroll', update, { passive: true });
  update();
}
