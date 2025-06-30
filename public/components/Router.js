import { createHero, initHero, destroyHero } from './Hero.js';
import { createTreatmentsSection, initTreatmentsSection } from './TreatmentsSection.js';
import { createAboutSection, initAboutSection } from './AboutSection.js';
import { createProcessSection, initProcessSection } from './ProcessSection.js';
import { createTeamSection, initTeamSection } from './TeamSection.js';
import { createTestimonialsSection } from './TestimonialsSection.js';
import { createFAQSection, initFAQSection } from './FAQSection.js';
import { createNewsletterSection, initNewsletterSection } from './NewsletterSection.js';
import { createAboutPage, initAboutPage } from './AboutPage.js';
import { setMainContent } from './Layout.js';

class Router {
  constructor() {
    this.routes = {
      '/': this.renderHomePage.bind(this),
      '/about': this.renderAboutPage.bind(this),
      // Add more routes here as needed
    };

    this.init();
  }

  init() {
    // Handle initial page load
    this.handleRoute();

    // Listen for popstate events (back/forward buttons)
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });

    // Listen for link clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('a[href^="/"]')) {
        e.preventDefault();
        this.navigateTo(e.target.getAttribute('href'));
      }
    });
  }

  handleRoute() {
    const path = window.location.pathname;
    const route = this.routes[path] || this.routes['/'];
    route();
  }

  navigateTo(path) {
    window.history.pushState(null, null, path);
    this.handleRoute();
  }

  renderHomePage() {
    // Clean up any existing content
    this.cleanup();

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

  renderAboutPage() {
    // Clean up any existing content
    this.cleanup();

    // Set about page content
    setMainContent(createAboutPage());

    // Initialize about page
    initAboutPage();
  }

  cleanup() {
    // Clean up hero component if it exists
    try {
      destroyHero();
    } catch (e) {
      // Hero component may not be initialized
    }
  }
}

export { Router }; 