
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities in AI, data science, and interesting projects
          </p>
        </div>
        
        <Card className="bg-gradient-to-br from-card/50 to-secondary/20 backdrop-blur-sm border-border/50 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center">
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have an internship opportunity in AI/Data Science, want to collaborate on a project, 
                or just want to discuss the latest in machine learning and computer vision, I'd love to hear from you!
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('mailto:madalinacarcea@yahoo.com', '_blank')}
                >
                  madalinacarcea@yahoo.com
                </Button>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Phone</h3>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('tel:+31643538696', '_blank')}
                >
                  (+31) 643538696
                </Button>
              </div>
              
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                  <Linkedin className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.open('https://www.linkedin.com/in/carcea-mădălina-371706208/', '_blank')}
                >
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
            
            <div className="text-center pt-6">
              <Button 
                size="lg" 
                className="hover:scale-105 transition-transform duration-200"
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
