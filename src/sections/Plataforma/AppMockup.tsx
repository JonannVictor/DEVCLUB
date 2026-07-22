import { motion } from 'framer-motion'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

const viewport = { once: true, margin: '-15% 0px' } as const
const STEPS = [64, 148, 232, 316]

export function AppMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 12 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: durations.slow, ease: easings.punch }}
      className="border-border bg-elevated overflow-hidden rounded-xl border shadow-lg"
    >
      <div className="border-border bg-elevated-2 flex items-center gap-2 border-b px-4 py-3">
        <span className="bg-foreground-muted/30 size-2.5 rounded-full" />
        <span className="bg-foreground-muted/30 size-2.5 rounded-full" />
        <span className="bg-foreground-muted/30 size-2.5 rounded-full" />
        <span className="bg-bg-base text-mono-label text-foreground-muted ml-3 flex-1 truncate rounded-sm px-3 py-1 font-mono">
          plataforma/minha-trilha
        </span>
      </div>

      <svg viewBox="0 0 380 220" className="w-full" aria-hidden>
        <motion.line
          x1={STEPS[0]}
          y1={40}
          x2={STEPS[3]}
          y2={40}
          stroke="var(--color-border-strong)"
          strokeWidth={2}
          pathLength={1}
          strokeDasharray={1}
          initial={{ strokeDashoffset: 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={viewport}
          transition={{ duration: durations.cinematic, ease: easings.signature, delay: 0.2 }}
        />
        <motion.line
          x1={STEPS[0]}
          y1={40}
          x2={STEPS[2]}
          y2={40}
          stroke="var(--color-primary)"
          strokeWidth={2}
          pathLength={1}
          strokeDasharray={1}
          initial={{ strokeDashoffset: 1 }}
          whileInView={{ strokeDashoffset: 0 }}
          viewport={viewport}
          transition={{ duration: durations.slow, ease: easings.signature, delay: 0.5 }}
        />

        {STEPS.map((x, i) => (
          <motion.circle
            key={x}
            cx={x}
            cy={40}
            r={i <= 2 ? 8 : 7}
            fill={i <= 2 ? 'var(--color-primary)' : 'var(--color-elevated)'}
            stroke={i <= 2 ? 'var(--color-primary)' : 'var(--color-border-strong)'}
            strokeWidth={1.5}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={viewport}
            transition={{ duration: durations.base, ease: easings.punch, delay: 0.5 + i * 0.12 }}
            style={{ transformOrigin: `${x}px 40px` }}
          />
        ))}

        {[0, 1, 2].map((row) => (
          <motion.g
            key={row}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: durations.base, ease: easings.snap, delay: 0.9 + row * 0.1 }}
          >
            <rect
              x={40}
              y={100 + row * 34}
              width={row === 1 ? 220 : 300}
              height={10}
              rx={5}
              fill="var(--color-border)"
            />
          </motion.g>
        ))}
      </svg>
    </motion.div>
  )
}
