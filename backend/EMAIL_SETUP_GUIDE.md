# Contact Form - How to Receive Messages

Currently, contact form messages are only logged to the console. Here are your options to actually receive them:

## Option 1: Email Integration (Recommended)

### Using Nodemailer with Gmail

1. **Install nodemailer:**
```bash
cd backend
npm install nodemailer
```

2. **Add to `.env` file:**
```env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-app-specific-password
RECEIVE_EMAIL=your.email@gmail.com
```

3. **Get Gmail App Password:**
   - Go to Google Account Settings
   - Security > 2-Step Verification (enable it)
   - App passwords > Generate new app password
   - Copy the 16-character password

4. **Update `backend/routes/contact.js`:**
```javascript
import express from 'express';
import nodemailer from 'nodemailer';

const router = express.Router();

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation...
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVE_EMAIL,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p><small>Sent at: ${new Date().toLocaleString()}</small></p>
      `,
      replyTo: email
    });

    console.log('Email sent successfully to:', process.env.RECEIVE_EMAIL);

    res.json({
      success: true,
      message: 'Message sent successfully'
    });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message'
    });
  }
});

export default router;
```

## Option 2: Save to MySQL Database

Update `backend/routes/contact.js` to save to database:

```javascript
import express from 'express';
import pool from '../config/database.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation...
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Save to database
    await pool.query(
      'INSERT INTO contact_messages (name, email, subject, message) VALUES (?, ?, ?, ?)',
      [name, email, subject, message]
    );

    res.json({
      success: true,
      message: 'Message saved successfully'
    });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save message'
    });
  }
});

// Get all messages (for admin)
router.get('/', async (req, res) => {
  try {
    const [messages] = await pool.query(
      'SELECT * FROM contact_messages ORDER BY created_at DESC'
    );
    res.json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch messages' });
  }
});

export default router;
```

Then create an admin page to view messages at `http://localhost:5000/api/contact`

## Option 3: Use EmailJS (No Backend Changes)

EmailJS sends emails directly from the frontend:

1. Sign up at https://www.emailjs.com/
2. Install in frontend: `npm install @emailjs/browser`
3. Update ContactSection.tsx to use EmailJS
4. No backend needed for emails

## Option 4: Use Third-Party Services

### SendGrid (Professional)
- Free tier: 100 emails/day
- More reliable than Gmail
- Similar setup to Nodemailer

### Mailgun
- Free tier: 5,000 emails/month
- Good for production

### AWS SES (Simple Email Service)
- Very cheap
- Requires AWS account

## Recommendation

**For Development/Personal:**
- Use Option 1 (Nodemailer + Gmail) - Easiest to set up

**For Production:**
- Use SendGrid or Mailgun - More reliable
- Or Option 2 (Database) + Email - Best of both worlds

## Current Status

Your form works perfectly and validates correctly. You just need to choose how you want to receive the messages!
