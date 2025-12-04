import { User, Code, Briefcase, Zap, Target, Rocket } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb w-64 h-64 bg-primary/5 -top-32 right-0" />
        <div className="floating-orb w-48 h-48 bg-purple-500/5 bottom-0 left-20" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="glass-card-elevated p-8 md:p-12 animate-slide-up">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-cyan-500/20 flex items-center justify-center animate-pulse-glow">
              <User className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="section-title mb-0">
                <span className="gradient-text">Perfil Profesional</span>
              </h2>
              <p className="text-sm text-muted-foreground">Sobre mí</p>
            </div>
          </div>
          
          {/* Profile Text */}
          <div className="relative pl-6 border-l-2 border-gradient-to-b from-primary to-purple-500">
            <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-primary via-cyan-400 to-purple-500 -ml-0.5 rounded-full" />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Profesional en <span className="text-foreground font-semibold">Diseño y Desarrollo de Software</span> con experiencia en aplicaciones web, sistemas empresariales y desarrollo móvil multiplataforma (Android e iOS). Especializado en <span className="text-primary font-semibold">desarrollo Full Stack</span> y <span className="text-primary font-semibold">gestión de proyectos tecnológicos</span>. He liderado proyectos completos desde la planificación hasta la entrega, asegurando calidad, escalabilidad y cumplimiento de plazos. También cuento con experiencia coordinando equipos, gestionando requerimientos y aplicando metodologías ágiles como <span className="text-foreground font-semibold">Scrum y Kanban</span>.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-10 border-t border-border/30">
            {[
              { icon: Code, title: "Full Stack", subtitle: "Desarrollo", color: "from-cyan-500 to-blue-500" },
              { icon: Briefcase, title: "Líder", subtitle: "Proyectos", color: "from-purple-500 to-pink-500" },
              { icon: Target, title: "Ágil", subtitle: "Metodologías", color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-2xl bg-card flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>
                <p className="text-2xl font-bold text-foreground font-heading group-hover:gradient-text transition-all">{stat.title}</p>
                <p className="text-sm text-muted-foreground">{stat.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-6 right-6 opacity-20">
            <Rocket className="w-20 h-20 text-primary animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;