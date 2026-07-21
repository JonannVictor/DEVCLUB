import { createContext, useContext, type ReactNode } from 'react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

interface MotionContextValue {
  prefersReducedMotion: boolean
}

const MotionContext = createContext<MotionContextValue | null>(null)

export function MotionProvider({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <MotionContext.Provider value={{ prefersReducedMotion }}>
      {children}
    </MotionContext.Provider>
  )
}

export function useMotionPreferences(): MotionContextValue {
  const context = useContext(MotionContext)
  if (!context) {
    throw new Error('useMotionPreferences must be used within a MotionProvider')
  }
  return context
}
