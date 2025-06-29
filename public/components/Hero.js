export class Hero {
  constructor() {
    // Hero background images
    this.slides = [
      '/images/myers_hero_group.png',
      '/images/myers_hero_doctor.png',
      '/images/myers_hero_braces.png',
      '/images/myers_hero_invisilign.png',
    ];

    this.currentIndex = 0;
    this.mounted = false;
    this.intervalId = null;
  }

  render() {
    return `
      <section class="hero">
        <!-- Slides -->
        <div class="hero-slides">
          ${this.slides.map((src, i) => `
            <div
              class="hero-slide ${i === this.currentIndex ? 'active' : ''}"
              data-index="${i}"
            >
              <!-- zoom container -->
              <div
                class="hero-slide-bg"
                style="background-image: url(${src})"
              ></div>
            </div>
          `).join('')}
        </div>

        <!-- overlay -->
        <div class="hero-overlay"></div>

        <!-- copy -->
        <div class="hero-content">
          <div class="hero-content-inner">
            <p class="hero-tagline">
              Cutting-Edge Orthodontics • Family-Owned Care
            </p>
            <h1 class="hero-title">
              <span class="line">Confident Smiles,</span>
              <br />
              <span class="line">Personalised Care</span>
            </h1>
            <p class="hero-description">
              Where advanced technology meets heartfelt service—creating healthy,
              lasting smiles for every age. From your first visit to your final
              smile, experience thoughtful, professional care tailored just for
              you.
            </p>
            <div class="hero-actions">
              <a href="/schedule" class="hero-btn hero-btn-primary">
                Schedule Consultation
              </a>
              <a href="/referral" class="hero-btn hero-btn-secondary">
                Referring Offices
              </a>
            </div>
          </div>
        </div>

        <!-- indicators -->
        <div class="hero-indicators">
          ${this.slides.map((_, i) => `
            <button
              class="hero-indicator ${i === this.currentIndex ? 'active' : ''}"
              data-index="${i}"
              aria-label="Slide ${i + 1}"
            ></button>
          `).join('')}
        </div>
      </section>
    `;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = this.render();
    this.setupEventListeners();
    this.startSlideshow();
  }

  setupEventListeners() {
    // Add click handlers for indicators
    const indicators = document.querySelectorAll('.hero-indicator');
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        this.setIndex(index);
      });
    });
  }

  startSlideshow() {
    this.mounted = true;

    // Update initial state
    this.updateSlides();

    // Cycle every 5 seconds
    this.intervalId = setInterval(() => {
      this.setIndex((this.currentIndex + 1) % this.slides.length);
    }, 5000);
  }

  setIndex(newIndex) {
    this.currentIndex = newIndex;
    this.updateSlides();
    this.updateIndicators();
  }

  updateSlides() {
    const slides = document.querySelectorAll('.hero-slide');

    slides.forEach((slide, i) => {
      if (i === this.currentIndex) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  updateIndicators() {
    const indicators = document.querySelectorAll('.hero-indicator');
    indicators.forEach((indicator, i) => {
      if (i === this.currentIndex) {
        indicator.classList.add('active');
      } else {
        indicator.classList.remove('active');
      }
    });
  }

  destroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.mounted = false;
  }
} 