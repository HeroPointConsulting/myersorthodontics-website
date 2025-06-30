import { createLayout, initLayout, setMainContent } from './components/Layout.js';
import { createHero, initHero, destroyHero } from './components/Hero.js';
import { createTreatmentsSection, initTreatmentsSection } from './components/TreatmentsSection.js';
import { createAboutSection, initAboutSection } from './components/AboutSection.js';
import { createProcessSection, initProcessSection } from './components/ProcessSection.js';
import { createTeamSection, initTeamSection } from './components/TeamSection.js';
import { createTestimonialsSection } from './components/TestimonialsSection.js';
import { createFAQSection, initFAQSection } from './components/FAQSection.js';
import { createNewsletterSection, initNewsletterSection } from './components/NewsletterSection.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    // Mount the layout
    document.querySelector('#app').innerHTML = createLayout();
    initLayout();

    // Set homepage content
    setMainContent(`
      <div id="hero-section"></div>
      <div id="about-container"></div>
      <div id="treatments-container"></div>
      <div id="process-container"></div>
      <div id="team-container"></div>
      <div id="testimonials-container"></div>
      <div id="faq-container"></div>
      <div id="newsletter"></div>
    `);

    // Mount all sections
    document.getElementById('hero-section').innerHTML = createHero();
    document.getElementById('about-container').innerHTML = createAboutSection();
    document.getElementById('treatments-container').innerHTML = createTreatmentsSection();
    document.getElementById('process-container').innerHTML = createProcessSection();
    document.getElementById('team-container').innerHTML = createTeamSection();
    document.getElementById('testimonials-container').innerHTML = createTestimonialsSection();
    document.getElementById('faq-container').innerHTML = createFAQSection();
    document.getElementById('newsletter').innerHTML = createNewsletterSection();

    // Initialize interactive components
    initHero();
    initAboutSection();
    initTreatmentsSection();
    initProcessSection();
    initTeamSection();
    initFAQSection();
    initNewsletterSection();
  }

  destroy() {
    // Clean up the hero component when needed
    destroyHero();
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});