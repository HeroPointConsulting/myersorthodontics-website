import { createAnnouncementBar } from './AnnouncementBar.js';
import { createNavbar, initNavbar } from './Navbar.js';
// import { createFooter, initFooter } from './Footer.js'; // TODO: Create Footer component

export function createLayout() {
  return `
    <div id="announcement-bar"></div>
    <div id="navbar"></div>
    <main id="main-content"></main>
    <!-- <div id="footer"></div> --> <!-- TODO: Uncomment when Footer is ready -->
  `;
}

export function initLayout() {
  // Mount child components
  document.getElementById('announcement-bar').innerHTML = createAnnouncementBar();
  document.getElementById('navbar').innerHTML = createNavbar();

  // Initialize interactive components
  initNavbar();

  // TODO: Initialize footer when ready
  // initFooter();
}

export function setMainContent(content) {
  const mainContent = document.querySelector('#main-content');
  if (mainContent) {
    mainContent.innerHTML = content;
  }
}