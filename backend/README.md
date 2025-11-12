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
