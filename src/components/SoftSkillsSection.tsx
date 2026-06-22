import { Globe, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const SoftSkillsSection = () => {
  const { t, language } = useLanguage();
  
  // Colores definidos localmente para mapear con los items del contexto
  const skillColors = [
    "from-blue-500 to-cyan-400",
    "from-green-500 to-emerald-400",
    "from-yellow-500 to-orange-400",
    "from-purple-500 to-pink-400",
    "from-red-500 to-rose-400",
    "from-indigo-500 to-blue-400",
    "from-teal-500 to-cyan-400",
    "from-amber-500 to-yellow-400",
    "from-pink-500 to-rose-400",
  ];

  const skills = t.softSkills.items;

  // Textos para la sección de idiomas (no estaban en el archivo de traducciones principal)
  const langTexts = {
    ES: {
      title: "Idiomas",
      langName: "Inglés",
      level: "Intermedio",
      badge: "Comunicación Global"
    },
    EN: {
      title: "Languages",
      langName: "English",
      level: "Intermediate",
      badge: "Global Communication"
    }
  };

  const currentLang = langTexts[language];

  return (
    <section className="page-section page-shell relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="content-container-narrow relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center animate-bounce-subtle">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">{t.softSkills.title}</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            {t.softSkills.subtitle}
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const color = skillColors[index] || "from-gray-500 to-slate-400"; // Fallback color

            return (
              <div 
                key={index}
                className="soft-skill-card group"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Icon Container */}
                <div className={`icon-wrapper bg-gradient-to-br ${color} p-0.5`}>
                  <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                    <Icon className="w-7 h-7 text-foreground group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Skill Name */}
                <p className="text-sm font-semibold text-foreground text-center leading-tight group-hover:text-primary transition-colors">
                  {skill.name}
                </p>

                {/* Decorative Glow */}
                <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${color} rounded-full opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Languages Section */}
        <div className="flex justify-center animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="glass-card-elevated group flex w-full max-w-2xl flex-col items-center justify-center gap-4 px-5 py-5 text-center transition-transform duration-300 hover:scale-105 sm:gap-6 sm:px-8 sm:py-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:animate-bounce-subtle">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">{currentLang.title}</p>
              <div className="mt-1 flex items-center justify-center gap-3">
                <span className="font-bold text-foreground text-lg">{currentLang.langName}</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-primary font-semibold">{currentLang.level}</span>
              </div>
            </div>
            
            {/* Language Badges */}
            <div className="flex justify-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">{currentLang.badge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
