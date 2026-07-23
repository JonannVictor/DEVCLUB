import { useRef, type PointerEvent, type ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

const cardVariants = cva(
  'group relative overflow-hidden rounded-lg border p-6 transition-[background-color,border-color,box-shadow] duration-[var(--motion-duration-base)] ease-snap',
  {
    variants: {
      interactive: {
        true: 'border-border bg-elevated shadow-sm hover:border-border-strong hover:bg-elevated-2 hover:shadow-md',
        false: 'border-border bg-elevated shadow-sm',
      },
    },
    defaultVariants: {
      interactive: false,
    },
  },
)

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode
  className?: string
}

export function Card({ children, interactive, className }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spotlight-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spotlight-y', `${event.clientY - rect.top}px`)
  }

  const surface = (
    <div
      ref={ref}
      onPointerMove={interactive ? handlePointerMove : undefined}
      className={cn(cardVariants({ interactive }), className)}
    >
      {interactive && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle 220px at var(--spotlight-x, 50%) var(--spotlight-y, 50%), rgba(91, 241, 117, 0.12), transparent 70%)',
          }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  )

  if (!interactive) return surface

  return (
    <motion.div
      className="h-full"
      whileHover={{ y: -6 }}
      transition={{ duration: durations.fast, ease: easings.snap }}
    >
      {surface}
    </motion.div>
  )
}
