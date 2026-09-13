export function loadPageFooter() {
  const footer = document.querySelector('.js-footer');
  if (!footer) return;
  const pageDirectory = window.location.pathname.split('/').slice(-2, -1)[0];
  const pathPrefix = ['about', 'activities', 'contact', 'membership'].includes(pageDirectory) ? '../' : '';
  footer.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <div class="footer-brand-row"><div class="footer-brand-details"><span class="footer-name">MUMSA</span><span class="footer-tagline">Maseno University Muslim Students' Association</span></div></div>
          <p class="footer-brand-description">Faith, unity and service for Muslim students at Maseno University.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col"><span class="footer-col-header">Explore</span><div class="footer-col-links"><a href="${pathPrefix}about/index.html">About Us</a><a href="${pathPrefix}activities/index.html">Activities</a><a href="${pathPrefix}membership/index.html">Get Involved</a></div></div>
          <div class="footer-col"><span class="footer-col-header">Connect</span><div class="footer-col-links"><a href="${pathPrefix}contact/index.html">Contact Us</a><span class="footer-contact-row"><span>Maseno University</span></span></div></div>
        </div>
      </div>
      <div class="footer-bottom"><p class="footer-copyright">&copy; ${new Date().getFullYear()} MUMSA. All rights reserved.</p></div>
    </div>
  `;
}
