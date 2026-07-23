import { motion } from 'framer-motion'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import { useScrollTilt } from '@/hooks/useScrollTilt'

const viewport = { once: true, margin: '-15% 0px' } as const

export function GuaranteeShield() {
  const tilt = useScrollTilt({ strength: 2 })

  return (
    <motion.div
      className="mx-auto w-full max-w-[220px] sm:max-w-[260px]"
      style={{ rotate: tilt }}
    >
      <svg viewBox="0 0 200 220" fill="none" className="w-full" aria-hidden>
        <motion.path
          d="M100 8 176 36v58c0 56-34 92-76 118C58 186 24 150 24 94V36z"
          stroke="var(--color-border-strong)"
          strokeWidth={1.5}
          pathLength={1}
          strokeDasharray={1}
          initial={{ strokeDashoffset: 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={viewport}
          transition={{ duration: durations.cinematic, ease: easings.signature }}
        />

        <motion.path
          d="M68 108l24 24 40-48"
          stroke="var(--color-primary)"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={1}
          strokeDasharray={1}
          initial={{ strokeDashoffset: 1, opacity: 0 }}
          whileInView={{ strokeDashoffset: 0, opacity: 1 }}
          viewport={viewport}
          transition={{
            duration: durations.slow,
            ease: easings.punch,
            delay: durations.cinematic * 0.7,
          }}
        />

        <motion.circle
          cx={100}
          cy={100}
          r={78}
          stroke="var(--color-primary-glow)"
          strokeWidth={1}
          opacity={0}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: [0, 0.5, 0], scale: [0.8, 1.15, 1.3] }}
          viewport={viewport}
          transition={{ duration: durations.cinematic, delay: durations.cinematic * 0.7, ease: 'easeOut' }}
          style={{ transformOrigin: '100px 100px' }}
        />
      </svg>
    </motion.div>
  )
}
