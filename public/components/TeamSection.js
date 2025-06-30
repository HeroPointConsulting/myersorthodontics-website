import { siteData } from '../siteData.js';

export class TeamSection {
  constructor() {
    // Icon mapping for team member icons
    this.iconMap = {
      'Stethoscope': 'stethoscope',
      'Briefcase': 'briefcase',
      'Heart': 'heart',
      'Calendar': 'calendar',
      'Sparkles': 'sparkles'
    };

    this.mounted = false;
  }

  render() {
    const { team } = siteData;

    return `
      <section id="team" class="team-section">
        <div class="team-container">
          <!-- Team Grid -->
          <div class="team-grid-section">
            <div class="team-header">
              <h2 class="team-title">
                Meet Our Expert Team
              </h2>
              <p class="team-subtitle">
                Our dedicated professionals are committed to providing exceptional orthodontic care with a personal touch.
              </p>
            </div>
            
                         <div class="team-grid">
               ${team.members.map((member) => `
                                  <div class="team-member-card" data-member-id="${member.id}">
                                         <div class="team-member-image-section">
                       <!-- Photo placeholder - will show when image is available -->
                       <!-- <img
                         src="${member.image || ''}"
                         alt="${member.name}"
                         class="team-member-photo ${member.image ? 'has-photo' : 'no-photo'}"
                         style="${member.image ? '' : 'display: none;'}"
                       /> -->
                       <!-- Icon fallback - shows when no photo available -->
                       <div class="team-member-icon-wrapper no-photo">
                         <i data-lucide="${this.iconMap[member.icon]}" class="team-member-icon"></i>
                       </div>
                     </div>
                   <div class="team-member-content">
                     <h3 class="team-member-name">${member.name}</h3>
                     <p class="team-member-title">${member.title}</p>
                     <p class="team-member-credentials">${member.credentials}</p>
                     <p class="team-member-bio">${member.bio}</p>
                   </div>
                 </div>
               `).join('')}
             </div>
          </div>

          <!-- Join Our Family Section -->
                     <div class="team-join-section">
             <div class="team-join-content">
               <div class="team-join-image-section">
                 <img
                   src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=500&q=80"
                   alt="Team"
                   class="team-join-image"
                 />
               </div>
               <div class="team-join-text">
                 <h3 class="team-join-title">
                   Join Our Family
                 </h3>
                 <p class="team-join-description">
                   We're always looking for talented, compassionate individuals to
                   join our team. At Myers Orthodontics, we value:
                 </p>
                 <ul class="team-join-list">
                   <li class="team-join-item">
                     <i data-lucide="check" class="team-join-check"></i>
                     <span class="team-join-item-text">Patient-centered care</span>
                   </li>
                   <li class="team-join-item">
                     <i data-lucide="check" class="team-join-check"></i>
                     <span class="team-join-item-text">Continuous learning</span>
                   </li>
                   <li class="team-join-item">
                     <i data-lucide="check" class="team-join-check"></i>
                     <span class="team-join-item-text">Team collaboration</span>
                   </li>
                   <li class="team-join-item">
                     <i data-lucide="check" class="team-join-check"></i>
                     <span class="team-join-item-text">Positive attitudes</span>
                   </li>
                 </ul>
                 <a href="/careers" class="team-join-button">
                   View Open Positions
                 </a>
               </div>
             </div>
           </div>
        </div>
      </section>
    `;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = this.render();
    this.setupEventListeners();
    this.initializeIcons();
    this.mounted = true;
  }

  setupEventListeners() {
    // Add hover effects for team member cards
    const memberCards = document.querySelectorAll('.team-member-card');
    memberCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
      });

      card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
      });
    });

    // Add hover effects for join section
    const joinSection = document.querySelector('.team-join-section');
    if (joinSection) {
      joinSection.addEventListener('mouseenter', () => {
        joinSection.classList.add('hovered');
      });

      joinSection.addEventListener('mouseleave', () => {
        joinSection.classList.remove('hovered');
      });
    }
  }

  initializeIcons() {
    // Initialize Lucide icons if the library is available
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    } else {
      console.warn('Lucide icons library not found. Please include it in your HTML.');
    }
  }

  destroy() {
    this.mounted = false;
  }
} 