import { siteData } from '../siteData.js';

// Utility to generate slug from a job title
function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, '-');
}

export function createJobDetailPage(slug) {
  const job = (siteData.careers?.jobOpenings || []).find(j => slugify(j.title) === slug);

  if (!job) {
    return `
      <div class="job-not-found">
        <div class="job-not-found-container text-center">
          <h1>Position Not Found</h1>
          <p>The career opportunity you're looking for doesn't exist.</p>
          <a href="/careers" data-route="/careers" class="job-back-link">Back to Careers</a>
        </div>
      </div>
    `;
  }

  // Pick accent color based on job index for consistent styling
  const accentColors = ['teal', 'lime-green', 'magenta'];
  const jobIndex = (siteData.careers?.jobOpenings || []).findIndex(j => j === job);
  const chosenColor = accentColors[jobIndex % accentColors.length] || 'teal';
  const bgClass = `bg-accent-${chosenColor}`;

  const requirementsHtml = job.requirements.map(req => `
    <li class="job-requirement-item"><i data-lucide="check" class="mr-2"></i>${req}</li>
  `).join('');

  const responsibilitiesHtml = job.responsibilities.map(resp => `
    <li class="job-responsibility-item"><i data-lucide="check" class="mr-2"></i>${resp}</li>
  `).join('');

  return `
    <div class="job-detail-page">
      <!-- Navigation -->
      <div class="job-detail-nav">
        <a href="/careers" data-route="/careers" class="job-back-link">
          <i data-lucide="arrow-left" class="mr-2"></i>
          Back to Careers
        </a>
      </div>

      <!-- Hero Section -->
      <section class="job-hero ${job.color || ''}">
        <div class="job-hero-container">
          <h1 class="job-hero-title">${job.title}</h1>
          <p class="job-hero-description">${job.description}</p>

          <div class="job-hero-details-grid">
            <div class="job-hero-requirements">
              <h3 class="job-hero-subtitle">Requirements</h3>
              <ul>
                ${job.requirements.map(req => `<li><i data-lucide=\"check\" class=\"mr-2\"></i>${req}</li>`).join('')}
              </ul>
            </div>
            <div class="job-hero-responsibilities">
              <h3 class="job-hero-subtitle">Responsibilities</h3>
              <ul>
                ${job.responsibilities.map(resp => `<li><i data-lucide=\"check\" class=\"mr-2\"></i>${resp}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Application Form Section -->
      <section class="job-apply-section" id="apply">
        <div class="job-apply-container">
          <h2 class="job-apply-title">Apply for ${job.title}</h2>
          <form id="job-application-form" class="job-apply-form">
            <!-- Personal Information -->
            <div class="job-form-grid">
              <div class="job-field"><label class="job-input-label">First Name <span style="color:red">*</span></label><input type="text" name="firstName" required /></div>
              <div class="job-field"><label class="job-input-label">Last Name <span style="color:red">*</span></label><input type="text" name="lastName" required /></div>
              <div class="job-field"><label class="job-input-label">Email Address <span style="color:red">*</span></label><input type="email" name="email" required /></div>
              <div class="job-field"><label class="job-input-label">Phone Number <span style="color:red">*</span></label><input type="tel" name="phone" required /></div>
              <div class="job-field"><label class="job-input-label">Address</label><input type="text" name="address" /></div>
              <div class="job-field"><label class="job-input-label">City</label><input type="text" name="city" /></div>
              <div class="job-field"><label class="job-input-label">State</label><input type="text" name="state" /></div>
              <div class="job-field"><label class="job-input-label">ZIP Code</label><input type="text" name="zipCode" /></div>
              <div class="job-field"><label class="job-input-label">LinkedIn Profile</label><input type="url" name="linkedinProfile" /></div>
            </div>

            <!-- Additional Information -->
            <label class="job-input-label" for="previousExperience">Previous Experience in Orthodontics / Dental Field</label>
            <textarea name="previousExperience" id="previousExperience" rows="4" placeholder="Previous Experience in Orthodontics / Dental Field"></textarea>

            <div class="job-form-grid">
              <div class="job-field"><label class="job-input-label">Available Start Date</label><input type="date" name="availableStartDate" /></div>
              <div class="job-field"><label class="job-input-label">Salary Expectation</label><input type="text" name="salaryExpectation" /></div>
            </div>

            <label class="job-input-label" for="referralSource">How did you hear about this position?</label>
            <select name="referralSource" id="referralSource">
              <option value="">Select an option</option>
              <option value="website">Company Website</option>
              <option value="indeed">Indeed</option>
              <option value="linkedin">LinkedIn</option>
              <option value="glassdoor">Glassdoor</option>
              <option value="referral">Employee Referral</option>
              <option value="social-media">Social Media</option>
              <option value="other">Other</option>
            </select>

            <!-- Documents -->
            <div class="job-form-grid">
              <div class="job-file-field"><label class="job-file-label">Resume <span style="color:red">*</span></label><input type="file" name="resume" accept=".pdf,.doc,.docx" required /></div>
              <div class="job-file-field"><label class="job-file-label">Supporting Documents (optional)</label><input type="file" name="supportingDocs" accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" multiple /></div>
            </div>

            <button type="submit" class="job-apply-submit ${bgClass}">Submit Application</button>
          </form>
          <p class="job-apply-success hidden">Thank you! Your application has been submitted.</p>
        </div>
      </section>
    </div>
  `;
}

export function initJobDetailPage() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Simple form submission handler
  const form = document.getElementById('job-application-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.classList.add('hidden');
      const successMsg = document.querySelector('.job-apply-success');
      if (successMsg) successMsg.classList.remove('hidden');
    });
  }
} 