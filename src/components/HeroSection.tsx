import { Github, Linkedin, FileText, ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-card/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      </div>
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-orb w-[500px] h-[500px] bg-primary/10 top-[-100px] left-[-100px]" />
        <div className="floating-orb w-[400px] h-[400px] bg-purple-500/10 bottom-[-50px] right-[-50px]" style={{ animationDelay: '-4s' }} />
        <div className="floating-orb w-[300px] h-[300px] bg-cyan-500/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-2s' }} />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Image with Glow Ring */}
          <div className="relative mb-10 animate-scale-in">
            {/* Outer Glow Ring */}
            <div className="absolute inset-0 w-44 h-44 md:w-52 md:h-52 rounded-full animate-pulse-glow-slow" />
            
            {/* Profile Container */}
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-br from-primary via-cyan-400 to-purple-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-card">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-card to-purple-500/20 flex items-center justify-center">
                  <span className="text-6xl md:text-7xl font-bold gradient-text font-heading">JT</span>
                </div>
              </div>
            </div>

            {/* Verified Badge */}
            <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle">
              <Sparkles className="w-5 h-5 text-primary-foreground" />
            </div>

            {/* Floating Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 rounded-lg bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float">
              <span className="text-xs font-bold text-primary">FS</span>
            </div>
            <div className="absolute -top-2 -right-6 w-6 h-6 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 animate-float-delayed" />
          </div>

          {/* Name & Title */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight">
              <span className="text-foreground drop-shadow-lg">Turpo Arocutipa,</span>
              <br />
              <span className="gradient-text text-glow">Jamil Raúl</span>
            </h1>
            <div className="relative inline-block">
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium mb-10">
                Desarrollador Full Stack & 
                <span className="text-primary"> Gestor de Proyectos</span>
              </p>
              {/* Underline decoration */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up mt-4" style={{ animationDelay: '0.2s' }}>
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-primary to-cyan-400 text-primary-foreground hover:opacity-90 font-semibold px-8 py-6 text-lg rounded-xl overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_hsl(199_89%_48%/0.4)]"
            >
              <span className="relative z-10 flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                Ver CV
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-primary opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(199_89%_48%/0.2)]"
              asChild
            >
              <a href="https://www.linkedin.com/in/turpojamil/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-border/50 text-foreground hover:bg-secondary hover:border-primary/30 font-semibold px-8 py-6 text-lg rounded-xl backdrop-blur-sm transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/JTastico" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mt-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              { value: '2+', label: 'Años Exp.' },
              { value: '10+', label: 'Proyectos' },
              { value: '5+', label: 'Tecnologías' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <p className="text-3xl md:text-4xl font-bold gradient-text group-hover:text-glow transition-all">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground">Scroll</span>
        <ChevronDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;