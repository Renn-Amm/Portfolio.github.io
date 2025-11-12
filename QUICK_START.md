# Quick Start Guide

## Run the Website

### Step 1: Install Dependencies (First Time Only)

```bash
npm install
cd backend
npm install nodemailer
```

### Step 2: Setup Email (To Receive Messages)

1. Create `.env` file in backend folder:
```bash
cd backend
cp .env.example .env
```

2. Get Gmail App Password:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification
   - Search for "App passwords"
   - Generate new password for "Mail" app
   - Copy the 16-character password

3. Edit `backend/.env` file:
```env
EMAIL_USER=aungminmyat2212@gmail.com
EMAIL_PASS=paste-your-16-char-password-here
RECEIVE_EMAIL=aungminmyat2212@gmail.com
```

### Step 3: Run Both Servers

#### Option A: One Command (Easier)
```bash
npm run dev:all
```
This runs both frontend and backend together!
- Frontend: http://localhost:5173
- Backend: http://localhost:5000

#### Option B: Two Separate Terminals
Terminal 1:
```bash
npm run dev
```

Terminal 2:
```bash
cd backend
npm run dev
```

## That's It!

Your website is now running. Test the contact form and you'll receive emails!

## Without Email Setup

If you skip Step 2:
- Website still works perfectly
- Contact form submissions are logged to console
- Check Terminal 2 to see messages

## Your Information

- Email: aungminmyat2212@gmail.com
- GitHub: https://github.com/Renn-Amm
- LinkedIn: https://www.linkedin.com/in/aung-min-myat/

## Need More Help?

See `SETUP_AND_RUN_GUIDE.md` for detailed instructions.
