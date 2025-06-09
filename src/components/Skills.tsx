
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-xl text-primary group-hover:text-primary/80 transition-colors duration-200">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-card/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-primary text-center">Language Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {languages.map((language, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-secondary/20">
                  <h4 className="font-semibold text-primary mb-2">{language.name}</h4>
                  <p className="text-sm text-muted-foreground">{language.level}</p>
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
