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
import { createTeamPage, initTeamPage } from './components/TeamPage.js';
import { createCareersPage, initCareersPage } from './components/CareersPage.js';
import { createJobDetailPage, initJobDetailPage } from './components/JobDetailPage.js';
import { createContactPage, initContactPage } from './components/ContactPage.js';
import { createPatientPortalPage, initPatientPortalPage } from './components/PatientPortalPage.js';
import { createReferralsPage, initReferralsPage } from './components/ReferralsPage.js';
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
      '/team': this.renderTeamPage.bind(this),
      '/careers': this.renderCareersPage.bind(this),
      '/contact': this.renderContactPage.bind(this),
      '/patient-portal': this.renderPatientPortalPage.bind(this),
      '/referrals': this.renderReferralsPage.bind(this),
      '/referral': this.renderReferralsPage.bind(this),
      // Dynamic route for treatment details - handled in handleRoute
    };

    // Scroll position tracking
    this.scrollPositions = new Map();
    this.visitedPages = new Set();
    this.currentPath = null;

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

    // Save scroll position before page unload
    window.addEventListener('beforeunload', () => {
      this.saveScrollPosition();
    });

    // Save scroll position on scroll (throttled)
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.saveScrollPosition();
      }, 100);
    });
  }

  handleRoute() {
    const path = window.location.pathname;

    // Save current scroll position before navigation
    if (this.currentPath) {
      this.saveScrollPosition();
    }

    // Check for dynamic treatment detail route
    if (path.startsWith('/treatments/') && path !== '/treatments') {
      const slug = path.split('/treatments/')[1];
      this.renderTreatmentDetailPage(slug);
      updateNavbarActiveState();
      this.currentPath = path;
      return;
    }

    // Check for dynamic career/job detail route
    if (path.startsWith('/careers/') && path !== '/careers') {
      const slug = path.split('/careers/')[1];
      this.renderJobDetailPage(slug);
      updateNavbarActiveState();
      this.currentPath = path;
      return;
    }

    const route = this.routes[path] || this.routes['/'];
    route();

    // Update navbar active state after route change
    updateNavbarActiveState();

    // Update current path
    this.currentPath = path;
  }

  navigateTo(path) {
    window.history.pushState(null, null, path);
    this.handleRoute();
  }

  saveScrollPosition() {
    if (this.currentPath) {
      this.scrollPositions.set(this.currentPath, window.scrollY);
    }
  }

  restoreScrollPosition(path) {
    const savedPosition = this.scrollPositions.get(path);
    if (savedPosition !== undefined) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        window.scrollTo(0, savedPosition);
      });
      return true;
    }
    return false;
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  renderHomePage() {
    const path = '/';
    const isReturning = this.visitedPages.has(path);

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

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderAboutPage() {
    const path = '/about';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set about page content
    setMainContent(createAboutPage());

    // Initialize about page
    initAboutPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderTreatmentsPage() {
    const path = '/treatments';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set treatments page content
    setMainContent(createTreatmentsPage());

    // Initialize treatments page
    initTreatmentsPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderTreatmentDetailPage(slug) {
    const path = `/treatments/${slug}`;
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set treatment detail page content
    setMainContent(createTreatmentDetailPage(slug));

    // Initialize treatment detail page
    initTreatmentDetailPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderProcessPage() {
    const path = '/process';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set process page content
    setMainContent(createProcessPage());

    // Initialize process page
    initProcessPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderSchedulePage() {
    const path = '/schedule';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set schedule page content
    setMainContent(createSchedulePage());

    // Initialize schedule page
    initSchedulePage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderReviewsPage() {
    const path = '/reviews';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set reviews page content
    setMainContent(createReviewsPage());

    // Initialize reviews page
    initReviewsPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderTeamPage() {
    const path = '/team';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set team page content
    setMainContent(createTeamPage());

    // Initialize team page
    initTeamPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderCareersPage() {
    const path = '/careers';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set careers page content
    setMainContent(createCareersPage());

    // Initialize careers page
    initCareersPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderJobDetailPage(slug) {
    const path = `/careers/${slug}`;
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set job detail page content
    setMainContent(createJobDetailPage(slug));

    // Initialize job detail page
    initJobDetailPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderContactPage() {
    const path = '/contact';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set contact page content
    setMainContent(createContactPage());

    // Initialize contact page
    initContactPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderPatientPortalPage() {
    const path = '/patient-portal';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set patient portal page content
    setMainContent(createPatientPortalPage());

    // Initialize patient portal page
    initPatientPortalPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
  }

  renderReferralsPage() {
    const path = '/referrals';
    const isReturning = this.visitedPages.has(path);

    // Clean up any existing content
    this.cleanup();

    // Set referrals page content
    setMainContent(createReferralsPage());

    // Initialize referrals page
    initReferralsPage();

    // Handle scroll restoration
    this.visitedPages.add(path);
    if (isReturning) {
      this.restoreScrollPosition(path);
    } else {
      this.scrollToTop();
    }
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