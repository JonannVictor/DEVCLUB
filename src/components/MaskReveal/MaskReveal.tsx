import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import { cn } from '@/utils/cn'

interface MaskRevealProps {
  children: ReactNode
  className?: string
  delay?: number
}

/** Rótulo emerge de dentro de uma máscara (translateY), em vez de apenas dar fade — reservado para eyebrows/kickers. */
export function MaskReveal({ children, className, delay = 0 }: MaskRevealProps) {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        initial={{ y: '110%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: durations.slow, ease: easings.enter, delay }}
        className={cn('inline-block', className)}
      >
        {children}
      </motion.span>
    </span>
  )
}
