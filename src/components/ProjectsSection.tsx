import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Activity, BookOpen, BarChart3, Gamepad2 } from 'lucide-react';
import habitifyImg from '@/assets/web2.png';
import dmarLearnImg from '@/assets/web.png';
import progressPathImg from '@/assets/web3.png';
import gameImg from '@/assets/game.png';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Habitify',
      description: 'A responsive habit-tracking web application designed to help users build positive routines and reach personal goals. Features progress visualization and mobile responsiveness.',
      image: habitifyImg,
      icon: Activity,
      tech: ['TailwindCSS', 'React', 'Node.js'],
      liveLink: 'https://github.com/Renn-Amm/Habitify',
      githubLink: 'https://github.com/Renn-Amm/Habitify',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 2,
      title: 'D-Mar Learn',
      description: 'Interactive educational platform for English learners with lesson videos, exercises, and interactive games. Built with clean UI components and engaging learning flows.',
      image: dmarLearnImg,
      icon: BookOpen,
      tech: ['HTML', 'CSS', 'JavaScript', 'Python'],
      liveLink: 'https://github.com/Renn-Amm/D-Mar-Learn',
      githubLink: 'https://github.com/Renn-Amm/D-Mar-Learn',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 3,
      title: 'Progress Path',
      description: 'Personal goal and activity tracker featuring habit calendar, progress dashboard, event reminders, and journaling tool. Focused on creating motivating user experiences.',
      image: progressPathImg,
      icon: BarChart3,
      tech: ['TailwindCSS', 'React', 'Node.js'],
      liveLink: 'https://github.com/Renn-Amm/Progress-Tracker',
      githubLink: 'https://github.com/Renn-Amm/Progress-Tracker',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 4,
      title: 'Little Rogue Game',
      description: 'Pixel-based desktop game inspired by Little Rogue with character movement, level progression, and game logic. Applied object-oriented programming principles.',
      image: gameImg,
      icon: Gamepad2,
      tech: ['Python', 'OOP', 'Game Development', 'Pixel Art'],
      liveLink: 'https://github.com/Renn-Amm/Adventure-time',
      githubLink: 'https://github.com/Renn-Amm/Adventure-time',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent pb-2">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="group bg-background/50 backdrop-blur-sm shadow-card hover:shadow-glow transition-all duration-300 hover:scale-[1.02] border border-border/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-muted/20 to-muted/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2.5 rounded-lg bg-gradient-to-br ${project.color} text-white shadow-md`}>
                    <project.icon size={22} />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-9 px-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-1" />
                        View
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-9 w-9 p-0 hover:bg-primary hover:text-primary-foreground transition-colors"
                      asChild
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                      </a>
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="secondary"
                      className="text-xs bg-gradient-hero hover:bg-gradient-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
