import { siteConfig } from './data.js';

export function loadPageFooter() {
  const footer = document.querySelector('.js-footer');
  if (!footer) return;
  const nestedDirectories = ['about', 'activities', 'contact', 'membership', 'how-to-register', 'programmes', 'events', 'resources', 'leadership', 'first-year-hub', 'maseno-masjid', 'register'];
  const pathPrefix = nestedDirectories.some((directory) => window.location.pathname.includes(`/${directory}/`)) ? '../' : '';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-brand-row"><img class="footer-logo" src="${pathPrefix}assets/images/MUMSA%20Logo.jpeg" alt="MUMSA logo"><div class="footer-brand-details"><span class="footer-name">${siteConfig.shortName}</span><span class="footer-tagline">${siteConfig.name}</span></div></div>
          <p class="footer-brand-description">Faith, unity and service for Muslim students at Maseno University.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col"><span class="footer-col-header">Explore</span><div class="footer-col-links"><a href="${pathPrefix}about/index.html">About MUMSA</a><a href="${pathPrefix}programmes/index.html">Programmes</a><a href="${pathPrefix}events/index.html">Events</a><a href="${pathPrefix}resources/index.html">Resources</a></div></div>
          <div class="footer-col"><span class="footer-col-header">Connect</span><div class="footer-col-links"><a href="${pathPrefix}contact/index.html">Contact MUMSA</a><a href="https://www.maseno.ac.ke/" target="_blank" rel="noopener noreferrer">Maseno University</a><span class="footer-contact-row"><span>Official social links will be published here.</span></span></div></div>
        </div>
      </div>
      <div class="footer-bottom"><p class="footer-copyright">&copy; ${new Date().getFullYear()} MUMSA. All rights reserved.</p></div>
    </div>
  `;
}
