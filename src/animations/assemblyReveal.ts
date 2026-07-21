import type { Variants } from 'framer-motion'
import { durations } from './durations'
import { easings } from './easings'
import { distances } from './distances'

/**
 * Família de motion reservada para composição de sistema (Tecnologias): nada respira,
 * nada flutua — cada item entra com um deslocamento curto e um encaixe seco (ease snap,
 * sem overshoot). Precisão, não personalidade.
 */
export const assemblyRowContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
}

export function assemblyItem(direction: 'left' | 'right'): Variants {
  const x = direction === 'left' ? -distances.md : distances.md
  return {
    hidden: { opacity: 0, x },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: durations.fast, ease: easings.snap },
    },
  }
}
