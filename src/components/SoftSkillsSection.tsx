import { MessageCircle, RefreshCw, Crown, Lightbulb, Calendar, Globe } from "lucide-react";

const softSkills = [
  { name: "Comunicación efectiva", icon: MessageCircle },
  { name: "Adaptabilidad", icon: RefreshCw },
  { name: "Liderazgo", icon: Crown },
  { name: "Resolución de problemas", icon: Lightbulb },
  { name: "Organización", icon: Calendar }
];

const SoftSkillsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Habilidades Blandas</h2>
          <p className="section-subtitle">Competencias interpersonales y de gestión</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {softSkills.map((skill, index) => (
            <div 
              key={index}
              className="glass-card p-6 flex flex-col items-center gap-3 hover:border-primary/30 transition-all duration-300 group min-w-[140px]"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground text-center">{skill.name}</p>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 glass-card px-6 py-4">
            <Globe className="w-6 h-6 text-primary" />
            <div className="text-left">
              <p className="text-sm text-muted-foreground">Idiomas</p>
              <p className="font-medium text-foreground">Inglés — <span className="text-primary">Intermedio</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;
