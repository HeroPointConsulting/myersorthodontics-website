# Myers Orthodontics Website

A modern, responsive website for Myers Orthodontics built with vanilla JavaScript, Express.js, and Nodemailer for email functionality.

## Features

- 📱 Responsive design with modern UI/UX
- 📧 Email-enabled contact, referral, and appointment scheduling forms
- 🎨 Clean, professional design matching the orthodontic practice brand
- ⚡ Fast loading with vanilla JavaScript (no heavy frameworks)
- 📝 Form validation and user feedback
- 🔒 Secure email handling with environment variables

## Email Forms

The website includes three fully functional email forms:

1. **Contact Form** - General inquiries with automatic confirmation emails
2. **Referral Form** - Professional referral submissions for dentists
3. **Schedule Consultation Form** - Appointment requests with confirmation emails

Each form sends two emails:

- One to the practice with form submission details
- One confirmation email to the submitter

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Email account with App Password enabled (Gmail recommended)

## Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd myers-vanilla
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   # Copy the example environment file
   cp env.example .env
   ```

4. **Configure your email settings** (see Email Setup section below)

5. **Start the development server**

   ```bash
   npm run dev
   ```

6. **Visit the website**
   ```
   http://localhost:3000
   ```

## Email Setup

### Step 1: Set Up Email Addresses and App Password

#### Option A: Google Workspace (Professional - Recommended)

If you have Google Workspace (visible in your Google Admin Console):

**Create Professional Email Addresses:**

1. Go to [Google Admin Console](https://admin.google.com)
2. Navigate to **Directory** → **Users**
3. Click **"Create an alternate email address"** (as shown in your screenshot)
4. Create these addresses:
   - `info@stepweaver.dev` (for receiving form submissions)
   - `noreply@stepweaver.dev` (for sending notifications)
   - Or use your existing workspace email for both

**Generate App Password:**

1. Go to [Google Account Security](https://myaccount.google.com/security) (for your workspace account)
2. Enable 2-Factor Authentication if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" and "Other (custom name)"
5. Enter "Myers Orthodontics Website" as the name
6. Copy the 16-character password generated

#### Option B: Personal Gmail

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Factor Authentication if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" and "Other (custom name)"
5. Enter "Myers Orthodontics Website" as the name
6. Copy the 16-character password generated

#### For Other Providers:

- **Outlook**: [Microsoft Account Security](https://account.live.com/proofs/apppassword)
- **Yahoo**: Account Security > Generate app password
- **iCloud**: Apple ID > Sign-In and Security > App-Specific Passwords

### Step 2: Configure Environment Variables

Edit your `.env` file with your email settings:

#### Google Workspace Configuration:

```env
# Email Configuration for Google Workspace
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@yourdomain.com
EMAIL_APP_PASSWORD=your-16-character-app-password
EMAIL_TO=info@yourdomain.com
EMAIL_FROM=noreply@yourdomain.com
PORT=3000
```

#### Personal Gmail Configuration:

```env
# Email Configuration for Personal Gmail
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password
EMAIL_TO=your-email@gmail.com
EMAIL_FROM=your-email@gmail.com
PORT=3000
```

#### Environment Variables Explained:

- `EMAIL_SERVICE`: Email provider (gmail for both Google Workspace and personal Gmail)
- `EMAIL_USER`: Your email address that will authenticate and send emails
- `EMAIL_APP_PASSWORD`: The app password you generated (NOT your regular email password)
- `EMAIL_TO`: Email address that will receive form submissions (can be different from EMAIL_USER)
- `EMAIL_FROM`: "From" address shown in emails (must be an address you own/control)
- `PORT`: Server port (default: 3000)

#### Important Notes:

- **Google Workspace**: EMAIL_USER must be a valid Google Workspace account with app password
- **EMAIL_FROM**: Must be an email address you control (don't use fake addresses)
- **EMAIL_TO**: Can forward to any email address you want to receive notifications

### Step 3: Test Email Functionality

1. Start the server: `npm run dev`
2. Navigate to the contact form
3. Fill out and submit a test form
4. Check both the recipient email and sender's email for confirmation

## Form Customization

### Email Templates

Email templates are located in `email-config.js`. You can customize:

- Email subjects
- HTML templates
- Styling and branding
- Content structure

### Form Fields

Form fields can be modified in the respective component files:

- `public/components/ContactForm.js`
- `public/components/ReferralForm.js`
- `public/components/SchedulePage.js`

### Styling

Form styles are in the corresponding CSS files and follow the schedule-form-card design pattern:

- `public/components/ContactForm.css`
- `public/components/ReferralForm.css`
- `public/components/SchedulePage.css`

## Project Structure

```
myers-vanilla/
├── public/
│   ├── components/          # Reusable UI components
│   ├── images/             # Static images
│   ├── index.html          # Main HTML file
│   ├── main.js            # Main JavaScript entry point
│   ├── Router.js          # Client-side routing
│   ├── siteData.js        # Site configuration data
│   └── styles.css         # Global styles
├── app.js                 # Express server
├── email-config.js        # Email configuration and templates
├── env.example           # Environment variables example
├── package.json          # Project dependencies
└── README.md             # This file
```

## Development

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm install` - Install dependencies

### Adding New Forms

1. Create the form component in `public/components/`
2. Add email template in `email-config.js`
3. Add API route in `app.js`
4. Update routing if needed

## Troubleshooting

### Email Issues

**"Invalid login" or "Authentication failed"**

- Ensure you're using an App Password, not your regular email password
- Verify 2FA is enabled on your email account
- Check that the email service is correct (gmail for both Google Workspace and personal Gmail)
- For Google Workspace: Ensure the user account has proper permissions

**"Address not found" errors**

- Verify all email addresses in your .env file actually exist
- For Google Workspace: Create alternate email addresses in Admin Console first
- Don't use fake or non-existent email addresses for EMAIL_FROM or EMAIL_TO
- Example: `myers.stephen@stepweaver.dev` must be created in your Google Workspace first

**Emails not being received**

- Check spam/junk folders
- Verify EMAIL_TO address is correct and exists
- Check server logs for error messages
- For Google Workspace: Ensure email routing is properly configured

**Google Workspace specific issues**

- Ensure you're using the correct domain email address
- Check that email forwarding/routing is enabled in Admin Console
- Verify the user has Gmail/Email permissions in their account

**"Connection timeout" errors**

- Some hosting providers block standard email ports
- Consider using a dedicated email service like SendGrid or Mailgun for production

### Form Submission Issues

**Forms not submitting**

- Check browser console for JavaScript errors
- Verify API endpoints are accessible
- Ensure form field names match expected data structure

**Styling issues**

- Check CSS file imports
- Verify Lucide icons are loading
- Ensure responsive breakpoints are working

## Deployment

### Environment Setup

1. Set up your production environment variables
2. Use a process manager like PM2 for Node.js
3. Configure reverse proxy (nginx recommended)
4. Set up SSL certificate

### Recommended Hosting

- **Vercel**: Easy deployment with automatic HTTPS
- **Heroku**: Simple setup with add-ons for email services
- **DigitalOcean**: More control with droplets
- **AWS**: Scalable with SES for email

### Production Email Services

For production, consider using dedicated email services:

- **SendGrid**: Reliable with good deliverability
- **Mailgun**: Developer-friendly with good APIs
- **Amazon SES**: Cost-effective for high volume
- **Postmark**: Excellent for transactional emails

## Security Notes

- Never commit your `.env` file to version control
- Use App Passwords, never regular email passwords
- Only use email addresses you own and control for EMAIL_FROM
- Consider rate limiting for form submissions
- Validate and sanitize all form inputs
- Use HTTPS in production

## Google Workspace Quick Setup for stepweaver.dev

Based on your Google Workspace Admin Console screenshot:

1. **Create Email Addresses** (to fix the "address not found" error):

   - Go to [admin.google.com](https://admin.google.com)
   - Navigate to **Directory** → **Users**
   - Click **"Create an alternate email address"** (blue button in your screenshot)
   - Create these addresses:
     - `myers.stephen@stepweaver.dev` (if not already exists)
     - `info@stepweaver.dev` (for receiving form submissions)
     - `noreply@stepweaver.dev` (for sending notifications)

2. **Update your .env file**:

   ```env
   EMAIL_SERVICE=gmail
   EMAIL_USER=myers.stephen@stepweaver.dev
   EMAIL_APP_PASSWORD=your-16-char-app-password
   EMAIL_TO=info@stepweaver.dev
   EMAIL_FROM=noreply@stepweaver.dev
   ```

3. **Restart your server** and test - No more "address not found" errors!

**Pro Tip**: You can also use your existing Google Workspace email for all three variables if you don't want to create separate addresses.

## Support

For technical support or questions about the email setup:

1. Check the troubleshooting section above
2. Review server logs for error messages
3. Verify environment variables are correctly set
4. Test with a simple email client first

## License

This project is proprietary software developed for Myers Orthodontics.

---

**Note**: Remember to replace placeholder email addresses and configuration values with your actual practice information before deploying to production.
