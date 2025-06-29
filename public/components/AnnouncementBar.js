export class AnnouncementBar {
  render() {
    return `
      <div class="bg-accent-teal text-primary-white text-center py-2 px-4">
        <p class="text-sm">
          Now accepting new patients!
          <a href="/schedule" class="font-bold text-primary-white hover:text-accent-lime-green transition-colors ml-1 hover:underline">
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