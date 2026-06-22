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
      description: "Profesional en Diseño y Desarrollo de Software, especializado en desarrollo Full Stack y gestión de proyectos tecnológicos. Lidero proyectos de principio a fin —web, sistemas empresariales y móvil multiplataforma— asegurando calidad y cumplimiento de plazos con metodologías ágiles como Scrum y Kanban.",
      stats: {
        fullstack: { title: "Full Stack", subtitle: "Desarrollo" },
        leader: { title: "Líder", subtitle: "Proyectos" },
        agile: { title: "Ágil", subtitle: "Metodologías" }
      }
    },
    experience: {
      title: "Trayectoria Profesional",
      subtitle: "Proyectos destacados agrupados por especialidad",
      current: "Actualmente",
      detailsSoon: "Detalles próximamente",
      aboutLabel: "Sobre el proyecto",
      visitProject: "Visitar proyecto",
      items: [
        {
          title: "Desarrollador Frontend",
          project: "Alianza Valorem",
          company: "Landing Page",
          period: "Febrero 2026 – Marzo 2026",
          images: ["/alianzavalorem/welcome.webp", "/alianzavalorem/logo.webp"],
          link: "https://alianzavalorem.com/",
          description: "Diseñé y desarrollé por completo la landing page de Alianza Valorem, desde la interfaz y la experiencia de usuario hasta el código, usando Astro para lograr una web moderna, veloz y optimizada para SEO.",
          highlights: [
            "Diseño y desarrollo integral de la landing",
            "Interfaz moderna y responsive",
            "Optimizada para rendimiento y SEO con Astro"
          ]
        },
        {
          title: "Líder de Proyecto",
          project: "Rueda de Problemas",
          company: "OCEAN S.R.L",
          period: "Octubre 2025 – Noviembre 2025",
          images: ["/ruedaproblemas/welcome.webp", "/ruedaproblemas/logo.svg"],
          link: "https://ruedadeproblemas.pe/",
          description: "Plataforma que conecta problemas reales de los sectores productivo, gubernamental y social con capacidades de investigación e innovación para generar proyectos I+D+i+e con potencial de financiamiento. Lideré la planificación, reuniones, requerimientos y la gestión de sprints y revisiones.",
          highlights: [
            "Asignación de Fondos de Canon",
            "Levantamiento de requerimientos y reuniones con clientes",
            "Validación de entregables finales"
          ]
        },
        {
          title: "Desarrollador Android",
          project: "SOS en Señas",
          company: "App de Accesibilidad",
          period: "Julio 2025 – Septiembre 2025",
          images: ["/sosensenas/movil.webp", "/sosensenas/logo.svg"],
          link: "https://sosenseñas.com",
          description: "Aplicación Android de reconocimiento de señas para mujeres embarazadas sordosignantes, facilitando su comunicación.",
          highlights: [
            "Reconocimiento de lenguaje de señas",
            "Orientado a mujeres embarazadas sordosignantes",
            "Desarrollo nativo en Android"
          ]
        },
        {
          title: "Líder de Proyecto",
          project: "Dot's Go - Plataforma Web de Aprendizaje",
          company: "Proyecto Académico",
          period: "Junio 2025 – Enero 2026",
          images: ["/dots/dashboard.webp", "/dots/logo.webp"],
          link: "https://devdotfrontend.onrender.com/",
          description: "Juego multijugador en tiempo real para aprender los rombos NFPA 704, evaluando el reconocimiento de los distintos rombos de seguridad.",
          highlights: [
            "Dirección de equipo multidisciplinario",
            "Rediseño de arquitectura y dashboards interactivos",
            "Integración de APIs y despliegue en entornos productivos"
          ]
        },
        {
          title: "Desarrollador Full Stack",
          project: "CodeLink",
          company: "Red Social para Desarrolladores",
          period: "Junio 2025 – Agosto 2025",
          images: ["/codelink/content.webp", "/codelink/login.webp"],
          link: "",
          description: "Red social para programadores: permite pedir ayuda sobre programación a cualquier persona del mundo, con publicaciones generales o consultas por mensaje privado.",
          highlights: [
            "Autenticación y perfiles dinámicos",
            "Servicios en tiempo real (Chat/Feeds)",
            "Diseño enfocado en UX móvil"
          ]
        },
        {
          title: "Desarrollador .NET",
          project: "Juanjo",
          company: "Archery & Lenguage School",
          period: "Septiembre 2024 – Diciembre 2024",
          images: [],
          link: "",
          description: "Sistema de reserva de cursos de arquería: gestiona horarios, la cantidad de alumnos por docente y la automatización de turnos.",
          highlights: [
            "Implementación de Arquitectura Hexagonal",
            "Optimización del registro de alumnos",
            "Automatización de gestión administrativa"
          ]
        },
        {
          title: "Desarrollador Backend",
          project: "Sistema de Gestión de Riesgos",
          company: "Laboratorios La Cooper",
          period: "Abril 2024 – Agosto 2024",
          images: [],
          link: "",
          description: "Gestor de riesgos para una fábrica: registra problemas y deficiencias, y hace llegar requerimientos de mejora en seguridad a los encargados correspondientes.",
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
      locationValue: "Arequipa, Perú"
    },
    footer: {
      tagline: "Full Stack Developer • Project Manager",
      madeWith: "Hecho con"
    },
    github: {
      title: "GitHub",
      subtitle: "Mi actividad y proyectos de código abierto",
      bio: "Desarrollador Full Stack apasionado, desde Perú 🇵🇪",
      viewProfile: "Ver perfil",
      fullProfile: "Ver mi perfil completo en GitHub",
      orgLabel: "Organización",
      statsLabels: {
        repos: "Repositorios",
        contributions: "Contribuciones",
        contributionsNote: "último año"
      },
      aboutTitle: "Sobre mí",
      about: [
        "Desde Perú 🇵🇪",
        "Apasionado por el desarrollo Full Stack, la IA y la nube",
        "Siempre aprendiendo nuevos frameworks, lenguajes y herramientas",
        "Gamer de corazón y entusiasta de la tecnología"
      ],
      reposTitle: "Repositorios destacados",
      repos: [
        { name: "CodeLink", desc: "Red social para desarrolladores" },
        { name: "Dots", desc: "Plataforma web de aprendizaje" },
        { name: "Gasteko-finance", desc: "" }
      ]
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
      description: "Software Design and Development professional, specialized in Full Stack development and technology project management. I lead projects end to end —web, enterprise systems, and cross-platform mobile— ensuring quality and on-time delivery with agile methodologies like Scrum and Kanban.",
      stats: {
        fullstack: { title: "Full Stack", subtitle: "Development" },
        leader: { title: "Leader", subtitle: "Projects" },
        agile: { title: "Agile", subtitle: "Methodologies" }
      }
    },
    experience: {
      title: "Professional Trajectory",
      subtitle: "Featured projects grouped by specialty",
      current: "Currently",
      detailsSoon: "Details coming soon",
      aboutLabel: "About the project",
      visitProject: "Visit project",
      items: [
        {
          title: "Frontend Developer",
          project: "Alianza Valorem",
          company: "Landing Page",
          period: "February 2026 – March 2026",
          images: ["/alianzavalorem/welcome.webp", "/alianzavalorem/logo.webp"],
          link: "https://alianzavalorem.com/",
          description: "I designed and built the entire Alianza Valorem landing page, from the UI and user experience to the code, using Astro to deliver a modern, fast, SEO-optimized site.",
          highlights: [
            "End-to-end landing design and development",
            "Modern, responsive interface",
            "Performance and SEO optimized with Astro"
          ]
        },
        {
          title: "Project Lead",
          project: "Problem Wheel",
          company: "OCEAN S.R.L",
          period: "October 2025 – November 2025",
          images: ["/ruedaproblemas/welcome.webp", "/ruedaproblemas/logo.svg"],
          link: "https://ruedadeproblemas.pe/",
          description: "A platform connecting real problems from the productive, government and social sectors with research and innovation capabilities to generate R&D&I projects with funding potential. I led planning, meetings, requirements, and sprint and review management.",
          highlights: [
            "Canon Fund Allocation Strategy",
            "Requirements gathering and client meetings",
            "Validation of final deliverables"
          ]
        },
        {
          title: "Android Developer",
          project: "SOS en Señas",
          company: "Accessibility App",
          period: "July 2025 – September 2025",
          images: ["/sosensenas/movil.webp", "/sosensenas/logo.svg"],
          link: "https://sosenseñas.com",
          description: "Android app for sign-language recognition aimed at deaf-signing pregnant women, supporting their communication.",
          highlights: [
            "Sign-language recognition",
            "Aimed at deaf-signing pregnant women",
            "Native Android development"
          ]
        },
        {
          title: "Project Lead",
          project: "Dot's Go - Web Learning Platform",
          company: "Academic Project",
          period: "June 2025 – January 2026",
          images: ["/dots/dashboard.webp", "/dots/logo.webp"],
          link: "https://devdotfrontend.onrender.com/",
          description: "A real-time multiplayer game to learn the NFPA 704 diamonds, testing recognition of the different safety diamonds.",
          highlights: [
            "Leading a multidisciplinary team",
            "Redesigning architecture and interactive dashboards",
            "Integrating APIs and deploying in production environments"
          ]
        },
        {
          title: "Full Stack Developer",
          project: "CodeLink",
          company: "Social Network for Developers",
          period: "June 2025 – August 2025",
          images: ["/codelink/content.webp", "/codelink/login.webp"],
          link: "",
          description: "A social network for programmers: ask anyone in the world for coding help, through public posts or private messages.",
          highlights: [
            "Authentication and dynamic profiles",
            "Real-time services (Chat/Feeds)",
            "Mobile UX focused design"
          ]
        },
        {
          title: ".NET Developer",
          project: "Juanjo",
          company: "Archery & Lenguage School",
          period: "September 2024 – December 2024",
          images: [],
          link: "",
          description: "A booking system for archery courses: manages schedules, students per instructor, and automated time slots.",
          highlights: [
            "Implementation of Hexagonal Architecture",
            "Optimization of student registration",
            "Automation of administrative management"
          ]
        },
        {
          title: "Backend Developer",
          project: "Risk Management System",
          company: "Laboratorios La Cooper",
          period: "April 2024 – August 2024",
          images: [],
          link: "",
          description: "A risk manager for a factory: logs problems and deficiencies and routes safety improvement requests to the responsible safety officers.",
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
      locationValue: "Arequipa, Peru"
    },
    footer: {
      tagline: "Full Stack Developer • Project Manager",
      madeWith: "Made with"
    },
    github: {
      title: "GitHub",
      subtitle: "My open-source activity and projects",
      bio: "Passionate Full Stack developer, from Peru 🇵🇪",
      viewProfile: "View profile",
      fullProfile: "View my full GitHub profile",
      orgLabel: "Organization",
      statsLabels: {
        repos: "Repositories",
        contributions: "Contributions",
        contributionsNote: "last year"
      },
      aboutTitle: "About me",
      about: [
        "From Peru 🇵🇪",
        "Passionate about Full Stack development, AI and Cloud",
        "Always learning new frameworks, languages, and tools",
        "Gamer at heart & tech enthusiast"
      ],
      reposTitle: "Featured repositories",
      repos: [
        { name: "CodeLink", desc: "Social network for developers" },
        { name: "Dot-s", desc: "Web learning platform" },
        { name: "Gasteko-finance", desc: "" }
      ]
    }
  }
};