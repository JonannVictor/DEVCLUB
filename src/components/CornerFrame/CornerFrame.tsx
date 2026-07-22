import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CornerFrameProps {
  children: ReactNode
  className?: string
}

const CORNERS = [
  'top-0 left-0 border-t border-l rounded-tl-sm',
  'top-0 right-0 border-t border-r rounded-tr-sm',
  'bottom-0 left-0 border-b border-l rounded-bl-sm',
  'bottom-0 right-0 border-b border-r rounded-br-sm',
]

/** Moldura de precisão nos quatro cantos — vocabulário de "elemento anotado", reservado a acentos pontuais. */
export function CornerFrame({ children, className }: CornerFrameProps) {
  return (
    <div className={cn('group relative', className)}>
      {CORNERS.map((position) => (
        <span
          key={position}
          aria-hidden
          className={cn(
            'border-primary/40 group-hover:border-primary/80 absolute size-3 transition-colors duration-300',
            position,
          )}
        />
      ))}
      {children}
    </div>
  )
}
