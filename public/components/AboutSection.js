export class AboutSection {
  constructor() {
    this.mounted = false;
  }

  render() {
    return `
      <section id="about" class="about-section">
        <div class="about-container">
          <div class="about-grid">
            <!-- Content Copy -->
            <div class="about-content">
              <h2 class="about-title">
                From Our Family to Yours
              </h2>
              <p class="about-text">
                At Myers Orthodontics, we believe in creating beautiful smiles
                through personalized care and advanced technology. Founded by Dr.
                Michael Myers and Dr. Kennedy Myers, our practice combines
                clinical excellence with a warm, welcoming atmosphere.
              </p>
              <p class="about-text">
                We understand that every smile is unique, which is why we take the
                time to get to know each patient and create customized treatment
                plans that fit your lifestyle and goals.
              </p>
              <div class="about-buttons">
                <a href="/team" class="about-btn about-btn-primary">
                  Meet Our Team
                </a>
                <a href="/our-process" class="about-btn about-btn-secondary">
                  Our Process
                </a>
              </div>
            </div>

            <!-- Image with overlay play button -->
            <div class="about-image-section">
              <div class="about-image-wrapper">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1000&q=80"
                  alt="Dr. Michael Myers with patient"
                  class="about-image"
                />
              </div>
              <div class="about-play-overlay" role="button" tabindex="0">
                <div class="about-play-content">
                  <div class="about-play-icon-wrapper">
                    <i data-lucide="play" class="about-play-icon"></i>
                  </div>
                  <p class="about-play-text">
                    Watch Dr. Myers' Story
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = this.render();
    this.setupEventListeners();
    this.initializeIcons();
    this.mounted = true;
  }

  setupEventListeners() {
    // Add click handler for play button
    const playOverlay = document.querySelector('.about-play-overlay');
    if (playOverlay) {
      playOverlay.addEventListener('click', this.handlePlayClick.bind(this));
      playOverlay.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.handlePlayClick();
        }
      });
    }

    // Add hover effects for buttons
    const buttons = document.querySelectorAll('.about-btn');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.classList.add('hovered');
      });

      button.addEventListener('mouseleave', () => {
        button.classList.remove('hovered');
      });
    });
  }

  handlePlayClick() {
    // Placeholder for video/modal functionality
    console.log('Play button clicked - implement video modal here');
    // You could integrate with a modal library or video player here
    alert('Video functionality would be implemented here');
  }

  initializeIcons() {
    // Initialize Lucide icons if the library is available
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      console.warn('Lucide icons library not found. Please include it in your HTML.');
    }
  }

  destroy() {
    this.mounted = false;
  }
} 