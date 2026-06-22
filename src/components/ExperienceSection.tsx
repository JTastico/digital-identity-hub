import { Briefcase, Calendar, Star, ArrowRight, Layers, Server, Hexagon, Crown, Code2, MonitorSmartphone, Smartphone, Sparkles, Globe, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

// Portadas generadas para proyectos sin imagen: tema (icono + degradado) según el rol
const coverThemes = {
  fullstack: { icon: Layers, gradient: "from-cyan-500 to-blue-500" },
  backend: { icon: Server, gradient: "from-purple-500 to-pink-500" },
  mobile: { icon: Smartphone, gradient: "from-emerald-500 to-teal-500" },
  dotnet: { icon: Hexagon, gradient: "from-violet-500 to-indigo-500" },
  frontend: { icon: MonitorSmartphone, gradient: "from-sky-500 to-cyan-400" },
  leader: { icon: Crown, gradient: "from-amber-500 to-orange-500" },
  default: { icon: Code2, gradient: "from-primary to-purple-500" },
};

const getCover = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes(".net")) return coverThemes.dotnet;
  if (t.includes("android") || t.includes("móvil") || t.includes("movil") || t.includes("mobile")) return coverThemes.mobile;
  if (t.includes("full stack") || t.includes("fullstack")) return coverThemes.fullstack;
  if (t.includes("backend") || t.includes("back end")) return coverThemes.backend;
  if (t.includes("frontend") || t.includes("front end")) return coverThemes.frontend;
  if (t.includes("líder") || t.includes("lider") || t.includes("lead")) return coverThemes.leader;
  return coverThemes.default;
};

// Monograma (iniciales) del proyecto para la portada
const getInitials = (name: string) => {
  const stop = new Set(["de", "la", "el", "y", "of", "the", "for", "a", "web"]);
  const words = name
    .replace(/[^\p{L}\s'-]/gu, " ")
    .split(/[\s'-]+/)
    .filter((w) => w.length > 1 && !stop.has(w.toLowerCase()));
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  if (words.length === 1) {
    const caps = words[0].match(/\p{Lu}/gu);
    if (caps && caps.length >= 2) return caps.slice(0, 2).join("");
    return words[0].slice(0, 2).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

// Proyectos cuyo logo flotante necesita fondo blanco para verse bien
const lightLogoProjects = new Set(["Rueda de Problemas", "Problem Wheel"]);

// Proyectos cuyo logo flotante va a la derecha (por defecto va a la izquierda)
const rightLogoProjects = new Set(["Alianza Valorem"]);

const ExperienceSection = () => {
  const { t } = useLanguage();
  const experiences = t.experience.items;

  // Mapa de tecnologías para mantener los badges (ya que el JSON solo tiene strings)
  const techMap: Record<string, string[]> = {
    "Risk Management System": ["PHP", "Laravel", "MySQL"],
    "Sistema de Gestión de Riesgos": ["PHP", "Laravel", "MySQL"],

    "CodeLink": ["iOS", "SwiftUI", "Firebase"],

    "Dot's Go": ["React", "Node.js", "MongoDB", "Scrum"],
    "Dot's Go - Web Learning Platform": ["React", "Node.js", "MongoDB", "Scrum"],
    "Dot's Go - Plataforma Web de Aprendizaje": ["React", "Node.js", "MongoDB", "Scrum"],

    "Problem Wheel": ["Management", "Analysis", "Scrum"],
    "Rueda de Problemas": ["Gestión", "Análisis", "Scrum"],

    "Juanjo": [".NET", "Clean Arch", "C#", "Swagger"],

    "SOS en Señas": ["Android", "Kotlin", "ML"],

    "Alianza Valorem": ["Astro", "TailwindCSS"]
  };

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-background">
      {/* Background Decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-card/30 via-background to-card/30 opacity-50" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(var(--primary-rgb),0.1),transparent_50%)]" />

      {/* Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-orb w-96 h-96 bg-primary/5 -top-20 -left-20" />
        <div className="floating-orb w-80 h-80 bg-purple-500/5 bottom-0 right-0" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">

        {/* Encabezado */}
        <div className="text-center mb-12 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center animate-pulse-glow border border-primary/20">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="section-title mb-4">
            <span className="gradient-text text-3xl md:text-4xl font-bold">{t.experience.title}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            {t.experience.subtitle}
          </p>
        </div>

        {/* Contenedor de Grilla */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

            {experiences.map((exp, index) => {
              // Recuperar tecnologías basadas en el nombre del proyecto
              const tech = techMap[exp.project] || techMap[exp.title] || [];
              const images = exp.images || [];
              const lightLogo = lightLogoProjects.has(exp.project);
              const rightLogo = rightLogoProjects.has(exp.project);
              const cover = getCover(exp.title);
              const CoverIcon = cover.icon;
              const initials = getInitials(exp.project);

              return (
                <div
                  key={index}
                  className="relative w-full group animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Card */}
                  <div className="h-full glass-card-elevated p-5 md:p-6 rounded-2xl border border-border/60 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 bg-card/40 backdrop-blur-md flex flex-col">

                    {/* Portada del proyecto: 2+ imágenes (mockup), 1 imagen, o portada generada */}
                    <div className="relative mb-5 rounded-xl overflow-hidden border border-border/60 bg-gradient-to-br from-secondary/40 to-card/40 aspect-video">
                      {images.length >= 2 ? (
                        <div className="absolute inset-0">
                          {/* Imagen principal de fondo */}
                          <img
                            src={images[0]}
                            alt={exp.project}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {/* Velo para dar profundidad */}
                          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-background/10 to-transparent" />
                          {/* Imagen secundaria flotante (estilo móvil) */}
                          <div className={`absolute bottom-3 h-[56%] max-w-[55%] rounded-lg overflow-hidden border-2 border-card shadow-2xl ring-1 ring-white/10 group-hover:rotate-0 transition-transform duration-500 ${rightLogo ? 'right-3 rotate-3' : 'left-3 -rotate-3'} ${lightLogo ? 'bg-white p-2' : 'bg-card'}`}>
                            <img
                              src={images[1]}
                              alt={`${exp.project} - 2`}
                              className="h-full w-auto object-cover"
                            />
                          </div>
                        </div>
                      ) : images.length === 1 ? (
                        <img
                          src={images[0]}
                          alt={exp.project}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="absolute inset-0">
                          {/* Degradado temático */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${cover.gradient} opacity-[0.18]`} />
                          {/* Patrón de cuadrícula */}
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:22px_22px]" />
                          {/* Brillo */}
                          <div className={`absolute -bottom-10 -right-6 w-36 h-36 rounded-full bg-gradient-to-br ${cover.gradient} blur-3xl opacity-25`} />
                          {/* Composición central: icono + monograma */}
                          <div className="relative h-full flex flex-col items-center justify-center gap-3">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${cover.gradient} p-0.5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <div className="w-full h-full rounded-2xl bg-card/90 flex items-center justify-center">
                                <CoverIcon className="w-6 h-6 text-foreground" />
                              </div>
                            </div>
                            <span className="font-heading font-extrabold text-3xl tracking-tight gradient-text">{initials}</span>
                          </div>
                        </div>
                      )}

                      {/* Fecha (overlay) */}
                      {exp.period && (
                        <div className="absolute top-3 right-3">
                          <div className="bg-background/80 backdrop-blur text-[10px] md:text-xs font-mono py-1 px-3 rounded-full border border-white/10 shadow-lg flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-primary" />
                            {exp.period}
                          </div>
                        </div>
                      )}

                      {/* Indicador "actual" (overlay) */}
                      {/* {exp.current && (
                        <div className="absolute top-3 left-3 flex items-center gap-2 bg-background/80 backdrop-blur py-1 px-3 rounded-full border border-green-500/30">
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                          </span>
                          <span className="text-[10px] text-green-400 font-medium">{t.experience.current}</span>
                        </div>
                      )} */}

                      {/* Detalle del proyecto: reemplaza la portada al hacer hover (solo desktop) */}
                      <div className="absolute inset-0 hidden md:flex md:flex-col bg-gradient-to-br from-secondary to-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        {/* Barra de acento superior */}
                        <div className="h-1 bg-gradient-to-r from-cyan-400 via-primary to-purple-500" />
                        <div className="flex-1 flex flex-col justify-center gap-3 px-5 py-4 overflow-hidden">
                          {/* Encabezado */}
                          <div className="flex items-center gap-2">
                            <div className="w-7 h-7 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0">
                              <Sparkles className="w-3.5 h-3.5 text-primary" />
                            </div>
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-primary">{t.experience.aboutLabel}</span>
                          </div>
                          {/* Descripción */}
                          <p className={`text-sm leading-relaxed line-clamp-6 ${exp.description ? 'text-foreground/85' : 'italic text-muted-foreground'}`}>
                            {exp.description || t.experience.detailsSoon}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Header Card */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500/20 flex-shrink-0" />
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                          {exp.title}
                        </h3>
                      </div>
                      <p className="text-base font-semibold text-primary/90 leading-snug">{exp.project}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{exp.company}</p>
                    </div>

                    {/* Descripción (visible en móvil; en desktop aparece al hacer hover sobre la portada) */}
                    <p className={`md:hidden text-sm leading-relaxed mb-4 ${exp.description ? 'text-muted-foreground' : 'italic text-muted-foreground/70'}`}>
                      {exp.description || t.experience.detailsSoon}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {tech.map((tg, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20 whitespace-nowrap"
                        >
                          {tg}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="space-y-2 border-t border-border/60 pt-4 mt-auto">
                      {exp.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                          <ArrowRight className="w-3.5 h-3.5 text-primary/50 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed text-xs md:text-sm">{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Enlace al proyecto (solo si existe) */}
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary text-sm font-semibold hover:bg-primary/20 hover:border-primary/40 transition-all group/link"
                      >
                        <Globe className="w-4 h-4" />
                        {t.experience.visitProject}
                        <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}

                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
