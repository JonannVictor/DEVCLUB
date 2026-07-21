import type { ReactNode } from 'react'
import { ReactLenis } from 'lenis/react'
import { useMotionPreferences } from './MotionProvider'

const LENIS_OPTIONS = {
  duration: 1.1,
  easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const { prefersReducedMotion } = useMotionPreferences()

  if (prefersReducedMotion) {
    return <>{children}</>
  }

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  )
}
