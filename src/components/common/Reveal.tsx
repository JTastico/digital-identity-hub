import { createElement, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/use-in-view";

interface RevealProps {
  children: ReactNode;
  /** Retraso en ms antes de animar (útil para escalonar elementos). */
  delay?: number;
  as?: "div" | "li";
  className?: string;
}

/** Aparece con fade + desplazamiento suave cuando entra en pantalla. */
export const Reveal = ({ children, delay = 0, as = "div", className }: RevealProps) => {
  const [ref, inView] = useInView();

  return createElement(
    as,
    {
      ref,
      className: cn("reveal", inView && "visible", className),
      style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
    },
    children,
  );
};
