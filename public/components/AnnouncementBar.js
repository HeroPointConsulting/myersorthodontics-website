export function createAnnouncementBar() {
  return `
    <div class="announcement-bar">
      <p class="announcement-text">
        <span class="announcement-desktop">Now accepting new patients!</span>
        <span class="announcement-mobile">New?</span>
        <a href="/schedule">
          Book your consultation today.
        </a>
      </p>
    </div>
  `;
}