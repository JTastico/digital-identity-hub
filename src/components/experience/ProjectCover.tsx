import { Code2, Crown, Hexagon, Layers, MonitorSmartphone, Server, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";

// Portadas generadas para proyectos sin imagen: tema (icono + degradado) según el rol
const coverThemes = {
  fullstack: { icon: Layers, gradient: "from-cyan-500 to-blue-500" },
  backend: { icon: Server, gradient: "from-purple-500 to-pink-500" },
  mobile: { icon: Smartphone, gradient: "from-emerald-500 to-teal-500" },
  dotnet: { icon: Hexagon, gradient: "from-violet-500 to-indigo-500" },
  frontend: { icon: MonitorSmartphone, gradient: "from-sky-500 to-cyan-400" },
  leader: { icon: Crown, gradient: "from-amber-500 to-orange-500" },
  default: { icon: Code2, gradient: "from-primary to-purple-500" },
};

const getCover = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes(".net")) return coverThemes.dotnet;
  if (t.includes("android") || t.includes("móvil") || t.includes("movil") || t.includes("mobile")) return coverThemes.mobile;
  if (t.includes("full stack") || t.includes("fullstack")) return coverThemes.fullstack;
  if (t.includes("backend") || t.includes("back end")) return coverThemes.backend;
  if (t.includes("frontend") || t.includes("front end")) return coverThemes.frontend;
  if (t.includes("líder") || t.includes("lider") || t.includes("lead")) return coverThemes.leader;
  return coverThemes.default;
};

// Monograma (iniciales) del proyecto para la portada generada
const getInitials = (name: string) => {
  const stop = new Set(["de", "la", "el", "y", "of", "the", "for", "a", "web"]);
  const words = name
    .replace(/[^\p{L}\s'-]/gu, " ")
    .split(/[\s'-]+/)
    .filter((w) => w.length > 1 && !stop.has(w.toLowerCase()));
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
  if (words.length === 1) {
    const caps = words[0].match(/\p{Lu}/gu);
    if (caps && caps.length >= 2) return caps.slice(0, 2).join("");
    return words[0].slice(0, 2).toUpperCase();
  }
  return name.slice(0, 2).toUpperCase();
};

// Proyectos cuyo logo flotante necesita fondo blanco para verse bien
const lightLogoProjects = new Set(["Rueda de Problemas", "Problem Wheel"]);

// Proyectos cuyo logo flotante va a la derecha (por defecto va a la izquierda)
const rightLogoProjects = new Set(["Alianza Valorem"]);

const zoomOnHover = "transition-transform duration-500 ease-smooth group-hover:scale-[1.03]";

interface ProjectCoverProps {
  project: string;
  /** Rol; decide el tema de la portada generada. */
  title: string;
  images?: string[];
}

/** Portada del proyecto: 2+ imágenes (mockup), 1 imagen, o portada generada. Requiere un ancestro `group`. */
export const ProjectCover = ({ project, title, images = [] }: ProjectCoverProps) => {
  const frame = "relative aspect-video overflow-hidden border-b border-border bg-secondary/40";

  if (images.length >= 2) {
    const lightLogo = lightLogoProjects.has(project);
    const rightLogo = rightLogoProjects.has(project);
    return (
      <div className={frame}>
        <img src={images[0]} alt={project} loading="lazy" className={cn("h-full w-full object-cover", zoomOnHover)} />
        <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-background/10 to-transparent" />
        {/* Segunda imagen flotante (estilo móvil) */}
        <div
          className={cn(
            "absolute bottom-3 h-[52%] max-w-[52%] overflow-hidden rounded-lg border-2 border-card shadow-xl transition-transform duration-500 ease-smooth group-hover:rotate-0 sm:h-[56%] sm:max-w-[55%]",
            rightLogo ? "right-3 rotate-3" : "left-3 -rotate-3",
            lightLogo ? "bg-white p-2" : "bg-card",
          )}
        >
          <img src={images[1]} alt={`${project} - 2`} loading="lazy" className="h-full w-auto object-cover" />
        </div>
      </div>
    );
  }

  if (images.length === 1) {
    return (
      <div className={frame}>
        <img src={images[0]} alt={project} loading="lazy" className={cn("h-full w-full object-cover", zoomOnHover)} />
      </div>
    );
  }

  const { icon: CoverIcon, gradient } = getCover(title);
  return (
    <div className={frame}>
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-[0.16]", gradient)} />
      <div className="relative flex h-full flex-col items-center justify-center gap-3">
        <span className={cn("inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br p-0.5", gradient)}>
          <span className="flex h-full w-full items-center justify-center rounded-2xl bg-card">
            <CoverIcon className="h-6 w-6 text-foreground" aria-hidden="true" />
          </span>
        </span>
        <span className="font-heading text-3xl font-extrabold tracking-tight text-foreground">{getInitials(project)}</span>
      </div>
    </div>
  );
};
