import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code2, Zap, Star, Circle } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Enhanced deep violet-indigo gradient background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-800/30 via-purple-700/25 to-violet-800/30"></div>
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25"></div>
      
      {/* Enhanced floating geometric shapes and patterns */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-purple-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 border border-cyan-400/30 rotate-12 animate-bounce"></div>
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full animate-pulse"></div>
      
      {/* Additional decorative patterns */}
      <div className="absolute top-1/4 left-20 w-8 h-8 border-2 border-cyan-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/4 left-32 w-6 h-6 bg-purple-400/30 rotate-45 animate-pulse"></div>
      <div className="absolute top-1/2 left-8 w-10 h-10 border border-purple-300/40 rotate-12 animate-spin" style={{animationDuration: '8s'}}></div>
      
      {/* Right side patterns */}
      <div className="absolute top-1/3 right-32 w-14 h-14 border-2 border-cyan-300/35 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/3 right-8 w-8 h-8 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rotate-45 animate-bounce"></div>
      <div className="absolute top-1/2 right-24 w-4 h-4 bg-purple-500/40 rounded-full animate-ping"></div>
      
      {/* Animated icon decorations */}
      <div className="absolute top-1/4 right-1/4">
        <Zap className="w-6 h-6 text-cyan-400/60 animate-pulse" />
      </div>
      <div className="absolute bottom-1/4 left-1/4">
        <Star className="w-5 h-5 text-purple-400/50 animate-bounce" />
      </div>
      <div className="absolute top-3/4 right-1/3">
        <Circle className="w-4 h-4 text-cyan-300/40 animate-spin" style={{animationDuration: '6s'}} />
      </div>
      
      {/* Floating dots pattern */}
      <div className="absolute top-16 left-1/3 w-2 h-2 bg-purple-400/50 rounded-full animate-pulse"></div>
      <div className="absolute top-24 left-1/4 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-1/4 w-2.5 h-2.5 bg-purple-300/45 rounded-full animate-bounce"></div>
      <div className="absolute bottom-16 right-1/3 w-1 h-1 bg-cyan-300/50 rounded-full animate-pulse"></div>
      
      {/* Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
            <img 
              src="/lovable-uploads/29b2731b-6f40-448a-8226-7c97a6773824.png" 
              alt="Madalina Carcea" 
              className="w-80 h-80 md:w-96 md:h-96 rounded-full mx-auto object-cover border-4 border-purple-400/50 shadow-2xl shadow-purple-500/30 relative z-10 neon-border"
            />
            <div className="absolute -top-2 -right-2 z-20">
              <Sparkles className="w-10 h-10 text-cyan-400 animate-pulse" />
            </div>
          </div>
          
          <div className="mb-6">
            <h1
               className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-slate-100 via-indigo-200 to-slate-100 bg-clip-text text-transparent drop-shadow-lg mb-2"
               style={{
                 textShadow: '0 0 20px rgba(255, 255, 255, 0.8), 2px 2px 4px rgba(0, 0, 0, 0.9)'
               }}
            >
              Madalina Carcea
            </h1>
            <div className="flex items-center justify-center gap-2 text-slate-100">
              <Code2 className="w-6 h-6" />
              <span className="text-xl md:text-2xl font-semibold text-glow">Data Scientist & AI Engineering Student</span>
              <Code2 className="w-6 h-6" />
            </div>
          </div>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-loose text-glow">
            Aspiring Data Scientist & AI Engineering Student with practical experience in AI automation, 
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
              className="glass-morphism border-slate-200/50 hover:border-cyan-300/70 text-slate-100 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300 group"
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
