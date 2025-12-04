import { Code, Database, Smartphone, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "Vue 3", "Blade", "TailwindCSS"]
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Laravel", "Django", "Spring Boot", "Node.js", "ASP.NET Core"]
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "DynamoDB"]
  },
  {
    title: "Móvil",
    icon: Smartphone,
    skills: ["Kotlin", "Flutter", "SwiftUI", "Firebase"]
  },
  {
    title: "Herramientas",
    icon: Wrench,
    skills: ["GitHub", "Docker", "Swagger", "Postman", "Figma", "AWS"]
  },
  {
    title: "Metodologías",
    icon: Users,
    skills: ["Scrum", "Kanban", "Gestión de Proyectos", "Levantamiento de Requerimientos"]
  }
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-8 h-8 text-primary" />
            <h2 className="section-title mb-0">Habilidades Técnicas</h2>
          </div>
          <p className="section-subtitle">Stack tecnológico y herramientas de desarrollo</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground font-heading">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span key={i} className="tech-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
