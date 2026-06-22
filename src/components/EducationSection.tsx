import { GraduationCap, Award, Heart, Sparkles, BookOpen, Trophy } from "lucide-react";

const education = [
  {
    title: "Diseño y Desarrollo de Software",
    institution: "TECSUP",
    year: "2023",
    type: "education",
    icon: BookOpen,
    color: "from-blue-500 to-cyan-400"
  },
  {
    title: "Scrum Master",
    institution: "ScrumAcademy",
    year: "2024",
    type: "certification",
    icon: Trophy,
    color: "from-yellow-500 to-orange-400"
  }
];

const volunteering = [
  {
    title: "FLIT Arequipa",
    year: "2025",
    description: "Festival de Literatura y Tecnología"
  },
  {
    title: "Patrimonio Game Jam",
    institution: "Ministerio de Cultura",
    year: "2024",
    description: "Desarrollo de videojuegos educativos"
  }
];

const EducationSection = () => {
  return (
    <section className="page-section page-shell relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb w-72 h-72 bg-yellow-500/5 top-20 -right-36" />
        <div className="floating-orb w-64 h-64 bg-pink-500/5 bottom-20 -left-32" style={{ animationDelay: '4s' }} />
      </div>

      <div className="content-container-narrow relative z-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          {/* Education & Certifications */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center animate-bounce-subtle">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  <span className="gradient-text">Educación</span>
                </h2>
                <p className="text-sm text-muted-foreground">Formación académica y certificaciones</p>
              </div>
            </div>

            <div className="relative space-y-8 pl-8">
              {/* Timeline Line */}
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-cyan-400 to-purple-500 rounded-full" />
              
              {education.map((item, index) => (
                <div 
                  key={index} 
                  className="relative group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-5 top-4 w-4 h-4 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-background" />
                  </div>
                  
                  {/* Card */}
                  <div className="glass-card-glow p-5 group-hover:translate-x-2 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} p-0.5`}>
                        <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-foreground" />
                        </div>
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground text-lg mb-1 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      {item.type === "certification" ? (
                        <Award className="w-4 h-4 text-yellow-400" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-primary" />
                      )}
                      {item.institution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteering */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-pink-500/20 to-red-500/20 flex items-center justify-center animate-bounce-subtle">
                <Heart className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground font-heading">
                  <span className="gradient-text">Voluntariados</span>
                </h2>
                <p className="text-sm text-muted-foreground">Impacto en la comunidad</p>
              </div>
            </div>

            <div className="space-y-5">
              {volunteering.map((item, index) => (
                <div 
                  key={index} 
                  className="glass-card-glow group flex items-start gap-4 p-4 sm:gap-5 sm:p-5"
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-pink-400 group-hover:animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <Sparkles className="w-4 h-4 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    {item.institution && (
                      <p className="text-sm text-muted-foreground mb-1">{item.institution}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                    <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium bg-pink-500/10 text-pink-400 rounded-full border border-pink-500/20">
                      {item.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative Quote */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-purple-500/5 border border-border/30">
              <p className="text-sm text-muted-foreground italic text-center">
                "El conocimiento compartido es el que más crece"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
