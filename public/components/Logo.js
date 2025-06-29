// TODO: Logo component - matches original Logo.jsx
export class Logo {
  constructor(className = '') {
    this.className = className;
  }

  render() {
    return `
      <a href="/" 
         class="font-montserrat font-bold text-lg whitespace-nowrap transition-transform hover:scale-105 ${this.className}">
        M&nbsp;|&nbsp;O
      </a>
    `;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    container.innerHTML = this.render();
  }
}