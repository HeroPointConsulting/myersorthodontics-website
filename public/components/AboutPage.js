export function createAboutPage() {
  return `
    <div class="about-page">
      <!-- Hero Section -->
      <section class="about-hero">
        <div class="about-hero-container">
          <div class="about-hero-content">
            <h1 class="about-hero-title">
              About Myers Orthodontics
            </h1>
            <p class="about-hero-description">
              Dedicated to creating beautiful, healthy smiles through
              personalized orthodontic care and cutting-edge treatment
              techniques.
            </p>
          </div>
        </div>
      </section>

      <!-- Our Story Section -->
      <section class="about-story">
        <div class="about-story-container">
          <div class="about-story-grid">
            <div class="about-story-content">
              <h2 class="about-story-title">
                Our Story
              </h2>
              <p class="about-story-text">
                Founded with a passion for transforming smiles and lives, Myers
                Orthodontics has been serving the community for over 15 years.
                Our practice combines the latest orthodontic technology with a
                personalized approach to care.
              </p>
              <p class="about-story-text">
                We believe that every patient deserves individualized attention
                and treatment plans tailored to their unique needs, lifestyle,
                and goals.
              </p>
              <div class="about-story-stats">
                <div class="about-stat-card about-stat-teal">
                  <div class="about-stat-number">2000+</div>
                  <div class="about-stat-label">Patients Treated</div>
                </div>
                <div class="about-stat-card about-stat-lime">
                  <div class="about-stat-number">15+</div>
                  <div class="about-stat-label">Years of Excellence</div>
                </div>
              </div>
            </div>
            <div class="about-story-image">
              <div class="about-image-placeholder">
                <i data-lucide="building-2" class="about-placeholder-icon"></i>
                <p class="about-placeholder-text">Practice Photo Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Mission & Values -->
      <section class="about-values">
        <div class="about-values-container">
          <div class="about-values-header">
            <h2 class="about-values-title">
              Our Mission & Values
            </h2>
          </div>

          <div class="about-values-grid">
            <div class="about-value-card">
              <div class="about-value-icon about-value-icon-teal">
                <i data-lucide="heart" class="about-icon"></i>
              </div>
              <h3 class="about-value-heading">
                Patient-Centered Care
              </h3>
              <p class="about-value-text">
                Every decision we make is focused on what's best for our
                patients' oral health, comfort, and satisfaction.
              </p>
            </div>

            <div class="about-value-card">
              <div class="about-value-icon about-value-icon-lime">
                <i data-lucide="check-circle" class="about-icon"></i>
              </div>
              <h3 class="about-value-heading">
                Excellence in Treatment
              </h3>
              <p class="about-value-text">
                We maintain the highest standards of orthodontic care using the
                most advanced techniques and technology available.
              </p>
            </div>

            <div class="about-value-card">
              <div class="about-value-icon about-value-icon-magenta">
                <i data-lucide="graduation-cap" class="about-icon"></i>
              </div>
              <h3 class="about-value-heading">
                Continuous Innovation
              </h3>
              <p class="about-value-text">
                We stay at the forefront of orthodontic advances to provide our
                patients with the most effective and comfortable treatments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initAboutPage() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Add any about page specific interactivity here
  // For example, scroll animations, stat counters, etc.
} 