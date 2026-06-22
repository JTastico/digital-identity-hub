import { Heart, Code, Sparkles } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="page-shell relative overflow-hidden border-t border-border/30 py-10 sm:py-12">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="content-container-narrow relative z-10">
        <div className="flex flex-col items-center gap-6">
          {/* Logo/Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-cyan-400 flex items-center justify-center">
              <span className="text-primary-foreground font-bold font-heading">JT</span>
            </div>
            <span className="text-lg font-bold text-foreground font-heading">Jamil Turpo</span>
          </div>

          {/* Tagline */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <Code className="w-4 h-4 text-primary" />
            <span>Full Stack Developer</span>
            <span className="text-primary">•</span>
            <span>Project Manager</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          {/* Divider */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />

          {/* Copyright */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-center text-sm text-muted-foreground">
            <span>© {currentYear} Jamil Turpo. Hecho con</span>
            <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
            <span>en Perú</span>
          </div>

          {/* Tech Stack */}
          <p className="text-xs text-muted-foreground/60">
            React • TailwindCSS • TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
