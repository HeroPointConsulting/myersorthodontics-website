import { siteData } from '../siteData.js';

export function createNewsletterSection() {
  const { social } = siteData.contact;

  return `
    <section class="newsletter-section">
      <div class="newsletter-container">
        <h2 class="newsletter-title">
          Stay Connected
        </h2>
        <p class="newsletter-description">
          Subscribe to our newsletter for orthodontic tips, practice updates,
          and special offers.
        </p>

        <form class="newsletter-form" id="newsletter-form">
          <div class="newsletter-form-group">
            <input
              type="email"
              id="newsletter-email"
              placeholder="Your email address"
              required
              class="newsletter-input"
            />
            <button
              type="submit"
              class="newsletter-button"
            >
              Subscribe
            </button>
          </div>
        </form>

        <div class="newsletter-social">
          <a
            href="${social.facebook.url}"
            class="newsletter-social-link"
            aria-label="${social.facebook.label}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i data-lucide="facebook" class="newsletter-social-icon"></i>
          </a>
          <a
            href="${social.instagram.url}"
            class="newsletter-social-link"
            aria-label="${social.instagram.label}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i data-lucide="instagram" class="newsletter-social-icon"></i>
          </a>
          <a
            href="${social.twitter.url}"
            class="newsletter-social-link"
            aria-label="${social.twitter.label}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg class="newsletter-social-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href="${social.youtube.url}"
            class="newsletter-social-link"
            aria-label="${social.youtube.label}"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i data-lucide="youtube" class="newsletter-social-icon"></i>
          </a>
        </div>
      </div>
    </section>
  `;
}

export function initNewsletterSection() {
  const form = document.getElementById('newsletter-form');
  if (form) {
    form.addEventListener('submit', handleNewsletterSubmit);
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

function handleNewsletterSubmit(event) {
  event.preventDefault();

  const emailInput = document.getElementById('newsletter-email');
  const email = emailInput.value.trim();

  if (!email) {
    alert('Please enter a valid email address.');
    return;
  }

  // TODO: Implement actual newsletter subscription logic
  // For now, just show a success message
  alert('Thank you for subscribing to our newsletter!');
  emailInput.value = '';

  // In a real implementation, you would:
  // 1. Send the email to your newsletter service API
  // 2. Handle success/error responses
  // 3. Show appropriate user feedback
} 