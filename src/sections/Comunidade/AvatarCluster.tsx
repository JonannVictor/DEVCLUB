import { motion } from 'framer-motion'
import { useMotionPreferences } from '@/app/providers'
import { weightedScaleContainer, weightedScaleItem } from '@/animations/variants'

interface Avatar {
  initials: string
  top: string
  left: string
  size: number
  floatDuration: number
  floatDelay: number
}

const AVATARS: Avatar[] = [
  { initials: 'JS', top: '6%', left: '22%', size: 52, floatDuration: 5.2, floatDelay: 0 },
  { initials: 'AM', top: '54%', left: '6%', size: 44, floatDuration: 6, floatDelay: 0.6 },
  { initials: 'RC', top: '14%', left: '66%', size: 64, floatDuration: 4.6, floatDelay: 0.3 },
  { initials: 'TL', top: '74%', left: '52%', size: 48, floatDuration: 5.6, floatDelay: 0.9 },
  { initials: 'PK', top: '40%', left: '38%', size: 76, floatDuration: 5, floatDelay: 0.15 },
  { initials: 'MV', top: '2%', left: '48%', size: 38, floatDuration: 6.4, floatDelay: 1.2 },
  { initials: 'GD', top: '82%', left: '22%', size: 50, floatDuration: 5.8, floatDelay: 0.45 },
  { initials: 'LN', top: '32%', left: '86%', size: 42, floatDuration: 5.4, floatDelay: 0.75 },
  { initials: 'BH', top: '64%', left: '80%', size: 36, floatDuration: 6.2, floatDelay: 1.05 },
]

const LINKS = [
  ['PK', 'JS'],
  ['PK', 'RC'],
  ['PK', 'TL'],
  ['PK', 'AM'],
  ['RC', 'LN'],
  ['GD', 'AM'],
]

function centerOf(a: Avatar) {
  return { x: `${parseFloat(a.left)}%`, y: `${parseFloat(a.top)}%` }
}

export function AvatarCluster() {
  const { prefersReducedMotion } = useMotionPreferences()

  return (
    <div className="relative h-80 w-full sm:h-96" aria-hidden>
      <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <motion.g
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          {LINKS.map(([fromId, toId]) => {
            const from = AVATARS.find((a) => a.initials === fromId)
            const to = AVATARS.find((a) => a.initials === toId)
            if (!from || !to) return null
            const f = centerOf(from)
            const t = centerOf(to)
            return (
              <line
                key={`${fromId}-${toId}`}
                x1={f.x}
                y1={f.y}
                x2={t.x}
                y2={t.y}
                stroke="var(--color-border-strong)"
                strokeWidth={1}
              />
            )
          })}
        </motion.g>
      </svg>

      <motion.div
        variants={weightedScaleContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="absolute inset-0"
      >
        {AVATARS.map((avatar) => (
          <motion.div
            key={avatar.initials}
            variants={weightedScaleItem}
            className="absolute"
            style={{ top: avatar.top, left: avatar.left }}
          >
            <motion.div
              animate={
                prefersReducedMotion ? undefined : { y: [0, -10, 0] }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      duration: avatar.floatDuration,
                      delay: avatar.floatDelay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }
              }
              className="from-primary/25 to-primary-glow/10 border-border-strong text-foreground-muted text-mono-label flex items-center justify-center rounded-full border bg-gradient-to-br font-mono"
              style={{ width: avatar.size, height: avatar.size }}
            >
              {avatar.initials}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
