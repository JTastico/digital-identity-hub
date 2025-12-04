import { User, Code, Briefcase } from "lucide-react";

const ProfileSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="glass-card p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
              <User className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-title mb-0">Perfil Profesional</h2>
          </div>
          
          <div className="relative pl-6 border-l-2 border-primary/30">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Profesional en <span className="text-foreground font-medium">Diseño y Desarrollo de Software</span> con experiencia en aplicaciones web, sistemas empresariales y desarrollo móvil multiplataforma (Android e iOS). Especializado en <span className="text-primary font-medium">desarrollo Full Stack</span> y <span className="text-primary font-medium">gestión de proyectos tecnológicos</span>. He liderado proyectos completos desde la planificación hasta la entrega, asegurando calidad, escalabilidad y cumplimiento de plazos. También cuento con experiencia coordinando equipos, gestionando requerimientos y aplicando metodologías ágiles como <span className="text-foreground font-medium">Scrum y Kanban</span>.
            </p>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border/50">
            <div className="text-center">
              <Code className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground font-heading">Full Stack</p>
              <p className="text-sm text-muted-foreground">Desarrollo</p>
            </div>
            <div className="text-center">
              <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground font-heading">Líder</p>
              <p className="text-sm text-muted-foreground">Proyectos</p>
            </div>
            <div className="text-center">
              <User className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold text-foreground font-heading">Ágil</p>
              <p className="text-sm text-muted-foreground">Metodologías</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
