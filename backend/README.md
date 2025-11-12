# Portfolio Backend API

Backend API for the portfolio website built with Node.js and Express.

## Features

- RESTful API endpoints
- MySQL database integration
- CORS enabled
- Environment variable configuration
- Error handling middleware

## Tech Stack

- Node.js
- Express.js
- MySQL
- CORS
- dotenv

## Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=portfolio_db
NODE_ENV=development
```

5. Set up the MySQL database using the schema in `database/schema.sql`

6. Start the development server:
```bash
npm run dev
```

Or start the production server:
```bash
npm start
```

## API Endpoints

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get project by ID

### Skills
- `GET /api/skills` - Get all skills by category
- `GET /api/skills/:category` - Get skills by specific category

### Contact
- `POST /api/contact` - Submit contact form

## Project Structure

```
backend/
├── config/
│   └── database.js       # Database configuration
├── routes/
│   ├── projects.js       # Project routes
│   ├── skills.js         # Skills routes
│   └── contact.js        # Contact routes
├── database/
│   └── schema.sql        # Database schema
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore file
├── package.json          # Dependencies and scripts
├── server.js             # Main server file
└── README.md             # This file
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `DB_HOST` - Database host
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `DB_NAME` - Database name
- `NODE_ENV` - Environment (development/production)
- `EMAIL_USER` - Email address for sending contact form messages
- `EMAIL_PASS` - Email password or app-specific password
- `RECEIVE_EMAIL` - Email address to receive contact form messages

## Deployment

The backend needs to be deployed separately from the frontend (GitHub Pages). Here are recommended hosting options:

### Recommended Platforms
1. **Heroku** - Easy deployment, free tier available
2. **Railway** - Modern platform with great DX
3. **Render** - Free tier with automatic deployments
4. **Vercel** - Serverless functions (requires adaptation)
5. **Netlify** - Serverless functions (requires adaptation)

### Deployment Steps (General)
1. Choose a hosting platform
2. Create a new project/app
3. Connect your GitHub repository
4. Set environment variables in the platform dashboard
5. Deploy the backend directory
6. Note the deployed backend URL
7. Update frontend API URLs to point to deployed backend

### Important Notes
- Ensure all environment variables are configured in production
- Set up production database (MySQL)
- Configure CORS to allow requests from GitHub Pages domain
- Use SSL/HTTPS for production
- Set NODE_ENV to 'production'
