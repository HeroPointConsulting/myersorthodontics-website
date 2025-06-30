import { Layout } from './components/Layout.js';
import { Hero } from './components/Hero.js';
import { TreatmentsSection } from './components/TreatmentsSection.js';
import { AboutSection } from './components/AboutSection.js';

class App {
  constructor() {
    this.layout = new Layout();
    this.hero = new Hero();
    this.treatmentsSection = new TreatmentsSection();
    this.aboutSection = new AboutSection();
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
    `);

    // Mount the Hero component
    this.hero.mount('#hero-section');

    // Mount the TreatmentsSection component
    this.treatmentsSection.mount('#treatments-container');

    // Mount the AboutSection component
    this.aboutSection.mount('#about-container');
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