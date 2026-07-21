import { motion } from 'framer-motion'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

/** Duas linhas convergindo — Front-end e Back-end se encontram em Full Stack. Só no desktop. */
export function ForkConnector() {
  return (
    <svg
      aria-hidden
      className="mx-auto my-6 hidden h-16 w-32 md:my-8 md:block"
      viewBox="0 0 100 60"
      fill="none"
    >
      <motion.path
        d="M20,0 L50,60"
        stroke="var(--color-primary-glow)"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray={1}
        initial={{ strokeDashoffset: 1 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: durations.slow, ease: easings.signature }}
      />
      <motion.path
        d="M80,0 L50,60"
        stroke="var(--color-primary-glow)"
        strokeWidth="1.5"
        pathLength={1}
        strokeDasharray={1}
        initial={{ strokeDashoffset: 1 }}
        whileInView={{ strokeDashoffset: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: durations.slow, ease: easings.signature, delay: 0.08 }}
      />
    </svg>
  )
}
