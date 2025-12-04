import { Github, Linkedin, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative mb-8 animate-slide-up">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/30 animate-pulse-glow">
              <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/60 font-heading">JT</span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground text-xs">✓</span>
            </div>
          </div>

          {/* Name & Title */}
          <div className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-heading">
              <span className="text-foreground">Turpo Arocutipa,</span>
              <br />
              <span className="gradient-text">Jamil Raúl</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium mb-8">
              Desarrollador Full Stack & Gestor de Proyectos Tecnológicos
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-box font-semibold px-8"
            >
              <FileText className="w-5 h-5 mr-2" />
              Ver CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold px-8"
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
              className="border-border text-foreground hover:bg-secondary hover:border-primary/30 font-semibold px-8"
              asChild
            >
              <a href="https://github.com/JTastico" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
