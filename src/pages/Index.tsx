import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 bg-background border-t">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2023 Aung Min Myat. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
