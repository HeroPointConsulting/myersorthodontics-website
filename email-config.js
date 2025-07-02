import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  return nodemailer.createTransport({
    service: process.env.EMAIL_SERVICE || 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_APP_PASSWORD, // Use App Password for Gmail
    },
  });
};

// Email templates
const emailTemplates = {
  contact: {
    subject: 'New Contact Form Submission - Myers Orthodontics',
    getHtml: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d7d7d, #5fb3b3); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .info-row { margin: 10px 0; }
          .label { font-weight: bold; color: #2d7d7d; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
            <p>Myers Orthodontics</p>
          </div>
          <div class="content">
            <div class="info-row">
              <span class="label">Name:</span> ${data.firstName} ${data.lastName}
            </div>
            <div class="info-row">
              <span class="label">Email:</span> ${data.email}
            </div>
            <div class="info-row">
              <span class="label">Phone:</span> ${data.phone || 'Not provided'}
            </div>
            <div class="info-row">
              <span class="label">Subject:</span> ${data.subject}
            </div>
            <div class="info-row">
              <span class="label">Message:</span><br>
              <div style="background: white; padding: 15px; border-left: 3px solid #2d7d7d; margin-top: 10px;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            <div class="info-row">
              <span class="label">Newsletter Subscription:</span> ${data.newsletter ? 'Yes' : 'No'}
            </div>
            <div class="info-row">
              <span class="label">Submitted:</span> ${new Date().toLocaleString()}
            </div>
          </div>
          <div class="footer">
            <p>This message was sent from the Myers Orthodontics contact form.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    confirmationSubject: 'Thank you for contacting Myers Orthodontics',
    getConfirmationHtml: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d7d7d, #5fb3b3); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          .contact-info { background: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You!</h1>
            <p>We've received your message</p>
          </div>
          <div class="content">
            <p>Dear ${data.firstName},</p>
            <p>Thank you for contacting Myers Orthodontics. We have successfully received your message and will respond within 1 business day.</p>
            
            <div class="contact-info">
              <h3>Contact Information</h3>
              <p><strong>Phone:</strong> (317) 289-1750</p>
              <p><strong>Email:</strong> info@myersortho.com</p>
              <p><strong>Address:</strong> 123 Main Street, Indianapolis, IN 46240</p>
            </div>
            
            <p>If you have an urgent dental concern, please call our office directly.</p>
            <p>We look forward to helping you achieve your perfect smile!</p>
            
            <p>Best regards,<br>
            The Myers Orthodontics Team</p>
          </div>
          <div class="footer">
            <p>Myers Orthodontics | Creating Beautiful Smiles</p>
          </div>
        </div>
      </body>
      </html>
    `
  },

  referral: {
    subject: 'New Patient Referral - Myers Orthodontics',
    getHtml: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d7d7d, #5fb3b3); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .section { margin: 20px 0; padding: 15px; background: white; border-radius: 5px; }
          .section-title { color: #2d7d7d; font-weight: bold; margin-bottom: 10px; }
          .info-row { margin: 5px 0; }
          .label { font-weight: bold; color: #2d7d7d; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          .urgent { background: #fee; border-left: 4px solid #f56565; padding: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Patient Referral</h1>
            <p>Myers Orthodontics</p>
          </div>
          <div class="content">
            ${data.urgency === 'emergency' || data.urgency === 'urgent' ?
        `<div class="urgent">
                <strong>⚠️ ${data.urgency.toUpperCase()} REFERRAL</strong>
              </div>` : ''}
            
            <div class="section">
              <div class="section-title">Referring Practice Information</div>
              <div class="info-row">
                <span class="label">Practice:</span> ${data.practiceName}
              </div>
              <div class="info-row">
                <span class="label">Doctor:</span> ${data.doctorName}
              </div>
              <div class="info-row">
                <span class="label">Phone:</span> ${data.practicePhone}
              </div>
              <div class="info-row">
                <span class="label">Email:</span> ${data.practiceEmail}
              </div>
            </div>

            <div class="section">
              <div class="section-title">Patient Information</div>
              <div class="info-row">
                <span class="label">Patient:</span> ${data.patientFirstName} ${data.patientLastName}
              </div>
              <div class="info-row">
                <span class="label">Date of Birth:</span> ${data.patientDob}
              </div>
              <div class="info-row">
                <span class="label">Phone:</span> ${data.patientPhone}
              </div>
              <div class="info-row">
                <span class="label">Email:</span> ${data.patientEmail || 'Not provided'}
              </div>
              ${data.parentName ? `
              <div class="info-row">
                <span class="label">Parent/Guardian:</span> ${data.parentName}
              </div>
              ` : ''}
            </div>

            <div class="section">
              <div class="section-title">Clinical Information</div>
              <div class="info-row">
                <span class="label">Reason for Referral:</span> ${data.referralReason}
              </div>
              <div class="info-row">
                <span class="label">Urgency:</span> ${data.urgency}
              </div>
              ${data.clinicalNotes ? `
              <div class="info-row">
                <span class="label">Clinical Notes:</span><br>
                <div style="background: #f0f0f0; padding: 10px; margin-top: 5px; border-radius: 3px;">
                  ${data.clinicalNotes.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}
            </div>

            <div class="section">
              <div class="section-title">Scheduling Preferences</div>
              <div class="info-row">
                <span class="label">Preferred Contact:</span> ${data.preferredContact}
              </div>
              <div class="info-row">
                <span class="label">Preferred Time:</span> ${data.preferredTime || 'No preference'}
              </div>
            </div>

            <div class="info-row">
              <span class="label">Submitted:</span> ${new Date().toLocaleString()}
            </div>
          </div>
          <div class="footer">
            <p>This referral was submitted through the Myers Orthodontics referral form.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    confirmationSubject: 'Referral Submitted Successfully - Myers Orthodontics',
    getConfirmationHtml: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d7d7d, #5fb3b3); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          .referral-summary { background: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Referral Confirmation</h1>
            <p>Thank you for your referral</p>
          </div>
          <div class="content">
            <p>Dear Dr. ${data.doctorName.split(' ').pop()},</p>
            <p>Thank you for referring <strong>${data.patientFirstName} ${data.patientLastName}</strong> to Myers Orthodontics.</p>
            
            <div class="referral-summary">
              <h3>Referral Summary</h3>
              <p><strong>Patient:</strong> ${data.patientFirstName} ${data.patientLastName}</p>
              <p><strong>Reason:</strong> ${data.referralReason}</p>
              <p><strong>Urgency:</strong> ${data.urgency}</p>
            </div>
            
            <p><strong>Next Steps:</strong></p>
            <ul>
              <li>We will contact the patient within 1 business day to schedule their consultation</li>
              <li>You will receive a confirmation once the appointment is scheduled</li>
              <li>A consultation report will be sent to you after the patient's visit</li>
            </ul>
            
            <p>Thank you for trusting Myers Orthodontics with your patient's care.</p>
            
            <p>Best regards,<br>
            Dr. Myers and Team</p>
          </div>
          <div class="footer">
            <p>Myers Orthodontics | Professional Referral Network</p>
          </div>
        </div>
      </body>
      </html>
    `
  },

  schedule: {
    subject: 'New Appointment Request - Myers Orthodontics',
    getHtml: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d7d7d, #5fb3b3); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .info-row { margin: 10px 0; }
          .label { font-weight: bold; color: #2d7d7d; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          .preferences { background: white; padding: 15px; border-radius: 5px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Appointment Request</h1>
            <p>Myers Orthodontics</p>
          </div>
          <div class="content">
            <div class="info-row">
              <span class="label">Name:</span> ${data.firstName} ${data.lastName}
            </div>
            <div class="info-row">
              <span class="label">Email:</span> ${data.email}
            </div>
            <div class="info-row">
              <span class="label">Phone:</span> ${data.phone}
            </div>
            ${data.age ? `
            <div class="info-row">
              <span class="label">Age:</span> ${data.age}
            </div>
            ` : ''}
            
            <div class="preferences">
              <h3>Scheduling Preferences</h3>
              ${data.preferredDate ? `
              <div class="info-row">
                <span class="label">Preferred Date:</span> ${data.preferredDate}
              </div>
              ` : ''}
              ${data.preferredTime ? `
              <div class="info-row">
                <span class="label">Preferred Time:</span> ${data.preferredTime}
              </div>
              ` : ''}
            </div>
            
            ${data.message ? `
            <div class="info-row">
              <span class="label">Additional Information:</span><br>
              <div style="background: white; padding: 15px; border-left: 3px solid #2d7d7d; margin-top: 10px;">
                ${data.message.replace(/\n/g, '<br>')}
              </div>
            </div>
            ` : ''}
            
            <div class="info-row">
              <span class="label">Submitted:</span> ${new Date().toLocaleString()}
            </div>
          </div>
          <div class="footer">
            <p>This appointment request was submitted through the Myers Orthodontics website.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    confirmationSubject: 'Myers Orthodontics - Appointment Request Received',
    getConfirmationHtml: (data) => `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #2d7d7d, #5fb3b3); color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background: #f9f9f9; }
          .footer { text-align: center; padding: 20px; font-size: 12px; color: #666; }
          .next-steps { background: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .contact-info { background: white; padding: 15px; border-radius: 5px; margin: 20px 0; }
          .priority-note { background: #e6f7f7; border-left: 4px solid #2d7d7d; padding: 15px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Appointment Request Confirmed</h1>
            <p>We'll be in touch soon to schedule your visit</p>
          </div>
          <div class="content">
            <p>Dear ${data.firstName},</p>
            <p>Thank you for your appointment request with Myers Orthodontics. We have received your information and will contact you within 1 business day to confirm your appointment time.</p>
            
            <div class="priority-note">
              <strong>⏰ Quick Response Guaranteed</strong><br>
              Our scheduling team prioritizes all appointment requests. You'll hear from us by phone within one business day to secure your preferred time slot.
            </div>
            
            <div class="next-steps">
              <h3>What to Expect</h3>
              <ol>
                <li><strong>Confirmation Call:</strong> We'll contact you within 1 business day to finalize your appointment</li>
                <li><strong>Appointment Prep:</strong> We'll email you any necessary forms or information before your visit</li>
                <li><strong>Your Visit:</strong> Comprehensive evaluation and personalized treatment discussion</li>
              </ol>
            </div>
            
            <div class="contact-info">
              <h3>Need to Reach Us?</h3>
              <p><strong>Phone:</strong> (317) 289-1750</p>
              <p><strong>Email:</strong> info@myersortho.com</p>
              <p><strong>Address:</strong> 123 Main Street, Indianapolis, IN 46240</p>
              <p style="margin-top: 10px; font-size: 14px; color: #666;">
                <em>If you need to make changes to your request or have urgent questions, please call us directly.</em>
              </p>
            </div>
            
            <p>We appreciate you choosing Myers Orthodontics for your orthodontic care and look forward to seeing you soon.</p>
            
            <p>Best regards,<br>
            The Myers Orthodontics Team</p>
          </div>
          <div class="footer">
            <p>Myers Orthodontics | Excellence in Orthodontic Care</p>
          </div>
        </div>
      </body>
      </html>
    `
  }
};

// Email validation helper
const isValidEmail = (email) => {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

// Email sending functions
export const sendEmail = async (type, data) => {
  try {
    const transporter = createTransporter();
    const template = emailTemplates[type];

    if (!template) {
      throw new Error(`Unknown email type: ${type}`);
    }

    // Send main email to practice
    const mainMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: template.subject,
      html: template.getHtml(data),
    };

    // Always send the main email
    const mainResult = await transporter.sendMail(mainMailOptions);

    let confirmationResult = null;
    // For referral, confirmation goes to referring practice; otherwise, to form submitter
    let confirmationRecipient = null;
    if (type === 'referral') {
      confirmationRecipient = data.practiceEmail;
    } else {
      confirmationRecipient = data.email;
    }

    // Only send confirmation email if we have a valid email address
    if (isValidEmail(confirmationRecipient)) {
      const confirmationMailOptions = {
        from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
        to: confirmationRecipient.trim(),
        subject: template.confirmationSubject,
        html: template.getConfirmationHtml(data),
      };

      try {
        confirmationResult = await transporter.sendMail(confirmationMailOptions);
      } catch (confirmationError) {
        console.warn('Confirmation email failed, but main email sent:', confirmationError.message);
        // Don't fail the whole operation if confirmation email fails
      }
    } else {
      console.warn('No valid email provided for confirmation, skipping confirmation email');
    }

    return {
      success: true,
      mainMessageId: mainResult.messageId,
      confirmationMessageId: confirmationResult?.messageId || null
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

export { emailTemplates }; 