import { siteData } from '../siteData.js';

export function createContactForm() {
  const { contactSubjects } = siteData;

  return `
    <section class="contact-form-section">
      <div class="contact-form-container">
        <div class="contact-form-header">
          <h2 class="contact-form-title">
            Send Us a Message
          </h2>
          <p class="contact-form-description">
            Ready to start your orthodontic journey? Fill out the form below and we'll get back to you within 1 business day.
          </p>
        </div>

        <div class="contact-form-wrapper">
          <form class="contact-form" id="contact-form">
            <div class="contact-form-grid">
              <div class="contact-form-group">
                <label for="firstName" class="contact-form-label">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  class="contact-form-input"
                  required
                />
              </div>

              <div class="contact-form-group">
                <label for="lastName" class="contact-form-label">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  class="contact-form-input"
                  required
                />
              </div>

              <div class="contact-form-group">
                <label for="email" class="contact-form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="contact-form-input"
                  required
                />
              </div>

              <div class="contact-form-group">
                <label for="phone" class="contact-form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="contact-form-input"
                />
              </div>

              <div class="contact-form-group contact-form-full-width">
                <label for="subject" class="contact-form-label">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  class="contact-form-select"
                  required
                >
                  ${contactSubjects.map(subject =>
    `<option value="${subject.value}">${subject.label}</option>`
  ).join('')}
                </select>
              </div>

              <div class="contact-form-group contact-form-full-width">
                <label for="message" class="contact-form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  class="contact-form-textarea"
                  placeholder="Tell us about your orthodontic goals and any questions you have..."
                  required
                ></textarea>
              </div>

              <div class="contact-form-group contact-form-full-width">
                <div class="contact-form-checkbox-group">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    class="contact-form-checkbox"
                  />
                  <label for="newsletter" class="contact-form-checkbox-label">
                    I'd like to receive updates about orthodontic tips and special offers
                  </label>
                </div>
              </div>
            </div>

            <div class="contact-form-actions">
              <button type="submit" class="contact-form-submit" id="submit-btn">
                <span class="contact-form-submit-text">Send Message</span>
                <span class="contact-form-submit-loading" style="display: none;">
                  <i data-lucide="loader-2" class="contact-form-spinner"></i>
                  Sending...
                </span>
              </button>
            </div>

            <div class="contact-form-success" id="success-message" style="display: none;">
              <div class="contact-form-success-content">
                <i data-lucide="check-circle" class="contact-form-success-icon"></i>
                <h3 class="contact-form-success-title">Message Sent Successfully!</h3>
                <p class="contact-form-success-text">
                  Thank you for contacting us. We'll get back to you within 1 business day.
                </p>
              </div>
            </div>

            <div class="contact-form-error" id="error-message" style="display: none;">
              <div class="contact-form-error-content">
                <i data-lucide="alert-circle" class="contact-form-error-icon"></i>
                <h3 class="contact-form-error-title">Oops! Something went wrong</h3>
                <p class="contact-form-error-text">
                  Please try again or call us directly at <a href="tel:+13172891750">(317) 289-1750</a>.
                </p>
              </div>
            </div>
          </form>

          <div class="contact-info-sidebar">
            <div class="contact-info-card">
              <h3 class="contact-info-title">Get in Touch</h3>
              
              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i data-lucide="phone" class="contact-icon"></i>
                </div>
                <div class="contact-info-content">
                  <h4 class="contact-info-label">Phone</h4>
                  <a href="tel:+13172891750" class="contact-info-link">
                    (317) 289-1750
                  </a>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i data-lucide="mail" class="contact-icon"></i>
                </div>
                <div class="contact-info-content">
                  <h4 class="contact-info-label">Email</h4>
                  <a href="mailto:info@myersortho.com" class="contact-info-link">
                    info@myersortho.com
                  </a>
                </div>
              </div>

              <div class="contact-info-item">
                <div class="contact-info-icon">
                  <i data-lucide="clock" class="contact-icon"></i>
                </div>
                <div class="contact-info-content">
                  <h4 class="contact-info-label">Office Hours</h4>
                  <div class="contact-info-hours">
                    <p>Mon-Thu: 8:00 AM - 5:00 PM</p>
                    <p>Fri: 8:00 AM - 3:00 PM</p>
                    <p>Sat: By Appointment</p>
                    <p>Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initContactForm() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  const form = document.getElementById('contact-form');
  const submitBtn = document.getElementById('submit-btn');
  const submitText = submitBtn.querySelector('.contact-form-submit-text');
  const submitLoading = submitBtn.querySelector('.contact-form-submit-loading');
  const successMessage = document.getElementById('success-message');
  const errorMessage = document.getElementById('error-message');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Show loading state
      submitText.style.display = 'none';
      submitLoading.style.display = 'inline-flex';
      submitBtn.disabled = true;

      // Hide previous messages
      successMessage.style.display = 'none';
      errorMessage.style.display = 'none';

      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      try {
        // Submit to API
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          // Show success message
          successMessage.style.display = 'block';
          form.reset();

          // Scroll to success message
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          throw new Error(result.message || 'Failed to send message');
        }
      } catch (error) {
        console.error('Contact form error:', error);
        // Show error message
        errorMessage.style.display = 'block';
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } finally {
        // Reset button state
        submitText.style.display = 'inline';
        submitLoading.style.display = 'none';
        submitBtn.disabled = false;

        // Reinitialize icons
        if (typeof lucide !== 'undefined') {
          lucide.createIcons();
        }
      }
    });
  }
} 