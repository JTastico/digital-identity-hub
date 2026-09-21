import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** "muted" pinta una banda tenue para separar secciones sin decoración. */
  tone?: "default" | "muted";
}

export const Section = ({ tone = "default", className, children, ...props }: SectionProps) => (
  <section
    className={cn(
      "px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
      tone === "muted" && "border-y border-border/60 bg-secondary/30",
      className,
    )}
    {...props}
  >
    <div className="mx-auto w-full max-w-6xl">{children}</div>
  </section>
);
