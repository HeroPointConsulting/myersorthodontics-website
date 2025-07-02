import { siteData } from '../siteData.js';

export function createReferralForm() {
  return `
    <section id="referral-form" class="referral-form-section">
      <div class="referral-form-container">
        <div class="referral-form-header">
          <h2 class="referral-form-title">Submit a Patient Referral</h2>
          <p class="referral-form-description">
            Please complete this form to refer a patient to Myers Orthodontics. 
            All information is kept confidential and secure.
          </p>
        </div>

        <div class="referral-form-content">
          <form class="referral-form" id="referral-form">
            <!-- Referring Practice Information -->
            <div class="referral-form-group">
              <h3 class="referral-form-group-title">
                <i data-lucide="building" class="referral-form-group-icon"></i>
                Referring Practice Information
              </h3>
              
              <div class="referral-form-grid">
                <div class="referral-form-group">
                  <label for="practice-name" class="referral-form-label">Practice Name *</label>
                  <input 
                    type="text" 
                    id="practice-name" 
                    name="practiceName" 
                    class="referral-form-input" 
                    required
                  />
                </div>
                
                <div class="referral-form-group">
                  <label for="doctor-name" class="referral-form-label">Referring Doctor *</label>
                  <input 
                    type="text" 
                    id="doctor-name" 
                    name="doctorName" 
                    class="referral-form-input" 
                    required
                  />
                </div>
                
                <div class="referral-form-group">
                  <label for="practice-phone" class="referral-form-label">Practice Phone *</label>
                  <input 
                    type="tel" 
                    id="practice-phone" 
                    name="practicePhone" 
                    class="referral-form-input" 
                    required
                  />
                </div>
                
                <div class="referral-form-group">
                  <label for="practice-email" class="referral-form-label">Practice Email *</label>
                  <input 
                    type="email" 
                    id="practice-email" 
                    name="practiceEmail" 
                    class="referral-form-input" 
                    required
                  />
                </div>
              </div>
            </div>

            <!-- Patient Information -->
            <div class="referral-form-group">
              <h3 class="referral-form-group-title">
                <i data-lucide="user" class="referral-form-group-icon"></i>
                Patient Information
              </h3>
              
              <div class="referral-form-grid">
                <div class="referral-form-group">
                  <label for="patient-first-name" class="referral-form-label">Patient First Name *</label>
                  <input 
                    type="text" 
                    id="patient-first-name" 
                    name="patientFirstName" 
                    class="referral-form-input" 
                    required
                  />
                </div>
                
                <div class="referral-form-group">
                  <label for="patient-last-name" class="referral-form-label">Patient Last Name *</label>
                  <input 
                    type="text" 
                    id="patient-last-name" 
                    name="patientLastName" 
                    class="referral-form-input" 
                    required
                  />
                </div>
                
                <div class="referral-form-group">
                  <label for="patient-dob" class="referral-form-label">Date of Birth *</label>
                  <input 
                    type="date" 
                    id="patient-dob" 
                    name="patientDob" 
                    class="referral-form-input" 
                    required
                  />
                </div>
                
                <div class="referral-form-group">
                  <label for="patient-phone" class="referral-form-label">Patient Phone *</label>
                  <input 
                    type="tel" 
                    id="patient-phone" 
                    name="patientPhone" 
                    class="referral-form-input" 
                    required
                  />
                </div>
                
                <div class="referral-form-group">
                  <label for="patient-email" class="referral-form-label">Patient Email</label>
                  <input 
                    type="email" 
                    id="patient-email" 
                    name="patientEmail" 
                    class="referral-form-input"
                  />
                </div>
                
                <div class="referral-form-group">
                  <label for="parent-name" class="referral-form-label">Parent/Guardian Name (if minor)</label>
                  <input 
                    type="text" 
                    id="parent-name" 
                    name="parentName" 
                    class="referral-form-input"
                  />
                </div>
              </div>
            </div>

            <!-- Clinical Information -->
            <div class="referral-form-group">
              <h3 class="referral-form-group-title">
                <i data-lucide="clipboard" class="referral-form-group-icon"></i>
                Clinical Information
              </h3>
              
              <div class="referral-form-grid">
                <div class="referral-form-group">
                  <label for="referral-reason" class="referral-form-label">Reason for Referral *</label>
                  <select id="referral-reason" name="referralReason" class="referral-form-select" required>
                    <option value="">Select reason...</option>
                    <option value="crowding">Crowding</option>
                    <option value="spacing">Spacing</option>
                    <option value="overbite">Overbite</option>
                    <option value="underbite">Underbite</option>
                    <option value="crossbite">Crossbite</option>
                    <option value="early-treatment">Early Treatment (Interceptive)</option>
                    <option value="surgical-case">Surgical Case</option>
                    <option value="consultation">General Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div class="referral-form-group">
                  <label for="urgency" class="referral-form-label">Urgency Level *</label>
                  <select id="urgency" name="urgency" class="referral-form-select" required>
                    <option value="">Select urgency...</option>
                    <option value="routine">Routine</option>
                    <option value="urgent">Urgent (within 1 week)</option>
                    <option value="emergency">Emergency (same day)</option>
                  </select>
                </div>
              </div>
              
              <div class="referral-form-group">
                <label for="clinical-notes" class="referral-form-label">Clinical Notes/Observations</label>
                <textarea 
                  id="clinical-notes" 
                  name="clinicalNotes" 
                  class="referral-form-textarea" 
                  rows="4"
                  placeholder="Please provide any relevant clinical observations, treatment preferences, or special considerations..."
                ></textarea>
              </div>
            </div>

            <!-- Preferred Contact & Scheduling -->
            <div class="referral-form-group">
              <h3 class="referral-form-group-title">
                <i data-lucide="calendar" class="referral-form-group-icon"></i>
                Scheduling Preferences
              </h3>
              
              <div class="referral-form-grid">
                <div class="referral-form-group">
                  <label for="preferred-contact" class="referral-form-label">Patient's Preferred Contact Method</label>
                  <select id="preferred-contact" name="preferredContact" class="referral-form-select">
                    <option value="phone">Phone</option>
                    <option value="email">Email</option>
                    <option value="text">Text Message</option>
                  </select>
                </div>
                
                <div class="referral-form-group">
                  <label for="preferred-time" class="referral-form-label">Preferred Appointment Time</label>
                  <select id="preferred-time" name="preferredTime" class="referral-form-select">
                    <option value="">No preference</option>
                    <option value="morning">Morning (8am-12pm)</option>
                    <option value="afternoon">Afternoon (12pm-5pm)</option>
                    <option value="after-school">After School (3pm-5pm)</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Alternative Contact Methods -->
            <div class="referral-form-group">
              <h3 class="referral-form-group-title">
                <i data-lucide="phone" class="referral-form-group-icon"></i>
                Alternative Contact Methods
              </h3>
              <div class="referral-alternative-methods">
                <div class="referral-alternative-method">
                  <strong>Call our referral line:</strong>
                  <a href="${siteData.contact.phone.link}" class="referral-phone-link">
                    ${siteData.contact.phone.formatted}
                  </a>
                </div>
                <div class="referral-alternative-method">
                  <strong>Email us directly:</strong>
                  <a href="mailto:${siteData.contact.email.referrals}" class="referral-email-link">
                    ${siteData.contact.email.referrals}
                  </a>
                </div>
              </div>
            </div>

            <!-- Submit Button -->
            <div class="referral-form-actions">
              <button type="submit" class="referral-form-submit" id="referral-submit-btn">
                <i data-lucide="send" class="referral-form-submit-icon"></i>
                Submit Referral
              </button>
              
              <p class="referral-form-privacy">
                By submitting this form, you acknowledge that the information will be 
                used solely for the purpose of coordinating patient care and will be 
                kept confidential in accordance with HIPAA regulations.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

export function initReferralForm() {
  const form = document.getElementById('referral-form');
  const submitBtn = document.getElementById('referral-submit-btn');

  if (form && submitBtn) {
    form.addEventListener('submit', handleReferralSubmit);
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Add form validation
  addReferralFormValidation();
}

function handleReferralSubmit(e) {
  e.preventDefault();

  const submitBtn = document.getElementById('referral-submit-btn');
  const form = e.target;

  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i data-lucide="loader-2" class="animate-spin"></i> Submitting...';

  // Simulate form submission (replace with actual API call)
  setTimeout(() => {
    // Reset button
    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i data-lucide="send"></i> Submit Referral';

    // Show success message
    showReferralSuccess();

    // Reset form
    form.reset();

    // Re-initialize icons
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }, 2000);
}

function showReferralSuccess() {
  // Create success modal or notification
  const successModal = document.createElement('div');
  successModal.className = 'referral-success-modal';
  successModal.innerHTML = `
    <div class="referral-success-overlay"></div>
    <div class="referral-success-content">
      <div class="referral-success-icon">
        <i data-lucide="check-circle"></i>
      </div>
      <h3 class="referral-success-title">Referral Submitted Successfully!</h3>
      <p class="referral-success-message">
        Thank you for your referral. We will contact the patient within 24 hours 
        to schedule their consultation and send you a confirmation.
      </p>
      <button class="referral-success-close" onclick="this.closest('.referral-success-modal').remove()">
        Close
      </button>
    </div>
  `;

  document.body.appendChild(successModal);

  // Initialize icons in modal
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (successModal.parentNode) {
      successModal.remove();
    }
  }, 5000);
}

function addReferralFormValidation() {
  const inputs = document.querySelectorAll('.referral-form-input, .referral-form-select');

  inputs.forEach(input => {
    input.addEventListener('blur', validateField);
    input.addEventListener('input', clearFieldError);
  });
}

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();

  // Remove existing error
  clearFieldError(e);

  // Check required fields
  if (field.required && !value) {
    showFieldError(field, 'This field is required');
    return false;
  }

  // Validate email
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'Please enter a valid email address');
      return false;
    }
  }

  // Validate phone
  if (field.type === 'tel' && value) {
    const phoneRegex = /^[\d\s\-\(\)\+\.]+$/;
    if (!phoneRegex.test(value)) {
      showFieldError(field, 'Please enter a valid phone number');
      return false;
    }
  }

  return true;
}

function showFieldError(field, message) {
  field.classList.add('error');

  let errorElement = field.parentNode.querySelector('.referral-form-error');
  if (!errorElement) {
    errorElement = document.createElement('span');
    errorElement.className = 'referral-form-error';
    field.parentNode.appendChild(errorElement);
  }

  errorElement.textContent = message;
}

function clearFieldError(e) {
  const field = e.target;
  field.classList.remove('error');

  const errorElement = field.parentNode.querySelector('.referral-form-error');
  if (errorElement) {
    errorElement.remove();
  }
}
