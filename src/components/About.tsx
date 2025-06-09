
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and what drives my passion for development
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate computer science student with a love for creating innovative solutions 
                  through code. My journey began with curiosity about how websites work, and it has evolved 
                  into a deep appreciation for clean, efficient, and user-friendly applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my degree while actively working on personal projects and contributing 
                  to open-source initiatives. I believe in continuous learning and staying up-to-date with 
                  the latest technologies and best practices.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">What I'm Looking For</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm actively seeking internship opportunities where I can contribute meaningfully to real-world 
                  projects while learning from experienced professionals. I'm particularly interested in roles 
                  that challenge me to grow and allow me to make a positive impact.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                alt="Developer workspace"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
