import { useState, useEffect } from "react";
import { Github, Linkedin, ArrowRight, Sparkles, Mail, Phone, Link as LinkIcon, Globe, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profileImage from "@/assets/jamil-profile.png";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

const LandingCard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4 transition-colors duration-300">
      {/* --- Fondo Animado --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,hsl(199_89%_48%/0.12),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,hsl(265_89%_60%/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Controles flotantes (Tema + Idioma) */}
      <div className="absolute top-4 right-4 z-50 flex gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
          className="text-muted-foreground hover:text-foreground hover:bg-foreground/10 rounded-full border border-border backdrop-blur-sm"
        >
          {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={toggleLanguage}
          aria-label="Cambiar idioma"
          className="text-muted-foreground hover:text-foreground hover:bg-foreground/10 rounded-full border border-border font-mono text-xs backdrop-blur-sm"
        >
            <Globe className="w-3 h-3 mr-2" />
            {language}
        </Button>
      </div>

      {/* --- TARJETA PRINCIPAL (Horizontal) --- */}
      <div
        className={`relative z-10 w-full max-w-4xl transition-all duration-1000 ease-out transform ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="glass-card-elevated rounded-[2.5rem] overflow-hidden border border-border bg-card/80 backdrop-blur-xl shadow-2xl relative">

          {/* Brillo superior */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

          <div className="flex flex-col md:flex-row items-center md:items-stretch">

            {/* --- COLUMNA IZQUIERDA: FOTO --- */}
            <div className="w-full md:w-2/5 p-8 md:p-12 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-30 md:rounded-l-[2.5rem]" />

              <div className="relative z-10">
                <div className="absolute -inset-[3px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full blur-[2px]" />
                <div className="absolute -inset-[1px] bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-full" />

                <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border-[6px] border-card overflow-hidden bg-secondary">
                  <img
                    src={profileImage}
                    alt="Jamil Raúl Turpo Arocutipa"
                    loading="eager"
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-700"
                  />
                </div>

                <div className="absolute top-2 right-2 md:top-4 md:right-4 w-12 h-12 bg-card rounded-full flex items-center justify-center border-2 border-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)] z-20">
                  <Sparkles className="w-6 h-6 text-cyan-400 fill-cyan-400/20" />
                </div>
              </div>
            </div>

            {/* --- COLUMNA DERECHA: CONTENIDO --- */}
            <div className="w-full md:w-3/5 p-8 md:py-12 md:pr-12 flex flex-col justify-center text-center md:text-left gap-6">

              {/* Info Principal */}
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-foreground mb-2 tracking-tight">
                  {t.landing.greeting} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Turpo Arocutipa
                  </span>
                </h1>
                <p className="text-base sm:text-lg text-muted-foreground font-medium">
                  {t.landing.role}
                </p>
              </div>

              {/* Caja de Contacto */}
              <div className="bg-secondary rounded-2xl p-5 sm:p-6 border border-border shadow-inner space-y-4">
                <a
                  href={`mailto:${t.landing.email}`}
                  className="flex items-center gap-4 group p-2 rounded-xl hover:bg-foreground/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-foreground/80 text-sm md:text-base truncate">{t.landing.email}</span>
                </a>

                <div className="h-px bg-border w-full mx-auto" />

                <a
                  href="tel:+51991010001"
                  className="flex items-center gap-4 group p-2 rounded-xl hover:bg-foreground/5 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-foreground/80 text-sm md:text-base">+51 991 010 001</span>
                </a>
              </div>

              {/* Footer con Redes Sociales (Texto visible) y CTA */}
              <div className="flex flex-col xl:flex-row gap-4 items-center justify-between pt-2">

                {/* Botones Sociales con Nombre */}
                <div className="flex gap-3 w-full xl:w-auto">
                  <a
                    href="https://github.com/JTastico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-secondary border border-border hover:bg-foreground/10 transition-all text-foreground/80 hover:text-foreground"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-semibold text-sm">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/turpojamil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 xl:flex-none flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600/10 border border-blue-500/20 hover:bg-blue-600/20 hover:border-blue-500/40 transition-all text-blue-500 hover:text-blue-400"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-semibold text-sm">LinkedIn</span>
                  </a>
                </div>

                {/* Botón CTA Principal */}
                <Button
                  onClick={() => navigate('/')}
                  className="w-full xl:w-auto bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl px-8 py-6 font-semibold shadow-[0_0_20px_rgba(6,182,212,0.3)] group border-none"
                >
                  <span className="flex items-center gap-2">
                    {t.landing.viewPortfolio}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              {/* Link pequeño */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mt-1 md:justify-end justify-center">
                <LinkIcon className="w-3 h-3" />
                <span>jamilraul.dev</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
