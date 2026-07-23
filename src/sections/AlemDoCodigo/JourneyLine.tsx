import { motion } from 'framer-motion'
import { useMotionPreferences } from '@/app/providers'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

const LINE_DURATION = durations.cinematic * 2.2

interface Branch {
  /** Posição vertical (0–100%) onde a ramificação sai da linha principal. */
  y: number
  /** Ponto de chegada da ramificação, em % relativo ao container do grid. */
  toX: number
  toY: number
}

const BRANCHES: Branch[] = [
  { y: 16, toX: 25, toY: 16 },
  { y: 33, toX: 50, toY: 33 },
]

const viewport = { once: true, margin: '-15% 0px' } as const

/** Linha vertical que "desenha" o percurso da seção — mesma linguagem visual do Hero/ForkConnector. */
export function JourneyLine() {
  const { prefersReducedMotion } = useMotionPreferences()

  if (prefersReducedMotion) {
    return (
      <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
        <div
          className="bg-primary absolute top-0 bottom-0 w-px opacity-35"
          style={{ left: '2%' }}
        />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          fill="none"
        >
          {BRANCHES.map((b, i) => (
            <line
              key={i}
              x1="2"
              y1={b.y}
              x2={b.toX}
              y2={b.toY}
              stroke="var(--color-primary-glow)"
              strokeOpacity={0.18}
              strokeWidth={1}
            />
          ))}
        </svg>
      </div>
    )
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 hidden md:block">
      <motion.div
        className="bg-primary absolute top-0 w-px opacity-35"
        style={{ left: '2%', height: '100%', transformOrigin: 'top' }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={viewport}
        transition={{ duration: LINE_DURATION, ease: easings.signature }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
      >
        {BRANCHES.map((b, i) => (
          <motion.line
            key={i}
            x1="2"
            y1={b.y}
            x2={b.toX}
            y2={b.toY}
            stroke="var(--color-primary-glow)"
            strokeOpacity={0.18}
            strokeWidth={1}
            pathLength={1}
            strokeDasharray={1}
            initial={{ strokeDashoffset: 1 }}
            whileInView={{ strokeDashoffset: 0 }}
            viewport={viewport}
            transition={{
              duration: durations.slow,
              ease: easings.enter,
              delay: (b.y / 100) * LINE_DURATION,
            }}
          />
        ))}
      </svg>

      <motion.div
        className="journey-dot absolute size-2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: '2%',
          background: 'var(--color-primary-glow)',
          boxShadow: '0 0 6px 1px var(--color-primary-glow), 0 0 24px 6px rgba(91, 241, 117, 0.45)',
        }}
        initial={{ top: '0%', opacity: 0 }}
        whileInView={{ top: '100%', opacity: [0, 1, 1, 0] }}
        viewport={viewport}
        transition={{ duration: LINE_DURATION, ease: easings.signature, times: [0, 0.04, 0.94, 1] }}
      />
    </div>
  )
}
