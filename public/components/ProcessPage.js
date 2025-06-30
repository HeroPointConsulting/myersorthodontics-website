import { siteData } from '../siteData.js';

export function createProcessPage() {
  const { detailedProcess = [] } = siteData.treatments || {};
  const { technology = [], processFaq = [] } = siteData || {};

  return `
    <div class="process-page">
      <!-- Hero Section -->
      <section class="process-hero">
        <div class="process-hero-container">
          <div class="process-hero-content">
            <h1 class="process-hero-title">
              Our Treatment Process
            </h1>
            <p class="process-hero-subtitle">
              From your first consultation to your final retainer check-up, we
              guide you through every step of your orthodontic journey with care
              and expertise.
            </p>
          </div>
        </div>
      </section>

      <!-- Process Steps -->
      <section class="process-steps-section">
        <div class="process-steps-container">
          <div class="process-detailed-steps-grid">
            ${detailedProcess.map((step, index) => `
              <div class="process-step-row ${index % 2 === 1 ? 'reverse' : ''}">
                <div class="process-step-card">
                  <div class="process-step-info ${step.bgColor}">
                    <div class="process-step-header">
                      <div class="process-step-number-wrapper">
                        <i data-lucide="circle" class="process-step-circle-icon"></i>
                        <span class="process-step-number">${step.id}</span>
                      </div>
                      <div class="process-step-title-group">
                        <h3 class="process-step-title">${step.title}</h3>
                        <p class="process-step-duration">Duration: ${step.duration}</p>
                      </div>
                    </div>
                    <p class="process-step-description">${step.description}</p>
                  </div>
                </div>

                <div class="process-step-details">
                  <div class="process-step-details-content">
                    <h4 class="process-step-details-title">What to Expect:</h4>
                    <ul class="process-step-details-list">
                      ${step.details.map(detail => `
                        <li class="process-step-detail-item">
                          <i data-lucide="check-circle" class="process-step-check"></i>
                          <span class="process-step-detail-text">${detail}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Technology Section -->
      <section class="process-technology-section">
        <div class="process-technology-container">
          <div class="process-technology-header">
            <h2 class="process-technology-title">Advanced Technology</h2>
            <p class="process-technology-subtitle">
              We use state-of-the-art technology to ensure precise treatment
              planning and optimal results.
            </p>
          </div>

          <div class="process-technology-grid">
            ${technology.map(tech => `
              <div class="process-technology-card">
                <div class="process-technology-icon ${tech.color}">
                  <i data-lucide="${tech.icon.toLowerCase()}" class="tech-icon"></i>
                </div>
                <h3 class="process-technology-card-title">${tech.title}</h3>
                <p class="process-technology-card-description">${tech.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="process-faq-section">
        <div class="process-faq-container">
          <div class="process-faq-header">
            <h2 class="process-faq-title">Frequently Asked Questions</h2>
          </div>

          <div class="process-faq-list">
            ${processFaq.map(faq => `
              <div class="process-faq-item">
                <h3 class="process-faq-question">${faq.question}</h3>
                <p class="process-faq-answer">${faq.answer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="process-cta-section">
        <div class="process-cta-container">
          <div class="process-cta-content">
            <h2 class="process-cta-title">Ready to Start Your Orthodontic Journey?</h2>
            <p class="process-cta-subtitle">
              Schedule your free consultation today to learn more about our
              process and discover which treatment option is right for you.
            </p>
            <a href="/schedule" class="process-cta-button" data-route>
              <i data-lucide="calendar" class="process-cta-icon"></i>
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initProcessPage() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Add smooth scrolling for any internal links
  const processLinks = document.querySelectorAll('.process-page a[href^="#"]');
  processLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add animation on scroll for process steps
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);

  // Observe all process step rows
  const processStepRows = document.querySelectorAll('.process-step-row');
  processStepRows.forEach(row => {
    observer.observe(row);
  });

  // Observe technology cards
  const techCards = document.querySelectorAll('.process-technology-card');
  techCards.forEach(card => {
    observer.observe(card);
  });

  // Add hover effects for technology cards
  techCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });

    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });

  // FAQ accordion functionality
  const faqItems = document.querySelectorAll('.process-faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.process-faq-question');
    const answer = item.querySelector('.process-faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all other FAQ items
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
} 