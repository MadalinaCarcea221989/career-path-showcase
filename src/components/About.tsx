
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey and what drives my passion for AI and data science
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">My Story</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm an aspiring Data Scientist & AI Engineer Student with practical experience in AI automation, 
                  data analytics, and technical documentation. My journey combines technical expertise 
                  with strong communication skills, allowing me to translate complex AI solutions into 
                  clear, actionable insights.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently pursuing my Bachelor's in Data Science and Artificial Intelligence at 
                  Breda University of Applied Sciences, I'm passionate about building impactful tools 
                  using computer vision, machine learning, and Python-based systems. I'm a fast learner, 
                  clear communicator, and highly detail-oriented professional.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Work Experience</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary">AI Engineer - DeRegt Cables</h4>
                    <p className="text-sm text-muted-foreground mb-2">08/2024 - 11/2024 | Rotterdam, Netherlands</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Documented and analyzed AI-driven automation projects for cable design optimization, 
                      automated spiral measurement using computer vision, and created technical documentation 
                      for Python-Blender parametric 3D modeling tools.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary">Data Science Intern - DKG Groep</h4>
                    <p className="text-sm text-muted-foreground mb-2">01/2024 - 02/2024 | Bergen Op Zoom, Netherlands</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Collaborated with a team of four data scientists to maximize profits, minimize losses, 
                      and calculate production planning accuracy, successfully turning analytical insights into actionable solutions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Erasmus Blended Intensive Program</h3>
                <p className="text-muted-foreground leading-relaxed mb-2">
                  Participated in an Erasmus Blended Intensive Program at St. Pölten University of Applied Sciences, Austria.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Collaborated with international students on interdisciplinary projects focused on digital innovation and AI. 
                  The program combined online learning with a week-long on-site experience in Austria, enhancing my teamwork, 
                  cross-cultural communication, and problem-solving skills in a dynamic academic environment.
                </p>
                <p className="text-sm text-muted-foreground mt-2">05/2024 | St. Pölten, Austria</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="public\lovable-uploads\f07872e9-47eb-4159-b3fb-6b2ba4ff6f17.png" 
                alt="AI and Data Science workspace"
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
