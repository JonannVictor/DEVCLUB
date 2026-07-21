import type { ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { MotionContext } from './motion-context'

export function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <MotionContext.Provider value={{ prefersReducedMotion }}>{children}</MotionContext.Provider>
  )
}
