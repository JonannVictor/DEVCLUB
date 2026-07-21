import { durations } from './durations'
import { easings } from './easings'

/**
 * Família de motion reservada para prova social (Empresas e futuras seções de credibilidade).
 * Diferente do Build Reveal/Mask Reveal da Hero: aqui cada item assenta de forma independente
 * e depois entra numa respiração ambiente contínua e dessincronizada — nunca dois itens no mesmo ritmo.
 */
export const proofSettle = {
  duration: durations.slow,
  ease: easings.enter,
}

export function proofBreathe(seed: number) {
  return {
    opacity: [1, 0.8, 1],
    transition: {
      duration: 8 + seed * 3.5,
      repeat: Infinity,
      ease: 'easeInOut' as const,
    },
  }
}
