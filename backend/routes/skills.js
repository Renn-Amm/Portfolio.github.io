import express from 'express';

const router = express.Router();

const skills = {
  frontend: [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'Next.js', level: 85, color: '#000000' },
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'HTML5', level: 95, color: '#E34F26' },
    { name: 'CSS3', level: 90, color: '#1572B6' },
    { name: 'Tailwind CSS', level: 85, color: '#06B6D4' }
  ],
  backend: [
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'MongoDB', level: 70, color: '#47A248' },
    { name: 'PostgreSQL', level: 70, color: '#336791' },
    { name: 'MySQL', level: 75, color: '#4479A1' }
  ],
  languages: [
    { name: 'JavaScript', level: 90, color: '#F7DF1E' },
    { name: 'Python', level: 75, color: '#3776AB' },
    { name: 'Java', level: 70, color: '#ED8B00' }
  ],
  tools: [
    { name: 'Git', level: 90, color: '#F05032' },
    { name: 'GitHub', level: 90, color: '#181717' },
    { name: 'Figma', level: 80, color: '#F24E1E' },
    { name: 'Docker', level: 60, color: '#2496ED' },
    { name: 'WordPress', level: 80, color: '#21759B' },
    { name: 'Android Studio', level: 70, color: '#3DDC84' }
  ],
  mobile: [
    { name: 'Flutter', level: 75, color: '#02569B' },
    { name: 'React Native', level: 70, color: '#61DAFB' },
    { name: 'Android Studio', level: 70, color: '#3DDC84' }
  ]
};

router.get('/', (req, res) => {
  res.json({
    success: true,
    data: skills
  });
});

router.get('/:category', (req, res) => {
  const category = req.params.category.toLowerCase();
  if (!skills[category]) {
    return res.status(404).json({
      success: false,
      message: 'Category not found'
    });
  }
  res.json({
    success: true,
    data: skills[category]
  });
});

export default router;
