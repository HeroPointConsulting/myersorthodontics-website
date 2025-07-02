export function createWhyReferSection() {
  const benefits = [
    {
      icon: 'stethoscope',
      title: 'Expert Orthodontic Care',
      description: 'Board-certified orthodontist with 15+ years of experience providing comprehensive treatment for all ages and complexities.'
    },
    {
      icon: 'clock',
      title: 'Rapid Response Time',
      description: 'We prioritize urgent referrals with same-day consultations available and 24-hour response to all referral communications.'
    },
    {
      icon: 'file-text',
      title: 'Detailed Reporting',
      description: 'Comprehensive progress reports and treatment updates sent directly to your office throughout the patient\'s orthodontic journey.'
    },
    {
      icon: 'users',
      title: 'Seamless Communication',
      description: 'Direct line to our referral coordinator plus digital patient tracking system for real-time treatment updates.'
    },
    {
      icon: 'award',
      title: 'Advanced Technology',
      description: 'State-of-the-art 3D imaging, digital treatment planning, and the latest orthodontic techniques for optimal results.'
    },
    {
      icon: 'heart',
      title: 'Patient-Centered Care',
      description: 'Exceptional patient experience with flexible scheduling, family-friendly environment, and personalized treatment approaches.'
    }
  ];

  const testimonials = [
    {
      quote: "Myers Orthodontics has been our go-to referral for complex orthodontic cases. Their communication is excellent and our patients always receive outstanding care.",
      author: "Dr. Sarah Johnson",
      practice: "Noblesville Family Dentistry"
    },
    {
      quote: "The detailed progress reports and professional collaboration make referring patients to Myers Orthodontics a seamless process for our practice.",
      author: "Dr. Michael Chen",
      practice: "Westfield Dental Group"
    },
    {
      quote: "Our patients consistently return with beautiful smiles and positive experiences. We trust Myers Orthodontics with our most valued patients.",
      author: "Dr. Jennifer Rodriguez",
      practice: "Fishers Complete Dentistry"
    }
  ];

  return `
    <section id="why-refer" class="why-refer-section">
      <div class="why-refer-container">
        <!-- Header -->
        <div class="why-refer-header">
          <h2 class="why-refer-title">Why Choose Myers Orthodontics</h2>
          <p class="why-refer-description">
            We make referring patients easy with professional collaboration, 
            advanced care, and exceptional patient experiences.
          </p>
        </div>

        <!-- Benefits Grid -->
        <div class="why-refer-benefits">
          ${benefits.map((benefit, index) => `
            <div class="why-refer-benefit" data-aos="fade-up" data-aos-delay="${index * 100}">
              <div class="why-refer-benefit-icon bg-accent-${index % 3 === 0 ? 'teal' : index % 3 === 1 ? 'lime-green' : 'magenta'}">
                <i data-lucide="${benefit.icon}"></i>
              </div>
              <div class="why-refer-benefit-content">
                <h3 class="why-refer-benefit-title">${benefit.title}</h3>
                <p class="why-refer-benefit-description">${benefit.description}</p>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Process Overview -->
        <div class="why-refer-process">
          <h3 class="why-refer-process-title">Our Referral Process</h3>
          <div class="why-refer-process-steps">
            <div class="why-refer-step">
              <div class="why-refer-step-number bg-accent-teal">1</div>
              <h4 class="why-refer-step-title">Submit Referral</h4>
              <p class="why-refer-step-description">Complete our simple online form or call our dedicated referral line.</p>
            </div>
            <div class="why-refer-step">
              <div class="why-refer-step-number bg-accent-lime-green">2</div>
              <h4 class="why-refer-step-title">Rapid Response</h4>
              <p class="why-refer-step-description">We contact the patient within 1 business day to schedule their consultation.</p>
            </div>
            <div class="why-refer-step">
              <div class="why-refer-step-number bg-accent-magenta">3</div>
              <h4 class="why-refer-step-title">Ongoing Updates</h4>
              <p class="why-refer-step-description">Regular progress reports keep you informed throughout treatment.</p>
            </div>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="why-refer-testimonials">
          <h3 class="why-refer-testimonials-title">What Referring Doctors Say</h3>
          <div class="why-refer-testimonials-grid">
            ${testimonials.map((testimonial, index) => `
              <div class="why-refer-testimonial" data-aos="fade-up" data-aos-delay="${index * 200}">
                <div class="why-refer-testimonial-content">
                  <div class="why-refer-testimonial-quote">
                    <i data-lucide="quote" class="why-refer-testimonial-quote-icon"></i>
                    <p class="why-refer-testimonial-text">${testimonial.quote}</p>
                  </div>
                  <div class="why-refer-testimonial-author">
                    <p class="why-refer-testimonial-name">${testimonial.author}</p>
                    <p class="why-refer-testimonial-practice">${testimonial.practice}</p>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initWhyReferSection() {
  // Initialize AOS (Animate On Scroll) if available
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }

  // Add intersection observer for benefit animations
  const benefits = document.querySelectorAll('.why-refer-benefit');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  benefits.forEach((benefit) => {
    observer.observe(benefit);
  });
} 