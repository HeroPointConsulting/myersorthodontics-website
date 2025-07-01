import { siteData } from '../siteData.js';

export function createSchedulePage() {
  const { contact, schedule } = siteData;

  return `
    <div class="schedule-page">
      <!-- Hero Section -->
      <section class="schedule-hero">
        <div class="schedule-hero-container">
          <div class="schedule-hero-content">
            <h1 class="schedule-hero-title">
              Schedule Your Consultation
            </h1>
            <p class="schedule-hero-description">
              Take the first step toward your perfect smile. Schedule your
              complimentary consultation and discover how orthodontic treatment
              can transform your confidence and oral health.
            </p>
          </div>
        </div>
      </section>

      <!-- Appointment Form Section -->
      <section class="schedule-form-section">
        <div class="schedule-form-container">
          <div class="schedule-content-grid">
            <!-- Appointment Form -->
            <div class="schedule-form-wrapper">
              <div class="schedule-form-card">
                <h2 class="schedule-form-title">
                  Request Your Appointment
                </h2>

                <form id="appointment-form" class="schedule-form">
                  <div class="form-row">
                    <div class="form-group">
                      <label for="firstName" class="form-label">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        class="form-input"
                      />
                    </div>

                    <div class="form-group">
                      <label for="lastName" class="form-label">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        class="form-input"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="email" class="form-label">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        class="form-input"
                      />
                    </div>

                    <div class="form-group">
                      <label for="phone" class="form-label">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        class="form-input"
                      />
                    </div>
                  </div>

                  <div class="form-row">
                    <div class="form-group">
                      <label for="age" class="form-label">
                        Age
                      </label>
                      <input
                        type="number"
                        id="age"
                        name="age"
                        min="1"
                        max="120"
                        class="form-input"
                      />
                    </div>

                    <div class="form-group">
                      <label for="preferredDate" class="form-label">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        id="preferredDate"
                        name="preferredDate"
                        class="form-input"
                        min="${new Date().toISOString().split('T')[0]}"
                      />
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="preferredTime" class="form-label">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      class="form-select"
                    >
                      <option value="">Select preferred time</option>
                      ${schedule.timeSlots.map(slot => `
                        <option value="${slot.value}">${slot.label}</option>
                      `).join('')}
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="message" class="form-label">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      class="form-textarea"
                      placeholder="Tell us about your orthodontic concerns or questions..."
                    ></textarea>
                  </div>

                  <button type="submit" class="form-submit-btn">
                    Request Appointment
                  </button>
                </form>
              </div>
            </div>

            <!-- Contact Info & Hours Sidebar -->
            <div class="schedule-sidebar">
              <div class="schedule-contact-card">
                <h3 class="schedule-contact-title">
                  Contact Information
                </h3>

                <div class="schedule-contact-list">
                  <div class="schedule-contact-item">
                    <div class="schedule-contact-icon-wrapper">
                      <i data-lucide="phone" class="schedule-contact-icon"></i>
                    </div>
                    <div class="schedule-contact-details">
                      <a href="${contact.phone.link}" class="schedule-contact-link">
                        ${contact.phone.formatted}
                      </a>
                      <p class="schedule-contact-description">
                        Call or text anytime
                      </p>
                    </div>
                  </div>

                  <div class="schedule-contact-item">
                    <div class="schedule-contact-icon-wrapper">
                      <i data-lucide="map-pin" class="schedule-contact-icon"></i>
                    </div>
                    <div class="schedule-contact-details">
                      <p class="schedule-contact-link">
                        ${contact.address.street}
                      </p>
                      <p class="schedule-contact-description">
                        ${contact.address.city}, ${contact.address.state} ${contact.address.zip}
                      </p>
                    </div>
                  </div>

                  <div class="schedule-contact-item">
                    <div class="schedule-contact-icon-wrapper">
                      <i data-lucide="mail" class="schedule-contact-icon"></i>
                    </div>
                    <div class="schedule-contact-details">
                      <p class="schedule-contact-link">
                        ${contact.email.main}
                      </p>
                      <p class="schedule-contact-description">
                        We'll respond within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="schedule-hours-card">
                <h3 class="schedule-hours-title">
                  Office Hours
                </h3>

                <div class="schedule-hours-list">
                  <div class="schedule-hours-item">
                    <span class="schedule-hours-day">Monday - Thursday</span>
                    <span class="schedule-hours-time">${contact.hours.mondayThursday}</span>
                  </div>
                  <div class="schedule-hours-item">
                    <span class="schedule-hours-day">Friday</span>
                    <span class="schedule-hours-time">${contact.hours.friday}</span>
                  </div>
                  <div class="schedule-hours-item">
                    <span class="schedule-hours-day">Saturday</span>
                    <span class="schedule-hours-time">${contact.hours.saturday}</span>
                  </div>
                  <div class="schedule-hours-item">
                    <span class="schedule-hours-day">Sunday</span>
                    <span class="schedule-hours-time">${contact.hours.sunday}</span>
                  </div>
                </div>

                <div class="schedule-hours-note">
                  <p class="schedule-hours-note-text">
                    Emergency appointments available 24/7. Call our main
                    number for urgent dental needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- What to Expect Section -->
      <section class="schedule-expectations">
        <div class="schedule-expectations-container">
          <div class="schedule-expectations-header">
            <h2 class="schedule-expectations-title">
              What to Expect at Your First Visit
            </h2>
            <p class="schedule-expectations-description">
              Your initial consultation is comprehensive and designed to make
              you feel comfortable and informed.
            </p>
          </div>

          <div class="schedule-steps-grid">
            ${schedule.consultationSteps.map(step => `
              <div class="schedule-step-card">
                <div class="schedule-step-number ${step.color}">
                  ${step.step}
                </div>
                <h3 class="schedule-step-title">${step.title}</h3>
                <p class="schedule-step-description">${step.description}</p>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initSchedulePage() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Handle form submission
  const form = document.getElementById('appointment-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(form);
      const appointmentData = {};
      for (let [key, value] of formData.entries()) {
        appointmentData[key] = value;
      }

      // Log the form data (in a real app, this would be sent to a server)
      console.log('Appointment request submitted:', appointmentData);

      // Show success message
      alert('Thank you for your appointment request! We will contact you within 24 hours to confirm your appointment.');

      // Reset form
      form.reset();
    });
  }
} 