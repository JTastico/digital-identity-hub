import { Briefcase, Calendar, Star } from "lucide-react";

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
    <section className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Briefcase className="w-8 h-8 text-primary" />
            <h2 className="section-title mb-0">Experiencia Profesional</h2>
          </div>
          <p className="section-subtitle">Proyectos destacados y roles de liderazgo</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 -ml-2 md:-ml-2 rounded-full bg-primary glow-box hidden md:block" />
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-4 h-4 text-primary" />
                          <h3 className="text-lg font-bold text-foreground font-heading">{exp.title}</h3>
                          {exp.current && (
                            <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">
                              Actual
                            </span>
                          )}
                        </div>
                        <p className="text-primary font-medium">{exp.project}</p>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {exp.tech.map((t, i) => (
                        <span key={i} className="tech-badge text-xs">
                          {t}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-2">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {h}
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
