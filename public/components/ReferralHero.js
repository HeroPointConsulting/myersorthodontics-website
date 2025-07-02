export function createReferralHero() {
  return `
    <section class="referral-hero">
      <div class="referral-hero-container">
        <div class="referral-hero-content">
          <div class="referral-hero-badge">
            <i data-lucide="handshake" class="referral-hero-badge-icon"></i>
            <span>Professional Referral Network</span>
          </div>
          
          <h1 class="referral-hero-title">
            Partner with Myers Orthodontics
          </h1>
          
          <p class="referral-hero-description">
            Join our network of trusted dental professionals. We provide exceptional 
            orthodontic care for your patients with seamless communication, detailed 
            progress reports, and collaborative treatment planning.
          </p>
          
          <div class="referral-hero-stats">
            <div class="referral-hero-stat">
              <div class="referral-hero-stat-number">500+</div>
              <div class="referral-hero-stat-label">Referring Offices</div>
            </div>
            <div class="referral-hero-stat">
              <div class="referral-hero-stat-number">15+</div>
              <div class="referral-hero-stat-label">Years Experience</div>
            </div>
            <div class="referral-hero-stat">
              <div class="referral-hero-stat-number">24hr</div>
              <div class="referral-hero-stat-label">Response Time</div>
            </div>
          </div>
          
          <div class="referral-hero-actions">
            <a href="#referral-form" class="referral-hero-btn referral-hero-btn-primary">
              Submit Referral
            </a>
            <a href="#why-refer" class="referral-hero-btn referral-hero-btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        
        <div class="referral-hero-image">
          <div class="referral-hero-image-container">
            <img 
              src="/images/myers_hero_doctor.png" 
              alt="Dr. Myers consulting with dental professionals"
              class="referral-hero-img"
            />
            <div class="referral-hero-image-overlay">
              <div class="referral-hero-image-badge">
                <i data-lucide="award" class="referral-hero-image-badge-icon"></i>
                <span>Board Certified Orthodontist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initReferralHero() {
  // Add smooth scrolling for anchor links
  const anchorLinks = document.querySelectorAll('.referral-hero-btn[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
} 