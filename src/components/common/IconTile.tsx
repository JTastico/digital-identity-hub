import type { LucideIcon } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const iconTileVariants = cva("inline-flex shrink-0 items-center justify-center rounded-xl", {
  variants: {
    size: {
      sm: "h-9 w-9 [&>svg]:h-4 [&>svg]:w-4",
      md: "h-11 w-11 [&>svg]:h-5 [&>svg]:w-5",
      lg: "h-14 w-14 [&>svg]:h-6 [&>svg]:w-6",
    },
    tone: {
      primary: "bg-primary/10 text-primary",
      muted: "bg-secondary text-foreground",
    },
  },
  defaultVariants: {
    size: "md",
    tone: "primary",
  },
});

interface IconTileProps extends VariantProps<typeof iconTileVariants> {
  icon: LucideIcon;
  className?: string;
}

/** Icono decorativo dentro de un cuadrado tintado. */
export const IconTile = ({ icon: Icon, size, tone, className }: IconTileProps) => (
  <span className={cn(iconTileVariants({ size, tone }), className)} aria-hidden="true">
    <Icon />
  </span>
);
