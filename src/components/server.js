const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3001;

// Middleware
app.use(cors({ origin: 'http://localhost:3000' })); // Adjust if frontend is hosted elsewhere
app.use(express.json());

// Create a transporter using SendGrid SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false,
  auth: {
    user: 'apikey',
    pass: process.env.SENDGRID_API_KEY, // Use environment variable
  },
});

// Endpoint to handle email sending
app.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: 'info@nimblix.com', // Sender is info@nimblix.com (must be verified in SendGrid)
    to: 'info@nimblix.com', // Recipient is info@nimblix.com
    replyTo: email, // User's email for replies
    subject: subject || 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    html: `
      <h3>New Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.messageId); // Log for verification
    res.status(200).json({ message: 'Email sent successfully to info@nimblix.com' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});