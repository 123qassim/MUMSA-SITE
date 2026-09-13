import { loadDesktopNavbar, loadMobileNavbar, applyNavbarShadow} from './navbar.js'; /* Navbar of the page */
import { loadPageFooter } from './footer.js'; /* Footer of the page */
import { backButtonNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  loadDesktopNavbar(); /* Load the desktop navbar of the page */
  loadMobileNavbar(); /* Load the mobile navbar and its logic */
  applyNavbarShadow(); /* Applies a shadow to the bottom of the navbar when someone starts scolling */
  loadPageFooter(); /* Load the footer of the page */
  backButtonNavigation(); /* Back button logic */
});