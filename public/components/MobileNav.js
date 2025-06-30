let isOpen = false;

export function createMobileNav() {
  if (!isOpen) return '';

  return `
    <div class="mobile-nav-overlay open">
      <!-- Backdrop -->
      <div class="mobile-nav-backdrop" id="mobile-nav-backdrop"></div>

      <!-- Mobile navigation panel -->
      <div class="mobile-nav-panel">
        <!-- Header -->
        <div class="mobile-nav-header">
          <div class="mobile-nav-logo">
            <!-- Logo placeholder -->
            <div class="logo-text">M | O</div>
            <a href="/" class="brand-text">
              Myers Orthodontics
            </a>
          </div>

          <button type="button" 
                  id="mobile-nav-close"
                  class="mobile-nav-close">
            <i data-lucide="x" class="icon"></i>
          </button>
        </div>

        <!-- Navigation items -->
        <div class="mobile-nav-content">
          <nav class="mobile-nav-items">
            <!-- TODO: Add navigation items -->
          </nav>
        </div>
      </div>
    </div>
  `;
}

export function openMobileNav() {
  isOpen = true;
}

export function closeMobileNav() {
  isOpen = false;
}

export function initMobileNav() {
  if (isOpen && typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}