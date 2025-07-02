import { createReferralHero, initReferralHero } from './ReferralHero.js';
import { createWhyReferSection, initWhyReferSection } from './WhyReferSection.js';
import { createReferralForm, initReferralForm } from './ReferralForm.js';
import { siteData } from '../siteData.js';

export function createReferralsPage() {
  return `
    <div class="referrals-page">
      <!-- Hero Section -->
      <div id="referral-hero-container"></div>
      
      <!-- Why Refer Section -->
      <div id="why-refer-container"></div>
      
      <!-- Referral Form Section -->
      <div id="referral-form-container"></div>
    </div>
  `;
}

export function initReferralsPage() {
  // Mount and initialize hero section
  const heroContainer = document.getElementById('referral-hero-container');
  if (heroContainer) {
    heroContainer.innerHTML = createReferralHero();
    initReferralHero();
  }

  // Mount and initialize why refer section
  const whyReferContainer = document.getElementById('why-refer-container');
  if (whyReferContainer) {
    whyReferContainer.innerHTML = createWhyReferSection();
    initWhyReferSection();
  }

  // Mount and initialize referral form
  const formContainer = document.getElementById('referral-form-container');
  if (formContainer) {
    formContainer.innerHTML = createReferralForm();
    initReferralForm();
  }

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
} 