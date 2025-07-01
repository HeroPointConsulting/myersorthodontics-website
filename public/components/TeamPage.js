import { siteData } from '../siteData.js';

export function createTeamPage() {
  // Import team data from siteData
  const { team } = siteData;
  const { members = [], values = [], education = [] } = team || {};

  // Icon mapping for Lucide icons
  const iconMap = {
    Heart: 'heart',
    CheckCircle: 'check-circle',
    Users: 'users',
    GraduationCap: 'graduation-cap',
    Check: 'check',
    Stethoscope: 'stethoscope',
    Briefcase: 'briefcase',
    Calendar: 'calendar',
    Sparkles: 'sparkles'
  };

  const accentClasses = ['border-accent-teal', 'border-accent-lime-green', 'border-accent-magenta'];

  // Build team grid HTML
  const teamGridHtml = members.map((member, index) => {
    const accentClass = accentClasses[index % accentClasses.length];
    return `
      <div class="team-member-card ${accentClass}" data-member-id="${member.id}">
        <div class="team-member-media">
          <div class="team-member-icon-wrapper">
            <i data-lucide="${iconMap[member.icon] || 'user'}" class="team-member-icon"></i>
          </div>
          ${member.image ? `
            <img src="${member.image}" alt="${member.name}" class="team-member-image" onload="this.previousElementSibling.style.display='none'" onerror="this.style.display='none'" />
          ` : ''}
        </div>
        <div class="team-member-content">
          <h3 class="team-member-name">${member.name}</h3>
          <p class="team-member-title">${member.title}</p>
          <p class="team-member-credentials">${member.credentials}</p>
          <p class="team-member-bio">${member.bio}</p>
        </div>
      </div>
    `;
  }).join('');

  // Build team values HTML
  const teamValuesHtml = values.map(value => `
    <div class="team-value-card">
      <div class="team-value-icon ${value.color}">
        <i data-lucide="${iconMap[value.icon] || 'heart'}" class="value-icon"></i>
      </div>
      <h3 class="team-value-title">${value.title}</h3>
      <p class="team-value-description">${value.description}</p>
    </div>
  `).join('');

  // Build education list HTML
  const educationListHtml = education.map(item => `
    <div class="education-item flex items-start">
      <div class="education-icon ${item.color}">
        <i data-lucide="check" class="check-icon"></i>
      </div>
      <div class="education-content">
        <h4 class="education-item-title">${item.title}</h4>
        <p class="education-item-description">${item.description}</p>
      </div>
    </div>
  `).join('');

  return `
    <div class="team-page">
      <!-- Hero Section -->
      <section class="team-hero">
        <div class="team-hero-container">
          <div class="team-hero-content">
            <h1 class="team-hero-title">Meet Our Team</h1>
            <p class="team-hero-subtitle">
              Our experienced and caring team is dedicated to providing exceptional orthodontic care in a warm, welcoming environment. Get to know the professionals who will guide you through your smile journey.
            </p>
          </div>
        </div>
      </section>

      <!-- Team Grid -->
      <section class="team-grid-section">
        <div class="team-grid-container">
          <div class="team-grid">
            ${teamGridHtml}
          </div>
        </div>
      </section>

      <!-- Team Values -->
      <section class="team-values-section">
        <div class="team-values-container">
          <div class="team-values-header">
            <h2 class="team-values-title">Our Team Values</h2>
            <p class="team-values-subtitle">
              These core values guide everything we do and shape the exceptional experience we provide to every patient.
            </p>
          </div>
          <div class="team-values-grid">
            ${teamValuesHtml}
          </div>
        </div>
      </section>

      <!-- Education & Training -->
      <section class="team-education-section">
        <div class="team-education-container">
          <div class="team-education-header">
            <h2 class="team-education-title">Education & Training</h2>
            <p class="team-education-subtitle">
              Our team maintains the highest level of expertise through ongoing education and professional development.
            </p>
          </div>
          <div class="team-education-grid">
            <div class="education-list">
              <h3 class="education-list-title">Continuing Education</h3>
              <div class="education-items space-y-6">
                ${educationListHtml}
              </div>
            </div>
            <div class="education-image-wrapper">
              <img src="/images/myers_education_training.png" alt="Myers Orthodontics team during training session" class="education-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}

export function initTeamPage() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Hover effects for team value cards
  const valueCards = document.querySelectorAll('.team-value-card');
  valueCards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
  });

  // Hover effects for team member cards
  const memberCards = document.querySelectorAll('.team-member-card');
  memberCards.forEach(card => {
    card.addEventListener('mouseenter', () => card.classList.add('hovered'));
    card.addEventListener('mouseleave', () => card.classList.remove('hovered'));
  });
} 