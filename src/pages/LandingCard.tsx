import { Github, Linkedin, ArrowRight, Sparkles, Mail, Phone, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profileImage from "@/assets/jamil-profile.png";
import { useLanguage } from "@/context/LanguageContext";
import { PreferenceToggles } from "@/components/common/PreferenceToggles";

const LandingCard = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4 py-6 transition-colors duration-300 sm:px-6 sm:py-8">
      {/* --- Fondo Animado --- */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,hsl(199_89%_48%/0.12),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,hsl(265_89%_60%/0.12),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--foreground)/0.04)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--foreground)/0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Controles flotantes (Tema + Idioma) */}
      <PreferenceToggles className="absolute right-4 top-4 z-50 sm:right-6 sm:top-6" />

      {/* --- TARJETA PRINCIPAL (Horizontal) --- */}
      <div className="relative z-10 w-full max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card/80 shadow-2xl backdrop-blur-xl sm:rounded-[2.5rem] glass-card-elevated">

          {/* Brillo superior */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />

          <div className="flex flex-col items-center md:flex-row md:items-stretch">

            {/* --- COLUMNA IZQUIERDA: FOTO --- */}
            <div className="relative flex w-full items-center justify-center p-6 sm:p-8 md:w-2/5 md:p-12">
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
            <div className="flex w-full min-w-0 flex-col justify-center gap-6 p-6 text-center sm:p-8 md:w-3/5 md:py-12 md:pr-12 md:text-left">

              {/* Info Principal */}
              <div>
                <h1 className="mb-2 text-3xl font-bold font-heading tracking-tight text-foreground sm:text-4xl md:text-5xl">
                  {t.landing.greeting} <br className="hidden md:block" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Turpo Arocutipa
                  </span>
                </h1>
                <p className="text-sm font-medium text-muted-foreground sm:text-base md:text-lg">
                  {t.landing.role}
                </p>
              </div>

              {/* Caja de Contacto */}
              <div className="space-y-4 rounded-2xl border border-border bg-secondary p-4 shadow-inner sm:p-5 md:p-6">
                <a
                  href={`mailto:${t.landing.email}`}
                  className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-foreground/5 sm:gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="min-w-0 break-all text-left text-sm text-foreground/80 md:text-base">{t.landing.email}</span>
                </a>

                <div className="h-px bg-border w-full mx-auto" />

                <a
                  href="tel:+51991010001"
                  className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-foreground/5 sm:gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-foreground/80 text-sm md:text-base">+51 991 010 001</span>
                </a>
              </div>

              {/* Footer con Redes Sociales (Texto visible) y CTA */}
              <div className="flex flex-col items-stretch gap-4 pt-2 xl:flex-row xl:items-center xl:justify-between">

                {/* Botones Sociales con Nombre */}
                <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
                  <a
                    href="https://github.com/JTastico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-secondary px-4 py-3 text-foreground/80 transition-all hover:bg-foreground/10 hover:text-foreground xl:flex-none"
                  >
                    <Github className="w-5 h-5" />
                    <span className="font-semibold text-sm">GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/turpojamil/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-500/20 bg-blue-600/10 px-4 py-3 text-blue-500 transition-all hover:border-blue-500/40 hover:bg-blue-600/20 hover:text-blue-400 xl:flex-none"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="font-semibold text-sm">LinkedIn</span>
                  </a>
                </div>

                {/* Botón CTA Principal */}
                <Button
                  onClick={() => navigate('/')}
                  className="group w-full rounded-xl border-none bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-5 font-semibold text-white shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:from-cyan-500 hover:to-blue-500 sm:px-8 sm:py-6 xl:w-auto"
                >
                  <span className="flex items-center gap-2">
                    {t.landing.viewPortfolio}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              {/* Link pequeño */}
              <div className="mt-1 flex items-center justify-center gap-2 text-center font-mono text-xs text-muted-foreground md:justify-end">
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
