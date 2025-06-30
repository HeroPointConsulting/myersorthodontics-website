const steps = [
  {
    step: 1,
    title: 'Consultation',
    text: 'Meet our team, discuss your goals, and receive a customized treatment plan.',
    color: 'process-step-teal',
    borderColor: 'process-border-teal',
  },
  {
    step: 2,
    title: 'Records',
    text: 'We take digital scans, photos, and X-rays to create your personalized roadmap.',
    color: 'process-step-lime',
    borderColor: 'process-border-lime',
  },
  {
    step: 3,
    title: 'Treatment',
    text: 'Regular visits to adjust your braces or receive new Invisalign aligners.',
    color: 'process-step-magenta',
    borderColor: 'process-border-magenta',
  },
  {
    step: 4,
    title: 'Retainers',
    text: 'Protect your investment with custom retainers to maintain your new smile.',
    color: 'process-step-teal',
    borderColor: 'process-border-teal',
  },
];

const financing = [
  'Interest-free in-house payment plans',
  'Third-party financing through CareCredit',
  'Insurance claims filed on your behalf',
  'Discounts for full payment upfront',
];

export function createProcessSection() {
  return `
    <section id="process" class="process-section">
      <div class="process-container">
        <div class="process-header">
          <h2 class="process-title">
            Our Patient Process
          </h2>
          <p class="process-subtitle">
            From your first visit to your final retainer check, we make
            orthodontic treatment <span class="process-highlight">simple</span> 
            and <span class="process-highlight">stress-free</span>.
          </p>
        </div>

        <!-- Steps -->
        <div class="process-steps-grid">
          ${steps.map(({ step, title, text, color, borderColor }) => `
            <div class="process-step-item">
              <div class="process-step-circle ${color}">
                <span class="process-step-number">${step}</span>
              </div>
              <h3 class="process-step-title">
                ${title}
              </h3>
              <p class="process-step-text">${text}</p>
              <div class="process-step-line ${borderColor}"></div>
            </div>
          `).join('')}
        </div>

        <!-- Learn More Button -->
        <div class="process-learn-more">
          <a href="/process" class="process-learn-more-button" data-route>
            <i data-lucide="arrow-right" class="process-learn-more-icon"></i>
            Learn More About Our Process
          </a>
        </div>

        <!-- Financing box -->
        <div class="process-financing-box">
          <div class="process-financing-content">
            <div class="process-financing-text">
              <h3 class="process-financing-title">
                Flexible Payment Options
              </h3>
              <p class="process-financing-description">
                We believe quality orthodontic care should be accessible to
                everyone. That's why we offer:
              </p>
              <ul class="process-financing-list">
                ${financing.map((item) => `
                  <li class="process-financing-item">
                    <i data-lucide="check" class="process-financing-check"></i>
                    <span class="process-financing-item-text">${item}</span>
                  </li>
                `).join('')}
              </ul>
              <a href="/contact" class="process-financing-button">
                Ask About Financing
              </a>
            </div>
            <div class="process-financing-image-section">
              <img
                src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=500&q=80"
                alt="Happy patient with braces"
                class="process-financing-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initProcessSection() {
  // Add hover effects for step items
  const stepItems = document.querySelectorAll('.process-step-item');
  stepItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.classList.add('hovered');
    });

    item.addEventListener('mouseleave', () => {
      item.classList.remove('hovered');
    });
  });

  // Add hover effects for financing box
  const financingBox = document.querySelector('.process-financing-box');
  if (financingBox) {
    financingBox.addEventListener('mouseenter', () => {
      financingBox.classList.add('hovered');
    });

    financingBox.addEventListener('mouseleave', () => {
      financingBox.classList.remove('hovered');
    });
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    console.warn('Lucide icons library not found. Please include it in your HTML.');
  }
} 