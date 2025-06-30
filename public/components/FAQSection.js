import { siteData } from '../siteData.js';

let openIndex = null;

export function createFAQSection() {
  const { faq } = siteData;

  return `
    <section class="faq-section">
      <div class="faq-container">
        <div class="faq-header">
          <h2 class="faq-title">
            Frequently Asked Questions
          </h2>
          <p class="faq-subtitle">
            Have questions about orthodontic treatment? We've got answers.
          </p>
        </div>

        <div class="faq-list">
          ${faq.map((item, index) => `
            <div class="faq-item" data-index="${index}">
              <button class="faq-question">
                <span class="faq-question-text">
                  ${item.question}
                </span>
                <i data-lucide="plus" class="faq-icon"></i>
              </button>
              <div class="faq-answer">
                <p class="faq-answer-text">
                  ${item.answer}
                </p>
              </div>
            </div>
          `).join('')}
        </div>

        <div class="faq-cta">
          <a href="/contact" class="faq-contact-link">
            <span>Still Have Questions? Contact Us</span>
            <i data-lucide="arrow-right" class="faq-contact-icon"></i>
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initFAQSection() {
  // Add click handlers for FAQ questions
  const faqButtons = document.querySelectorAll('.faq-question');
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const faqItem = button.closest('.faq-item');
      const index = parseInt(faqItem.dataset.index);
      toggleFAQ(index);
    });
  });

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  } else {
    console.warn('Lucide icons library not found. Please include it in your HTML.');
  }
}

function toggleFAQ(index) {
  const wasOpen = openIndex === index;

  // Close previously open FAQ
  if (openIndex !== null) {
    const prevItem = document.querySelector(`.faq-item[data-index="${openIndex}"]`);
    if (prevItem) {
      const prevAnswer = prevItem.querySelector('.faq-answer');
      const prevIcon = prevItem.querySelector('.faq-icon');
      if (prevAnswer) prevAnswer.classList.remove('open');
      if (prevIcon) prevIcon.classList.remove('rotated');
    }
  }

  // Open new FAQ if it wasn't already open
  if (!wasOpen) {
    openIndex = index;
    const item = document.querySelector(`.faq-item[data-index="${index}"]`);
    if (item) {
      const answer = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');
      if (answer) answer.classList.add('open');
      if (icon) icon.classList.add('rotated');
    }
  } else {
    openIndex = null;
  }
} 