import { 
  MessageCircle, RefreshCw, Crown, Lightbulb, Calendar, Globe,
  Brain, Clock, Scale, Users, Sparkles, Heart
} from "lucide-react";

const softSkills = [
  { name: "Comunicación efectiva", icon: MessageCircle, color: "from-blue-500 to-cyan-400" },
  { name: "Adaptabilidad", icon: RefreshCw, color: "from-green-500 to-emerald-400" },
  { name: "Liderazgo", icon: Crown, color: "from-yellow-500 to-orange-400" },
  { name: "Resolución de problemas", icon: Lightbulb, color: "from-purple-500 to-pink-400" },
  { name: "Organización", icon: Calendar, color: "from-red-500 to-rose-400" },
  { name: "Pensamiento crítico", icon: Brain, color: "from-indigo-500 to-blue-400" },
  { name: "Gestión del tiempo", icon: Clock, color: "from-teal-500 to-cyan-400" },
  { name: "Toma de decisiones", icon: Scale, color: "from-amber-500 to-yellow-400" },
  { name: "Trabajo colaborativo", icon: Users, color: "from-pink-500 to-rose-400" },
];

const SoftSkillsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center animate-bounce-subtle">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h2 className="section-title">
            <span className="gradient-text">Habilidades Blandas</span>
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Competencias interpersonales y de gestión que potencian mi trabajo
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">
          {softSkills.map((skill, index) => (
            <div 
              key={index}
              className="soft-skill-card group"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              {/* Icon Container */}
              <div className={`icon-wrapper bg-gradient-to-br ${skill.color} p-0.5`}>
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <skill.icon className="w-7 h-7 text-foreground group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              
              {/* Skill Name */}
              <p className="text-sm font-semibold text-foreground text-center leading-tight group-hover:text-primary transition-colors">
                {skill.name}
              </p>

              {/* Decorative Glow */}
              <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-60 blur-sm transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Languages Section */}
        <div className="flex justify-center animate-slide-up" style={{ animationDelay: '400ms' }}>
          <div className="glass-card-elevated px-8 py-6 flex items-center gap-6 group hover:scale-105 transition-transform duration-300">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center group-hover:animate-bounce-subtle">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm text-muted-foreground mb-1">Idiomas</p>
              <div className="flex items-center gap-3">
                <span className="font-bold text-foreground text-lg">Español</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-primary font-semibold">Nativo</span>
              </div>
              <div className="flex items-center gap-3 mt-1">
                <span className="font-bold text-foreground text-lg">Inglés</span>
                <span className="text-muted-foreground">—</span>
                <span className="text-primary font-semibold">Intermedio</span>
              </div>
            </div>
            
            {/* Language Badges */}
            <div className="hidden md:flex flex-col gap-2 ml-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary/10 border border-primary/20">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium text-foreground">Comunicación Global</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;