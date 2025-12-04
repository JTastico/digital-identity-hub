import { Briefcase, Calendar, Star, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Desarrollador Backend",
    project: "Sistema de Gestión de Riesgos",
    company: "Laboratorios La Cooper",
    tech: ["PHP", "Laravel", "MySQL"],
    period: "Abril 2024 – Agosto 2024",
    highlights: [
      "Desarrollo de un sistema integral de gestión de riesgos",
      "Implementación de flujos de validación y seguridad de datos",
      "Coordinación con auditores internos y externos"
    ]
  },
  {
    title: "Líder de Proyecto",
    project: "Dot's Go",
    company: "Plataforma Web de Aprendizaje",
    tech: ["React", "Node.js", "MongoDB", "Kanban"],
    period: "Junio 2025 – Actualidad",
    highlights: [
      "Dirección de equipo multidisciplinario",
      "Rediseño de arquitectura y dashboards interactivos",
      "Integración de APIs y despliegue en entornos productivos"
    ],
    current: true
  },
  {
    title: "Desarrollador Full Stack",
    project: "CodeLink",
    company: "Red Social para Desarrolladores",
    tech: ["iOS", "SwiftUI", "Firebase"],
    period: "Junio 2025 – Agosto 2025",
    highlights: [
      "Autenticación, perfiles y publicaciones dinámicas",
      "Servicios en tiempo real y diseño enfocado en UX"
    ]
  },
  {
    title: "Líder de Proyecto",
    project: "Rueda de Problemas",
    company: "OCEAN S.R.L",
    tech: ["Gestión", "Análisis"],
    period: "Octubre 2025 – Noviembre 2025",
    highlights: [
      "Asignación Estratégica de Fondos de Canon",
      "Levantamiento de requerimientos y reuniones con clientes",
      "Coordinación de mejoras y validación de entregables"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-card/30" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb w-72 h-72 bg-primary/5 top-20 -right-36" />
        <div className="floating-orb w-64 h-64 bg-purple-500/5 bottom-20 -left-32" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-orange-500/20 flex items-center justify-center animate-pulse-glow">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Experiencia Profesional</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">Proyectos destacados y roles de liderazgo</p>
        </div>

        <div className="relative">
          {/* Timeline line with gradient */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-purple-500 to-primary/20 hidden md:block md:-translate-x-0.5" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot with pulse */}
                <div className="absolute left-4 md:left-1/2 top-8 w-5 h-5 -ml-2.5 md:-ml-2.5 rounded-full bg-gradient-to-br from-primary to-cyan-400 hidden md:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-background" />
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary/50" style={{ animationDuration: '2s' }} />
                </div>
                
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}>
                  <div className="glass-card-glow p-6 group shine-effect">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2 flex-wrap">
                          <Star className="w-4 h-4 text-primary animate-glow-pulse" />
                          <h3 className="text-xl font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                            {exp.title}
                          </h3>
                          {exp.current && (
                            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-primary/20 to-green-500/20 text-primary rounded-full border border-primary/30 animate-pulse">
                              Actual
                            </span>
                          )}
                        </div>
                        <p className="text-lg text-primary font-semibold">{exp.project}</p>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>

                    {/* Period */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-5 p-2 rounded-lg bg-secondary/30 w-fit">
                      <Calendar className="w-4 h-4 text-primary" />
                      {exp.period}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {exp.tech.map((t, i) => (
                        <span 
                          key={i} 
                          className="tech-badge text-xs"
                          style={{ animationDelay: `${i * 50}ms` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3">
                      {exp.highlights.map((h, i) => (
                        <li 
                          key={i} 
                          className="text-sm text-muted-foreground flex items-start gap-3 group/item hover:text-foreground transition-colors"
                        >
                          <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0 group-hover/item:translate-x-1 transition-transform" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;