
import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code2 } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced purple-cyan gradient background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/25 via-purple-400/15 to-cyan-500/20"></div>
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
      
      {/* Floating geometric shapes for futuristic effect */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-cyan-400/30 rotate-12 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full animate-pulse"></div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
            <img 
              src="/lovable-uploads/29b2731b-6f40-448a-8226-7c97a6773824.png" 
              alt="Madalina Carcea" 
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-purple-400/50 shadow-2xl shadow-purple-500/30 relative z-10 neon-border"
            />
            <div className="absolute -top-2 -right-2 z-20">
              <Sparkles className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
          </div>
          
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl font-bold holographic-text mb-2">
              Madalina Carcea
            </h1>
            <div className="flex items-center justify-center gap-2 text-purple-400">
              <Code2 className="w-6 h-6" />
              <span className="text-xl md:text-2xl font-semibold">Data Scientist & AI Engineer</span>
              <Code2 className="w-6 h-6" />
            </div>
          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed text-glow">
            Aspiring Data Scientist & AI Engineer with practical experience in AI automation, 
            data analytics, and technical documentation. Passionate about building impactful tools 
            using computer vision, machine learning, and Python-based systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="futuristic-button relative z-10 group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:text-cyan-200 transition-colors" />
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-morphism border-purple-400/50 hover:border-cyan-400/70 text-purple-200 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300 group"
            >
              <ArrowDown className="w-5 h-5 mr-2 group-hover:text-cyan-200 transition-colors" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-400 cursor-pointer hover:text-cyan-400 transition-colors" onClick={scrollToProjects} />
      </div>
    </section>
  );
};

export default Hero;
