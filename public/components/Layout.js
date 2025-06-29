import { AnnouncementBar } from './AnnouncementBar.js';
import { Navbar } from './Navbar.js';
// import { Footer } from './Footer.js'; // TODO: Create Footer component

export class Layout {
  constructor() {
    this.announcementBar = new AnnouncementBar();
    this.navbar = new Navbar();
    // this.footer = new Footer(); // TODO: Uncomment when Footer is ready
  }

  render() {
    return `
      <div id="announcement-bar"></div>
      <div id="navbar"></div>
      <main id="main-content"></main>
      <!-- <div id="footer"></div> --> <!-- TODO: Uncomment when Footer is ready -->
    `;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    container.innerHTML = this.render();

    // Mount child components
    this.announcementBar.mount('#announcement-bar');
    this.navbar.mount('#navbar');
    // this.footer.mount('#footer'); // TODO: Uncomment when Footer is ready
  }

  setMainContent(content) {
    const mainContent = document.querySelector('#main-content');
    if (mainContent) {
      mainContent.innerHTML = content;
    }
  }
}