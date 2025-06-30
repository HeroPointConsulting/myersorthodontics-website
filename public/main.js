import { createLayout, initLayout } from './components/Layout.js';
import { Router } from './Router.js';

class App {
  constructor() {
    this.init();
  }

  init() {
    // Mount the layout (navbar, footer, etc.)
    document.querySelector('#app').innerHTML = createLayout();
    initLayout();

    // Initialize the router
    this.router = new Router();
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new App();
});