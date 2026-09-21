import { cn } from "@/lib/utils";

interface StatProps {
  value: string;
  label: string;
  /** Unidad junto al valor (p. ej. "años"). */
  unit?: string;
  /** Aclaración pequeña bajo la etiqueta. */
  note?: string;
  className?: string;
}

export const Stat = ({ value, unit, label, note, className }: StatProps) => (
  <div className={cn("flex flex-col", className)}>
    <p className="font-heading text-3xl font-bold leading-none text-foreground">
      {value}
      {unit && <span className="ml-1.5 text-base font-semibold text-primary">{unit}</span>}
    </p>
    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</p>
    {note && <p className="text-xs text-muted-foreground">{note}</p>}
  </div>
);
