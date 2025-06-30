import { siteData } from '../siteData.js';

export function createTreatmentsPage() {
  const { treatments } = siteData;

  return `
    <div class="treatments-page">
      <!-- Hero Section -->
      <section class="treatments-hero">
        <div class="treatments-hero-container">
          <div class="treatments-hero-content">
            <h1 class="treatments-hero-title">
              Treatment Options
            </h1>
            <p class="treatments-hero-description">
              Discover the perfect orthodontic solution for your smile. We offer
              a comprehensive range of modern treatments to meet your unique
              needs and lifestyle.
            </p>
          </div>
        </div>
      </section>

      <!-- Treatments Grid -->
      <section class="treatments-grid-section">
        <div class="treatments-grid-container">
          <div class="treatments-grid">
            ${treatments.detailed.map(treatment => `
              <div class="treatment-card">
                <div class="treatment-header ${treatment.color}">
                  <h3 class="treatment-name">${treatment.name}</h3>
                  <p class="treatment-description">${treatment.description}</p>
                </div>
                <div class="treatment-content">
                  <div class="treatment-benefits">
                    <h4 class="treatment-benefits-title">Key Benefits:</h4>
                    <ul class="treatment-benefits-list">
                      ${treatment.features.map(feature => `
                        <li class="treatment-benefit-item">
                          <i data-lucide="check" class="treatment-check-icon"></i>
                          ${feature}
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                  <div class="treatment-footer">
                    <div class="treatment-duration">
                      <span class="treatment-duration-label">Treatment Duration:</span>
                      <div class="treatment-duration-value">${treatment.duration}</div>
                    </div>
                    <a href="/treatments/${treatment.slug}" 
                       class="treatment-learn-more"
                       data-route="/treatments/${treatment.slug}">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Treatment Process -->
      <section class="treatments-process">
        <div class="treatments-process-container">
          <div class="treatments-process-header">
            <h2 class="treatments-process-title">What to Expect</h2>
            <p class="treatments-process-description">
              Your orthodontic journey is carefully planned and monitored every
              step of the way.
            </p>
          </div>
          <div class="treatments-process-grid">
            ${treatments.process.map(step => `
              <div class="process-step">
                <div class="process-step-number ${step.color}">
                  ${step.step}
                </div>
                <h3 class="process-step-title">${step.title}</h3>
                <p class="process-step-description">${step.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="treatments-cta">
        <div class="treatments-cta-container">
          <h2 class="treatments-cta-title">Ready to Start Your Treatment?</h2>
          <p class="treatments-cta-description">
            Schedule your consultation today and take the first step toward your
            perfect smile. Our team is here to guide you through every step of
            your orthodontic journey.
          </p>
          <div class="treatments-cta-buttons">
            <a href="/schedule" class="treatments-cta-primary" data-route="/schedule">
              Schedule Consultation
            </a>
            <a href="/contact" class="treatments-cta-secondary" data-route="/contact">
              Ask Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initTreatmentsPage() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
} 