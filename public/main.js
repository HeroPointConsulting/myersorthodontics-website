import { Layout } from './components/Layout.js';
import { Hero } from './components/Hero.js';
import { TreatmentsSection } from './components/TreatmentsSection.js';
import { AboutSection } from './components/AboutSection.js';
import { ProcessSection } from './components/ProcessSection.js';
import { TeamSection } from './components/TeamSection.js';
import { TestimonialsSection } from './components/TestimonialsSection.js';

class App {
  constructor() {
    this.layout = new Layout();
    this.hero = new Hero();
    this.treatmentsSection = new TreatmentsSection();
    this.aboutSection = new AboutSection();
    this.processSection = new ProcessSection();
    this.teamSection = new TeamSection();
    this.testimonialsSection = new TestimonialsSection();
    this.init();
  }

  init() {
    // Mount the layout
    this.layout.mount('#app');

    // Set homepage content with Hero component
    this.layout.setMainContent(`
      <div id="hero-section"></div>
      <div id="about-container"></div>
      <div id="treatments-container"></div>
      <div id="process-container"></div>
      <div id="team-container"></div>
      <div id="testimonials-container"></div>
    `);

    // Mount the Hero component
    this.hero.mount('#hero-section');

    // Mount the TreatmentsSection component
    this.treatmentsSection.mount('#treatments-container');

    // Mount the AboutSection component
    this.aboutSection.mount('#about-container');

    // Mount the ProcessSection component
    this.processSection.mount('#process-container');

    // Mount the TeamSection component
    this.teamSection.mount('#team-container');

    // Mount the TestimonialsSection component
    this.testimonialsSection.mount('#testimonials-container');
  }

  destroy() {
    // Clean up the hero component when needed
    if (this.hero) {
      this.hero.destroy();
    }
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});