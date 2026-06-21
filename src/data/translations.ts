import { 
  Code, Briefcase, Target, Users, GitBranch, ClipboardList, 
  MessageCircle, RefreshCw, Crown, Lightbulb, Calendar, Globe,
  Brain, Clock, Scale, Sparkles, Heart
} from "lucide-react";

export const translations = {
  ES: {
    hero: {
      role: "Desarrollador Full Stack & Gestor de Proyectos",
      cta: "Ver Portafolio",
      linkedIn: "LinkedIn",
      github: "GitHub"
    },
    landing: {
      greeting: "Jamil Raúl",
      role: "Desarrollador Full Stack & Gestor de Proyectos",
      email: "jamilturpoarocutipa@gmail.com",
      viewPortfolio: "Ver Portafolio"
    },
    portfolio: {
      downloadCv: "Descargar CV",
      experienceLabel: "Experiencia",
      projectsLabel: "Completados",
      years: "años",
      projects: "proyectos"
    },
    profile: {
      title: "Perfil Profesional",
      subtitle: "Sobre mí",
      description: "Profesional en Diseño y Desarrollo de Software con experiencia en aplicaciones web, sistemas empresariales y desarrollo móvil multiplataforma (Android e iOS). Especializado en desarrollo Full Stack y gestión de proyectos tecnológicos. He liderado proyectos completos desde la planificación hasta la entrega, asegurando calidad, escalabilidad y cumplimiento de plazos. También cuento con experiencia coordinando equipos, gestionando requerimientos y aplicando metodologías ágiles como Scrum y Kanban.",
      stats: {
        fullstack: { title: "Full Stack", subtitle: "Desarrollo" },
        leader: { title: "Líder", subtitle: "Proyectos" },
        agile: { title: "Ágil", subtitle: "Metodologías" }
      }
    },
    experience: {
      title: "Trayectoria Profesional",
      subtitle: "Proyectos destacados y roles desempeñados cronológicamente.",
      current: "Actualmente",
      items: [
        {
          title: "Líder de Proyecto",
          project: "Dot's Go - Plataforma Web de Aprendizaje",
          company: "Proyecto Académico",
          period: "Junio 2025 – Actualidad",
          highlights: [
            "Dirección de equipo multidisciplinario",
            "Rediseño de arquitectura y dashboards interactivos",
            "Integración de APIs y despliegue en entornos productivos"
          ],
          current: true
        },
        {
          title: "Líder de Proyecto",
          project: "Rueda de Problemas",
          company: "OCEAN S.R.L",
          period: "Octubre 2025 – Noviembre 2025",
          highlights: [
            "Asignación de Fondos de Canon",
            "Levantamiento de requerimientos y reuniones con clientes",
            "Validación de entregables finales"
          ]
        },
        {
          title: "Desarrollador .NET",
          project: "Juanjo",
          company: "Archery & Lenguage School",
          period: "Septiembre 2024 – Diciembre 2024",
          highlights: [
            "Implementación de Arquitectura Hexagonal",
            "Optimización del registro de alumnos",
            "Automatización de gestión administrativa"
          ]
        },
        {
          title: "Desarrollador Full Stack",
          project: "CodeLink",
          company: "Red Social para Desarrolladores",
          period: "Junio 2025 – Agosto 2025",
          highlights: [
            "Autenticación y perfiles dinámicos",
            "Servicios en tiempo real (Chat/Feeds)",
            "Diseño enfocado en UX móvil"
          ]
        },
        {
          title: "Desarrollador Backend",
          project: "Sistema de Gestión de Riesgos",
          company: "Laboratorios La Cooper",
          period: "Abril 2024 – Agosto 2024",
          highlights: [
            "Desarrollo de sistema integral de gestión de riesgos",
            "Implementación de flujos de validación y seguridad de datos",
            "Coordinación con auditores internos y externos"
          ]
        }
      ]
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Stack tecnológico y herramientas de desarrollo que domino",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Bases de Datos",
        mobile: "Móvil",
        tools: "Herramientas",
        methodologies: "Metodologías"
      }
    },
    softSkills: {
      title: "Habilidades Blandas",
      subtitle: "Competencias interpersonales y de gestión que potencian mi trabajo",
      items: [
        { name: "Comunicación efectiva", icon: MessageCircle },
        { name: "Adaptabilidad", icon: RefreshCw },
        { name: "Liderazgo", icon: Crown },
        { name: "Resolución de problemas", icon: Lightbulb },
        { name: "Organización", icon: Calendar },
        { name: "Pensamiento crítico", icon: Brain },
        { name: "Gestión del tiempo", icon: Clock },
        { name: "Toma de decisiones", icon: Scale },
        { name: "Trabajo colaborativo", icon: Users },
      ]
    },
    education: {
      title: "Educación y Certificaciones",
      subtitle: "Formación académica y certificaciones",
      items: [
        {
          title: "Diseño y Desarrollo de Software",
          institution: "TECSUP",
          type: "Carrera Técnica"
        },
        {
          title: "Scrum Master",
          institution: "ScrumAcademy",
          type: "Certificación"
        }
      ],
      volunteeringTitle: "Voluntariados",
      volunteeringSubtitle: "Impacto en la comunidad",
      volunteeringItems: [
        {
          title: "FLIT Arequipa",
          description: "Festival de Literatura y Tecnología"
        },
        {
          title: "Patrimonio Game Jam",
          institution: "Ministerio de Cultura",
          description: "Desarrollo de videojuegos educativos"
        }
      ],
      quote: "El conocimiento compartido es el que más crece"
    },
    contact: {
      title: "Contacto",
      subtitle: "¡Conectemos y creemos algo increíble juntos!",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      locationValue: "Arequipa, Perú",
      scanMe: "Escanea para visitar",
      cardTitle: "Tarjeta Digital de Presentación"
    },
    footer: {
      tagline: "Full Stack Developer • Project Manager",
      madeWith: "Hecho con"
    }
  },
  EN: {
    hero: {
      role: "Full Stack Developer & Project Manager",
      cta: "View Portfolio",
      linkedIn: "LinkedIn",
      github: "GitHub"
    },
    landing: {
      greeting: "Jamil Raúl",
      role: "Full Stack Developer & Project Manager",
      email: "jamilturpoarocutipa@gmail.com",
      viewPortfolio: "View Portfolio"
    },
    portfolio: {
      downloadCv: "Download CV",
      experienceLabel: "Experience",
      projectsLabel: "Completed",
      years: "years",
      projects: "projects"
    },
    profile: {
      title: "Professional Profile",
      subtitle: "About me",
      description: "Professional in Software Design and Development with experience in web applications, enterprise systems, and multi-platform mobile development (Android and iOS). Specialized in Full Stack development and technology project management. I have led complete projects from planning to delivery, ensuring quality, scalability, and deadline compliance. I also have experience coordinating teams, managing requirements, and applying agile methodologies like Scrum and Kanban.",
      stats: {
        fullstack: { title: "Full Stack", subtitle: "Development" },
        leader: { title: "Leader", subtitle: "Projects" },
        agile: { title: "Agile", subtitle: "Methodologies" }
      }
    },
    experience: {
      title: "Professional Trajectory",
      subtitle: "Featured projects and roles performed chronologically.",
      current: "Currently",
      items: [
        {
          title: "Project Lead",
          project: "Dot's Go - Web Learning Platform",
          company: "Academic Project",
          period: "June 2025 – Present",
          highlights: [
            "Leading a multidisciplinary team",
            "Redesigning architecture and interactive dashboards",
            "Integrating APIs and deploying in production environments"
          ],
          current: true
        },
        {
          title: "Project Lead",
          project: "Problem Wheel",
          company: "OCEAN S.R.L",
          period: "October 2025 – November 2025",
          highlights: [
            "Canon Fund Allocation Strategy",
            "Requirements gathering and client meetings",
            "Validation of final deliverables"
          ]
        },
        {
          title: ".NET Developer",
          project: "Juanjo",
          company: "Archery & Lenguage School",
          period: "September 2024 – December 2024",
          highlights: [
            "Implementation of Hexagonal Architecture",
            "Optimization of student registration",
            "Automation of administrative management"
          ]
        },
        {
          title: "Full Stack Developer",
          project: "CodeLink",
          company: "Social Network for Developers",
          period: "June 2025 – August 2025",
          highlights: [
            "Authentication and dynamic profiles",
            "Real-time services (Chat/Feeds)",
            "Mobile UX focused design"
          ]
        },
        {
          title: "Backend Developer",
          project: "Risk Management System",
          company: "Laboratorios La Cooper",
          period: "April 2024 – August 2024",
          highlights: [
            "Development of comprehensive risk management system",
            "Implementation of data validation and security flows",
            "Coordination with internal and external auditors"
          ]
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Tech stack and development tools I master",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Databases",
        mobile: "Mobile",
        tools: "Tools",
        methodologies: "Methodologies"
      }
    },
    softSkills: {
      title: "Soft Skills",
      subtitle: "Interpersonal and management skills that empower my work",
      items: [
        { name: "Effective Communication", icon: MessageCircle },
        { name: "Adaptability", icon: RefreshCw },
        { name: "Leadership", icon: Crown },
        { name: "Problem Solving", icon: Lightbulb },
        { name: "Organization", icon: Calendar },
        { name: "Critical Thinking", icon: Brain },
        { name: "Time Management", icon: Clock },
        { name: "Decision Making", icon: Scale },
        { name: "Collaborative Work", icon: Users },
      ]
    },
    education: {
      title: "Education & Certifications",
      subtitle: "Academic background and certifications",
      items: [
        {
          title: "Software Design and Development",
          institution: "TECSUP",
          type: "Technical Degree"
        },
        {
          title: "Scrum Master",
          institution: "ScrumAcademy",
          type: "Certification"
        }
      ],
      volunteeringTitle: "Volunteering",
      volunteeringSubtitle: "Community Impact",
      volunteeringItems: [
        {
          title: "FLIT Arequipa",
          description: "Literature and Technology Festival"
        },
        {
          title: "Heritage Game Jam",
          institution: "Ministry of Culture",
          description: "Educational video game development"
        }
      ],
      quote: "Shared knowledge grows the most"
    },
    contact: {
      title: "Contact",
      subtitle: "Let's connect and create something amazing together!",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Arequipa, Peru",
      scanMe: "Scan to visit",
      cardTitle: "Digital Business Card"
    },
    footer: {
      tagline: "Full Stack Developer • Project Manager",
      madeWith: "Made with"
    }
  }
};