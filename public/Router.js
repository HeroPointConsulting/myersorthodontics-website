import { createHero, initHero, destroyHero } from './components/Hero.js';
import { createTreatmentsSection, initTreatmentsSection } from './components/TreatmentsSection.js';
import { createAboutSection, initAboutSection } from './components/AboutSection.js';
import { createProcessSection, initProcessSection } from './components/ProcessSection.js';
import { createTeamSection, initTeamSection } from './components/TeamSection.js';
import { createTestimonialsSection } from './components/TestimonialsSection.js';
import { createFAQSection, initFAQSection } from './components/FAQSection.js';
import { createNewsletterSection, initNewsletterSection } from './components/NewsletterSection.js';
import { createAboutPage, initAboutPage } from './components/AboutPage.js';
import { createTreatmentsPage, initTreatmentsPage } from './components/TreatmentsPage.js';
import { createTreatmentDetailPage, initTreatmentDetailPage } from './components/TreatmentDetailPage.js';
import { createProcessPage, initProcessPage } from './components/ProcessPage.js';
import { createSchedulePage, initSchedulePage } from './components/SchedulePage.js';
import { createReviewsPage, initReviewsPage } from './components/ReviewsPage.js';
import { setMainContent } from './components/Layout.js';
import { updateNavbarActiveState } from './components/Navbar.js';

class Router {
  constructor() {
    this.routes = {
      '/': this.renderHomePage.bind(this),
      '/about': this.renderAboutPage.bind(this),
      '/treatments': this.renderTreatmentsPage.bind(this),
      '/process': this.renderProcessPage.bind(this),
      '/schedule': this.renderSchedulePage.bind(this),
      '/reviews': this.renderReviewsPage.bind(this),
      // Dynamic route for treatment details - handled in handleRoute
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
      const link = e.target.closest('a[href^="/"]');
      if (link) {
        e.preventDefault();
        this.navigateTo(link.getAttribute('href'));
      }
    });
  }

  handleRoute() {
    const path = window.location.pathname;

    // Check for dynamic treatment detail route
    if (path.startsWith('/treatments/') && path !== '/treatments') {
      const slug = path.split('/treatments/')[1];
      this.renderTreatmentDetailPage(slug);
      updateNavbarActiveState();
      return;
    }

    const route = this.routes[path] || this.routes['/'];
    route();

    // Update navbar active state after route change
    updateNavbarActiveState();
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

  renderTreatmentsPage() {
    // Clean up any existing content
    this.cleanup();

    // Set treatments page content
    setMainContent(createTreatmentsPage());

    // Initialize treatments page
    initTreatmentsPage();
  }

  renderTreatmentDetailPage(slug) {
    // Clean up any existing content
    this.cleanup();

    // Set treatment detail page content
    setMainContent(createTreatmentDetailPage(slug));

    // Initialize treatment detail page
    initTreatmentDetailPage();
  }

  renderProcessPage() {
    // Clean up any existing content
    this.cleanup();

    // Set process page content
    setMainContent(createProcessPage());

    // Initialize process page
    initProcessPage();
  }

  renderSchedulePage() {
    // Clean up any existing content
    this.cleanup();

    // Set schedule page content
    setMainContent(createSchedulePage());

    // Initialize schedule page
    initSchedulePage();
  }

  renderReviewsPage() {
    // Clean up any existing content
    this.cleanup();

    // Set reviews page content
    setMainContent(createReviewsPage());

    // Initialize reviews page
    initReviewsPage();
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