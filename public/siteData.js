// Site-wide data for Myers Orthodontics
export const siteData = {
  // Contact Information
  contact: {
    address: {
      street: '14540 Prairie Lakes Blvd N, STE 205',
      city: 'Noblesville',
      state: 'IN',
      zip: '46060-4370',
      full: '14540 Prairie Lakes Blvd N, STE 205\nNoblesville, IN 46060-4370'
    },
    phone: {
      main: '317-289-1750',
      formatted: '(317) 289-1750',
      link: 'tel:+13172891750'
    },
    email: {
      main: 'info@myersortho.com',
      referrals: 'referrals@myersortho.com'
    },
    hours: {
      mondayThursday: '8:00 AM - 5:00 PM',
      friday: '8:00 AM - 3:00 PM',
      saturday: 'By Appointment',
      sunday: 'Closed'
    },
    social: {
      facebook: {
        url: 'https://facebook.com/myersorthodontics',
        label: 'Facebook'
      },
      instagram: {
        url: 'https://instagram.com/myersorthodontics',
        label: 'Instagram'
      },
      twitter: {
        url: 'https://twitter.com/myersortho',
        label: 'X (formerly Twitter)'
      },
      youtube: {
        url: 'https://youtube.com/@myersorthodontics',
        label: 'YouTube'
      }
    }
  },

  // Treatment Options
  treatments: {
    homepage: [
      {
        icon: 'Zap',
        title: 'Traditional Braces',
        description: 'Modern metal braces are more comfortable and efficient than ever, offering predictable results for all orthodontic cases.',
        href: '/treatments#traditional',
      },
      {
        icon: 'Shield',
        title: 'Ceramic Braces',
        description: 'Tooth-colored braces blend in with your natural smile while providing the same effective treatment.',
        href: '/treatments#ceramic',
      },
      {
        icon: 'Clock',
        title: 'Invisalign',
        description: 'Nearly invisible aligners that gently shift your teeth into place without metal brackets or wires.',
        href: '/treatments#invisalign',
      },
      {
        icon: 'MapPin',
        title: 'Early Treatment',
        description: 'Interceptive orthodontics for children ages 7-10 can guide jaw growth and prevent serious problems later.',
        href: '/treatments#early',
      },
      {
        icon: 'AlignLeft',
        title: 'Retainers',
        description: 'Custom retainers help maintain your beautiful new smile after braces or Invisalign treatment.',
        href: '/treatments#retainers',
      },
      {
        icon: 'Stethoscope',
        title: 'Surgical Orthodontics',
        description: 'For severe cases, we coordinate with oral surgeons to combine orthodontics with jaw surgery for optimal results.',
        href: '/treatments#surgical',
      },
    ],
    detailed: [
      {
        id: 1,
        name: 'Traditional Metal Braces',
        slug: 'traditional-metal-braces',
        description: 'The most common and effective orthodontic treatment for all ages.',
        features: [
          'Durable and reliable',
          'Most cost-effective option',
          'Suitable for complex cases',
        ],
        duration: '18-36 months',
        color: 'bg-accent-teal',
      },
      {
        id: 2,
        name: 'Clear Ceramic Braces',
        slug: 'clear-ceramic-braces',
        description: 'Less noticeable braces that blend with your natural tooth color.',
        features: [
          'Aesthetically pleasing',
          'Effective treatment',
          'Stain-resistant',
        ],
        duration: '18-36 months',
        color: 'bg-accent-lime-green',
      },
      {
        id: 3,
        name: 'Invisalign Clear Aligners',
        slug: 'invisalign-clear-aligners',
        description: 'Virtually invisible aligners that are removable and comfortable.',
        features: ['Nearly invisible', 'Removable for eating', 'Easy to clean'],
        duration: '12-24 months',
        color: 'bg-accent-magenta',
      },
      {
        id: 4,
        name: 'Lingual Braces',
        slug: 'lingual-braces',
        description: 'Braces placed on the inside of teeth for complete invisibility.',
        features: ['Completely hidden', 'Custom-made', 'Effective results'],
        duration: '18-36 months',
        color: 'bg-accent-pink',
      },
    ],
    process: [
      {
        step: 1,
        title: 'Initial Consultation',
        description: 'Comprehensive examination and treatment planning',
        color: 'bg-accent-teal'
      },
      {
        step: 2,
        title: 'Treatment Planning',
        description: 'Customized treatment plan designed for your goals',
        color: 'bg-accent-lime-green'
      },
      {
        step: 3,
        title: 'Active Treatment',
        description: 'Regular appointments to monitor progress and adjustments',
        color: 'bg-accent-magenta'
      },
      {
        step: 4,
        title: 'Retention Phase',
        description: 'Maintain your beautiful new smile with retainers',
        color: 'bg-accent-pink'
      }
    ],
    detailedProcess: [
      {
        id: 1,
        title: 'Initial Consultation',
        duration: '60 minutes',
        description: 'Comprehensive examination including digital X-rays, photos, and treatment discussion.',
        details: [
          'Complete oral examination',
          'Digital X-rays and photographs',
          'Discussion of treatment goals',
          'Treatment options presentation',
          'Cost and timeline overview'
        ],
        color: 'process-step-teal',
        bgColor: 'process-bg-teal'
      },
      {
        id: 2,
        title: 'Treatment Planning',
        duration: '1-2 weeks',
        description: 'Custom treatment plan creation using advanced 3D imaging and digital modeling.',
        details: [
          '3D digital impressions',
          'Treatment simulation',
          'Custom appliance design',
          'Timeline finalization',
          'Insurance coordination'
        ],
        color: 'process-step-lime',
        bgColor: 'process-bg-lime'
      },
      {
        id: 3,
        title: 'Treatment Start',
        duration: '90 minutes',
        description: 'Beginning of your orthodontic journey with appliance placement and instructions.',
        details: [
          'Appliance placement',
          'Oral hygiene instructions',
          'Dietary guidelines',
          'Emergency contact information',
          'First adjustment scheduled'
        ],
        color: 'process-step-magenta',
        bgColor: 'process-bg-magenta'
      },
      {
        id: 4,
        title: 'Regular Adjustments',
        duration: '4-8 weeks',
        description: 'Ongoing monitoring and adjustments to ensure optimal treatment progress.',
        details: [
          'Progress evaluation',
          'Appliance adjustments',
          'Oral health monitoring',
          'Progress photos',
          'Next appointment scheduling'
        ],
        color: 'process-step-pink',
        bgColor: 'process-bg-pink'
      },
      {
        id: 5,
        title: 'Treatment Completion',
        duration: '90 minutes',
        description: 'Appliance removal and transition to the retention phase to maintain results.',
        details: [
          'Appliance removal',
          'Final photos and impressions',
          'Retainer fitting',
          'Retention instructions',
          'Long-term care planning'
        ],
        color: 'process-step-teal',
        bgColor: 'process-bg-teal'
      },
      {
        id: 6,
        title: 'Retention & Follow-up',
        duration: 'Ongoing',
        description: 'Long-term maintenance to preserve your beautiful new smile.',
        details: [
          'Regular retention checkups',
          'Retainer adjustments',
          'Oral health monitoring',
          'Lifetime smile guarantee',
          'Emergency support'
        ],
        color: 'process-step-lime',
        bgColor: 'process-bg-lime'
      }
    ]
  },

  // Team Members
  team: {
    members: [
      {
        id: 1,
        name: 'Dr. Michael Myers',
        title: 'Lead Orthodontist',
        bio: 'Dr. Myers has over 15 years of experience in orthodontics and is passionate about creating beautiful, healthy smiles.',
        credentials: 'DDS, MS Orthodontics',
        image: '/api/placeholder/300/400',
        icon: 'Stethoscope',
      },
      {
        id: 2,
        name: 'Dr. Kennedy Chen',
        title: 'Lead Orthodontist',
        bio: 'Specializing in adult orthodontics and clear aligner therapy with a focus on aesthetic outcomes.',
        credentials: 'DDS, MS Orthodontics',
        image: '/api/placeholder/300/400',
        icon: 'Stethoscope',
      },
      {
        id: 3,
        name: 'Jennifer Rodriguez',
        title: 'Office Manager',
        bio: 'Jennifer ensures smooth operations and exceptional patient care from consultation to treatment completion.',
        credentials: 'RDA, Practice Management',
        image: '/api/placeholder/300/400',
        icon: 'Briefcase',
      },
      {
        id: 4,
        name: 'Amanda Johnson',
        title: 'Lead Dental Assistant',
        bio: 'Amanda brings expertise in chairside assistance and patient education to ensure comfort during treatment.',
        credentials: 'RDA, Expanded Functions',
        image: '/api/placeholder/300/400',
        icon: 'Heart',
      },
      {
        id: 5,
        name: 'Kevin Park',
        title: 'Treatment Coordinator',
        bio: 'Kevin helps patients understand their treatment options and coordinates insurance and financing.',
        credentials: 'Insurance Specialist',
        image: '/api/placeholder/300/400',
        icon: 'Calendar',
      },
      {
        id: 6,
        name: 'Lisa Thompson',
        title: 'Dental Hygienist',
        bio: 'Lisa provides comprehensive hygiene care and education to maintain optimal oral health during treatment.',
        credentials: 'RDH, Local Anesthesia',
        image: '/api/placeholder/300/400',
        icon: 'Sparkles',
      },
    ],
    values: [
      {
        title: 'Compassionate Care',
        description: 'We treat every patient with kindness, understanding, and genuine concern for their wellbeing.',
        icon: 'Heart',
        color: 'bg-accent-teal'
      },
      {
        title: 'Professional Excellence',
        description: 'We maintain the highest standards of orthodontic care through continuous education and training.',
        icon: 'CheckCircle',
        color: 'bg-accent-lime-green'
      },
      {
        title: 'Team Collaboration',
        description: 'We work together as a unified team to ensure seamless, coordinated care for every patient.',
        icon: 'Users',
        color: 'bg-accent-magenta'
      },
      {
        title: 'Continuous Learning',
        description: 'We stay current with the latest advances in orthodontics to provide the best possible care.',
        icon: 'GraduationCap',
        color: 'bg-accent-pink'
      }
    ],
    education: [
      {
        title: 'Professional Conferences',
        description: 'Regular attendance at orthodontic conferences and seminars to stay current with industry trends.',
        color: 'bg-accent-teal'
      },
      {
        title: 'Technology Training',
        description: 'Specialized training on the latest orthodontic technology and treatment techniques.',
        color: 'bg-accent-lime-green'
      },
      {
        title: 'Patient Care Excellence',
        description: 'Ongoing training in patient communication, comfort, and satisfaction.',
        color: 'bg-accent-magenta'
      }
    ]
  },

  // Career Information
  careers: {
    benefits: [
      {
        title: 'Health Insurance',
        description: 'Comprehensive medical, dental, and vision coverage',
        icon: 'Heart',
      },
      {
        title: 'Retirement Plan',
        description: '401(k) with company matching contributions',
        icon: 'PiggyBank',
      },
      {
        title: 'Paid Time Off',
        description: 'Generous vacation, sick leave, and holiday pay',
        icon: 'Calendar',
      },
      {
        title: 'Professional Development',
        description: 'Continuing education and conference attendance',
        icon: 'GraduationCap',
      },
      {
        title: 'Team Environment',
        description: 'Collaborative, supportive workplace culture',
        icon: 'Users',
      },
      {
        title: 'Work-Life Balance',
        description: 'Flexible scheduling and family-friendly policies',
        icon: 'Clock',
      },
    ],
    jobOpenings: [
      {
        id: 1,
        title: 'Dental Assistant',
        type: 'Full-time',
        department: 'Clinical',
        description: 'We are seeking an experienced dental assistant to join our team and provide exceptional patient care.',
        requirements: [
          'RDA certification required',
          '2+ years of orthodontic experience preferred',
          'Excellent communication skills',
          'Detail-oriented and organized',
          'Team player with positive attitude',
        ],
        responsibilities: [
          'Chairside assistance during procedures',
          'Patient education and comfort',
          'Sterilization and equipment maintenance',
          'Digital X-ray and photography',
          'Appointment scheduling assistance',
        ],
      },
      {
        id: 2,
        title: 'Treatment Coordinator',
        type: 'Full-time',
        department: 'Administrative',
        description: 'Join our team as a Treatment Coordinator and help patients navigate their orthodontic journey.',
        requirements: [
          'Previous orthodontic experience preferred',
          'Strong communication and presentation skills',
          'Insurance knowledge helpful',
          'Computer proficiency required',
          'Sales or customer service background a plus',
        ],
        responsibilities: [
          'Consultation presentations',
          'Treatment plan coordination',
          'Insurance verification and processing',
          'Financial arrangements and payment plans',
          'Patient relationship management',
        ],
      },
      {
        id: 3,
        title: 'Orthodontic Technician',
        type: 'Full-time',
        department: 'Clinical',
        description: 'We need a skilled orthodontic technician to support our clinical team and ensure quality care.',
        requirements: [
          'Orthodontic technician certification',
          '3+ years of experience in orthodontics',
          'Knowledge of various appliance systems',
          'Precision and attention to detail',
          'Ability to work independently',
        ],
        responsibilities: [
          'Appliance fabrication and repair',
          'Laboratory work and quality control',
          'Inventory management',
          'Equipment maintenance',
          'Support clinical team as needed',
        ],
      },
    ],
    applicationProcess: [
      {
        step: 1,
        title: 'Submit Application',
        description: 'Send us your resume and cover letter through our online portal or email.',
        color: 'bg-accent-teal'
      },
      {
        step: 2,
        title: 'Phone Screening',
        description: 'Brief phone conversation to discuss your background and interest in the position.',
        color: 'bg-accent-lime-green'
      },
      {
        step: 3,
        title: 'In-Person Interview',
        description: 'Meet with our team to discuss your experience and tour our facility.',
        color: 'bg-accent-magenta'
      },
      {
        step: 4,
        title: 'Job Offer',
        description: 'If selected, we\'ll extend an offer and welcome you to the Myers Orthodontics family.',
        color: 'bg-accent-pink'
      }
    ]
  },

  // Schedule/Appointment Information
  schedule: {
    timeSlots: [
      { value: 'morning', label: 'Morning (8AM - 12PM)' },
      { value: 'afternoon', label: 'Afternoon (12PM - 4PM)' },
      { value: 'evening', label: 'Evening (4PM - 7PM)' }
    ],
    consultationSteps: [
      {
        step: 1,
        title: 'Comprehensive Exam',
        description: 'Complete oral examination, digital X-rays, and photos to assess your orthodontic needs.',
        color: 'bg-accent-teal'
      },
      {
        step: 2,
        title: 'Treatment Discussion',
        description: 'Review treatment options, timeline, and costs with our orthodontist in a relaxed setting.',
        color: 'bg-accent-lime-green'
      },
      {
        step: 3,
        title: 'Personalized Plan',
        description: 'Receive a customized treatment plan designed specifically for your goals and lifestyle.',
        color: 'bg-accent-magenta'
      }
    ]
  },

  // Contact Form Subjects
  contactSubjects: [
    { value: '', label: 'Select a subject' },
    { value: 'consultation', label: 'Schedule Consultation' },
    { value: 'treatment', label: 'Treatment Information' },
    { value: 'insurance', label: 'Insurance Questions' },
    { value: 'emergency', label: 'Emergency' },
    { value: 'other', label: 'Other' }
  ],

  // FAQ Data
  faq: [
    {
      question: 'At what age should my child first see an orthodontist?',
      answer: 'The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7. This allows us to identify any potential issues early and determine the optimal time to begin treatment if needed.'
    },
    {
      question: 'How long does orthodontic treatment typically take?',
      answer: 'Treatment time varies depending on the individual case, but most patients wear braces for 18-24 months. Some minor cases may be completed in as little as 6 months, while more complex cases may take up to 36 months.'
    },
    {
      question: 'Do braces hurt?',
      answer: 'You may experience some discomfort when your braces are first placed and after adjustment appointments, but this is typically mild and temporary. Most patients describe it as pressure rather than pain.'
    },
    {
      question: "What's the difference between Invisalign and braces?",
      answer: 'Invisalign uses a series of clear, removable aligners to gradually move teeth, while braces use brackets and wires that are fixed to the teeth. Invisalign is nearly invisible and can be removed for eating and cleaning, but requires strict patient compliance.'
    },
    {
      question: 'How often will I need to come in for appointments?',
      answer: 'Most patients with braces come in every 6-8 weeks for adjustments. Invisalign patients typically have appointments every 8-10 weeks to receive new sets of aligners.'
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We accept most major insurance plans and will help verify your benefits before treatment. We also offer flexible payment plans and financing options.'
    }
  ],

  // Process-specific FAQ data
  processFaq: [
    {
      question: 'How long does treatment typically take?',
      answer: 'Treatment duration varies depending on the complexity of your case, but most patients complete treatment in 12-36 months. We\'ll provide a specific timeline during your consultation.'
    },
    {
      question: 'Will treatment be painful?',
      answer: 'Most patients experience mild discomfort for a few days after initial placement and adjustments. This is normal and indicates that your teeth are moving. We provide tips to manage any discomfort.'
    },
    {
      question: 'How often will I need appointments?',
      answer: 'Most patients visit us every 4-8 weeks for adjustments and progress monitoring. The frequency may vary based on your specific treatment plan and progress.'
    }
  ],

  // Technology features
  technology: [
    {
      icon: 'Monitor',
      title: 'Digital Imaging',
      description: '3D digital scans eliminate the need for messy impressions and provide precise treatment planning.',
      color: 'tech-teal'
    },
    {
      icon: 'Zap',
      title: 'Treatment Simulation',
      description: 'See your treatment results before you start with advanced computer modeling and simulation.',
      color: 'tech-lime'
    },
    {
      icon: 'Award',
      title: 'Progress Monitoring',
      description: 'Regular digital monitoring ensures your treatment stays on track and adjustments are made as needed.',
      color: 'tech-magenta'
    }
  ],
}; 