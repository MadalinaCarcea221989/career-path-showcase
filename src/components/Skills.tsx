
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & AI",
      skills: ["Python", "Machine Learning", "Computer Vision", "Natural Language Processing", "Data Analysis", "Data Visualization", "TensorFlow", "Keras", "PyROOT", "Feature Engineering", "Power BI", "Power Query"]
    },
    {
      title: "Programming",
      skills: ["Python", "C++", "C", "Java", "MySQL", "PHP", "R", "Object-Oriented Programming", "Software Engineering", "Arduino"]
    },
    {
      title: "AI/ML Tools & Frameworks",
      skills: ["OpenCV", "PyGlet", "PyBullet", "PyChrono", "OpenAI Gym", "Docker", "ROS", "Robotics", "Critical Thinking"]
    },
    {
      title: "Testing & Quality Assurance",
      skills: ["Manual Testing", "Automation Testing", "Selenium", "Unit Testing", "Integration Testing", "API Testing", "Jira", "Postman", "Agile (Scrum)"]
    },
    {
      title: "Design & Creative Tools",
      skills: ["Adobe Premiere", "Adobe Photoshop", "Adobe Lightroom", "Adobe Illustrator", "Adobe InDesign", "Unreal Engine", "Blender"]
    },
    {
      title: "General Technical",
      skills: ["Microsoft Office", "Windows", "MacOS", "Linux", "Android", "iOS", "Git", "GitHub", "Technical Writing", "Documentation"]
    }
  ];

  const languages = [
    { name: "Romanian", level: "Native" },
    { name: "English", level: "C1 - Proficient" },
    { name: "German", level: "A2 - Basic" },
    { name: "French", level: "A1 - Basic" }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-glow">Skills & Technologies</h2>
          <p className="text-2xl md:text-3xl text-slate-100 max-w-3xl mx-auto leading-relaxed text-glow">
            A comprehensive overview of my technical skills and expertise across various domains
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 glass-morphism border-2 border-purple-400/30 hover:border-cyan-400/50">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl md:text-3xl text-slate-100 group-hover:text-cyan-200 transition-colors duration-200 text-glow font-bold">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="text-base md:text-lg py-2 px-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-slate-100 border border-purple-400/40 hover:from-purple-400/30 hover:to-cyan-400/30 hover:border-cyan-300/60 transition-all duration-200 cursor-default backdrop-blur-sm"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="glass-morphism border-2 border-purple-400/30">
          <CardHeader>
            <CardTitle className="text-3xl md:text-4xl text-slate-100 text-center text-glow font-bold mb-4">Language Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-purple-400/30 backdrop-blur-sm">
                  <h4 className="font-bold text-xl md:text-2xl text-slate-100 mb-3 text-glow">{language.name}</h4>
                  <p className="text-lg md:text-xl text-slate-200 text-glow">{language.level}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
