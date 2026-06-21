import {
  SiReact, SiNextdotjs, SiVuedotjs, SiAngular, SiAstro, SiLaravel, SiTailwindcss,
  SiDjango, SiFastapi, SiSpringboot, SiNodedotjs, SiDotnet,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiSupabase,
  SiKotlin, SiFlutter, SiSwift,
  SiGithub, SiDocker, SiSwagger, SiPostman, SiFigma, SiAmazonwebservices
} from "react-icons/si";
import { Code, Users, GitBranch, ClipboardList, Target, Timer, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    gradient: "from-cyan-500 to-blue-500",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Astro", icon: SiAstro, color: "#FF5D01" },
      { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Vue 3", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" }
    ]
  },
  {
    title: "Backend",
    icon: Code,
    gradient: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
      { name: "Django", icon: SiDjango, color: "#092E20" },
      { name: "FastAPI", icon: SiFastapi, color: "#009688" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" }
    ]
  },
  {
    title: "Bases de Datos",
    icon: Code,
    gradient: "from-green-500 to-emerald-500",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" }
    ]
  },
  {
    title: "Herramientas",
    icon: Code,
    gradient: "from-blue-500 to-indigo-500",
    skills: [
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "Swagger", icon: SiSwagger, color: "#85EA2D" },
      { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" }
    ]
  },
  {
    title: "Metodologías",
    icon: Users,
    gradient: "from-teal-500 to-cyan-500",
    skills: [
      { name: "Scrum", icon: GitBranch, color: "#0EA5E9" },
      { name: "Sprints", icon: Timer, color: "#F43F5E" },
      { name: "Kanban", icon: ClipboardList, color: "#8B5CF6" },
      { name: "Gestión de Proyectos", icon: Target, color: "#10B981" },
      { name: "Requerimientos", icon: ClipboardList, color: "#F59E0B" }
    ]
  },
  {
    title: "Móvil",
    icon: Code,
    gradient: "from-orange-500 to-red-500",
    skills: [
      { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
      { name: "SwiftUI", icon: SiSwift, color: "#F05138" }
    ]
  },
  {
    title: "Multiplataforma",
    icon: Layers,
    gradient: "from-sky-500 to-indigo-500",
    skills: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-primary/20 -top-48 -right-48" />
        <div className="floating-orb w-64 h-64 bg-purple-500/10 bottom-0 -left-32" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center animate-pulse-glow">
              <Code className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Habilidades Técnicas</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Stack tecnológico y herramientas de desarrollo que domino
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card-glow p-6 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
              </div>
              
              {/* Skills Grid */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={i} 
                      className="icon-badge group/badge"
                      style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                    >
                      <IconComponent 
                        className="icon w-5 h-5 transition-all duration-300" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-sm font-medium text-foreground/90 group-hover/badge:text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;