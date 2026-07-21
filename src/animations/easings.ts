/** Espelho de src/styles/tokens.css --ease-*. Manter os dois em sincronia. */
export const easings = {
  signature: [0.16, 1, 0.3, 1],
  snap: [0.4, 0, 0.2, 1],
  enter: [0.22, 1, 0.36, 1],
  /** Leve overshoot — reservado para beats de maior peso: ignição do Hero Moment, pouso do CTA. */
  punch: [0.32, 1.3, 0.62, 1],
} as const
