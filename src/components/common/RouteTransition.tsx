import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";

/** Reinicia una entrada suave cada vez que cambia la ruta. Debe ir dentro del Router. */
export const RouteTransition = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div key={pathname} className="animate-page-in">
      {children}
    </div>
  );
};
