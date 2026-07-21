import { createContext, useContext } from 'react'

interface MotionContextValue {
  prefersReducedMotion: boolean
}

export const MotionContext = createContext<MotionContextValue | null>(null)

export function useMotionPreferences(): MotionContextValue {
  const context = useContext(MotionContext)
  if (!context) {
    throw new Error('useMotionPreferences must be used within a MotionProvider')
  }
  return context
}
