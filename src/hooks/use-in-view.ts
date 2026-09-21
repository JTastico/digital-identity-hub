import { useEffect, useState } from "react";

interface UseInViewOptions {
  /** Deja de observar tras la primera aparición (por defecto true). */
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}

/**
 * Devuelve un callback-ref y un booleano que pasa a true cuando el elemento
 * entra en el viewport. Sin IntersectionObserver se considera visible.
 */
export function useInView({
  once = true,
  rootMargin = "0px 0px -8% 0px",
  threshold = 0.1,
}: UseInViewOptions = {}) {
  const [node, setNode] = useState<Element | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [node, once, rootMargin, threshold]);

  return [setNode, inView] as const;
}
