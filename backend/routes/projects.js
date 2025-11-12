import express from 'express';

const router = express.Router();

const projects = [
  {
    id: 1,
    title: 'Habitify',
    description: 'A responsive habit-tracking web application designed to help users build positive routines and reach personal goals. Features progress visualization and mobile responsiveness.',
    image: '/assets/web2.png',
    tech: ['TailwindCSS', 'React', 'Node.js'],
    liveLink: 'https://github.com/Renn-Amm/Habitify',
    githubLink: 'https://github.com/Renn-Amm/Habitify',
    color: 'from-purple-500 to-pink-500',
    featured: true
  },
  {
    id: 2,
    title: 'D-Mar Learn',
    description: 'Interactive educational platform for English learners with lesson videos, exercises, and interactive games. Built with clean UI components and engaging learning flows.',
    image: '/assets/web.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
    liveLink: 'https://github.com/Renn-Amm/D-Mar-Learn',
    githubLink: 'https://github.com/Renn-Amm/D-Mar-Learn',
    color: 'from-blue-500 to-cyan-500',
    featured: true
  },
  {
    id: 3,
    title: 'Progress Path',
    description: 'Personal goal and activity tracker featuring habit calendar, progress dashboard, event reminders, and journaling tool. Focused on creating motivating user experiences.',
    image: '/assets/web3.png',
    tech: ['TailwindCSS', 'React', 'Node.js'],
    liveLink: 'https://github.com/Renn-Amm/Project-Edge',
    githubLink: 'https://github.com/Renn-Amm/Project-Edge',
    color: 'from-green-500 to-emerald-500',
    featured: true
  },
  {
    id: 4,
    title: 'Little Rogue Game',
    description: 'Pixel-based desktop game inspired by Little Rogue with character movement, level progression, and game logic. Applied object-oriented programming principles.',
    image: '/assets/game.png',
    tech: ['Python', 'OOP', 'Game Development', 'Pixel Art'],
    liveLink: 'https://github.com/Renn-Amm/Adventure-time',
    githubLink: 'https://github.com/Renn-Amm/Adventure-time',
    color: 'from-orange-500 to-red-500',
    featured: true
  }
];

router.get('/', (req, res) => {
  res.json({
    success: true,
    count: projects.length,
    data: projects
  });
});

router.get('/featured', (req, res) => {
  const featuredProjects = projects.filter(project => project.featured);
  res.json({
    success: true,
    count: featuredProjects.length,
    data: featuredProjects
  });
});

router.get('/:id', (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));
  if (!project) {
    return res.status(404).json({
      success: false,
      message: 'Project not found'
    });
  }
  res.json({
    success: true,
    data: project
  });
});

export default router;
