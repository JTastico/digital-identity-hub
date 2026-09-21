import { Globe, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const iconSwap = "col-start-1 row-start-1 transition-[transform,opacity] duration-300 ease-smooth";

/** Botones de tema e idioma compartidos por las páginas. */
export const PreferenceToggles = ({ className }: { className?: string }) => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className={cn("flex gap-2", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
        className="h-11 w-11 rounded-full bg-background/60 text-muted-foreground backdrop-blur-sm hover:text-foreground"
      >
        {/* Ambos iconos conviven y se intercambian con rotación */}
        <span className="grid place-items-center">
          <Moon className={cn(iconSwap, "rotate-0 scale-100 dark:-rotate-90 dark:scale-0")} />
          <Sun className={cn(iconSwap, "rotate-90 scale-0 dark:rotate-0 dark:scale-100")} />
        </span>
      </Button>
      <Button
        variant="outline"
        onClick={toggleLanguage}
        aria-label="Cambiar idioma"
        className="h-11 rounded-full bg-background/60 px-4 font-mono text-xs text-muted-foreground backdrop-blur-sm hover:text-foreground"
      >
        <Globe />
        {language}
      </Button>
    </div>
  );
};
