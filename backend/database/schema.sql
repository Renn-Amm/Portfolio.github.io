-- Portfolio Database Schema

CREATE DATABASE IF NOT EXISTS portfolio_db;
USE portfolio_db;

-- Projects Table
CREATE TABLE IF NOT EXISTS projects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(500),
    tech JSON,
    live_link VARCHAR(500),
    github_link VARCHAR(500),
    color VARCHAR(100),
    featured BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Skills Table
CREATE TABLE IF NOT EXISTS skills (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category VARCHAR(50) NOT NULL,
    level INT NOT NULL,
    color VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Contact Messages Table
CREATE TABLE IF NOT EXISTS contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    read_status BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample projects
INSERT INTO projects (title, description, image, tech, live_link, github_link, color, featured) VALUES
('E-Commerce Platform', 'Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features real-time inventory management and responsive design.', 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80', '["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]', '#', '#', 'from-purple-500 to-pink-500', true),
('Task Management App', 'Cross-platform mobile app built with React Native. Features offline support, push notifications, and team collaboration.', 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80', '["React Native", "Firebase", "Redux"]', '#', '#', 'from-blue-500 to-cyan-500', true),
('Portfolio Website', 'Modern portfolio website with smooth animations, responsive design, and dynamic content management system.', 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80', '["Next.js", "Tailwind CSS", "Framer Motion"]', '#', '#', 'from-green-500 to-emerald-500', true),
('Social Media Dashboard', 'Analytics dashboard for social media management with real-time data visualization, post scheduling, and engagement tracking.', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', '["React", "Node.js", "MySQL", "Chart.js"]', '#', '#', 'from-orange-500 to-red-500', true),
('Fitness Tracking Mobile App', 'Cross-platform fitness app built with Flutter. Features workout tracking, nutrition logging, and progress analytics with Android Studio.', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80', '["Flutter", "Firebase", "Android Studio", "REST API"]', '#', '#', 'from-indigo-500 to-purple-500', true);

-- Insert sample skills
INSERT INTO skills (name, category, level, color) VALUES
('React', 'frontend', 90, '#61DAFB'),
('Next.js', 'frontend', 85, '#000000'),
('JavaScript', 'frontend', 90, '#F7DF1E'),
('HTML5', 'frontend', 95, '#E34F26'),
('CSS3', 'frontend', 90, '#1572B6'),
('Tailwind CSS', 'frontend', 85, '#06B6D4'),
('Node.js', 'backend', 75, '#339933'),
('MongoDB', 'backend', 70, '#47A248'),
('PostgreSQL', 'backend', 70, '#336791'),
('MySQL', 'backend', 75, '#4479A1'),
('JavaScript', 'languages', 90, '#F7DF1E'),
('Python', 'languages', 75, '#3776AB'),
('Java', 'languages', 70, '#ED8B00'),
('Git', 'tools', 90, '#F05032'),
('GitHub', 'tools', 90, '#181717'),
('Figma', 'tools', 80, '#F24E1E'),
('Docker', 'tools', 60, '#2496ED'),
('WordPress', 'tools', 80, '#21759B'),
('Android Studio', 'tools', 70, '#3DDC84'),
('Flutter', 'mobile', 75, '#02569B'),
('React Native', 'mobile', 70, '#61DAFB');
