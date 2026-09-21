import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/jamil-profile.png";
import { useLanguage } from "@/context/LanguageContext";
import { CV_FILE } from "@/data/profile";
import { PreferenceToggles } from "@/components/common/PreferenceToggles";
import { SocialButtons } from "@/components/common/SocialButtons";
import { Stat } from "@/components/common/Stat";
import { Reveal } from "@/components/common/Reveal";

import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import EducationSection from "@/components/EducationSection";
import GitHubSection from "@/components/GitHubSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      {/* Cabecera */}
      <header className="border-b border-border px-4 pb-14 pt-6 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <PreferenceToggles className="mb-8 justify-end" />

          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
            <Reveal className="shrink-0">
              <div className="w-44 overflow-hidden rounded-3xl border border-border bg-secondary shadow-sm sm:w-48 md:w-60">
                <img
                  src={profileImage}
                  alt="Jamil Raúl Turpo Arocutipa"
                  loading="eager"
                  className="block h-auto w-full"
                />
              </div>
            </Reveal>

            <Reveal delay={80} className="min-w-0 flex-1 space-y-6 text-center md:text-left">
              <div>
                <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Jamil Raúl <span className="gradient-text">Turpo</span>
                </h1>
                <p className="mt-3 text-base font-medium text-muted-foreground sm:text-lg md:text-xl">
                  {t.landing.role}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                <Button asChild size="lg">
                  <a href={CV_FILE.href} download={CV_FILE.filename}>
                    <FileText />
                    {t.portfolio.downloadCv}
                  </a>
                </Button>
                <SocialButtons size="lg" />
              </div>

              <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 border-t border-border pt-6 md:justify-start">
                <Stat value="+3" unit={t.portfolio.years} label={t.portfolio.experienceLabel} className="items-center md:items-start" />
                <Stat value="+10" unit={t.portfolio.projects} label={t.portfolio.projectsLabel} className="items-center md:items-start" />
              </div>
            </Reveal>
          </div>
        </div>
      </header>

      <ProfileSection />
      <ExperienceSection />
      <SkillsSection />
      <SoftSkillsSection />
      <EducationSection />
      <GitHubSection />
      <ContactSection />

      <Footer />
    </main>
  );
};

export default Portfolio;
