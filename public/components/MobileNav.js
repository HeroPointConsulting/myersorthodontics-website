let isOpen = false;

const navigationItems = [
  { name: 'About', href: '/about' },
  { name: 'Treatments', href: '/treatments' },
  { name: 'Our Process', href: '/process' },
  { name: 'Schedule', href: '/schedule' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Our Team', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
  { name: 'Patient Portal', href: '/patient-portal' },
];

function getCurrentPath() {
  return window.location.pathname;
}

function isActive(href) {
  return getCurrentPath() === href;
}

export function createMobileNav() {
  if (!isOpen) return '';

  const navigationItemsHtml = navigationItems.map(item => {
    const isItemActive = isActive(item.href);
    const activeClass = isItemActive ? 'active' : '';

    return `
      <a href="${item.href}" 
         class="mobile-nav-item ${activeClass}" 
         data-route="${item.href}">
        ${item.name}
      </a>
    `;
  }).join('');

  return `
    <div class="mobile-nav-overlay open">
      <!-- Backdrop -->
      <div class="mobile-nav-backdrop" id="mobile-nav-backdrop"></div>

      <!-- Mobile navigation panel -->
      <div class="mobile-nav-panel">
        <!-- Header -->
        <div class="mobile-nav-header">
          <div class="mobile-nav-logo">
            <div class="logo-text">M | O</div>
            <a href="/" class="brand-text" data-route="/">
              Myers Orthodontics
            </a>
          </div>

          <button type="button" 
                  id="mobile-nav-close"
                  class="mobile-nav-close">
            <span class="sr-only">Close menu</span>
            <i data-lucide="x" class="icon"></i>
          </button>
        </div>

        <!-- Navigation items -->
        <div class="mobile-nav-content">
          <nav class="mobile-nav-items">
            ${navigationItemsHtml}
          </nav>
        </div>
      </div>
    </div>
  `;
}

export function openMobileNav() {
  isOpen = true;
  // Prevent body scroll when mobile nav is open
  document.body.style.overflow = 'hidden';
}

export function closeMobileNav() {
  isOpen = false;
  // Restore body scroll when mobile nav is closed
  document.body.style.overflow = '';
}

export function initMobileNav() {
  if (isOpen) {
    // Initialize Lucide icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Add event listeners
    const backdrop = document.getElementById('mobile-nav-backdrop');
    const closeButton = document.getElementById('mobile-nav-close');
    const navItems = document.querySelectorAll('.mobile-nav-item');

    // Close on backdrop click
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        closeMobileNav();
        updateMobileNavDisplay();
      });
    }

    // Close on close button click
    if (closeButton) {
      closeButton.addEventListener('click', () => {
        closeMobileNav();
        updateMobileNavDisplay();
      });
    }

    // Close on navigation item click
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        closeMobileNav();
        updateMobileNavDisplay();
      });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMobileNav();
        updateMobileNavDisplay();
      }
    });
  }
}

function updateMobileNavDisplay() {
  const mobileNavPlaceholder = document.getElementById('mobile-nav-placeholder');
  if (mobileNavPlaceholder) {
    mobileNavPlaceholder.innerHTML = createMobileNav();
    initMobileNav();
  }
}

export { isOpen, updateMobileNavDisplay };