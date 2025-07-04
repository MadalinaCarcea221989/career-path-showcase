
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Brain } from "lucide-react";

// Enhanced Projects component with futuristic design and animations
// Change path for the images so they are accessible
const Projects = () => {
  const projects = [
    {
      title: "Predicting Big Clusters - AI for Production planning",
      description: "A machine learning model that predicts production clusters to optimize manufacturing processes using advanced algorithms and data analytics.",
      image: "/images/Screenshot2025-06-200022225.png",
      technologies: ["Python", "TensorFlow", "Pandas"],
      liveUrl: "#",
      githubUrl: "https://github.com/MadalinaCarcea221989/Personal-Projects/tree/main/DKG",
      icon: <Brain className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Tumor Detection - AI in Healthcare",
      description: "An AI-powered computer vision model that detects tumors in medical images, enhancing diagnostic accuracy and speed for healthcare professionals.",
      image: "/images/image.png",
      technologies: ["Python", "TensorFlow", "Keras"],
      liveUrl: "https://edubuas-my.sharepoint.com/:v:/g/personal/221989_buas_nl/EenLeLfCGSFGt0l8z6U2Kb8BRFFmZIxfmshNEAUsVMkOZg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=vBrnUh",
      prototypeUrl: "https://www.figma.com/proto/0HG8pMb5h5RO3LSfegtPdD/Prototype-app?page-id=0%3A1&type=design&node-id=1-3&viewport=1070%2C982%2C0.79&t=dYXf8aYKGhkGyZ01-1&scaling=scale-down&starting-point-node-id=1%3A3&show-proto-sidebar=1",
      githubUrl: "#",
      icon: <Zap className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Research Paper - The Impact of Robust Cybersecurity Practices on Consumer Confidence, and Economic Outcomes in SME Investments",
      description: "A comprehensive research project analyzing how cybersecurity measures impact consumer trust and economic performance in small and medium-sized enterprises (SMEs). Through surveys and interviews, the study shows that robust data protection leads to fewer breaches, stronger customer loyalty, and measurable business growth—positioning cybersecurity as both a safeguard and a strategic asset.",
      image: "/images/Screenshot2025-06-20002005.png",
      technologies: ["Research", "Cybersecurity", "Data Analysis", "SMEs", "Economics", "Consumer Confidence"],
      liveUrl: "#",
      githubUrl: "https://github.com/MadalinaCarcea221989/Personal-Projects/blob/main/Research%20paper/Individual_Research_paper.pdf",
      icon: <Brain className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and featuring smooth animations and futuristic design elements.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Zap className="w-5 h-5 text-cyan-400" />
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Enhanced deep violet background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/25 to-violet-900/30"></div>
      
      <div className="max-w-8xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-xl max-w-2xl mx-auto text-glow">
            A collection of projects that demonstrate my skills and passion for development
          </p>
        </div>
        
        {/* Enhanced 2-column grid layout with increased width */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-8xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-to-br from-indigo-900/40 via-purple-900/30 to-violet-900/40 backdrop-filter backdrop-blur-xl border-4 border-gradient-to-r from-indigo-400/60 via-purple-400/70 to-cyan-400/60 hover:border-indigo-300/80 rounded-2xl shadow-2xl hover:shadow-indigo-500/30 transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] min-h-[600px]">
              <div className="relative overflow-hidden rounded-t-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-purple-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-all duration-500"></div>
                <div className="absolute top-4 right-4 p-3 bg-black/50 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  {project.icon}
                </div>
              </div>
              
              <CardHeader className="pb-4 pt-8">
                <CardTitle className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-300 group-hover:to-purple-300 group-hover:bg-clip-text transition-all duration-500 flex items-center gap-3 high-contrast-text leading-tight">
                  {project.icon}
                  {project.title}
                </CardTitle>
                <CardDescription className="text-lg leading-relaxed high-contrast-text font-medium mt-4">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0 pb-8 px-8">
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-sm px-4 py-2 bg-gradient-to-r from-indigo-500/40 to-purple-500/40 border-2 border-indigo-300/50 text-slate-100 hover:from-indigo-500/50 hover:to-purple-500/50 hover:border-indigo-300/70 transition-all duration-300 font-semibold"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="lg" className="futuristic-button flex items-center justify-center gap-2 w-full relative z-10 py-3 font-semibold text-base">
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </Button>
                    </a>
                  )}

                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="lg" className="flex items-center justify-center gap-2 bg-black/90 border-2 border-black hover:bg-black text-white hover:text-white transition-all duration-300 w-full py-3 font-semibold hover:border-gray-700 text-base">
                        <Github className="w-5 h-5" />
                        Code
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
