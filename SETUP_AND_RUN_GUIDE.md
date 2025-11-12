# Setup and Run Guide

This guide will help you set up and run your portfolio website locally.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- MySQL (optional, only if you want to use the database features)

## Quick Start

### 1. Install Dependencies

#### Frontend
```bash
npm install
```

#### Backend
```bash
cd backend
npm install
npm install nodemailer
```

### 2. Configure Email for Contact Form

To receive messages from the contact form via email:

#### Step 1: Get Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to Security
3. Enable 2-Step Verification if not already enabled
4. Go to App passwords (search for it in settings)
5. Select app: Mail, Select device: Other (Custom name)
6. Name it "Portfolio Website"
7. Click Generate
8. Copy the 16-character password (remove spaces)

#### Step 2: Create .env File

In the `backend` folder, create a `.env` file:

```bash
cd backend
cp .env.example .env
```

Edit the `.env` file:

```env
PORT=5000
NODE_ENV=development

EMAIL_USER=aungminmyat2212@gmail.com
EMAIL_PASS=your-16-char-app-password-here
RECEIVE_EMAIL=aungminmyat2212@gmail.com
```

Replace `your-16-char-app-password-here` with the password you copied from Gmail.

### 3. Run the Application

#### Option A: Run Both Together (Recommended)
```bash
npm run dev:all
```

This single command runs both frontend and backend simultaneously:
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

#### Option B: Run Separately (Two Terminals)

Terminal 1 - Frontend:
```bash
npm run dev
```

Terminal 2 - Backend:
```bash
cd backend
npm run dev
```

### 4. Test the Contact Form

1. Open http://localhost:5173 in your browser
2. Scroll to the Contact section
3. Fill out the form and submit
4. You should receive an email at aungminmyat2212@gmail.com

## How Contact Form Works

### With Email Setup (Recommended)
- User fills the form on your website
- Backend sends email to aungminmyat2212@gmail.com
- You receive the message in your Gmail inbox
- The sender's email is set as reply-to, so you can reply directly

### Without Email Setup
- User fills the form
- Message is logged to the backend console
- Check the terminal running the backend to see messages
- No email is sent

## Troubleshooting

### Email Not Working?

1. Check your .env file has correct values
2. Make sure you used App Password, not regular Gmail password
3. Check backend terminal for error messages
4. Verify 2-Step Verification is enabled on Gmail

### Backend Not Starting?

- Make sure you're in the backend folder: `cd backend`
- Check if port 5000 is already in use
- Try: `npm install` again

### Frontend Not Starting?

- Make sure you're in the root folder
- Check if port 5173 is already in use
- Try: `npm install` again

## Database Setup (Optional)

If you want to use database features:

1. Install MySQL
2. Create database: `CREATE DATABASE portfolio_db;`
3. Run schema: `mysql -u root -p portfolio_db < backend/database/schema.sql`
4. Update .env with your database credentials

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

## Your Contact Information

The website now displays:
- Email: aungminmyat2212@gmail.com
- GitHub: https://github.com/Renn-Amm
- LinkedIn: https://www.linkedin.com/in/aung-min-myat/

## Next Steps

1. Set up email to receive contact form messages
2. Add your CV to `public/cv/CV.pdf`
3. Replace project images in `public/assets/`
4. Test all features locally
5. Deploy to production

## Need Help?

Check these files:
- EMAIL_SETUP_GUIDE.md - Detailed email setup
- README.md - General project information
- TODO.md - Pending tasks
