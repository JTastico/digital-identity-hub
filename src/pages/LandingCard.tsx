import { useState, useEffect } from "react";
import { Github, Linkedin, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import profileImage from "@/assets/jamil-profile.png";

const LandingCard = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-purple-500/10" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,hsl(var(--primary)/0.2),transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,hsl(var(--accent)/0.15),transparent_50%)]" />
        
        {/* Floating Orbs */}
        <div className="floating-orb w-96 h-96 bg-primary/15 -top-48 -left-48" />
        <div className="floating-orb w-80 h-80 bg-purple-500/10 -bottom-40 -right-40" style={{ animationDelay: '3s' }} />
        <div className="floating-orb w-64 h-64 bg-cyan-500/10 top-1/3 right-1/4" style={{ animationDelay: '5s' }} />
        <div className="floating-orb w-48 h-48 bg-pink-500/10 bottom-1/3 left-1/4" style={{ animationDelay: '7s' }} />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]" />
        
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(var(--primary)/0.1),transparent_70%)]" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        {/* Main Card */}
        <div 
          className={`glass-card-elevated rounded-3xl overflow-hidden transition-all duration-1000 transform ${
            isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          {/* Decorative top gradient */}
          <div className="relative h-36 bg-gradient-to-br from-primary/40 via-purple-500/30 to-cyan-500/30 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:300%_300%] animate-gradient-shift" />
            
            {/* Sparkles decoration */}
            <div className="absolute top-4 right-4 animate-pulse-glow">
              <Sparkles className="w-6 h-6 text-white/60" />
            </div>
            <div className="absolute top-8 left-6 animate-pulse-glow" style={{ animationDelay: '1s' }}>
              <Sparkles className="w-4 h-4 text-white/40" />
            </div>
            
            {/* Profile Image */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
              <div className="relative group">
                {/* Multi-layer glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary via-purple-500 to-cyan-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 animate-pulse-glow" />
                <div className="absolute -inset-2 bg-gradient-to-br from-primary to-cyan-400 rounded-full blur-md opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                
                {/* Avatar Container */}
                <div className="relative w-36 h-36 rounded-full bg-gradient-to-br from-primary via-purple-500 to-cyan-400 p-1.5 group-hover:scale-105 transition-transform duration-500 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-card">
                    <img 
                      src={profileImage} 
                      alt="Jamil Raúl Turpo Arocutipa"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                {/* Verified Badge */}
                <div className="absolute -bottom-1 -right-1 w-10 h-10 bg-gradient-to-br from-primary to-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-bounce-subtle border-4 border-background">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 pt-24 pb-8">
            {/* Name & Title */}
            <div className="text-center mb-8">
              <h1 
                className={`text-3xl font-bold font-heading mb-2 transition-all duration-700 delay-200 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <span className="gradient-text text-glow">Jamil Raúl</span>
              </h1>
              <h2 
                className={`text-xl font-semibold text-foreground/90 mb-3 transition-all duration-700 delay-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Turpo Arocutipa
              </h2>
              <p 
                className={`text-primary font-medium tracking-wide text-sm transition-all duration-700 delay-400 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                Desarrollador Full Stack & Gestor de Proyectos
              </p>
            </div>

            {/* Social Links */}
            <div 
              className={`flex gap-4 mb-8 transition-all duration-700 delay-500 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <a 
                href="https://github.com/JTastico" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-500 hover:scale-[1.03] transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white">GitHub</span>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/turpojamil/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#0077B5] to-[#0066A2] border border-[#0088CC] hover:border-[#00AAEE] hover:scale-[1.03] transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                <span className="text-sm font-semibold text-white">LinkedIn</span>
              </a>
            </div>

            {/* Main CTA Button */}
            <div 
              className={`transition-all duration-700 delay-600 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <Button
                size="lg"
                onClick={() => navigate('/detalles')}
                className="w-full relative bg-gradient-to-r from-primary via-cyan-500 to-purple-500 text-primary-foreground font-bold px-8 py-7 text-lg rounded-2xl overflow-hidden group transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_hsl(199_89%_48%/0.5)] border-0"
              >
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Ver más detalles
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 border-t border-border/20 bg-card/30">
            <p className="text-center text-xs text-muted-foreground">
              <span className="gradient-text font-medium">Portafolio Digital</span> • 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
