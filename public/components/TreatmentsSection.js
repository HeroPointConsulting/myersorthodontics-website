import { siteData } from '../siteData.js';

export class TreatmentsSection {
  constructor() {
    // Icon mapping - we'll use Lucide icons from CDN
    this.iconMap = {
      'Zap': 'zap',
      'Shield': 'shield',
      'Clock': 'clock',
      'MapPin': 'map-pin',
      'AlignLeft': 'align-left',
      'Stethoscope': 'stethoscope'
    };
  }

  render() {
    const { treatments } = siteData;

    return `
      <section id="treatments" class="treatments-section">
        <div class="treatments-container">
          <div class="treatments-header">
            <h2 class="treatments-title">
              Our Treatment Options
            </h2>
            <p class="treatments-subtitle">
              We offer a comprehensive range of orthodontic treatments to address
              all smile concerns for patients of all ages.
            </p>
          </div>

          <div class="treatments-grid">
            ${treatments.homepage.map((treatment) => `
              <div class="treatment-card" data-treatment="${treatment.title}">
                <div class="treatment-icon-container">
                  <i data-lucide="${this.iconMap[treatment.icon]}" class="treatment-icon"></i>
                </div>
                <div class="treatment-content">
                  <h3 class="treatment-title">
                    ${treatment.title}
                  </h3>
                  <p class="treatment-description">
                    ${treatment.description}
                  </p>
                  <a href="${treatment.href}" class="treatment-link">
                    Learn more
                    <i data-lucide="arrow-right" class="treatment-link-icon"></i>
                  </a>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="treatments-cta">
            <a href="/schedule" class="treatments-cta-button">
              Schedule Your Consultation
            </a>
          </div>
        </div>
      </section>
    `;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = this.render();
    this.setupEventListeners();
    this.initializeIcons();
  }

  setupEventListeners() {
    // Add hover effects if needed (handled by CSS)
    // Add any click handlers for analytics, etc.
    const treatmentCards = document.querySelectorAll('.treatment-card');
    treatmentCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
      });
    });
  }

  initializeIcons() {
    // Initialize Lucide icons if the library is available
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      console.warn('Lucide icons library not found. Please include it in your HTML.');
    }
  }
} 