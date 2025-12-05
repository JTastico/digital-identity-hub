import { useState } from "react";
import { Github, Linkedin, FileText, Moon, Sun, Globe, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/jamil-profile.png";

const HeaderDetails = () => {
  // Estados simulados para la UI (conéctalos a tu contexto real si lo tienes)
  const [isDark, setIsDark] = useState(true); 
  const [lang, setLang] = useState("ES");

  return (
    <section className="relative w-full bg-[#0a0a16] text-white pt-10 pb-12 px-4 md:px-12 overflow-hidden border-b border-white/5">
      
      {/* --- Fondo Decorativo (mantenido del estilo anterior) --- */}
      <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        
        {/* 1. Top Right: Tema e Idioma (Según tu dibujo) */}
        <div className="flex justify-end gap-3 mb-8 md:mb-0 md:absolute md:top-0 md:right-0">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsDark(!isDark)} 
              className="text-slate-400 hover:text-white hover:bg-white/10 rounded-full border border-white/5"
            >
                {isDark ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setLang(lang === "ES" ? "EN" : "ES")} 
              className="text-slate-400 hover:text-white hover:bg-white/10 rounded-full border border-white/5 font-mono text-xs"
            >
                <Globe className="w-3 h-3 mr-2" />
                {lang}
            </Button>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 mt-4">
            
            {/* 2. Columna Izquierda: Foto */}
            <div className="flex-shrink-0 relative group">
                {/* Efecto Glow detrás de la foto */}
                <div className="absolute -inset-2 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-[2rem] blur-md opacity-40 group-hover:opacity-60 transition duration-500"></div>
                
                {/* Contenedor Foto (Forma squircle/redondeada como el boceto) */}
                <div className="relative w-48 h-48 md:w-60 md:h-60 bg-[#1a1d2d] rounded-[2rem] overflow-hidden border-4 border-[#0a0a16] shadow-2xl">
                    <img 
                      src={profileImage} 
                      alt="Jamil Profile" 
                      className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500" 
                    />
                </div>
            </div>

            {/* 3. Columna Derecha: Información */}
            <div className="flex-1 flex flex-col text-center md:text-left space-y-6">
                
                {/* Nombre y Título */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 text-white">
                        Jamil Raúl <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Turpo</span>
                    </h1>
                    <p className="text-xl text-slate-400 font-medium">
                        Desarrollador Full Stack & Gestor de Proyectos
                    </p>
                </div>

                {/* Botones: CV, Linkedin, Github */}
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <Button className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl px-6 h-11 gap-2 shadow-lg shadow-blue-900/20 border-0">
                        <FileText className="w-4 h-4" /> 
                        Descargar CV
                    </Button>
                    
                    <a href="https://www.linkedin.com/in/turpojamil/" target="_blank" rel="noreferrer">
                      <Button variant="outline" className="bg-[#151725] border-white/10 text-slate-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 rounded-xl h-11 gap-2 transition-all">
                          <Linkedin className="w-4 h-4" /> LinkedIn
                      </Button>
                    </a>

                    <a href="https://github.com/JTastico" target="_blank" rel="noreferrer">
                      <Button variant="outline" className="bg-[#151725] border-white/10 text-slate-300 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 rounded-xl h-11 gap-2 transition-all">
                          <Github className="w-4 h-4" /> Github
                      </Button>
                    </a>
                </div>

                {/* Estadísticas: Años y Proyectos */}
                <div className="flex flex-row flex-wrap justify-center md:justify-start gap-8 pt-4 border-t border-white/5 mt-2">
                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-3xl font-bold text-white flex items-center gap-1">
                          +3 <span className="text-cyan-500 text-lg">años</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Experiencia</span>
                    </div>
                    
                    <div className="w-px h-12 bg-white/10 hidden md:block" /> {/* Separador */}

                    <div className="flex flex-col items-center md:items-start">
                        <span className="text-3xl font-bold text-white flex items-center gap-1">
                          +10 <span className="text-purple-500 text-lg">proyectos</span>
                        </span>
                        <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Completados</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderDetails;