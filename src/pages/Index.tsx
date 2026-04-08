import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-muted-foreground text-sm font-body">
          © {new Date().getFullYear()} Ian Baterna. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
