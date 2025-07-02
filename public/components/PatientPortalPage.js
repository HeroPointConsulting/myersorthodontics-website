export function createPatientPortalPage() {
  return `
    <div class="patient-portal-page">
      <!-- Hero Section -->
      <section class="patient-portal-hero">
        <div class="patient-portal-hero-container">
          <div class="patient-portal-hero-content">
            <h1 class="patient-portal-hero-title">
              Patient Portal
            </h1>
            <p class="patient-portal-hero-description">
              Access your account 24/7 to manage appointments, view treatment
              progress, make payments, and communicate with our team.
            </p>
          </div>
        </div>
      </section>

      <!-- Login Section -->
      <section class="py-16 bg-primary-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="max-w-md mx-auto">
            <div class="login-card bg-primary-light-gray rounded-lg p-8">
              <h2 class="font-montserrat font-bold text-2xl text-primary-black text-center mb-6">
                Sign In to Your Account
              </h2>

              <form id="login-form" class="space-y-6">
                <div>
                  <label for="email" class="block text-sm font-medium text-primary-black mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label for="password" class="block text-sm font-medium text-primary-black mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                    placeholder="Enter your password"
                  />
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 text-accent-teal focus:ring-accent-teal border-gray-300 rounded"
                    />
                    <label for="remember-me" class="ml-2 block text-sm text-gray-600">
                      Remember me
                    </label>
                  </div>

                  <a
                    href="#"
                    id="forgot-password-btn"
                    class="text-sm text-accent-teal hover:text-accent-lime-green cursor-pointer"
                  >
                    Forgot password?
                  </a>
                </div>

                <button
                  type="submit"
                  class="btn-primary w-full bg-accent-teal hover:bg-accent-lime-green text-primary-white font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer"
                >
                  Sign In
                </button>
              </form>

              <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">
                  Don't have an account?
                  <a
                    href="#"
                    id="create-account-btn"
                    class="text-accent-teal hover:text-accent-lime-green font-semibold cursor-pointer"
                  >
                    Create Account
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Portal Features -->
      <section class="py-16 bg-primary-light-gray">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="font-montserrat font-bold text-3xl text-primary-black mb-4">
              Portal Features
            </h2>
            <p class="text-lg text-gray-600 max-w-xl mx-auto">
              Everything you need to manage your orthodontic care, all in one
              convenient location.
            </p>
          </div>

          <div class="features-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="feature-card bg-primary-white p-8 rounded-lg hover:shadow-md transition-shadow">
              <div class="feature-icon feature-icon-teal p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                <i data-lucide="calendar" class="w-8 h-8 text-primary-white"></i>
              </div>
              <h3 class="font-montserrat font-semibold text-xl text-primary-black mb-3">
                Appointment Scheduling
              </h3>
              <p class="text-gray-600">View and schedule your upcoming appointments online</p>
            </div>

            <div class="feature-card bg-primary-white p-8 rounded-lg hover:shadow-md transition-shadow">
              <div class="feature-icon feature-icon-lime p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                <i data-lucide="line-chart" class="w-8 h-8 text-primary-white"></i>
              </div>
              <h3 class="font-montserrat font-semibold text-xl text-primary-black mb-3">
                Treatment Progress
              </h3>
              <p class="text-gray-600">Track your orthodontic journey with photos and updates</p>
            </div>

            <div class="feature-card bg-primary-white p-8 rounded-lg hover:shadow-md transition-shadow">
              <div class="feature-icon feature-icon-magenta p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                <i data-lucide="credit-card" class="w-8 h-8 text-primary-white"></i>
              </div>
              <h3 class="font-montserrat font-semibold text-xl text-primary-black mb-3">
                Payment & Billing
              </h3>
              <p class="text-gray-600">View statements, make payments, and manage your account</p>
            </div>

            <div class="feature-card bg-primary-white p-8 rounded-lg hover:shadow-md transition-shadow">
              <div class="feature-icon feature-icon-teal p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                <i data-lucide="message-circle" class="w-8 h-8 text-primary-white"></i>
              </div>
              <h3 class="font-montserrat font-semibold text-xl text-primary-black mb-3">
                Secure Messaging
              </h3>
              <p class="text-gray-600">Communicate directly with your orthodontic team</p>
            </div>

            <div class="feature-card bg-primary-white p-8 rounded-lg hover:shadow-md transition-shadow">
              <div class="feature-icon feature-icon-lime p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                <i data-lucide="book-open" class="w-8 h-8 text-primary-white"></i>
              </div>
              <h3 class="font-montserrat font-semibold text-xl text-primary-black mb-3">
                Educational Resources
              </h3>
              <p class="text-gray-600">Access care instructions, videos, and helpful tips</p>
            </div>

            <div class="feature-card bg-primary-white p-8 rounded-lg hover:shadow-md transition-shadow">
              <div class="feature-icon feature-icon-magenta p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center">
                <i data-lucide="bell" class="w-8 h-8 text-primary-white"></i>
              </div>
              <h3 class="font-montserrat font-semibold text-xl text-primary-black mb-3">
                Treatment Reminders
              </h3>
              <p class="text-gray-600">Get automated reminders for appointments and care</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Getting Started -->
      <section class="py-16 bg-primary-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="font-montserrat font-bold text-3xl text-primary-black mb-4">
              Getting Started
            </h2>
            <p class="text-lg text-gray-600 max-w-2xl mx-auto">
              New to our patient portal? Follow these simple steps to get set up.
            </p>
          </div>

          <div class="steps-grid grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="step-card text-center">
              <div class="step-number step-number-teal text-primary-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-montserrat font-bold text-xl">
                1
              </div>
              <h3 class="font-montserrat font-semibold text-lg text-primary-black mb-2">
                Create Your Account
              </h3>
              <p class="text-gray-600 text-sm">
                Use the registration link we provided or contact our office to get your account set up.
              </p>
            </div>

            <div class="step-card text-center">
              <div class="step-number step-number-lime text-primary-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-montserrat font-bold text-xl">
                2
              </div>
              <h3 class="font-montserrat font-semibold text-lg text-primary-black mb-2">
                Verify Your Information
              </h3>
              <p class="text-gray-600 text-sm">
                Complete your profile with contact information and verify your identity for security.
              </p>
            </div>

            <div class="step-card text-center">
              <div class="step-number step-number-magenta text-primary-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center font-montserrat font-bold text-xl">
                3
              </div>
              <h3 class="font-montserrat font-semibold text-lg text-primary-black mb-2">
                Start Using the Portal
              </h3>
              <p class="text-gray-600 text-sm">
                Access all features including appointments, payments, messaging, and more.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Support -->
      <section class="py-16 bg-primary-light-gray">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <div class="support-section-container bg-primary-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <div class="text-center mb-8">
              <div class="support-icon bg-accent-teal text-primary-white rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <i data-lucide="headphones" class="w-8 h-8"></i>
              </div>
              <h2 class="font-montserrat font-bold text-3xl text-primary-black mb-4">
                Need Help Getting Started?
              </h2>
              <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                We're here to make your patient portal experience seamless and easy.
              </p>
            </div>
            
            <div class="support-options grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="support-option support-lime bg-primary-light-gray p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 class="font-montserrat font-semibold text-lg text-primary-black mb-4">
                  Contact Support
                </h3>
                <p class="text-gray-600 text-sm mt-4 mb-6 px-2">
                  Need help? Call us directly for personalized assistance.
                </p>
                <div class="support-phone bg-accent-lime-green text-primary-white py-3 px-4 rounded-lg inline-block">
                  <i data-lucide="phone" class="w-4 h-4 mr-2"></i>
                  <span class="font-semibold text-lg">(317) 289-1750</span>
                </div>
              </div>
              
              <div class="support-option support-magenta bg-primary-light-gray p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                <h3 class="font-montserrat font-semibold text-lg text-primary-black mb-4">
                  Watch Tutorial
                </h3>
                <p class="text-gray-600 text-sm mt-4 mb-6 px-2">
                  Watch screen recordings of account creation and portal navigation.
                </p>
                <div id="watch-tutorial-btn" class="support-video bg-accent-magenta text-primary-white py-3 px-4 rounded-lg inline-block cursor-pointer">
                  <i data-lucide="play" class="w-4 h-4 mr-2"></i>
                  <span class="font-semibold text-lg">Watch Video</span>
                </div>
              </div>
            </div>
            
            <div class="support-footer text-center mt-8 pt-4 border-t border-gray-200">
              <p class="text-gray-600 text-sm">
                Available during business hours for immediate assistance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Forgot Password Modal -->
      <div id="forgot-password-modal" class="modal fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50 p-4 hidden">
        <div class="modal-content bg-primary-white rounded-lg p-8 max-w-md w-full">
          <div class="flex justify-between items-center mb-6">
            <h2 class="font-montserrat font-bold text-2xl text-primary-black">
              Reset Password
            </h2>
            <button id="close-forgot-password" class="text-gray-500 hover:text-gray-700 cursor-pointer">
              <i data-lucide="x" class="w-6 h-6"></i>
            </button>
          </div>

          <form id="forgot-password-form" class="space-y-6">
            <div>
              <label for="forgot-email" class="block text-sm font-medium text-primary-black mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="forgot-email"
                name="email"
                required
                class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>

            <p class="text-sm text-gray-600">
              We'll send you a link to reset your password.
            </p>

            <div class="flex gap-4">
              <button
                type="button"
                id="cancel-forgot-password"
                class="btn-secondary flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn-primary flex-1 bg-accent-teal hover:bg-accent-lime-green text-primary-white font-semibold py-3 px-4 rounded-lg transition-colors cursor-pointer"
              >
                Send Reset Link
              </button>
            </div>
          </form>
        </div>
      </div>

      <!-- Create Account Modal -->
      <div id="create-account-modal" class="modal fixed inset-0 backdrop-blur-lg flex items-center justify-center z-50 p-4 hidden">
        <div class="modal-content bg-primary-white rounded-lg p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto">
          <div class="flex justify-between items-center mb-6">
            <h2 class="font-montserrat font-bold text-2xl text-primary-black">
              Create Account
            </h2>
            <button id="close-create-account" class="text-gray-500 hover:text-gray-700 cursor-pointer">
              <i data-lucide="x" class="w-6 h-6"></i>
            </button>
          </div>

          <form id="create-account-form" class="space-y-4">
            <div>
              <label for="account-number" class="block text-sm font-medium text-primary-black mb-1">
                Account Number
              </label>
              <input
                type="text"
                id="account-number"
                name="accountNumber"
                required
                class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                placeholder="Enter your account number"
              />
              <p class="text-xs text-gray-500 mt-1">
                Your account number can be found on your treatment plan or billing statement.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label for="first-name" class="block text-sm font-medium text-primary-black mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  required
                  class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                  placeholder="First name"
                />
              </div>

              <div>
                <label for="last-name" class="block text-sm font-medium text-primary-black mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  required
                  class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div>
              <label for="create-email" class="block text-sm font-medium text-primary-black mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="create-email"
                name="email"
                required
                class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-primary-black mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                placeholder="(317) 289-1750"
              />
            </div>

            <div>
              <label for="date-of-birth" class="block text-sm font-medium text-primary-black mb-1">
                Date of Birth
              </label>
              <input
                type="date"
                id="date-of-birth"
                name="dateOfBirth"
                required
                class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
              />
            </div>

            <div>
              <label for="create-password" class="block text-sm font-medium text-primary-black mb-1">
                Password
              </label>
              <input
                type="password"
                id="create-password"
                name="password"
                required
                class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                placeholder="Create a secure password"
              />
            </div>

            <div>
              <label for="confirm-password" class="block text-sm font-medium text-primary-black mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                required
                class="form-input w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-teal focus:border-transparent"
                placeholder="Confirm your password"
              />
            </div>

            <div class="flex gap-4 pt-4">
              <button
                type="button"
                id="cancel-create-account"
                class="btn-secondary flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                class="btn-primary flex-1 bg-accent-teal hover:bg-accent-lime-green text-primary-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `;
}

export function initPatientPortalPage() {
  // Ensure DOM is ready before initializing
  const initializeModals = () => {
    // Get DOM elements
    const loginFormEl = document.getElementById('login-form');
    const forgotPasswordBtn = document.getElementById('forgot-password-btn');
    const createAccountBtn = document.getElementById('create-account-btn');
    const forgotPasswordModal = document.getElementById('forgot-password-modal');
    const createAccountModal = document.getElementById('create-account-modal');
    const closeForgotPassword = document.getElementById('close-forgot-password');
    const closeCreateAccount = document.getElementById('close-create-account');
    const cancelForgotPassword = document.getElementById('cancel-forgot-password');
    const cancelCreateAccount = document.getElementById('cancel-create-account');
    const forgotPasswordFormEl = document.getElementById('forgot-password-form');
    const createAccountFormEl = document.getElementById('create-account-form');
    const watchTutorialBtn = document.getElementById('watch-tutorial-btn');

    // Check if all required elements exist
    if (!forgotPasswordModal || !createAccountModal) {
      console.error('Modal elements not found, retrying...');
      setTimeout(initializeModals, 10);
      return;
    }

    // Ensure modals are hidden on initialization
    forgotPasswordModal.classList.add('hidden');
    createAccountModal.classList.add('hidden');

    // State management
    let isLoggedIn = false;
    let loginForm = { email: '', password: '' };
    let forgotPasswordForm = { email: '' };
    let createAccountForm = {
      accountNumber: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      password: '',
      confirmPassword: ''
    };

    // Event handlers
    function handleLoginSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      loginForm = {
        email: formData.get('email'),
        password: formData.get('password')
      };
      console.log('Login attempt:', loginForm);
      // TODO: Implement actual login logic
      // setIsLoggedIn(true); // Simulate login
    }

    function showForgotPasswordModal() {
      forgotPasswordModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function hideForgotPasswordModal() {
      forgotPasswordModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    function showCreateAccountModal() {
      createAccountModal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function hideCreateAccountModal() {
      createAccountModal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    function handleForgotPasswordSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      forgotPasswordForm = { email: formData.get('email') };
      console.log('Forgot password request:', forgotPasswordForm);
      // TODO: Handle forgot password logic
      hideForgotPasswordModal();
      alert('Password reset link sent to your email!');
    }

    function handleCreateAccountSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      createAccountForm = {
        accountNumber: formData.get('accountNumber'),
        firstName: formData.get('firstName'),
        lastName: formData.get('lastName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        dateOfBirth: formData.get('dateOfBirth'),
        password: formData.get('password'),
        confirmPassword: formData.get('confirmPassword')
      };

      if (createAccountForm.password !== createAccountForm.confirmPassword) {
        alert('Passwords do not match');
        return;
      }

      console.log('Create account request:', createAccountForm);
      // TODO: Handle create account logic
      hideCreateAccountModal();
      alert('Account created successfully! Please check your email for verification.');
    }

    function handleWatchTutorial() {
      // TODO: Implement tutorial video functionality
      console.log('Watch tutorial clicked');
      alert('Tutorial video coming soon!');
    }

    // Modal backdrop click handlers
    function handleModalBackdropClick(e, hideModal) {
      if (e.target === e.currentTarget) {
        hideModal();
      }
    }

    // Add event listeners
    if (loginFormEl) {
      loginFormEl.addEventListener('submit', handleLoginSubmit);
    }

    if (forgotPasswordBtn) {
      forgotPasswordBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showForgotPasswordModal();
      });
    }

    if (createAccountBtn) {
      createAccountBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showCreateAccountModal();
      });
    }

    if (closeForgotPassword) {
      closeForgotPassword.addEventListener('click', hideForgotPasswordModal);
    }

    if (closeCreateAccount) {
      closeCreateAccount.addEventListener('click', hideCreateAccountModal);
    }

    if (cancelForgotPassword) {
      cancelForgotPassword.addEventListener('click', hideForgotPasswordModal);
    }

    if (cancelCreateAccount) {
      cancelCreateAccount.addEventListener('click', hideCreateAccountModal);
    }

    if (forgotPasswordFormEl) {
      forgotPasswordFormEl.addEventListener('submit', handleForgotPasswordSubmit);
    }

    if (createAccountFormEl) {
      createAccountFormEl.addEventListener('submit', handleCreateAccountSubmit);
    }

    if (watchTutorialBtn) {
      watchTutorialBtn.addEventListener('click', handleWatchTutorial);
    }

    // Modal backdrop click listeners
    if (forgotPasswordModal) {
      forgotPasswordModal.addEventListener('click', (e) => handleModalBackdropClick(e, hideForgotPasswordModal));
    }

    if (createAccountModal) {
      createAccountModal.addEventListener('click', (e) => handleModalBackdropClick(e, hideCreateAccountModal));
    }

    // Escape key handlers
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (!forgotPasswordModal.classList.contains('hidden')) {
          hideForgotPasswordModal();
        }
        if (!createAccountModal.classList.contains('hidden')) {
          hideCreateAccountModal();
        }
      }
    });

    // Initialize lucide icons inside this page
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }

    // Cleanup function
    return function cleanup() {
      document.body.style.overflow = 'auto';
    };
  };

  // Start initialization
  initializeModals();
}