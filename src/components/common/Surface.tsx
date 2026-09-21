import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const surfaceVariants = cva("rounded-2xl border border-border bg-card text-card-foreground", {
  variants: {
    padding: {
      none: "",
      sm: "p-4",
      md: "p-5 sm:p-6",
    },
    interactive: {
      true: "transition-[transform,box-shadow,border-color] duration-300 ease-smooth hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[var(--shadow-card)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background",
      false: "",
    },
  },
  defaultVariants: {
    padding: "md",
    interactive: false,
  },
});

export interface SurfaceProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof surfaceVariants> {
  /** Renderiza el hijo (p. ej. un <a>) en lugar de un <div>. */
  asChild?: boolean;
}

/** Contenedor base de tarjetas: borde + fondo sólido, con hover opcional. */
export const Surface = React.forwardRef<HTMLElement, SurfaceProps>(
  ({ className, padding, interactive, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        ref={ref as React.Ref<HTMLDivElement>}
        className={cn(surfaceVariants({ padding, interactive }), className)}
        {...props}
      />
    );
  },
);
Surface.displayName = "Surface";
