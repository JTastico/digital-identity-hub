import {
  MessageCircle, RefreshCw, Crown, Lightbulb, Calendar,
  Brain, Clock, Scale, Users
} from "lucide-react";

/*
  Convención de cada proyecto (experience.items):
  - description: qué ES el producto.
  - highlights:  qué hice YO / alcance de mi trabajo.
  - tech:        etiquetas de tecnología que se muestran en la tarjeta.
  - period / link / images: opcionales (cadena o lista vacía = no se muestra).
*/

export const translations = {
  ES: {
    hero: {
      role: "Desarrollador Full Stack y Gestor de Proyectos",
      cta: "Ver Portafolio",
      linkedIn: "LinkedIn",
      github: "GitHub"
    },
    landing: {
      greeting: "Jamil Raúl",
      role: "Desarrollador Full Stack y Gestor de Proyectos",
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
      description: "Desarrollador Full Stack y gestor de proyectos con formación en Diseño y Desarrollo de Software. Construyo aplicaciones web, sistemas empresariales y apps móviles, del backend a la interfaz, con arquitectura hexagonal y código limpio. También lidero proyectos con Scrum y Kanban para entregar con calidad y a tiempo.",
      stats: {
        fullstack: { title: "Full Stack", subtitle: "Desarrollo" },
        leader: { title: "Líder", subtitle: "Proyectos" },
        agile: { title: "Ágil", subtitle: "Metodologías" }
      }
    },
    experience: {
      title: "Trayectoria Profesional",
      subtitle: "Proyectos que he diseñado, desarrollado o liderado",
      detailsSoon: "Detalles próximamente",
      visitProject: "Visitar proyecto",
      items: [
        {
          title: "Desarrollador Full Stack",
          project: "Encuentro Anual PIU",
          company: "Aplicación web",
          period: "",
          images: [],
          link: "https://jamilturpo.entiendepiu.com/",
          tech: ["Hexagonal"],
          description: "Plataforma del Encuentro Anual PIU, desarrollada de principio a fin: del diseño de la interfaz al backend.",
          highlights: [
            "Diseño de la interfaz y la experiencia de usuario",
            "Optimización de componentes de frontend",
            "Backend completo con arquitectura hexagonal"
          ]
        },
        {
          title: "Desarrollador Full Stack",
          project: "Zefiron",
          company: "NAVIA",
          period: "Enero 2026 – Junio 2026",
          images: ["/zefiron/welcome.webp"],
          link: "https://zefiron.com/es",
          tech: ["Flutter", "FastAPI", "Hexagonal"],
          description: "Plataforma inmobiliaria impulsada por IA que reúne CRM, gestión de proyectos, pipeline de ventas y cobranzas para inmobiliarias.",
          highlights: [
            "Aplicación multiplataforma en Flutter con arquitectura hexagonal",
            "Backend en FastAPI con arquitectura hexagonal",
            "6 meses de desarrollo continuo con código limpio y escalable"
          ]
        },
        {
          title: "Desarrollador Frontend",
          project: "Alianza Valorem",
          company: "Landing Page",
          period: "Febrero 2026 – Marzo 2026",
          images: ["/alianzavalorem/welcome.webp", "/alianzavalorem/logo.webp"],
          link: "https://alianzavalorem.com/",
          tech: ["Astro", "TailwindCSS"],
          description: "Landing page de Alianza Valorem, diseñada y desarrollada desde cero con Astro: moderna, veloz y optimizada para SEO.",
          highlights: [
            "Diseño de la interfaz y desarrollo completo del sitio",
            "Sitio responsive y de carga veloz",
            "SEO y rendimiento optimizados con Astro"
          ]
        },
        {
          title: "Líder de Proyecto",
          project: "Rueda de Problemas",
          company: "OCEAN S.R.L",
          period: "Octubre 2025 – Noviembre 2025",
          images: ["/ruedaproblemas/welcome.webp", "/ruedaproblemas/logo.svg"],
          link: "https://ruedadeproblemas.pe/",
          tech: ["Gestión", "Análisis", "Scrum"],
          description: "Plataforma que conecta problemas reales de los sectores productivo, gubernamental y social con capacidades de investigación e innovación, para generar proyectos I+D+i+e con potencial de financiamiento.",
          highlights: [
            "Asignación de Fondos de Canon",
            "Planificación, requerimientos y reuniones con clientes",
            "Gestión de sprints, revisiones y validación de entregables"
          ]
        },
        {
          title: "Desarrollador Android",
          project: "SOS en Señas",
          company: "App de Accesibilidad",
          period: "Julio 2025 – Septiembre 2025",
          images: ["/sosensenas/movil.webp", "/sosensenas/logo.svg"],
          link: "https://sosenseñas.com",
          tech: ["Android", "Kotlin", "ML"],
          description: "Aplicación Android que reconoce lenguaje de señas para facilitar la comunicación de mujeres embarazadas sordosignantes.",
          highlights: [
            "Desarrollo nativo en Android con Kotlin",
            "Reconocimiento de lenguaje de señas con ML",
            "Enfoque en accesibilidad e inclusión"
          ]
        },
        {
          title: "Líder de Proyecto",
          project: "Dot's Go - Plataforma Web de Aprendizaje",
          company: "Proyecto Académico",
          period: "Junio 2025 – Enero 2026",
          images: ["/dots/dashboard.webp", "/dots/logo.webp"],
          link: "https://devdotfrontend.onrender.com/",
          tech: ["React", "Node.js", "MongoDB", "Scrum"],
          description: "Plataforma web de aprendizaje para reforzar el reconocimiento de los rombos NFPA 704, desarrollada en equipo bajo Scrum.",
          highlights: [
            "Coordinación de un equipo multidisciplinario y reparto de tareas",
            "Planificación de sprints, prioridades y seguimiento del avance",
            "Validación funcional y alineación de entregables"
          ]
        },
        {
          title: "Desarrollador Full Stack",
          project: "CodeLink",
          company: "Red Social para Desarrolladores",
          period: "Junio 2025 – Agosto 2025",
          images: ["/codelink/content.webp", "/codelink/login.webp"],
          link: "",
          tech: ["iOS", "SwiftUI", "Firebase"],
          description: "Red social para programadores: permite pedir ayuda a cualquier persona del mundo, con publicaciones abiertas o mensajes privados.",
          highlights: [
            "Autenticación y perfiles dinámicos",
            "Chat y feed en tiempo real",
            "Diseño centrado en la experiencia móvil"
          ]
        },
        {
          title: "Desarrollador .NET",
          project: "Juanjo",
          company: "Archery & Language School",
          period: "Septiembre 2024 – Diciembre 2024",
          images: [],
          link: "",
          tech: [".NET", "Clean Arch", "C#", "Swagger"],
          description: "Sistema de reservas de cursos de arquería: gestiona horarios, la cantidad de alumnos por docente y la automatización de turnos.",
          highlights: [
            "Implementación de arquitectura hexagonal",
            "Optimización del registro de alumnos",
            "Automatización de la gestión administrativa"
          ]
        },
        {
          title: "Desarrollador Backend",
          project: "Sistema de Gestión de Riesgos",
          company: "Laboratorios La Cooper",
          period: "Abril 2024 – Agosto 2024",
          images: [],
          link: "",
          tech: ["PHP", "Laravel", "MySQL"],
          description: "Sistema para una fábrica que registra problemas y deficiencias, y hace llegar los requerimientos de mejora en seguridad a los responsables.",
          highlights: [
            "Sistema integral de gestión de riesgos",
            "Flujos de validación y seguridad de datos",
            "Coordinación con auditores internos y externos"
          ]
        }
      ]
    },
    skills: {
      title: "Habilidades Técnicas",
      subtitle: "Tecnologías y herramientas con las que construyo productos, del frontend al backend",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Bases de Datos",
        tools: "Herramientas",
        methodologies: "Metodologías y Arquitectura",
        mobile: "Móvil y Multiplataforma"
      },
      methods: {
        scrum: "Scrum",
        sprints: "Sprints",
        kanban: "Kanban",
        hexagonal: "Hexagonal",
        projectManagement: "Gestión de Proyectos",
        requirements: "Requisitos"
      }
    },
    softSkills: {
      title: "Habilidades Blandas",
      subtitle: "Cómo trabajo con equipos y clientes",
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
      subtitle: "Formación técnica y certificación en Scrum",
      items: [
        { title: "Diseño y Desarrollo de Software", institution: "TECSUP", type: "Carrera Técnica", year: "2023" },
        { title: "Scrum Master", institution: "ScrumAcademy", type: "Certificación", year: "2024" }
      ],
      volunteeringTitle: "Voluntariados",
      volunteeringSubtitle: "Tecnología y cultura al servicio de la comunidad",
      volunteeringItems: [
        { title: "FLIT Arequipa", institution: "", description: "Festival de Literatura y Tecnología", year: "2025" },
        { title: "Patrimonio Game Jam", institution: "Ministerio de Cultura", description: "Desarrollo de videojuegos educativos", year: "2024" }
      ]
    },
    contact: {
      title: "Contacto",
      subtitle: "¿Tienes un proyecto en mente? Escríbeme.",
      email: "Email",
      phone: "Teléfono",
      location: "Ubicación",
      locationValue: "Arequipa, Perú"
    },
    footer: {
      tagline: "Desarrollador Full Stack · Gestor de Proyectos"
    },
    github: {
      title: "GitHub",
      subtitle: "Mi actividad y repositorios públicos",
      bio: "Construyo software con arquitectura hexagonal y código limpio.",
      viewProfile: "Ver perfil",
      orgLabel: "Organización",
      statsLabels: {
        repos: "Repositorios",
        contributions: "Contribuciones",
        contributionsNote: "último año"
      },
      aboutTitle: "Sobre mí",
      about: [
        "Arequipa, Perú 🇵🇪",
        "Full Stack con interés en IA y la nube",
        "En constante aprendizaje de frameworks, lenguajes y herramientas",
        "Gamer de corazón y entusiasta de la tecnología"
      ],
      reposTitle: "Repositorios destacados",
      repos: [
        { name: "CodeLink", desc: "Red social para desarrolladores" },
        { name: "Dot-s", desc: "Plataforma web de aprendizaje" },
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
      description: "Full Stack developer and project manager with a background in Software Design and Development. I build web applications, enterprise systems and mobile apps, from backend to interface, using hexagonal architecture and clean code. I also lead projects with Scrum and Kanban to deliver quality work on time.",
      stats: {
        fullstack: { title: "Full Stack", subtitle: "Development" },
        leader: { title: "Leader", subtitle: "Projects" },
        agile: { title: "Agile", subtitle: "Methodologies" }
      }
    },
    experience: {
      title: "Professional Experience",
      subtitle: "Projects I have designed, built or led",
      detailsSoon: "Details coming soon",
      visitProject: "Visit project",
      items: [
        {
          title: "Full Stack Developer",
          project: "Encuentro Anual PIU",
          company: "Web application",
          period: "",
          images: [],
          link: "https://jamilturpo.entiendepiu.com/",
          tech: ["Hexagonal"],
          description: "Platform for the Encuentro Anual PIU, built end to end: from interface design to the backend.",
          highlights: [
            "Interface and user experience design",
            "Frontend component optimization",
            "Complete backend using hexagonal architecture"
          ]
        },
        {
          title: "Full Stack Developer",
          project: "Zefiron",
          company: "NAVIA",
          period: "January 2026 – June 2026",
          images: ["/zefiron/welcome.webp"],
          link: "https://zefiron.com/es",
          tech: ["Flutter", "FastAPI", "Hexagonal"],
          description: "AI-powered real estate platform that brings together CRM, project management, sales pipeline and collections for real estate companies.",
          highlights: [
            "Cross-platform app in Flutter with hexagonal architecture",
            "FastAPI backend with hexagonal architecture",
            "6 months of continuous development with clean, scalable code"
          ]
        },
        {
          title: "Frontend Developer",
          project: "Alianza Valorem",
          company: "Landing Page",
          period: "February 2026 – March 2026",
          images: ["/alianzavalorem/welcome.webp", "/alianzavalorem/logo.webp"],
          link: "https://alianzavalorem.com/",
          tech: ["Astro", "TailwindCSS"],
          description: "Alianza Valorem landing page, designed and built from scratch with Astro: modern, fast and SEO-optimized.",
          highlights: [
            "Interface design and complete site development",
            "Responsive, fast-loading site",
            "SEO and performance optimized with Astro"
          ]
        },
        {
          title: "Project Lead",
          project: "Problem Wheel",
          company: "OCEAN S.R.L",
          period: "October 2025 – November 2025",
          images: ["/ruedaproblemas/welcome.webp", "/ruedaproblemas/logo.svg"],
          link: "https://ruedadeproblemas.pe/",
          tech: ["Management", "Analysis", "Scrum"],
          description: "A platform connecting real problems from the productive, government and social sectors with research and innovation capabilities, to generate R&D&I projects with funding potential.",
          highlights: [
            "Canon Fund allocation",
            "Planning, requirements and client meetings",
            "Sprint and review management, and validation of deliverables"
          ]
        },
        {
          title: "Android Developer",
          project: "SOS en Señas",
          company: "Accessibility App",
          period: "July 2025 – September 2025",
          images: ["/sosensenas/movil.webp", "/sosensenas/logo.svg"],
          link: "https://sosenseñas.com",
          tech: ["Android", "Kotlin", "ML"],
          description: "Android app that recognizes sign language to support communication for deaf-signing pregnant women.",
          highlights: [
            "Native Android development with Kotlin",
            "Sign-language recognition with ML",
            "Focus on accessibility and inclusion"
          ]
        },
        {
          title: "Project Lead",
          project: "Dot's Go - Web Learning Platform",
          company: "Academic Project",
          period: "June 2025 – January 2026",
          images: ["/dots/dashboard.webp", "/dots/logo.webp"],
          link: "https://devdotfrontend.onrender.com/",
          tech: ["React", "Node.js", "MongoDB", "Scrum"],
          description: "A web learning platform to strengthen recognition of NFPA 704 diamonds, built by a team working with Scrum.",
          highlights: [
            "Coordination of a multidisciplinary team and task allocation",
            "Sprint planning, priorities and progress tracking",
            "Functional validation and alignment of deliverables"
          ]
        },
        {
          title: "Full Stack Developer",
          project: "CodeLink",
          company: "Social Network for Developers",
          period: "June 2025 – August 2025",
          images: ["/codelink/content.webp", "/codelink/login.webp"],
          link: "",
          tech: ["iOS", "SwiftUI", "Firebase"],
          description: "A social network for programmers: ask anyone in the world for coding help, through public posts or private messages.",
          highlights: [
            "Authentication and dynamic profiles",
            "Real-time chat and feed",
            "Design focused on the mobile experience"
          ]
        },
        {
          title: ".NET Developer",
          project: "Juanjo",
          company: "Archery & Language School",
          period: "September 2024 – December 2024",
          images: [],
          link: "",
          tech: [".NET", "Clean Arch", "C#", "Swagger"],
          description: "A booking system for archery courses: manages schedules, the number of students per instructor and automated time slots.",
          highlights: [
            "Implementation of hexagonal architecture",
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
          tech: ["PHP", "Laravel", "MySQL"],
          description: "A system for a factory that logs problems and deficiencies, and routes safety improvement requests to the people responsible.",
          highlights: [
            "Comprehensive risk management system",
            "Data validation and security flows",
            "Coordination with internal and external auditors"
          ]
        }
      ]
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies and tools I use to build products, from frontend to backend",
      categories: {
        frontend: "Frontend",
        backend: "Backend",
        database: "Databases",
        tools: "Tools",
        methodologies: "Methodologies & Architecture",
        mobile: "Mobile & Cross-platform"
      },
      methods: {
        scrum: "Scrum",
        sprints: "Sprints",
        kanban: "Kanban",
        hexagonal: "Hexagonal",
        projectManagement: "Project Management",
        requirements: "Requirements"
      }
    },
    softSkills: {
      title: "Soft Skills",
      subtitle: "How I work with teams and clients",
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
      subtitle: "Technical education and Scrum certification",
      items: [
        { title: "Software Design and Development", institution: "TECSUP", type: "Technical Degree", year: "2023" },
        { title: "Scrum Master", institution: "ScrumAcademy", type: "Certification", year: "2024" }
      ],
      volunteeringTitle: "Volunteering",
      volunteeringSubtitle: "Technology and culture serving the community",
      volunteeringItems: [
        { title: "FLIT Arequipa", institution: "", description: "Literature and Technology Festival", year: "2025" },
        { title: "Heritage Game Jam", institution: "Ministry of Culture", description: "Educational video game development", year: "2024" }
      ]
    },
    contact: {
      title: "Contact",
      subtitle: "Have a project in mind? Get in touch.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationValue: "Arequipa, Peru"
    },
    footer: {
      tagline: "Full Stack Developer · Project Manager"
    },
    github: {
      title: "GitHub",
      subtitle: "My activity and public repositories",
      bio: "I build software with hexagonal architecture and clean code.",
      viewProfile: "View profile",
      orgLabel: "Organization",
      statsLabels: {
        repos: "Repositories",
        contributions: "Contributions",
        contributionsNote: "last year"
      },
      aboutTitle: "About me",
      about: [
        "Based in Arequipa, Peru 🇵🇪",
        "Full Stack developer interested in AI and the cloud",
        "Always learning new frameworks, languages and tools",
        "Gamer at heart and tech enthusiast"
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
