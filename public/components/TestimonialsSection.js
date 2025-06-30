export class TestimonialsSection {
  constructor() {
    this.testimonials = [
      {
        id: 1,
        name: 'Sarah Johnson',
        rating: 5,
        text: 'Dr. Myers and the team provided exceptional care throughout my treatment. The results exceeded my expectations!',
        treatment: 'Invisalign',
      },
      {
        id: 2,
        name: 'Michael Chen',
        rating: 5,
        text: 'Professional, friendly, and always on time. The office environment is modern and comfortable.',
        treatment: 'Traditional Braces',
      },
      {
        id: 3,
        name: 'Emma Rodriguez',
        rating: 5,
        text: 'Amazing transformation! The entire process was smooth and the staff made me feel comfortable every visit.',
        treatment: 'Clear Aligners',
      },
    ];
  }

  render() {
    return `
      <section class="testimonials-section">
        <div class="testimonials-container">
          <div class="testimonials-header">
            <h2 class="testimonials-title">
              What Our Patients Say
            </h2>
            <p class="testimonials-subtitle">
              Real stories from real patients who have transformed their smiles
              with Myers Orthodontics.
            </p>
          </div>

          <div class="testimonials-grid">
            ${this.testimonials.map(testimonial => `
              <div class="testimonial-card">
                <div class="testimonial-rating">
                  <div class="stars">
                    ${this.createStarRating(testimonial.rating)}
                  </div>
                  <span class="treatment-type">
                    ${testimonial.treatment}
                  </span>
                </div>

                <p class="testimonial-text">"${testimonial.text}"</p>

                <div class="testimonial-author">
                  <div class="author-avatar">
                    <span class="author-initials">
                      ${this.getInitials(testimonial.name)}
                    </span>
                  </div>
                  <div class="author-info">
                    <p class="author-name">
                      ${testimonial.name}
                    </p>
                    <p class="author-verification">Verified Patient</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="testimonials-cta">
            <a href="/reviews" class="testimonials-button">
              Read More Reviews
            </a>
          </div>
        </div>
      </section>
    `;
  }

  mount(selector) {
    const container = document.querySelector(selector);
    if (!container) return;

    container.innerHTML = this.render();
  }

  createStarRating(rating) {
    let stars = '';
    for (let i = 0; i < rating; i++) {
      stars += '<span class="star">★</span>';
    }
    return stars;
  }

  getInitials(name) {
    return name.split(' ').map(n => n[0]).join('');
  }
} 