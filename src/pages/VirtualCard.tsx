import { useState, useEffect } from "react";
import { 
  Mail, Phone, Github, Linkedin, ExternalLink, Download,
  MessageCircle, RefreshCw, Crown, Lightbulb, Brain, Clock, Users, Sparkles, QrCode
} from "lucide-react";
import { 
  SiReact, SiNextdotjs, SiVuedotjs, SiLaravel, SiTailwindcss,
  SiDjango, SiSpringboot, SiNodedotjs, SiDotnet,
  SiMongodb, SiPostgresql, SiMysql, SiFirebase, SiSupabase,
  SiKotlin, SiFlutter, SiSwift,
  SiGithub, SiDocker, SiFigma
} from "react-icons/si";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";

const techSkills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Vue", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Spring", icon: SiSpringboot, color: "#6DB33F" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Swift", icon: SiSwift, color: "#F05138" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
];

const softSkills = [
  { name: "Comunicación", icon: MessageCircle, color: "from-blue-500 to-cyan-400" },
  { name: "Adaptabilidad", icon: RefreshCw, color: "from-green-500 to-emerald-400" },
  { name: "Liderazgo", icon: Crown, color: "from-yellow-500 to-orange-400" },
  { name: "Resolución", icon: Lightbulb, color: "from-purple-500 to-pink-400" },
  { name: "Pensamiento crítico", icon: Brain, color: "from-indigo-500 to-blue-400" },
  { name: "Gestión del tiempo", icon: Clock, color: "from-teal-500 to-cyan-400" },
  { name: "Colaboración", icon: Users, color: "from-pink-500 to-rose-400" },
];

const VirtualCard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const portfolioUrl = typeof window !== 'undefined' ? window.location.origin : '';

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden py-8 px-4">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.15),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.1),transparent_60%)]" />
        
        {/* Floating Orbs */}
        <div className="floating-orb w-72 h-72 bg-primary/20 -top-36 -right-36" />
        <div className="floating-orb w-64 h-64 bg-purple-500/15 bottom-20 -left-32" style={{ animationDelay: '2s' }} />
        <div className="floating-orb w-48 h-48 bg-cyan-500/10 top-1/2 right-1/4" style={{ animationDelay: '4s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto max-w-lg relative z-10">
        {/* Main Card */}
        <div 
          className={`glass-card-elevated rounded-3xl overflow-hidden transition-all duration-700 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Header with gradient */}
          <div className="relative h-32 bg-gradient-to-br from-primary/30 via-purple-500/20 to-cyan-500/20 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%)] bg-[length:200%_200%] animate-gradient-shift" />
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary via-purple-500 to-cyan-500 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity animate-pulse-glow" />
                
                {/* Avatar */}
                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-primary to-purple-500 p-1 group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-3xl font-bold text-foreground font-heading">
                    JT
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 pt-16 pb-6">
            {/* Name & Title */}
            <div className="text-center mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h1 className="text-2xl font-bold font-heading mb-1">
                <span className="gradient-text">Jamil Raúl</span>
              </h1>
              <h2 className="text-lg font-semibold text-foreground/90 mb-2">
                Turpo Arocutipa
              </h2>
              <p className="text-sm text-primary font-medium tracking-wide">
                Desarrollador Full Stack & Gestor de Proyectos
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 mb-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <a 
                href="mailto:jamilturpoarocutipa@gmail.com" 
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors truncate">
                  jamilturpoarocutipa@gmail.com
                </span>
              </a>
              
              <a 
                href="tel:+51991010001" 
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                  +51 991 010 001
                </span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-3 mb-6 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <a 
                href="https://github.com/JTastico" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-500 hover:scale-[1.02] transition-all group"
              >
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-white">GitHub</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/turpojamil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#0077B5] to-[#0066A2] border border-[#0088CC] hover:border-[#00AAEE] hover:scale-[1.02] transition-all group"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-white">LinkedIn</span>
                <ExternalLink className="w-3 h-3 text-blue-200" />
              </a>
            </div>

            {/* Professional Summary */}
            <div className="mb-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="glass-card p-4 rounded-xl">
                <p className="text-sm text-foreground/80 leading-relaxed text-center">
                  Profesional en <span className="text-primary font-medium">Diseño y Desarrollo de Software</span> con experiencia en aplicaciones web, sistemas empresariales y desarrollo móvil multiplataforma. Especializado en gestión de proyectos con metodologías ágiles.
                </p>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mb-6 animate-fade-in" style={{ animationDelay: '600ms' }}>
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground">Habilidades Blandas</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-card/50 border border-border/50 hover:border-primary/30 hover:scale-105 transition-all cursor-default group"
                    style={{ animationDelay: `${600 + index * 50}ms` }}
                  >
                    <div className={`w-5 h-5 rounded-md bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <skill.icon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs font-medium text-foreground/80 group-hover:text-foreground">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Skills */}
            <div className="mb-6 animate-fade-in" style={{ animationDelay: '700ms' }}>
              <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <div className="w-4 h-4 rounded bg-primary/20 flex items-center justify-center">
                  <span className="text-[10px]">💻</span>
                </div>
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-card/30 border border-border/30 hover:border-primary/30 hover:bg-primary/5 hover:scale-105 transition-all cursor-default group"
                    >
                      <IconComponent 
                        className="w-3.5 h-3.5 group-hover:scale-110 transition-transform" 
                        style={{ color: skill.color }}
                      />
                      <span className="text-[11px] font-medium text-foreground/70 group-hover:text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* QR Code Section */}
            <div className="animate-fade-in" style={{ animationDelay: '800ms' }}>
              <div className="glass-card-glow p-4 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <QrCode className="w-4 h-4 text-primary animate-pulse-glow" />
                      <span className="text-sm font-semibold text-foreground">Portafolio Completo</span>
                    </div>
                    <p className="text-xs text-muted-foreground mb-3">
                      Escanea para ver mi portafolio digital con experiencia y proyectos detallados.
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-xs border-primary/30 hover:bg-primary/10 hover:border-primary"
                      onClick={() => window.open(portfolioUrl, '_blank')}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Ver Portafolio
                    </Button>
                  </div>
                  
                  {/* QR Code */}
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary/40 to-purple-500/40 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative bg-white p-2 rounded-xl group-hover:scale-105 transition-transform">
                      <QRCodeSVG
                        value={portfolioUrl}
                        size={80}
                        level="H"
                        bgColor="#ffffff"
                        fgColor="#0f172a"
                        includeMargin={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-border/30 bg-card/30">
            <p className="text-center text-xs text-muted-foreground">
              <span className="gradient-text font-medium">Turpo Arocutipa, Jamil Raúl</span> • Tarjeta Virtual 2025
            </p>
          </div>
        </div>

        {/* Back to Portfolio Link */}
        <div className="text-center mt-6 animate-fade-in" style={{ animationDelay: '900ms' }}>
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <span>← Volver al portafolio completo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VirtualCard;
