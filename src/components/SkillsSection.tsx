import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript, 
  SiNodedotjs, 
  SiMongodb, 
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiFigma,
  SiTailwindcss,
  SiPython,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiWordpress,
  SiFlutter,
  SiAndroidstudio,
  SiExpress,
  SiFirebase,
  SiTypescript
} from 'react-icons/si';
import { FaJava, FaWindows, FaLinux } from 'react-icons/fa';
import { 
  Users,
  MessageSquare,
  Target,
  Clock,
  Lightbulb,
  Heart,
  FileText,
  Wrench,
  HardDrive
} from 'lucide-react';

const SkillsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const webDevelopmentSkills = [
    { name: 'HTML5', icon: SiHtml5, level: 95, color: '#E34F26' },
    { name: 'CSS3', icon: SiCss3, level: 90, color: '#1572B6' },
    { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
    { name: 'Node.js', icon: SiNodedotjs, level: 75, color: '#339933' },
    { name: 'Express.js', icon: SiExpress, level: 75, color: '#000000' }
  ];

  const frameworksSkills = [
    { name: 'React', icon: SiReact, level: 90, color: '#61DAFB' },
    { name: 'Next.js', icon: SiNextdotjs, level: 85, color: '#000000' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, level: 85, color: '#06B6D4' },
    { name: 'Flutter', icon: SiFlutter, level: 75, color: '#02569B' }
  ];

  const programmingSkills = [
    { name: 'JavaScript', icon: SiJavascript, level: 90, color: '#F7DF1E' },
    { name: 'TypeScript', icon: SiTypescript, level: 85, color: '#3178C6' },
    { name: 'Python', icon: SiPython, level: 75, color: '#3776AB' },
    { name: 'Java', icon: FaJava, level: 70, color: '#ED8B00' }
  ];

  const databaseSkills = [
    { name: 'MongoDB', icon: SiMongodb, level: 70, color: '#47A248' },
    { name: 'PostgreSQL', icon: SiPostgresql, level: 70, color: '#336791' },
    { name: 'MySQL', icon: SiMysql, level: 75, color: '#4479A1' },
    { name: 'Firebase', icon: SiFirebase, level: 70, color: '#FFCA28' }
  ];

  const toolsPlatforms = [
    { name: 'Git', icon: SiGit, level: 90, color: '#F05032' },
    { name: 'GitHub', icon: SiGithub, level: 90, color: '#181717' },
    { name: 'Figma', icon: SiFigma, level: 80, color: '#F24E1E' },
    { name: 'Docker', icon: SiDocker, level: 60, color: '#2496ED' },
    { name: 'WordPress', icon: SiWordpress, level: 80, color: '#21759B' },
    { name: 'Android Studio', icon: SiAndroidstudio, level: 70, color: '#3DDC84' },
    { name: 'Microsoft Office', icon: FileText, level: 85, color: '#D83B01' },
    { name: 'Windows', icon: FaWindows, level: 90, color: '#0078D6' },
    { name: 'Linux', icon: FaLinux, level: 85, color: '#FCC624' },
    { name: 'Hardware Troubleshooting', icon: Wrench, level: 85, color: '#6B7280' },
    { name: 'PC Assembly', icon: HardDrive, level: 90, color: '#4B5563' }
  ];

  const categories = [
    { name: 'All', skills: [...webDevelopmentSkills, ...frameworksSkills, ...programmingSkills, ...databaseSkills, ...toolsPlatforms] },
    { name: 'Web Development', skills: webDevelopmentSkills },
    { name: 'Frameworks', skills: frameworksSkills },
    { name: 'Programming', skills: programmingSkills },
    { name: 'Databases', skills: databaseSkills },
    { name: 'Tools & Platforms', skills: toolsPlatforms }
  ];

  const softSkills = [
    { 
      name: 'Team Collaboration', 
      icon: Users,
      description: 'Experienced in working with cross-functional teams and contributing to group projects effectively'
    },
    { 
      name: 'Communication', 
      icon: MessageSquare,
      description: 'Strong ability to explain complex technical concepts clearly and collaborate with stakeholders'
    },
    { 
      name: 'Problem Solving', 
      icon: Target,
      description: 'Analytical mindset with proven ability to break down complex problems and find efficient solutions'
    },
    { 
      name: 'Time Management', 
      icon: Clock,
      description: 'Skilled at prioritizing tasks, meeting deadlines, and managing multiple projects simultaneously'
    },
    { 
      name: 'Critical Thinking', 
      icon: Lightbulb,
      description: 'Analytical and logical approach to problem-solving with attention to detail and systematic evaluation'
    },
    { 
      name: 'Adaptability', 
      icon: Heart,
      description: 'Quick learner who embraces new technologies and adapts to changing project requirements'
    }
  ];

  const currentSkills = categories.find(cat => cat.name === selectedCategory)?.skills || [];


  return (
    <section id="skills" className="py-20 bg-gradient-secondary skills-bg-animation">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and essential soft skills
          </p>
        </div>

        <div className="space-y-16">
          {/* Technical Skills */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-8">Technical Skills</h3>
            
            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-primary text-primary-foreground shadow-card'
                      : 'bg-background/50 text-foreground hover:bg-background border border-border/50 hover:border-primary/50'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Skills Display */}
            <div className="flex flex-wrap justify-center gap-3">
              {currentSkills.map((skill, index) => (
                <div 
                  key={`${skill.name}-${index}`}
                  className="group px-4 py-3 rounded-full bg-background/50 hover:bg-gradient-primary hover:shadow-card transition-all duration-300 hover:scale-105 animate-fade-in border border-border/50 hover:border-primary/50"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="flex items-center gap-2">
                    <skill.icon 
                      size={18}
                      className={`transition-colors ${
                        (skill.name === 'Next.js' || skill.name === 'GitHub')
                          ? 'text-foreground group-hover:text-primary-foreground'
                          : ''
                      }`}
                      style={(skill.name === 'Next.js' || skill.name === 'GitHub') ? undefined : { color: skill.color }}
                    />
                    <span className="text-sm font-medium text-foreground group-hover:text-primary-foreground transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-10">Soft Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="bg-gradient-card border-0 shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-3">
                      <div className="p-3 bg-gradient-primary rounded-xl text-primary-foreground shrink-0">
                        <skill.icon size={20} />
                      </div>
                      <h4 className="text-lg font-semibold pt-2">{skill.name}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;