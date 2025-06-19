
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Zap, Brain } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Predicting Big Clusters - AI for Production planning",
      description: "A machine learning model that predicts production clusters to optimize manufacturing processes using advanced algorithms and data analytics.",
      image: "public/lovable-uploads/Screenshot 2025-06-20 0022225.png",
      technologies: ["Python", "TensorFlow", "Pandas"],
      liveUrl: "#",
      githubUrl: "https://github.com/MadalinaCarcea221989/Personal-Projects/tree/main/DKG",
      icon: <Brain className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Tumor Detection - AI in Healthcare",
      description: "An AI-powered computer vision model that detects tumors in medical images, enhancing diagnostic accuracy and speed for healthcare professionals.",
      image: "public/lovable-uploads/image.png",
      technologies: ["Python", "TensorFlow", "Keras"],
      liveUrl: "https://edubuas-my.sharepoint.com/:v:/g/personal/221989_buas_nl/EenLeLfCGSFGt0l8z6U2Kb8BRFFmZIxfmshNEAUsVMkOZg?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=vBrnUh",
      prototypeUrl: "https://www.figma.com/proto/0HG8pMb5h5RO3LSfegtPdD/Prototype-app?page-id=0%3A1&type=design&node-id=1-3&viewport=1070%2C982%2C0.79&t=dYXf8aYKGhkGyZ01-1&scaling=scale-down&starting-point-node-id=1%3A3&show-proto-sidebar=1",
      githubUrl: "#",
      icon: <Zap className="w-5 h-5 text-cyan-400" />
    },
    {
      title: "Research Paper - The Impact of Robust Cybersecurity Practices on Consumer Confidence, and Economic Outcomes in SME Investments",
      description: "A comprehensive research paper analyzing the effects of cybersecurity measures on consumer trust and economic performance in small and medium-sized enterprises.",
      image: "public/lovable-uploads/Screenshot 2025-06-20 002005.png",
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
    <section id="projects" className="py-20 px-4 relative">
      {/* Enhanced purple background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-purple-600/10 to-cyan-600/10"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-glow">
            A collection of projects that demonstrate my skills and passion for development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="futuristic-card group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.icon}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300 flex items-center gap-2">
                  {project.icon}
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border-purple-400/30 text-purple-200 hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" className="futuristic-button flex items-center gap-2 relative z-10">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </Button>
                  </a>
                )}

                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="flex items-center gap-2 glass-morphism border-purple-400/50 hover:border-cyan-400/50 text-purple-200 hover:text-cyan-200 transition-all duration-300">
                      <Github className="w-4 h-4" />
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
