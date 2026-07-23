import { useMotionValue, useSpring } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { useMotionPreferences } from '@/app/providers'

interface ScrollTiltOptions {
  /** Graus de rotação máxima na direção do scroll. */
  strength?: number
}

/**
 * Inclinação sutil atrelada à velocidade do scroll (mesmo princípio do Signal Grid):
 * o elemento reage ao movimento da página em vez de só entrar e ficar estático.
 */
export function useScrollTilt({ strength = 3 }: ScrollTiltOptions = {}) {
  const { prefersReducedMotion } = useMotionPreferences()
  const rawTilt = useMotionValue(0)
  const tilt = useSpring(rawTilt, { stiffness: 120, damping: 20, mass: 0.5 })

  useLenis((lenis) => {
    if (prefersReducedMotion) return
    const clamped = Math.max(-1, Math.min(1, lenis.velocity / 30))
    rawTilt.set(clamped * strength)
  })

  return tilt
}
