import { createAnnouncementBar } from './AnnouncementBar.js';
import { createNavbar, initNavbar } from './Navbar.js';
import { createFooter, initFooter } from './Footer.js';

export function createLayout() {
  return `
    <div id="announcement-bar"></div>
    <div id="navbar"></div>
    <main id="main-content"></main>
    <div id="footer"></div>
  `;
}

export function initLayout() {
  // Mount child components
  document.getElementById('announcement-bar').innerHTML = createAnnouncementBar();
  document.getElementById('navbar').innerHTML = createNavbar();
  document.getElementById('footer').innerHTML = createFooter();

  // Initialize interactive components
  initNavbar();
  initFooter();
}

export function setMainContent(content) {
  const mainContent = document.querySelector('#main-content');
  if (mainContent) {
    mainContent.innerHTML = content;
  }
}