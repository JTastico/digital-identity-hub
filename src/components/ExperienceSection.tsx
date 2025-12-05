import { Briefcase, Calendar, Star, ArrowRight } from "lucide-react";

// Datos ordenados cronológicamente (Antiguo -> Reciente)
const experiences = [
  {
    title: "Desarrollador Backend",
    project: "Sistema de Gestión de Riesgos",
    company: "Laboratorios La Cooper",
    tech: ["PHP", "Laravel", "MySQL"],
    period: "Abril 2024 – Agosto 2024",
    highlights: [
      "Desarrollo de sistema integral de gestión",
      "Validación y seguridad de datos",
      "Coordinación con auditores"
    ]
  },
  {
    title: "Desarrollador Full Stack",
    project: "CodeLink",
    company: "Red Social para Desarrolladores",
    tech: ["iOS", "SwiftUI", "Firebase"],
    period: "Junio 2025 – Agosto 2025",
    highlights: [
      "Autenticación y perfiles dinámicos",
      "Servicios en tiempo real (Chat/Feeds)",
      "Diseño enfocado en UX móvil"
    ]
  },
  {
    title: "Líder de Proyecto",
    project: "Dot's Go",
    company: "Plataforma Web de Aprendizaje",
    tech: ["React", "Node.js", "MongoDB"],
    period: "Junio 2025 – Actualidad",
    highlights: [
      "Dirección de equipo multidisciplinario",
      "Arquitectura y dashboards interactivos",
      "Integración de APIs RESTful"
    ],
    current: true
  },
  {
    title: "Líder de Proyecto",
    project: "Rueda de Problemas",
    company: "OCEAN S.R.L",
    tech: ["Gestión", "Análisis"],
    period: "Octubre 2025 – Noviembre 2025",
    highlights: [
      "Asignación de Fondos de Canon",
      "Levantamiento de requerimientos",
      "Validación de entregables finales"
    ]
  },
  {
    title: "Desarrollador .NET",
    project: "Juanjo",
    company: "Archery & Lenguage School",
    tech: [".NET", "Clean Arch", "C#"],
    period: "Septiembre 2024 – Diciembre 2024",
    highlights: [
      "Implementación de Arquitectura Hexagonal",
      "Optimización del registro de alumnos",
      "Automatización de gestión administrativa"
    ]
  }
];

const ExperienceSection = () => {
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
            <span className="gradient-text text-3xl md:text-4xl font-bold">Trayectoria Profesional</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Proyectos destacados y roles desempeñados cronológicamente.
          </p>
        </div>

        {/* Contenedor de Grilla */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative w-full group animate-slide-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card */}
                <div className="h-full glass-card-elevated p-5 md:p-6 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 bg-card/40 backdrop-blur-md flex flex-col">
                  
                  {/* Fecha (Badge) - CORREGIDO: Relativo en móvil, Absoluto en Desktop */}
                  <div className="mb-3 md:mb-0 md:absolute md:top-6 md:right-6 w-fit">
                    <div className="bg-secondary/90 backdrop-blur text-[10px] md:text-xs font-mono py-1 px-3 rounded-full border border-white/10 shadow-lg flex items-center gap-2">
                        <Calendar className="w-3 h-3 text-primary" />
                        {exp.period}
                    </div>
                  </div>

                  {/* Header Card */}
                  <div className="mb-4 mt-1 flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500/20 flex-shrink-0" />
                      {/* Título: Permite wrap en móvil */}
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-tight">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <div className="flex flex-col md:justify-between md:items-start gap-1">
                        <div className="w-full">
                            {/* Proyecto: Texto completo en móvil */}
                            <p className="text-base font-semibold text-primary/90 md:line-clamp-1 leading-snug">{exp.project}</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wide mt-1">{exp.company}</p>
                        </div>
                        
                        {exp.current && (
                            <div className="flex items-center gap-2 mt-2 md:mt-1 md:absolute md:right-6 md:top-16">
                                <span className="flex h-2.5 w-2.5 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                                </span>
                                <span className="text-[10px] text-green-400 font-medium md:hidden">Actualmente</span>
                            </div>
                        )}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.tech.map((t, i) => (
                      <span 
                        key={i} 
                        className="px-2.5 py-1 text-[10px] font-medium rounded-md bg-primary/10 text-primary border border-primary/20 whitespace-nowrap"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2 border-t border-white/5 pt-4 mt-auto">
                    {exp.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <ArrowRight className="w-3.5 h-3.5 text-primary/50 mt-1 flex-shrink-0" />
                        <span className="leading-relaxed text-xs md:text-sm">{h}</span>
                      </div>
                    ))}
                  </div>
                  
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;