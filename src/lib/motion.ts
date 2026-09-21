/** Retraso escalonado con tope, para que las listas largas no tarden en aparecer. */
export const stagger = (index: number, step = 60, max = 4) => Math.min(index, max) * step;
