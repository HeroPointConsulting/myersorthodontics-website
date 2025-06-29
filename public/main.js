import { Layout } from './components/Layout.js';
import { Hero } from './components/Hero.js';

class App {
  constructor() {
    this.layout = new Layout();
    this.hero = new Hero();
    this.init();
  }

  init() {
    // Mount the layout
    this.layout.mount('#app');

    // Set homepage content with Hero component
    this.layout.setMainContent(`
      <div id="hero-section"></div>
      <div style="padding: 2rem; text-align: center;">
        <h2>Additional Content Below Hero</h2>
        <p>Other sections can be added here...</p>
        <!-- TODO: Add AboutSection, TreatmentsSection, etc. -->
      </div>
    `);

    // Mount the Hero component
    this.hero.mount('#hero-section');
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