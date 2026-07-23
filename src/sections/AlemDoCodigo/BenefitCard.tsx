import { useRef, type PointerEvent, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, type Variants } from 'framer-motion'
import { useMotionPreferences } from '@/app/providers'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import { cn } from '@/utils/cn'

const TILT_MAX = 5

const benefitCardVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.94, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: durations.slow, ease: easings.punch },
  },
}

interface BenefitCardProps {
  icon: ReactNode
  title: string
  description: string
  featured?: boolean
  className?: string
}

export function BenefitCard({ icon, title, description, featured, className }: BenefitCardProps) {
  const { prefersReducedMotion } = useMotionPreferences()
  const ref = useRef<HTMLDivElement>(null)

  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const springOptions = { stiffness: 150, damping: 16, mass: 0.5 }
  const rotateX = useSpring(rawRotateX, springOptions)
  const rotateY = useSpring(rawRotateY, springOptions)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width
    const py = (event.clientY - rect.top) / rect.height
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
    if (prefersReducedMotion) return
    rawRotateY.set((px - 0.5) * TILT_MAX)
    rawRotateX.set(-(py - 0.5) * TILT_MAX)
  }

  function handlePointerLeave() {
    rawRotateX.set(0)
    rawRotateY.set(0)
  }

  return (
    <motion.div variants={benefitCardVariants} className={cn('h-full', className)}>
      <div style={{ perspective: 900 }} className="h-full">
        <motion.div
          ref={ref}
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          whileHover={{ y: -8 }}
          transition={{ duration: durations.fast, ease: easings.snap }}
          className={cn(
            'benefit-card border-border bg-elevated group relative flex h-full flex-col overflow-hidden rounded-lg border',
            featured ? 'gap-4 p-7 md:p-8' : 'gap-3 p-6',
          )}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle 240px at var(--spot-x, 50%) var(--spot-y, 30%), rgba(91, 241, 117, 0.14), rgba(152, 75, 255, 0.1) 45%, transparent 72%)',
            }}
          />
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{ boxShadow: 'inset 0 0 0 1px rgba(91, 241, 117, 0.3), 0 0 28px -6px rgba(152, 75, 255, 0.35)' }}
          />

          <span
            aria-hidden
            className={cn(
              'border-primary/25 bg-bg-base text-primary relative flex shrink-0 items-center justify-center rounded-md border transition-colors group-hover:border-primary/50',
              featured ? 'size-12' : 'size-10',
            )}
          >
            <span className={featured ? '[&>svg]:size-6' : '[&>svg]:size-5'}>{icon}</span>
          </span>

          <div className="relative">
            <h3 className={cn('text-foreground', featured ? 'text-h2' : 'text-h3')}>{title}</h3>
            <p className={cn('text-foreground-muted mt-2', featured ? 'text-body-lg' : 'text-body')}>
              {description}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
