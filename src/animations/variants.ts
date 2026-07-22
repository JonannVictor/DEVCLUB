import type { Variants } from 'framer-motion'
import { durations } from './durations'
import { easings } from './easings'
import { distances } from './distances'

export const buildRevealWord: Variants = {
  hidden: {
    opacity: 0,
    y: distances.md,
    filter: 'blur(6px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: durations.slow,
      ease: easings.enter,
    },
  },
}

export const fadeUpContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

export const fadeUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: distances.md,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.signature,
    },
  },
}

/**
 * Chega com peso físico — escala de leve compressão + overshoot de pouso (ease "punch"),
 * em vez de apenas deslizar. Reservada para elementos que devem parecer "assentar", não flutuar:
 * cards, blocos de destaque.
 */
export const weightedScaleContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05,
    },
  },
}

export const weightedScaleItem: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.94,
    y: distances.sm,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: durations.slow,
      ease: easings.punch,
    },
  },
}

/**
 * Entrada horizontal — para composições assimétricas e listas onde o conteúdo
 * não deve sempre "subir de baixo", quebrando a monotonia do fade+translateY.
 */
export const slideRevealContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export function slideRevealItem(direction: 'left' | 'right' = 'left'): Variants {
  const x = direction === 'left' ? -distances.lg : distances.lg
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: durations.slow,
        ease: easings.signature,
      },
    },
  }
}
