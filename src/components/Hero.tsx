
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/29b2731b-6f40-448a-8226-7c97a6773824.png" 
              alt="Madalina Carcea" 
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary/20 shadow-xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
            Madalina Carcea
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Data Scientist & AI Engineer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Aspiring Data Scientist & AI Engineer with practical experience in AI automation, 
            data analytics, and technical documentation. Passionate about building impactful tools 
            using computer vision, machine learning, and Python-based systems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="hover:scale-105 transition-transform duration-200"
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:scale-105 transition-transform duration-200"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground cursor-pointer" onClick={scrollToProjects} />
      </div>
    </section>
  );
};

export default Hero;
