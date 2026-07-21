import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

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
}

export function Button({ children, href, variant, size, className, onClick }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className)

  const motionProps = {
    whileHover: { scale: 1.02, transition: { duration: durations.fast, ease: easings.snap } },
    whileTap: { scale: 0.98, transition: { duration: durations.instant, ease: easings.snap } },
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
