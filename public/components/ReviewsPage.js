import { createTestimonialsSection } from './TestimonialsSection.js';

export function createReviewsPage() {
  return `
    <div class="reviews-page">
      <!-- Hero Section -->
      <section class="reviews-hero">
        <div class="reviews-hero-container">
          <div class="reviews-hero-content">
            <h1 class="reviews-hero-title">
              Patient Reviews
            </h1>
            <p class="reviews-hero-description">
              Hear from our patients about their orthodontic journey and
              transformation at Myers Orthodontics.
            </p>
            <div class="reviews-hero-rating">
              <div class="reviews-stars">
                <i data-lucide="star" class="star-icon filled"></i>
                <i data-lucide="star" class="star-icon filled"></i>
                <i data-lucide="star" class="star-icon filled"></i>
                <i data-lucide="star" class="star-icon filled"></i>
                <i data-lucide="star" class="star-icon filled"></i>
              </div>
              <span class="reviews-score">4.9/5</span>
              <span class="reviews-count">(200+ Reviews)</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Testimonials Section -->
      <div id="reviews-testimonials-container"></div>

      <!-- Review Stats -->
      <section class="reviews-stats">
        <div class="reviews-stats-container">
          <div class="reviews-stats-header">
            <h2 class="reviews-stats-title">
              Why Patients Love Myers Orthodontics
            </h2>
          </div>

          <div class="reviews-stats-grid">
            <div class="reviews-stat-card">
              <div class="reviews-stat-icon reviews-stat-icon-teal">
                <i data-lucide="heart" class="stat-icon"></i>
              </div>
              <div class="reviews-stat-number reviews-stat-number-teal">
                98%
              </div>
              <h3 class="reviews-stat-title">
                Patient Satisfaction
              </h3>
              <p class="reviews-stat-description">
                Would recommend to friends
              </p>
            </div>

            <div class="reviews-stat-card">
              <div class="reviews-stat-icon reviews-stat-icon-lime">
                <i data-lucide="check-circle" class="stat-icon"></i>
              </div>
              <div class="reviews-stat-number reviews-stat-number-lime">
                95%
              </div>
              <h3 class="reviews-stat-title">
                On-Time Appointments
              </h3>
              <p class="reviews-stat-description">
                Respect for your schedule
              </p>
            </div>

            <div class="reviews-stat-card">
              <div class="reviews-stat-icon reviews-stat-icon-magenta">
                <i data-lucide="users" class="stat-icon"></i>
              </div>
              <div class="reviews-stat-number reviews-stat-number-magenta">
                97%
              </div>
              <h3 class="reviews-stat-title">
                Staff Friendliness
              </h3>
              <p class="reviews-stat-description">
                Caring and professional team
              </p>
            </div>

            <div class="reviews-stat-card">
              <div class="reviews-stat-icon reviews-stat-icon-pink">
                <i data-lucide="bar-chart-3" class="stat-icon"></i>
              </div>
              <div class="reviews-stat-number reviews-stat-number-pink">
                99%
              </div>
              <h3 class="reviews-stat-title">
                Treatment Success
              </h3>
              <p class="reviews-stat-description">
                Achieve desired results
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Google Reviews -->
      <section class="reviews-google">
        <div class="reviews-google-container">
          <div class="reviews-google-header">
            <h2 class="reviews-google-title">
              Read Our Google Reviews
            </h2>
            <p class="reviews-google-description">
              See what our patients are saying about their experience with Myers
              Orthodontics
            </p>
          </div>

          <div class="reviews-google-card-wrapper">
            <div class="reviews-google-card">
              <div class="reviews-google-icon">
                <span class="google-g">G</span>
              </div>
              <h3 class="reviews-google-card-title">
                Google Reviews
              </h3>
              <div class="reviews-google-rating">
                <i data-lucide="star" class="google-star filled"></i>
                <i data-lucide="star" class="google-star filled"></i>
                <i data-lucide="star" class="google-star filled"></i>
                <i data-lucide="star" class="google-star filled"></i>
                <i data-lucide="star" class="google-star filled"></i>
                <span class="google-rating-score">4.9/5</span>
              </div>
              <a 
                href="https://www.google.com/search?q=myers+orthodontics" 
                target="_blank" 
                rel="noopener noreferrer"
                class="reviews-google-link"
              >
                Read Reviews →
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="reviews-cta">
        <div class="reviews-cta-container">
          <h2 class="reviews-cta-title">
            Ready to Join Our Happy Patients?
          </h2>
          <p class="reviews-cta-description">
            Experience the Myers Orthodontics difference for yourself. Schedule
            your free consultation today.
          </p>
          <a href="/schedule" class="reviews-cta-button" data-route="/schedule">
            Schedule Free Consultation
          </a>
        </div>
      </section>
    </div>
  `;
}

export function initReviewsPage() {
  // Mount testimonials section
  const testimonialsContainer = document.getElementById('reviews-testimonials-container');
  if (testimonialsContainer) {
    testimonialsContainer.innerHTML = createTestimonialsSection();
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
} 