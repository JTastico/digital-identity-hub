import { useState, useEffect } from "react";
import { 
  Mail, Phone, Github, Linkedin, MapPin, Globe, ArrowLeft,
  Briefcase, GraduationCap, Code, Heart, Users, Award,
  MessageCircle, RefreshCw, Crown, Lightbulb, Brain, Clock, Target
} from "lucide-react";
import { 
  SiReact, SiNextdotjs, SiVuedotjs, SiLaravel, SiTailwindcss,
  SiDjango, SiSpringboot, SiNodedotjs, SiDotnet,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiSupabase,
  SiKotlin, SiFlutter, SiSwift,
  SiGithub, SiDocker, SiFigma, SiPostman, SiSwagger
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profileImage from "@/assets/jamil-profile.png";

const techCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Vue 3", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    ]
  },
  {
    name: "Backend",
    skills: [
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "ASP.NET", icon: SiDotnet, color: "#512BD4" },
    ]
  },
  {
    name: "Base de Datos",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    ]
  },
  {
    name: "Móvil",
    skills: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "SwiftUI", icon: SiSwift, color: "#F05138" },
    ]
  },
  {
    name: "Herramientas",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
    ]
  }
];

const experiences = [
  {
    title: "Desarrollador Backend",
    project: "Sistema de Gestión de Riesgos",
    company: "Laboratorios La Cooper",
    period: "Abril 2024 – Agosto 2024",
    tech: ["PHP", "Laravel", "MySQL"],
    highlights: [
      "Desarrollo de sistema integral de gestión de riesgos",
      "Implementación de flujos de validación y seguridad de datos",
      "Coordinación con auditores internos y externos"
    ]
  },
  {
    title: "Líder de Proyecto",
    project: "Dot's Go - Plataforma Web de Aprendizaje",
    company: "Proyecto Académico",
    period: "Junio 2025 – Actualidad",
    tech: ["React", "Node.js", "MongoDB", "Kanban"],
    highlights: [
      "Dirección de equipo multidisciplinario",
      "Rediseño de arquitectura y dashboards interactivos",
      "Integración de APIs y despliegue en entornos productivos"
    ]
  },
  {
    title: "Desarrollador Full Stack",
    project: "CodeLink - Red Social para Desarrolladores",
    company: "Proyecto Personal",
    period: "Junio 2025 – Agosto 2025",
    tech: ["iOS", "SwiftUI", "Firebase"],
    highlights: [
      "Autenticación, perfiles y publicaciones dinámicas",
      "Servicios en tiempo real y diseño UX",
      "Arquitectura escalable para aplicación móvil"
    ]
  },
  {
    title: "Líder de Proyecto",
    project: "Rueda de Problemas - Asignación Estratégica de Fondos",
    company: "OCEAN S.R.L",
    period: "Octubre 2025 – Noviembre 2025",
    tech: ["Gestión", "Análisis", "Coordinación"],
    highlights: [
      "Levantamiento de requerimientos y reuniones con clientes",
      "Coordinación de mejoras y validación de entregables",
      "Gestión de comunicación con stakeholders"
    ]
  }
];

const education = [
  {
    title: "Diseño y Desarrollo de Software",
    institution: "TECSUP",
    year: "2023 - 2025",
    type: "Carrera Técnica"
  },
  {
    title: "Scrum Master Certified",
    institution: "ScrumAcademy",
    year: "2024",
    type: "Certificación"
  }
];

const volunteering = [
  { name: "FLIT Arequipa", year: "2025" },
  { name: "Patrimonio Game Jam - Ministerio de Cultura", year: "2024" }
];

const softSkills = [
  { name: "Comunicación efectiva", icon: MessageCircle },
  { name: "Adaptabilidad", icon: RefreshCw },
  { name: "Liderazgo", icon: Crown },
  { name: "Resolución de problemas", icon: Lightbulb },
  { name: "Pensamiento crítico", icon: Brain },
  { name: "Gestión del tiempo", icon: Clock },
  { name: "Trabajo colaborativo", icon: Users },
  { name: "Toma de decisiones", icon: Target }
];

const CVPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate('/detalles')}
            className="flex items-center gap-2 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </Button>
          <h1 className="text-lg font-bold gradient-text">Curriculum Vitae</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Profile Header */}
        <section 
          className={`glass-card-elevated rounded-2xl p-6 md:p-8 mb-8 transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Photo */}
            <div className="relative shrink-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-primary to-cyan-400 p-1">
                <img 
                  src={profileImage} 
                  alt="Jamil Raúl Turpo Arocutipa"
                  className="w-full h-full object-cover object-top rounded-xl"
                />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold font-heading mb-1">
                <span className="gradient-text">Jamil Raúl Turpo Arocutipa</span>
              </h1>
              <p className="text-lg text-primary font-medium mb-4">
                Desarrollador Full Stack & Gestor de Proyectos Tecnológicos
              </p>
              
              {/* Contact Grid */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3 text-sm">
                <a href="mailto:jamilturpoarocutipa@gmail.com" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-foreground/80">jamilturpoarocutipa@gmail.com</span>
                </a>
                <a href="tel:+51991010001" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-foreground/80">+51 991 010 001</span>
                </a>
                <a href="https://github.com/JTastico" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                  <Github className="w-4 h-4 text-primary" />
                  <span className="text-foreground/80">JTastico</span>
                </a>
                <a href="https://www.linkedin.com/in/turpojamil/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                  <Linkedin className="w-4 h-4 text-primary" />
                  <span className="text-foreground/80">turpojamil</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Profile */}
        <section 
          className={`glass-card rounded-2xl p-6 mb-8 transition-all duration-700 delay-100 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold font-heading mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            Perfil Profesional
          </h2>
          <p className="text-foreground/80 leading-relaxed">
            Profesional en Diseño y Desarrollo de Software con experiencia en aplicaciones web, sistemas empresariales y desarrollo móvil multiplataforma (Android e iOS). Especializado en desarrollo Full Stack y gestión de proyectos tecnológicos. He liderado proyectos completos desde la planificación hasta la entrega, asegurando calidad, escalabilidad y cumplimiento de plazos. También cuento con experiencia coordinando equipos, gestionando requerimientos y aplicando metodologías ágiles como Scrum y Kanban.
          </p>
        </section>

        {/* Experience */}
        <section 
          className={`glass-card rounded-2xl p-6 mb-8 transition-all duration-700 delay-200 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold font-heading mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-primary" />
            </div>
            Experiencia Profesional
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-primary/30 hover:border-primary/60 transition-colors">
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.project}</p>
                  <p className="text-sm text-muted-foreground">{exp.company} • {exp.period}</p>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-foreground/70 flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section 
          className={`glass-card rounded-2xl p-6 mb-8 transition-all duration-700 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold font-heading mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            Educación y Certificaciones
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {education.map((edu, index) => (
              <div key={index} className="p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                <span className="text-xs font-medium text-primary mb-1 block">{edu.type}</span>
                <h3 className="font-semibold text-foreground">{edu.title}</h3>
                <p className="text-sm text-muted-foreground">{edu.institution} • {edu.year}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills */}
        <section 
          className={`glass-card rounded-2xl p-6 mb-8 transition-all duration-700 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold font-heading mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
              <Code className="w-5 h-5 text-primary" />
            </div>
            Habilidades Técnicas
          </h2>
          
          <div className="space-y-6">
            {techCategories.map((category, catIndex) => (
              <div key={catIndex}>
                <h3 className="text-sm font-semibold text-muted-foreground mb-3">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, index) => {
                    const IconComponent = skill.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 hover:scale-105 transition-all cursor-default group"
                      >
                        <IconComponent 
                          className="w-4 h-4 group-hover:scale-110 transition-transform" 
                          style={{ color: skill.color }}
                        />
                        <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Soft Skills */}
        <section 
          className={`glass-card rounded-2xl p-6 mb-8 transition-all duration-700 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold font-heading mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-primary" />
            </div>
            Habilidades Blandas
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex items-center gap-2 p-3 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors">
                <skill.icon className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground/80">{skill.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Volunteering */}
        <section 
          className={`glass-card rounded-2xl p-6 mb-8 transition-all duration-700 delay-600 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold font-heading mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
              <Award className="w-5 h-5 text-primary" />
            </div>
            Voluntariados
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {volunteering.map((vol, index) => (
              <div key={index} className="px-4 py-2 rounded-xl bg-card/50 border border-border/50">
                <span className="font-medium text-foreground">{vol.name}</span>
                <span className="text-muted-foreground"> • {vol.year}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Languages */}
        <section 
          className={`glass-card rounded-2xl p-6 mb-8 transition-all duration-700 delay-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="flex items-center gap-3 text-xl font-bold font-heading mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center">
              <Globe className="w-5 h-5 text-primary" />
            </div>
            Idiomas
          </h2>
          
          <div className="flex gap-4">
            <div className="px-4 py-2 rounded-xl bg-card/50 border border-border/50">
              <span className="font-medium text-foreground">Español</span>
              <span className="text-muted-foreground"> • Nativo</span>
            </div>
            <div className="px-4 py-2 rounded-xl bg-card/50 border border-border/50">
              <span className="font-medium text-foreground">Inglés</span>
              <span className="text-muted-foreground"> • Intermedio</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 text-sm text-muted-foreground">
          <p className="gradient-text font-medium">Turpo Arocutipa, Jamil Raúl</p>
          <p>Curriculum Vitae • 2025</p>
        </footer>
      </main>
    </div>
  );
};

export default CVPage;
