import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface BadgeProps {
  children: ReactNode
  className?: string
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'border-primary/20 bg-primary/10 text-primary text-mono-label inline-flex items-center rounded-full border px-3 py-1 font-mono uppercase',
        className,
      )}
    >
      {children}
    </span>
  )
}
