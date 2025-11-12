# Changelog

All notable changes to this project will be documented in this file.

## [1.12.0] - 2025-11-12

### Added
- GitHub Pages deployment configuration
- GitHub Actions workflow for automatic deployment
- GITHUB_PAGES_DEPLOYMENT.md with complete deployment guide
- CONTACT_FORM_SOLUTIONS.md with contact form alternatives
- BACKEND_ALTERNATIVES.md explaining backend limitations and solutions
- ContactSection.NO_BACKEND.tsx using FormSubmit (no backend needed)
- Deploy script in package.json
- .nojekyll file to prevent Jekyll processing
- TODO.md for tracking tasks

### Changed
- Updated vite.config.ts with base path for GitHub Pages
- Updated README.md with deployment and contact form solutions
- Updated backend/README.md with deployment options
- Updated all documentation files with GitHub Pages information

### Deployment
- Project now ready for GitHub Pages hosting
- Automatic deployment on push to main branch
- Frontend can be hosted on GitHub Pages
- Backend requires separate hosting service OR use FormSubmit
- Contact form has two solutions: FormSubmit (recommended) or deploy backend

### Important Notes
- Projects and Skills data are hardcoded in frontend (no backend needed)
- Only contact form requires backend or alternative solution
- FormSubmit provides free, no-backend contact form solution
- Backend can be deployed to Render, Railway, or Heroku if full control needed

## [1.11.0] - 2025-11-12

### Added
- Microsoft Office to Tools & Platforms skills
- Hardware and software troubleshooting skills:
  - Windows installation and administration
  - Linux installation and administration
  - Hardware Troubleshooting
  - PC Assembly and disassembly

### Changed
- Fixed project images loading by importing from src/assets instead of public folder
- Updated project technology skills:
  - Habitify: TailwindCSS, React, Node.js
  - D-Mar Learn: HTML, CSS, JavaScript, Python
  - Progress Path: TailwindCSS, React, Node.js
  - Little Rogue Game: Python (replaced Java)
- Updated About section education dates:
  - Master's in CS - Harbour Space: 2025 - 2026
  - Bachelor's in CS: 2022 - 2025
- Updated experience to show + 2 years
- Updated Areas of Interest:
  - Removed: AI Engineering, Cloud Architecture, Mobile Development
  - Added: Artificial Intelligence (AI), Machine Learning
- Replaced soft skill Creative Thinking with Critical Thinking
- Added phone number to contact information: +34 697751313
- Updated hero section tagline
- Updated footer to © 2023 Aung Min Myat. All Rights Reserved.
- Updated About Me story text

### Fixed
- Project images now display correctly with proper imports
- Profile image extension case sensitivity issue resolved
- Changed project images from object-cover to object-contain for full image display

### Backend
- Synchronized backend projects data with frontend skill changes

## [1.10.0] - 2025-11-12

### Added
- Email functionality for contact form using Nodemailer
- Gmail integration for receiving contact form messages
- Environment variables for email configuration
- SETUP_AND_RUN_GUIDE.md with complete setup instructions
- QUICK_START.md for quick reference
- Concurrently package for running frontend and backend together
- dev:all script to run both servers with one command

### Changed
- Updated contact email to aungminmyat2212@gmail.com
- Updated GitHub link to https://github.com/Renn-Amm
- Updated LinkedIn link to https://www.linkedin.com/in/aung-min-myat/
- Removed phone contact option from contact section
- Enhanced backend contact route to send emails
- Updated .env.example with email configuration
- Simplified development workflow with single command

### Backend
- Added nodemailer dependency for email sending
- Contact form now sends emails to configured email address
- Messages still logged to console as backup

## [1.9.0] - 2025-11-12

### Changed
- Updated all featured projects with actual project information
- Replaced project images with real project screenshots (web.png, web2.png, web3.png, game.png)
- Updated all GitHub links to actual repository URLs
- Changed profile image from profile-image-v2.jpg to profile.jpg
- Updated project descriptions with accurate details for all 4 projects

### Projects Updated
- Habitify - Habit Tracker (https://github.com/Renn-Amm/Habitify)
- D-Mar Learn - Educational Platform (https://github.com/Renn-Amm/D-Mar-Learn)
- Progress Path - Goal Tracker (https://github.com/Renn-Amm/Project-Edge)
- Little Rogue Game (https://github.com/Renn-Amm/Adventure-time)

### Backend
- Synchronized backend projects data with frontend changes
- Updated all project links in backend/routes/projects.js

## [1.8.0] - 2025-10-31

### Removed
- "View All Projects" button from Projects section

### Fixed
- Fixed title clipping in "Featured Projects" section (letters with descenders being cut off)

## [1.7.0] - 2025-10-31

### Added
- TypeScript to Programming skills

### Removed
- Bootstrap from Frameworks
- NPM from Tools & Platforms
- VS Code from Tools & Platforms
- Postman from Tools & Platforms

## [1.6.0] - 2025-10-31

### Added
- Custom favicon (letter-a.png) as browser tab icon

### Changed
- Updated browser tab icon from default favicon to letter-a.png
- Updated page title from "gradient-gnome-dev" to "Aung Min Myat - Portfolio"
- Updated meta descriptions with proper portfolio information
- Removed all Lovable branding references from HTML

### Removed
- Lovable references from meta tags
- Lovable Open Graph images

## [1.5.0] - 2025-10-31

### Added
- New skill categories: Web Development, Frameworks, Databases
- Additional skills: Express.js, Bootstrap, Firebase, Postman, VS Code, NPM

### Changed
- Reorganized Technical Skills section with new structure:
  - Combined Frontend & Backend into "Web Development"
  - Created dedicated "Frameworks" category
  - Renamed "Languages" to "Programming"
  - Added "Databases" category
  - Renamed "Tools" to "Tools & Platforms"
- Skills now better organized under related categories

### Fixed
- Fixed title clipping in "Skills & Expertise" section (letters being cut off)
- Fixed title clipping in "Let's Work Together" section (letters being cut off)

## [1.4.0] - 2025-10-31

### Added
- Email setup guide for contact form (EMAIL_SETUP_GUIDE.md)

### Changed
- Fixed hero title wrapping - "Full-Stack Developer" now stays on one line
- Increased base font size from 18px to 19px for all regular text
- Enlarged About Me profile image width from w-80 to w-96
- Increased text sizes in About section (text-xs to text-sm/base)
- Made Experience card text larger (text-sm to text-base)
- Enlarged "My Story" paragraph text (text-xs to text-base)

### Fixed
- Hero title no longer wraps to multiple lines on any screen size

## [1.3.0] - 2025-10-31

### Added
- Download CV button in hero section alongside View My Work button
- Download icon to CV button for better visual clarity

### Changed
- Increased base font size from 16px to 18px across entire website
- Enlarged navigation bar with bigger padding and text
- Increased navigation logo size from text-2xl to text-3xl
- Enlarged navigation menu items with better padding
- Increased hero section title size from text-5xl/7xl to text-6xl/8xl
- Enlarged hero section description from text-xl/2xl to text-2xl/3xl
- Increased button sizes in hero section with larger padding
- Changed View My Work button to scroll to projects section instead of about

## [1.2.0] - 2025-10-31

### Added
- CV download functionality in navigation bar
- Contact form validation with required fields (name, email, subject, message)
- Real-time form error messages
- API integration for contact form submission
- Success and error notifications for form submission
- Loading state for form submission button
- Enhanced backend validation for contact form
- CV folder in public directory for PDF storage

### Changed
- Updated ContactSection with full form state management
- Enhanced contact route with subject field and validation
- Updated contact information placeholders
- Updated social links placeholders

## [1.1.0] - 2025-10-31

### Added
- Created Node.js Express backend with RESTful API
- MySQL database integration and schema
- Backend routes for projects, skills, and contact
- Database configuration files
- Two new featured projects (Social Media Dashboard and Fitness Tracking Mobile App)
- Added MySQL to backend skills
- Added WordPress to tools section
- Added Flutter to tools section
- Added Android Studio to tools section
- Backend README with setup instructions

### Changed
- Updated hero section layout - removed profile image for cleaner, centered design
- Updated SkillsSection to show 5 featured projects instead of 3
- Modified frontend skills to focus on core technologies

### Removed
- Removed profile image from hero section
- Removed GraphQL from backend skills
- Removed C++ from programming languages
- Removed TypeScript from frontend and programming skills
- Removed AWS from tools section

## [1.0.0] - Initial Release

### Added
- Initial portfolio website with React and Vite
- Hero section with animated titles
- Projects showcase section
- Skills section with technical and soft skills
- Responsive design with Tailwind CSS
- Modern UI components with shadcn-ui
