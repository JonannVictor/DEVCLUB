import { motion } from 'framer-motion'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

const BARS = [30, 48, 40, 68, 88]

export function TrendBars() {
  return (
    <div className="mb-4 flex h-10 items-end justify-center gap-1.5" aria-hidden>
      {BARS.map((height, i) => (
        <motion.span
          key={i}
          className="bg-primary/60 w-2 rounded-full"
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: durations.slow, ease: easings.punch, delay: i * 0.08 }}
        />
      ))}
    </div>
  )
}
