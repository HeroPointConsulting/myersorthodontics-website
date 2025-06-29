import { Layout } from './components/Layout.js';

class App {
  constructor() {
    this.layout = new Layout();
    this.init();
  }

  init() {
    // Mount the layout
    this.layout.mount('#app');
    
    // Set homepage content (placeholder)
    this.layout.setMainContent(`
      <div style="padding: 2rem; text-align: center;">
        <h1>Welcome to Myers Orthodontics</h1>
        <p>Homepage content will go here...</p>
        <!-- TODO: Add Hero, AboutSection, TreatmentsSection, etc. -->
      </div>
    `);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});