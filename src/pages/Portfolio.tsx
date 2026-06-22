import { Github, Linkedin, FileText, Moon, Sun, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/jamil-profile.png";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { Link } from "react-router-dom";

// Importamos el resto de secciones que ya tienes desarrolladas
import ProfileSection from "@/components/ProfileSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import GitHubSection from "@/components/GitHubSection";
import EducationSection from "@/components/EducationSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-300 selection:bg-primary/30">

      {/* ==================================================================================
          CABECERA
         ================================================================================== */}
      <section className="relative w-full overflow-hidden border-b border-border bg-card page-shell pt-12 pb-16 sm:pt-14 sm:pb-20">

        {/* Fondo Decorativo de la Cabecera */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="content-container relative z-10">

          {/* 1. Controles: Tema e Idioma (Esquina superior derecha) */}
          <div className="mb-8 flex justify-end gap-3 sm:mb-10 md:absolute md:right-0 md:top-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
                className="text-muted-foreground hover:text-foreground hover:bg-foreground/10 rounded-full border border-border"
              >
                  {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                aria-label="Cambiar idioma"
                className="text-muted-foreground hover:text-foreground hover:bg-foreground/10 rounded-full border border-border font-mono text-xs"
              >
                  <Globe className="w-3 h-3 mr-2" />
                  {language}
              </Button>
          </div>

          <div className="mt-6 flex flex-col items-center gap-8 sm:gap-10 md:mt-14 md:flex-row md:items-start md:gap-12">

              {/* 2. Foto (Izquierda) */}
              <div className="flex-shrink-0 relative group">
                  <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-[2rem] blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>
                  <div className="relative w-44 sm:w-48 md:w-60 bg-secondary rounded-[2rem] overflow-hidden border-4 border-background shadow-2xl">
                      <img
                        src={profileImage}
                        alt="Jamil Raúl Turpo Arocutipa"
                        loading="eager"
                        className="w-full h-auto block"
                      />
                  </div>
              </div>

              {/* 3. Información (Derecha) */}
              <div className="flex min-w-0 flex-1 flex-col space-y-6 text-center md:text-left">

                  {/* Nombre y Título */}
                  <div>
                      <h1 className="mb-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                          Jamil Raúl <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Turpo</span>
                      </h1>
                      <p className="text-base font-medium text-muted-foreground sm:text-lg md:text-xl">
                          {t.landing.role}
                      </p>
                  </div>

                  {/* Botones: CV, Linkedin, Github */}
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
                      <Button
                        asChild
                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl px-6 h-11 gap-2 shadow-lg shadow-blue-900/20 border-0"
                      >
                        <Link to="/cv">
                          <FileText className="w-4 h-4" />
                          {t.portfolio.downloadCv}
                        </Link>
                      </Button>

                      <a href="https://www.linkedin.com/in/turpojamil/" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" className="h-11 w-full gap-2 rounded-xl border-border bg-secondary text-foreground/80 transition-all hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-foreground sm:w-auto">
                            <Linkedin className="w-4 h-4" /> LinkedIn
                        </Button>
                      </a>

                      <a href="https://github.com/JTastico" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
                        <Button variant="outline" className="h-11 w-full gap-2 rounded-xl border-border bg-secondary text-foreground/80 transition-all hover:border-purple-500/50 hover:bg-purple-500/10 hover:text-foreground sm:w-auto">
                            <Github className="w-4 h-4" /> Github
                        </Button>
                      </a>
                  </div>

                  {/* Estadísticas: Años y Proyectos */}
                  <div className="mt-2 flex flex-wrap justify-center gap-6 border-t border-border pt-4 sm:gap-8 md:justify-start">
                      <div className="flex flex-col items-center md:items-start">
                          <span className="text-3xl font-bold text-foreground flex items-center gap-1">
                            +3 <span className="text-cyan-500 text-lg">{t.portfolio.years}</span>
                          </span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{t.portfolio.experienceLabel}</span>
                      </div>
                      <div className="w-px h-12 bg-border hidden md:block" />

                      <div className="flex flex-col items-center md:items-start">
                          <span className="text-3xl font-bold text-foreground flex items-center gap-1">
                            +10 <span className="text-purple-500 text-lg">{t.portfolio.projects}</span>
                          </span>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{t.portfolio.projectsLabel}</span>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* ==================================================================================
          RESTO DEL PORTAFOLIO
         ================================================================================== */}
      <div className="space-y-0">

        <ProfileSection />
        <ExperienceSection />
        <SoftSkillsSection />
        <SkillsSection />
        <GitHubSection />
        <EducationSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
};

export default Portfolio;
