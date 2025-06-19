
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-indigo-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">Let's Connect</h2>
          <p className="text-2xl md:text-3xl text-slate-100 max-w-4xl mx-auto leading-relaxed text-glow">
            I'm always open to discussing new opportunities in AI, data science, and exciting collaborative projects
          </p>
        </div>
        
        <Card className="glass-morphism border-2 border-purple-400/30 shadow-2xl">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl md:text-4xl text-slate-100 text-glow font-bold">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-10">
            <div className="text-center">
              <p className="text-slate-100 text-xl md:text-2xl leading-relaxed mb-10 text-glow max-w-4xl mx-auto">
                Whether you have an internship opportunity in AI/Data Science, want to collaborate on a project, 
                or just want to discuss the latest in machine learning and computer vision, I'd love to hear from you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-6 group-hover:from-purple-400/30 group-hover:to-cyan-400/30 transition-colors duration-200 border border-purple-400/40">
                  <Mail className="w-10 h-10 text-slate-100" />
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-slate-100 text-glow">Email</h3>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full text-lg md:text-xl py-3 px-6 glass-morphism border-purple-400/50 text-slate-100 hover:border-cyan-400/70 hover:text-cyan-200"
                  onClick={() => window.open('mailto:madalinacarcea@yahoo.com', '_blank')}
                >
                  madalinacarcea@yahoo.com
                </Button>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-6 group-hover:from-purple-400/30 group-hover:to-cyan-400/30 transition-colors duration-200 border border-purple-400/40">
                  <Phone className="w-10 h-10 text-slate-100" />
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-slate-100 text-glow">Phone</h3>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full text-lg md:text-xl py-3 px-6 glass-morphism border-purple-400/50 text-slate-100 hover:border-cyan-400/70 hover:text-cyan-200"
                  onClick={() => window.open('tel:+31643538696', '_blank')}
                >
                  (+31) 643538696
                </Button>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full mb-6 group-hover:from-purple-400/30 group-hover:to-cyan-400/30 transition-colors duration-200 border border-purple-400/40">
                  <Linkedin className="w-10 h-10 text-slate-100" />
                </div>
                <h3 className="font-bold text-xl md:text-2xl mb-4 text-slate-100 text-glow">LinkedIn</h3>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full text-lg md:text-xl py-3 px-6 glass-morphism border-purple-400/50 text-slate-100 hover:border-cyan-400/70 hover:text-cyan-200"
                  onClick={() => window.open('https://www.linkedin.com/in/mădălina-carcea/', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
            
              <div className="text-center pt-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-morphism text-xl md:text-2xl py-4 px-10 border-purple-400/50 text-slate-100 hover:border-cyan-400/70 hover:text-cyan-200 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-cyan-500/10 transition-all duration-300"
                  onClick={() => window.open('/lovable-uploads/Madalina_Carcea_Resume.pdf', '_blank')}
                >
                  Download Resume
                </Button>
              </div>

            <div className="text-center pt-8">
              <Button 
                size="lg" 
                className="futuristic-button text-xl md:text-2xl py-4 px-10 hover:scale-105 transition-transform duration-200"
                onClick={() => window.open('mailto:madalinacarcea@yahoo.com', '_blank')}
              >
                Send Message
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
