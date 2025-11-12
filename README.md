# Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with React and includes a Node.js backend API.

## Project Structure

```
Portfolio-Web/
├── backend/              # Node.js Express backend
│   ├── config/          # Database configuration
│   ├── database/        # SQL schema
│   ├── routes/          # API routes
│   └── server.js        # Main server file
├── src/                 # React frontend
│   ├── components/      # React components
│   ├── pages/          # Page components
│   └── lib/            # Utility functions
└── public/             # Static assets
```

## Technologies Used

### Frontend
- React
- Vite
- JavaScript
- shadcn-ui
- Tailwind CSS
- Lucide React Icons
- React Icons

### Backend
- Node.js
- Express.js
- MySQL
- CORS

## Features

- Responsive design optimized for all devices
- Dynamic hero section with animated titles
- Featured projects showcase (4 projects)
- Comprehensive skills section with categories
- CV download functionality
- Contact form with validation and email integration
- Backend API for projects, skills, and contact
- MySQL database integration
- Modern UI with smooth animations
- Real-time form validation with error messages

## Skills Showcased

### Frontend
- React
- Next.js
- JavaScript
- HTML5
- CSS3
- Tailwind CSS

### Backend
- Node.js
- MongoDB
- PostgreSQL
- MySQL

### Tools & Technologies
- Git
- GitHub
- Figma
- Docker
- WordPress
- Flutter
- Android Studio

## Getting Started

### Quick Setup

```sh
# Install dependencies
npm install

# Install backend dependencies
cd backend
npm install nodemailer
cd ..

# Run both frontend and backend together
npm run dev:all
```

Frontend: http://localhost:5173
Backend: http://localhost:5000

### Frontend Setup

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Backend Setup

```sh
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file from example
cp .env.example .env

# Configure your environment variables in .env

# Start development server
npm run dev

# Or start production server
npm start
```

## API Endpoints

- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/skills` - Get all skills
- `POST /api/contact` - Submit contact form

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
NODE_ENV=development
```

## Database Setup

Run the SQL schema located at `backend/database/schema.sql` to set up the database structure and sample data.

## CV Setup

1. Place your CV PDF file in the `public/cv/` directory
2. Name the file exactly `CV.pdf`
3. The download button in the navigation will automatically link to this file

## Contact Configuration

Contact information configured:
- Email: aungminmyat2212@gmail.com
- GitHub: https://github.com/Renn-Amm
- LinkedIn: https://www.linkedin.com/in/aung-min-myat/

### Email Setup for Contact Form

The contact form sends messages via email using Nodemailer. To receive messages:

1. Install nodemailer: `cd backend && npm install nodemailer`
2. Create `.env` file from `.env.example` in the backend directory
3. Get Gmail App Password from Google Account Security settings
4. Add credentials to `.env`:
   ```
   EMAIL_USER=aungminmyat2212@gmail.com
   EMAIL_PASS=your-16-char-app-password
   RECEIVE_EMAIL=aungminmyat2212@gmail.com
   ```

See `SETUP_AND_RUN_GUIDE.md` for detailed setup instructions.

## Documentation

- CHANGELOG.md - Version history and changes
- IMPROVEMENTS.md - Future improvements and enhancements
- TODO.md - Current tasks and pending work
- FINAL_FIXES.md - Final fixes and optimizations

## License

MIT License
