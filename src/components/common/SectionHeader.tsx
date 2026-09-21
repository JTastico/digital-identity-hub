import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  /** "lg" para el título de una sección, "sm" para subtítulos dentro de ella. */
  size?: "lg" | "sm";
  className?: string;
}

export const SectionHeader = ({ title, subtitle, size = "lg", className }: SectionHeaderProps) => (
  <Reveal className={cn("mb-8 max-w-2xl sm:mb-10", className)}>
    <span className="mb-3 block h-1 w-10 rounded-full bg-primary" aria-hidden="true" />
    <h2
      className={cn(
        "font-heading font-bold tracking-tight text-foreground",
        size === "lg" ? "text-3xl sm:text-4xl" : "text-2xl",
      )}
    >
      {title}
    </h2>
    {subtitle && <p className="mt-2 text-base text-muted-foreground">{subtitle}</p>}
  </Reveal>
);
