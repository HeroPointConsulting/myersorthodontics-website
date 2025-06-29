// import { Logo } from './Logo.js'; // TODO: Create Logo component
// import { MobileNav } from './MobileNav.js'; // TODO: Create MobileNav component

const navigationItems = [
  { name: 'About', href: '/about' },
  { name: 'Treatments', href: '/treatments' },
  { name: 'Our Process', href: '/our-process' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Patient Portal', href: '/portal' },
];

export class Navbar {
  constructor() {
    this.isMobileMenuOpen = false;
    this.currentPath = window.location.pathname;
    // this.logo = new Logo(); // TODO: Uncomment when Logo is ready
    // this.mobileNav = new MobileNav(); // TODO: Uncomment when MobileNav is ready
  }

  getCurrentPath() {
    return window.location.pathname;
  }

  isActive(href) {
    return this.getCurrentPath() === href;
  }

  renderDesktopNavigation() {
    return navigationItems.map(item => {
      const isActive = this.isActive(item.href);
      const activeClass = isActive ? 'active' : '';

      return `
        <a href="${item.href}" class="nav-item ${activeClass}">
          ${item.name}
        </a>
      `;
    }).join('');
  }

  render() {
    return `
      <nav class="navbar">
        <div class="navbar-container">
          <div class="navbar-content">
            <div class="navbar-brand">
              <!-- <div id="logo-placeholder"></div> --> <!-- TODO: Logo component -->
              <a href="/" class="navbar-logo">M | O</a>
              <a href="/">Myers Orthodontics</a>
            </div>

            <!-- Desktop Navigation -->
            <div class="navbar-desktop">
              <div class="navbar-nav">
                ${this.renderDesktopNavigation()}
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

  attachEventListeners() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', () => {
        this.toggleMobileMenu();
      });
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    console.log('Mobile menu toggled:', this.isMobileMenuOpen);
    // TODO: Show/hide MobileNav component when ready
  }

  mount(selector) {
    const container = document.querySelector(selector);
    container.innerHTML = this.render();
    this.attachEventListeners();

    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // TODO: Mount child components when ready
    // this.logo.mount('#logo-placeholder');
    // this.mobileNav.mount('#mobile-nav-placeholder');
  }
}