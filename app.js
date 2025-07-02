import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { siteData } from './public/siteData.js';
import { sendEmail } from './email-config.js';

const app = express();
const PORT = process.env.PORT || 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set proper MIME types for JavaScript modules and prevent caching during development
app.use(express.static('public', {
  setHeaders: (res, path) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'text/javascript');
      // Prevent aggressive caching of JS modules during development
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
    if (path.endsWith('.css')) {
      // Prevent CSS caching during development
      res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      res.setHeader('Pragma', 'no-cache');
      res.setHeader('Expires', '0');
    }
  }
}));

// API route for site data
app.get('/api/sitedata', (req, res) => {
  res.json(siteData);
});

// Email routes
app.post('/api/contact', async (req, res) => {
  try {
    const result = await sendEmail('contact', req.body);

    if (result.success) {
      res.json({
        success: true,
        message: 'Thank you for your message! We will respond within 1 business day.'
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Sorry, there was an error sending your message. Please call us directly.'
      });
    }
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error sending your message. Please call us directly.'
    });
  }
});

app.post('/api/referral', async (req, res) => {
  try {
    const result = await sendEmail('referral', req.body);

    if (result.success) {
      res.json({
        success: true,
        message: 'Referral submitted successfully! We will contact the patient within 1 business day and send you a confirmation.'
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Sorry, there was an error submitting the referral. Please call us directly.'
      });
    }
  } catch (error) {
    console.error('Referral form error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error submitting the referral. Please call us directly.'
    });
  }
});

app.post('/api/schedule', async (req, res) => {
  try {
    const result = await sendEmail('schedule', req.body);

    if (result.success) {
      res.json({
        success: true,
        message: 'Thank you for scheduling your appointment! We will contact you within 1 business day to confirm your visit.'
      });
    } else {
      res.status(500).json({
        success: false,
        message: 'Sorry, there was an error scheduling your appointment. Please call us directly and we\'ll get you scheduled right away!'
      });
    }
  } catch (error) {
    console.error('Schedule form error:', error);
    res.status(500).json({
      success: false,
      message: 'Sorry, there was an error scheduling your appointment. Please call us directly and we\'ll get you scheduled right away!'
    });
  }
});

// Catch-all handler: send back index.html for any non-API routes
// This allows client-side routing to work
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});