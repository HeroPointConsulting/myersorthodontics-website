export class AnnouncementBar {
  render() {
    return `
      <div class="announcement-bar">
        <p>
          Now accepting new patients!
          <a href="/schedule">
            Book your consultation today.
          </a>
        </p>
      </div>
    `;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    container.innerHTML = this.render();
  }
}