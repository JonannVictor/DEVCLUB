import type { PointerEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import { useMotionPreferences } from '@/app/providers'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-[background-color,box-shadow,border-color] duration-[var(--motion-duration-base)] ease-snap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-on-primary hover:bg-primary-hover hover:shadow-glow-primary',
        ghost: 'border border-border text-foreground hover:border-border-strong hover:bg-elevated',
      },
      size: {
        md: 'text-small px-5 py-2.5',
        lg: 'text-body px-6 py-3.5',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
)

interface ButtonProps extends VariantProps<typeof buttonVariants> {
  children: ReactNode
  href?: string
  className?: string
  onClick?: () => void
  /** Puxa sutilmente o botão em direção ao cursor — reservado a CTAs de maior peso. */
  magnetic?: boolean
}

const MAGNETIC_STRENGTH = 0.35
const MAGNETIC_MAX = 10

export function Button({
  children,
  href,
  variant,
  size,
  className,
  onClick,
  magnetic,
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)
  const { prefersReducedMotion } = useMotionPreferences()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 150, damping: 14, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 150, damping: 14, mass: 0.3 })

  const isMagnetic = magnetic && !prefersReducedMotion

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement | HTMLButtonElement>) {
    if (!isMagnetic) return
    const rect = event.currentTarget.getBoundingClientRect()
    const offsetX = event.clientX - (rect.left + rect.width / 2)
    const offsetY = event.clientY - (rect.top + rect.height / 2)
    x.set(Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, offsetX * MAGNETIC_STRENGTH)))
    y.set(Math.max(-MAGNETIC_MAX, Math.min(MAGNETIC_MAX, offsetY * MAGNETIC_STRENGTH)))
  }

  function handlePointerLeave() {
    x.set(0)
    y.set(0)
  }

  const motionProps = {
    whileHover: { scale: 1.02, transition: { duration: durations.fast, ease: easings.snap } },
    whileTap: { scale: 0.98, transition: { duration: durations.instant, ease: easings.snap } },
    onPointerMove: handlePointerMove,
    onPointerLeave: handlePointerLeave,
    style: isMagnetic ? { x: springX, y: springY } : undefined,
  }

  if (href) {
    return (
      <motion.a href={href} className={classes} onClick={onClick} {...motionProps}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button type="button" className={classes} onClick={onClick} {...motionProps}>
      {children}
    </motion.button>
  )
}
