import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProfileSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <SoftSkillsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Portfolio;
