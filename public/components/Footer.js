import { siteData } from '../siteData.js';
import { createLogo } from './Logo.js';

export function createFooter() {
  const { contact } = siteData;

  return `
    <footer class="footer">
      <div class="footer-container">
        <!-- Main Footer Content -->
        <div class="footer-main">
          <div class="footer-tagline">
            <div class="footer-brand">
              <div class="footer-brand-identity">
                ${createLogo('footer-logo')}
                <h2 class="footer-brand-name">Myers Orthodontics</h2>
              </div>
            </div>
          </div>
          
          <div class="footer-grid">
            <!-- Contact Us -->
            <div class="footer-section">
              <h3 class="footer-heading">Contact Us</h3>
              <div class="footer-contact">
                <div class="footer-contact-item">
                  <i data-lucide="map-pin" class="footer-contact-icon"></i>
                  <div class="footer-contact-text">
                    <address class="footer-address">
                      ${contact.address.street}<br>
                      ${contact.address.city}, ${contact.address.state} ${contact.address.zip}
                    </address>
                  </div>
                </div>
                <div class="footer-contact-item">
                  <i data-lucide="phone" class="footer-contact-icon"></i>
                  <div class="footer-contact-text">
                    <a href="${contact.phone.link}" class="footer-contact-link">
                      ${contact.phone.formatted}
                    </a>
                  </div>
                </div>
                <div class="footer-contact-item">
                  <i data-lucide="mail" class="footer-contact-icon"></i>
                  <div class="footer-contact-text">
                    <a href="mailto:${contact.email.main}" class="footer-contact-link">
                      ${contact.email.main}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Schedule -->
            <div class="footer-section">
              <h3 class="footer-heading">Schedule</h3>
              <div class="footer-schedule">
                <a href="/schedule" class="footer-schedule-link">
                  <i data-lucide="calendar" class="footer-schedule-icon"></i>
                  <span>Book Appointment</span>
                </a>
              </div>
            </div>

            <!-- Quick Links -->
            <div class="footer-section">
              <h3 class="footer-heading">Quick Links</h3>
              <ul class="footer-links">
                <li><a href="/about" class="footer-link">About Us</a></li>
                <li><a href="/treatments" class="footer-link">Treatments</a></li>
                <li><a href="/our-process" class="footer-link">Our Process</a></li>
                <li><a href="/team" class="footer-link">Meet the Team</a></li>
              </ul>
            </div>

            <!-- Patient Resources -->
            <div class="footer-section">
              <h3 class="footer-heading">Patient Resources</h3>
              <ul class="footer-links">
                <li><a href="/portal" class="footer-link">Patient Portal</a></li>
                <li><a href="/reviews" class="footer-link">Reviews</a></li>
                <li><a href="/careers" class="footer-link">Careers</a></li>
                <li><a href="/referrals" class="footer-link">Referrals</a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Footer Bottom -->
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="footer-copyright">
              © ${new Date().getFullYear()} Myers Orthodontics. All rights reserved.
            </p>
            <div class="footer-social">
              <a href="${contact.social.facebook.url}" 
                 class="footer-social-link" 
                 aria-label="${contact.social.facebook.label}"
                 target="_blank" rel="noopener noreferrer">
                <i data-lucide="facebook" class="footer-social-icon"></i>
              </a>
              <a href="${contact.social.instagram.url}" 
                 class="footer-social-link" 
                 aria-label="${contact.social.instagram.label}"
                 target="_blank" rel="noopener noreferrer">
                <i data-lucide="instagram" class="footer-social-icon"></i>
              </a>
              <a href="${contact.social.twitter.url}" 
                 class="footer-social-link" 
                 aria-label="${contact.social.twitter.label}"
                 target="_blank" rel="noopener noreferrer">
                <svg class="footer-social-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="${contact.social.youtube.url}" 
                 class="footer-social-link" 
                 aria-label="${contact.social.youtube.label}"
                 target="_blank" rel="noopener noreferrer">
                <i data-lucide="youtube" class="footer-social-icon"></i>
              </a>
            </div>
          </div>

          <!-- Hero Point Consulting Credit -->
          <div class="footer-credit">
            <a href="https://heropointconsulting.com" 
               target="_blank" 
               rel="noopener noreferrer"
               class="footer-credit-link">
              <span class="footer-credit-text">Designed By</span>
              <img src="/images/hpc_design.png" 
                   alt="Hero Point Consulting" 
                   class="footer-credit-logo" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function initFooter() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Add any footer-specific interactivity here
  // For example, smooth scrolling for footer links
  const footerLinks = document.querySelectorAll('.footer-link[href^="#"]');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
} 