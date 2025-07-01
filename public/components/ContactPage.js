import { createContactForm, initContactForm } from './ContactForm.js';
import { siteData } from '../siteData.js';

export function createContactPage() {
  const { contact, faq } = siteData;

  return `
    <div class="contact-page">
      <!-- Hero Section -->
      <section class="contact-hero">
        <div class="contact-hero-container">
          <div class="contact-hero-content">
            <h1 class="contact-hero-title">
              Contact Us
            </h1>
            <p class="contact-hero-description">
              Ready to start your orthodontic journey? We're here to answer your
              questions and help you schedule your consultation. Get in touch
              with us today!
            </p>
          </div>
        </div>
      </section>

      <!-- Contact Form Section -->
      <div id="contact-form-container"></div>

      <!-- Location & Directions -->
      <section class="contact-location">
        <div class="contact-location-container">
          <div class="contact-location-header">
            <h2 class="contact-location-title">
              Visit Our Office
            </h2>
            <p class="contact-location-description">
              Conveniently located in Noblesville with easy access and parking.
            </p>
          </div>

          <div class="contact-location-grid">
            <!-- Interactive Map -->
            <div class="contact-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3059.8674433066806!2d-85.97844842342877!3d39.9999616711842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814b7b3e3c3c3c3%3A0x0!2s14540%20Prairie%20Lakes%20Blvd%20N%2C%20Noblesville%2C%20IN%2046060!5e0!3m2!1sen!2sus!4v1640995200000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style="border: 0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                title="Myers Orthodontics Office Location"
              ></iframe>
            </div>

            <!-- Office Details -->
            <div class="contact-office-details">
              <h3 class="contact-office-title">
                Office Information
              </h3>

              <div class="contact-office-info">
                <div class="contact-info-section">
                  <h4 class="contact-info-heading">Address</h4>
                  <p class="contact-info-address">${contact.address.full}</p>
                </div>

                <div class="contact-info-section">
                  <h4 class="contact-info-heading">Parking</h4>
                  <p class="contact-info-text">
                    Free parking available in our dedicated lot with handicap
                    accessible spaces.
                  </p>
                </div>

                <div class="contact-info-section">
                  <h4 class="contact-info-heading">Public Transportation</h4>
                  <p class="contact-info-text">
                    Conveniently located near bus stops and metro stations for
                    easy access.
                  </p>
                </div>

                <div class="contact-info-section">
                  <h4 class="contact-info-heading">Accessibility</h4>
                  <p class="contact-info-text">
                    Our office is fully ADA compliant with wheelchair
                    accessibility and accommodations.
                  </p>
                </div>
              </div>

              <div class="contact-directions">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address.full)}"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="contact-directions-btn"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Emergency Contact -->
      <section class="contact-emergency">
        <div class="contact-emergency-container">
          <div class="contact-emergency-card">
            <h2 class="contact-emergency-title">
              Orthodontic Emergency?
            </h2>
            <p class="contact-emergency-description">
              If you're experiencing an orthodontic emergency outside of
              normal business hours, don't hesitate to contact us. We're here
              to help 24/7.
            </p>

            <div class="contact-emergency-grid">
              <div class="contact-emergency-item">
                <h3 class="contact-emergency-item-title">Emergency Hotline</h3>
                <a href="${contact.phone.link}" class="contact-emergency-phone">
                  ${contact.phone.formatted}
                </a>
                <p class="contact-emergency-availability">Available 24/7</p>
              </div>

              <div class="contact-emergency-item">
                <h3 class="contact-emergency-item-title">Text Support</h3>
                <a href="${contact.phone.link}" class="contact-emergency-phone">
                  ${contact.phone.formatted}
                </a>
                <p class="contact-emergency-availability">Response within 30 mins</p>
              </div>
            </div>

            <div class="contact-emergency-info">
              <p class="contact-emergency-info-text">
                Common emergencies include: broken brackets, loose wires,
                severe discomfort, or appliance damage. We'll provide
                immediate guidance and schedule urgent care if needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="contact-faq">
        <div class="contact-faq-container">
          <div class="contact-faq-header">
            <h2 class="contact-faq-title">
              Frequently Asked Questions
            </h2>
            <p class="contact-faq-description">
              Quick answers to common questions about contacting our office.
            </p>
          </div>

          <div class="contact-faq-list">
            ${faq.map((item, index) => `
              <div class="contact-faq-item">
                <h3 class="contact-faq-question">
                  ${item.question}
                </h3>
                <p class="contact-faq-answer">${item.answer}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initContactPage() {
  // Mount the contact form
  const contactFormContainer = document.getElementById('contact-form-container');
  if (contactFormContainer) {
    contactFormContainer.innerHTML = createContactForm();
    initContactForm();
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Add any additional contact page specific interactivity here
} 