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
      const activeClass = isActive
        ? 'text-accent-teal font-medium bg-primary-light-gray'
        : 'text-primary-black';

      return `
        <a href="${item.href}" 
           class="text-sm cursor-pointer nav-item ${activeClass}">
          ${item.name}
        </a>
      `;
    }).join('');
  }

  render() {
    return `
      <nav class="bg-primary-white shadow-sm border-b">
        <div class="container mx-auto px-4">
          <div class="flex justify-between items-center h-16">
            <div class="flex-shrink-0 flex items-center gap-3">
              <!-- <div id="logo-placeholder"></div> --> <!-- TODO: Logo component -->
              <a href="/" class="font-montserrat font-bold text-2xl text-primary-black cursor-pointer hover:text-accent-teal transition-colors">
                M | O
              </a>
              <a href="/" class="font-montserrat font-bold text-2xl text-primary-black cursor-pointer hover:text-accent-teal transition-colors">
                Myers Orthodontics
              </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-6">
                ${this.renderDesktopNavigation()}
              </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button type="button" 
                      id="mobile-menu-button"
                      class="bg-primary-light-gray inline-flex items-center justify-center p-2 rounded-md text-primary-black hover:text-accent-teal hover:bg-primary-light-gray focus:outline-none focus:ring-2 focus:ring-inset transition-colors cursor-pointer"
                      aria-controls="mobile-menu"
                      aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <i data-lucide="menu" class="h-6 w-6"></i>
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