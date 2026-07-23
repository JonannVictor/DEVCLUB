import { motion } from 'framer-motion'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import { useScrollTilt } from '@/hooks/useScrollTilt'

const viewport = { once: true, margin: '-15% 0px' } as const

export function CertificateMark() {
  const tilt = useScrollTilt({ strength: 2 })

  return (
    <motion.div className="mx-auto w-full max-w-sm sm:max-w-md" style={{ rotate: tilt }}>
      <svg viewBox="0 0 320 220" fill="none" className="w-full" aria-hidden>
        <motion.rect
          x={4}
          y={4}
          width={312}
          height={212}
          rx={12}
          stroke="var(--color-border-strong)"
          strokeWidth={1.5}
          pathLength={1}
          strokeDasharray={1}
          initial={{ strokeDashoffset: 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={viewport}
          transition={{ duration: durations.cinematic, ease: easings.signature }}
        />

        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ duration: durations.slow, delay: durations.cinematic * 0.5 }}
        >
          <line x1={32} y1={44} x2={200} y2={44} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={32} y1={64} x2={160} y2={64} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={32} y1={168} x2={140} y2={168} stroke="var(--color-border)" strokeWidth={1} />
          <line x1={32} y1={184} x2={110} y2={184} stroke="var(--color-border)" strokeWidth={1} />
        </motion.g>

        <motion.g
          initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={viewport}
          transition={{
            duration: durations.slow,
            ease: easings.punch,
            delay: durations.cinematic + 0.1,
          }}
          style={{ transformOrigin: '252px 156px' }}
        >
          <circle cx={252} cy={156} r={40} stroke="var(--color-primary)" strokeWidth={1.5} />
          <circle cx={252} cy={156} r={31} stroke="var(--color-primary)" strokeWidth={1} opacity={0.5} />
          <path
            d="M236 156l11 11 22-24"
            stroke="var(--color-primary-glow)"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>
    </motion.div>
  )
}
