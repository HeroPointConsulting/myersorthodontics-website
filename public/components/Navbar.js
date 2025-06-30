import { createLogo } from './Logo.js';
// import { MobileNav } from './MobileNav.js'; // TODO: Create MobileNav component

const navigationItems = [
  { name: 'About', href: '/about' },
  { name: 'Treatments', href: '/treatments' },
  { name: 'Our Process', href: '/process' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Patient Portal', href: '/portal' },
];

let isMobileMenuOpen = false;

function getCurrentPath() {
  return window.location.pathname;
}

function isActive(href) {
  return getCurrentPath() === href;
}

function renderDesktopNavigation() {
  return navigationItems.map(item => {
    const isItemActive = isActive(item.href);
    const activeClass = isItemActive ? 'active' : '';

    return `
      <a href="${item.href}" class="nav-item ${activeClass}" data-route="${item.href}">
        ${item.name}
      </a>
    `;
  }).join('');
}

function updateNavbarActiveState() {
  const currentPath = getCurrentPath();
  const navItems = document.querySelectorAll('.nav-item');

  navItems.forEach(item => {
    const href = item.getAttribute('data-route') || item.getAttribute('href');
    if (href === currentPath) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

export function createNavbar() {
  return `
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-content">
          <div class="navbar-brand">
            ${createLogo('navbar-logo')}
            <a href="/">Myers Orthodontics</a>
          </div>

          <!-- Desktop Navigation -->
          <div class="navbar-desktop">
            <div class="navbar-nav">
              ${renderDesktopNavigation()}
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="navbar-mobile">
            <button type="button" 
                    id="mobile-menu-button"
                    class="mobile-menu-button"
                    aria-controls="mobile-menu"
                    aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <i data-lucide="menu" class="icon"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- TODO: MobileNav component will be rendered here -->
    <!-- <div id="mobile-nav-placeholder"></div> -->
  `;
}

export function initNavbar() {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
      toggleMobileMenu();
    });
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Set initial active state
  updateNavbarActiveState();

  // TODO: Mount child components when ready
  // initLogo('#logo-placeholder');
  // initMobileNav('#mobile-nav-placeholder');
}

export { updateNavbarActiveState };

function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  // TODO: Show/hide MobileNav component when ready
}