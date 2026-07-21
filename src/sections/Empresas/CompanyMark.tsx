import { useEffect, useRef, type CSSProperties } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useMotionPreferences } from '@/app/providers'
import { proofSettle, proofBreathe } from '@/animations/proofReveal'
import { cn } from '@/utils/cn'

interface CompanyMarkProps {
  name: string
  size: string
  delay: number
  position?: CSSProperties
}

/** Um nome que assenta de forma independente e depois respira, dessincronizado dos demais. */
export function CompanyMark({ name, size, delay, position }: CompanyMarkProps) {
  const { prefersReducedMotion } = useMotionPreferences()
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const controls = useAnimation()

  useEffect(() => {
    if (prefersReducedMotion || !isInView) return
    controls
      .start({
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        transition: { ...proofSettle, delay },
      })
      .then(() => controls.start(proofBreathe(delay)))
  }, [isInView, prefersReducedMotion, controls, delay])

  return (
    <motion.span
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.95, filter: 'blur(3px)' }}
      animate={prefersReducedMotion ? undefined : controls}
      style={position}
      className={cn(
        size,
        'text-foreground-muted hover:text-foreground font-medium transition-colors',
        position && 'absolute',
      )}
    >
      {name}
    </motion.span>
  )
}
