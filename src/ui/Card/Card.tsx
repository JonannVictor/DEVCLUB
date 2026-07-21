import type { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/utils/cn'

const cardVariants = cva(
  'rounded-lg border p-6 transition-[background-color,border-color,box-shadow] duration-[var(--motion-duration-base)] ease-snap',
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
  return <div className={cn(cardVariants({ interactive }), className)}>{children}</div>
}
