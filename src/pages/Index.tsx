
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Animated gradient overlay */}
      <div className="gradient-overlay"></div>
      
      <Navigation />
      <main>
        <div id="hero">
          <Hero />
        </div>
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
