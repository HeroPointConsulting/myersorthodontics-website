import { siteData } from '../siteData.js';

// Extended treatment data with detailed information
const treatmentsDetailData = {
  'traditional-metal-braces': {
    ...siteData.treatments.detailed.find(t => t.slug === 'traditional-metal-braces'),
    longDescription: 'Traditional metal braces remain the gold standard in orthodontic treatment. Made from high-grade stainless steel, these braces are more comfortable and smaller than ever before. They are the most effective treatment for complex orthodontic cases and work well for patients of all ages.',
    cost: '$3,000 - $6,000',
    idealFor: [
      'Complex orthodontic cases',
      'Budget-conscious patients',
      'Children and teens',
      'Severe misalignment'
    ],
    pros: [
      'Most effective for complex cases',
      'Most affordable option',
      'Faster treatment time',
      'Works for all age groups',
      'Highly durable'
    ],
    cons: [
      'Most noticeable option',
      'May cause initial discomfort',
      'Food restrictions apply',
      'Requires excellent oral hygiene'
    ],
    process: [
      'Initial consultation and X-rays',
      'Teeth cleaning and preparation',
      'Bracket placement and wire insertion',
      'Regular adjustments every 4-6 weeks',
      'Removal and retainer fitting'
    ]
  },
  'clear-ceramic-braces': {
    ...siteData.treatments.detailed.find(t => t.slug === 'clear-ceramic-braces'),
    longDescription: 'Ceramic braces offer the same effectiveness as traditional metal braces but with a more aesthetic appearance. The clear or tooth-colored brackets blend seamlessly with your natural teeth, making them much less noticeable while maintaining excellent treatment results.',
    cost: '$4,000 - $8,000',
    idealFor: [
      'Image-conscious adults',
      'Professional environments',
      'Special events during treatment',
      'Moderate to complex cases'
    ],
    pros: [
      'Much less visible than metal',
      'Same effectiveness as metal braces',
      'Stain-resistant materials',
      'Comfortable fit',
      'Works for complex cases'
    ],
    cons: [
      'More expensive than metal',
      'Slightly larger than metal brackets',
      'Potential for bracket breakage',
      'Longer treatment time possible'
    ],
    process: [
      'Comprehensive consultation',
      'Digital impressions and planning',
      'Custom ceramic bracket placement',
      'Monthly adjustment appointments',
      'Gradual bracket removal and retention'
    ]
  },
  'invisalign-clear-aligners': {
    ...siteData.treatments.detailed.find(t => t.slug === 'invisalign-clear-aligners'),
    longDescription: 'Invisalign uses a series of custom-made, clear plastic aligners to gradually move your teeth into their ideal positions. These virtually invisible aligners are removable, allowing you to eat, drink, and maintain your oral hygiene routine without restrictions.',
    cost: '$4,000 - $8,000',
    idealFor: [
      'Mild to moderate cases',
      'Adult professionals',
      'Active lifestyles',
      'Image-conscious patients'
    ],
    pros: [
      'Virtually invisible',
      'Completely removable',
      'No food restrictions',
      'Easy to maintain oral hygiene',
      'Comfortable with no metal',
      'Fewer office visits'
    ],
    cons: [
      'Requires discipline to wear 20-22 hours/day',
      'Not suitable for complex cases',
      'More expensive than traditional braces',
      'Can be lost or damaged',
      'May cause slight lisp initially'
    ],
    process: [
      '3D digital scan of your teeth',
      'Custom treatment plan creation',
      'Series of aligners fabricated',
      'Wear each aligner for 1-2 weeks',
      'Progress monitoring every 6-8 weeks'
    ]
  },
  'lingual-braces': {
    ...siteData.treatments.detailed.find(t => t.slug === 'lingual-braces'),
    longDescription: 'Lingual braces are custom-made brackets and wires that are placed on the inside (tongue-side) of your teeth, making them completely invisible from the outside. This advanced treatment option provides all the benefits of traditional braces while maintaining a natural appearance.',
    cost: '$8,000 - $12,000',
    idealFor: [
      'Complete invisibility requirements',
      'Professional careers',
      'Public speakers',
      'Musicians'
    ],
    pros: [
      '100% invisible from outside',
      'Custom-made for precise fit',
      'Effective for complex cases',
      'No risk of white spots on front teeth',
      'No lifestyle restrictions'
    ],
    cons: [
      'Most expensive option',
      'Initial speech adjustment period',
      'Tongue irritation possible',
      'Difficult to clean',
      'Longer treatment time',
      'Not suitable for all cases'
    ],
    process: [
      'Detailed impressions and bite analysis',
      'Custom bracket fabrication (4-6 weeks)',
      'Precise bracket placement procedure',
      'Adjustment appointments every 6-8 weeks',
      'Careful removal and retention planning'
    ]
  }
};

export function createTreatmentDetailPage(slug) {
  const treatment = treatmentsDetailData[slug];

  if (!treatment) {
    return `
      <div class="treatment-not-found">
        <div class="treatment-not-found-container">
          <h1>Treatment Not Found</h1>
          <p>The treatment you're looking for doesn't exist.</p>
          <a href="/treatments" class="back-to-treatments" data-route="/treatments">
            Back to All Treatments
          </a>
        </div>
      </div>
    `;
  }

  return `
    <div class="treatment-detail-page">
      <!-- Navigation -->
      <div class="treatment-nav">
        <div class="treatment-nav-container">
          <a href="/treatments" class="treatment-back-link" data-route="/treatments">
            <i data-lucide="arrow-left" class="treatment-back-icon"></i>
            Back to All Treatments
          </a>
        </div>
      </div>

      <!-- Hero Section -->
      <section class="treatment-hero ${treatment.color}">
        <div class="treatment-hero-container">
          <div class="treatment-hero-content">
            <h1 class="treatment-hero-title">${treatment.name}</h1>
            <p class="treatment-hero-description">${treatment.longDescription}</p>
            <div class="treatment-hero-stats">
              <div class="treatment-stat">
                <i data-lucide="clock" class="treatment-stat-icon"></i>
                <div class="treatment-stat-label">Treatment Time</div>
                <div class="treatment-stat-value">${treatment.duration}</div>
              </div>
              <div class="treatment-stat">
                <i data-lucide="star" class="treatment-stat-icon"></i>
                <div class="treatment-stat-label">Investment</div>
                <div class="treatment-stat-value">${treatment.cost}</div>
              </div>
              <div class="treatment-stat">
                <i data-lucide="users" class="treatment-stat-icon"></i>
                <div class="treatment-stat-label">Ideal For</div>
                <div class="treatment-stat-value">All Ages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Key Benefits -->
      <section class="treatment-benefits-section">
        <div class="treatment-benefits-container">
          <h2 class="treatment-benefits-title">Key Benefits</h2>
          <div class="treatment-benefits-grid">
            ${treatment.features.map(feature => `
              <div class="treatment-benefit-card">
                <i data-lucide="check" class="treatment-benefit-icon"></i>
                <h3 class="treatment-benefit-title">${feature}</h3>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Pros and Cons -->
      <section class="treatment-pros-cons">
        <div class="treatment-pros-cons-container">
          <h2 class="treatment-pros-cons-title">Pros & Cons</h2>
          <div class="treatment-pros-cons-grid">
            <!-- Pros -->
            <div class="treatment-pros">
              <h3 class="treatment-pros-title">Advantages</h3>
              <ul class="treatment-pros-list">
                ${treatment.pros.map(pro => `
                  <li class="treatment-pro-item">
                    <i data-lucide="check" class="treatment-pro-icon"></i>
                    <span>${pro}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
            
            <!-- Cons -->
            <div class="treatment-cons">
              <h3 class="treatment-cons-title">Considerations</h3>
              <ul class="treatment-cons-list">
                ${treatment.cons.map(con => `
                  <li class="treatment-con-item">
                    <i data-lucide="alert-circle" class="treatment-con-icon"></i>
                    <span>${con}</span>
                  </li>
                `).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Treatment Process -->
      <section class="treatment-process-section">
        <div class="treatment-process-container">
          <h2 class="treatment-process-title">Treatment Process</h2>
          <div class="treatment-process-steps">
            ${treatment.process.map((step, index) => `
              <div class="treatment-process-step">
                <div class="treatment-process-number">${index + 1}</div>
                <div class="treatment-process-content">
                  <p>${step}</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Ideal Candidates -->
      <section class="treatment-candidates">
        <div class="treatment-candidates-container">
          <h2 class="treatment-candidates-title">Is This Treatment Right for You?</h2>
          <p class="treatment-candidates-description">
            ${treatment.name} is ideal for:
          </p>
          <div class="treatment-candidates-grid">
            ${treatment.idealFor.map(candidate => `
              <div class="treatment-candidate-item">
                <i data-lucide="check" class="treatment-candidate-icon"></i>
                <span>${candidate}</span>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="treatment-detail-cta">
        <div class="treatment-detail-cta-container">
          <h2 class="treatment-detail-cta-title">
            Ready to Get Started with ${treatment.name}?
          </h2>
          <p class="treatment-detail-cta-description">
            Schedule your free consultation today to discuss if 
            ${treatment.name.toLowerCase()} is the right choice for your smile transformation.
          </p>
          <div class="treatment-detail-cta-buttons">
            <a href="/schedule" class="treatment-detail-cta-primary" data-route="/schedule">
              <i data-lucide="calendar" class="treatment-cta-icon"></i>
              Schedule Free Consultation
            </a>
            <a href="/contact" class="treatment-detail-cta-secondary" data-route="/contact">
              Ask Questions
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initTreatmentDetailPage() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
} 