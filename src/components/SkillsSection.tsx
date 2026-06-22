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
      { name: "Next.js", icon: SiNextdotjs, color: "currentColor" },
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
      { name: "GitHub", icon: SiGithub, color: "currentColor" },
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
    <section className="page-section page-shell relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb w-96 h-96 bg-primary/20 -top-48 -right-48" />
        <div className="floating-orb w-64 h-64 bg-purple-500/10 bottom-0 -left-32" style={{ animationDelay: '2s' }} />
      </div>

      <div className="content-container relative z-10">
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

        <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card-glow group p-5 sm:p-6"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} p-0.5 transition-transform duration-300 group-hover:scale-110`}>
                  <div className="flex h-full w-full items-center justify-center rounded-xl bg-card">
                    <category.icon className="h-5 w-5 text-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {category.title}
                  </h3>
                </div>
              </div>

              <div className="rounded-2xl border border-border/50 bg-card/20 p-4 sm:p-5">
                <p className="mb-4 text-left text-sm font-semibold uppercase tracking-wide text-foreground/80">
                  {category.title}
                </p>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map((skill, i) => {
                    const IconComponent = skill.icon;

                    return (
                      <div 
                        key={i} 
                        className="group/badge relative flex aspect-square min-h-[110px] flex-col items-center justify-center gap-4 rounded-2xl border border-border/50 bg-background/40 p-3 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-primary/5"
                        style={{ animationDelay: `${(index * 100) + (i * 50)}ms` }}
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${category.gradient} p-0.5`}>
                          <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-card">
                            <IconComponent 
                              className="h-5 w-5 transition-all duration-300 group-hover/badge:scale-110" 
                              style={{ color: skill.color }}
                            />
                          </div>
                        </div>
                        <span className="text-sm font-medium leading-tight text-foreground/90 group-hover/badge:text-foreground">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
