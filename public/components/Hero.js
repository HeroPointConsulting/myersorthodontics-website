// Hero background images
const slides = [
  '/images/myers_hero_group.png',
  '/images/myers_hero_doctor.png',
  '/images/myers_hero_braces.png',
  '/images/myers_hero_invisilign.png',
];

let currentIndex = 0;
let intervalId = null;

export function createHero() {
  return `
    <section class="hero">
      <!-- Slides -->
      <div class="hero-slides">
        ${slides.map((src, i) => `
          <div
            class="hero-slide ${i === currentIndex ? 'active' : ''}"
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
        ${slides.map((_, i) => `
          <button
            class="hero-indicator ${i === currentIndex ? 'active' : ''}"
            data-index="${i}"
            aria-label="Slide ${i + 1}"
          ></button>
        `).join('')}
      </div>
    </section>
  `;
}

export function initHero() {
  // Add click handlers for indicators
  const indicators = document.querySelectorAll('.hero-indicator');
  indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
      setHeroIndex(index);
    });
  });

  // Start slideshow
  startHeroSlideshow();
}

function setHeroIndex(newIndex) {
  currentIndex = newIndex;
  updateHeroSlides();
  updateHeroIndicators();
}

function updateHeroSlides() {
  const heroSlides = document.querySelectorAll('.hero-slide');
  heroSlides.forEach((slide, i) => {
    if (i === currentIndex) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
}

function updateHeroIndicators() {
  const indicators = document.querySelectorAll('.hero-indicator');
  indicators.forEach((indicator, i) => {
    if (i === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function startHeroSlideshow() {
  // Update initial state
  updateHeroSlides();

  // Cycle every 5 seconds
  intervalId = setInterval(() => {
    setHeroIndex((currentIndex + 1) % slides.length);
  }, 5000);
}

export function destroyHero() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
} 