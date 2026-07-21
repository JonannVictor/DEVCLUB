import type { ReactNode } from 'react'
import { MotionProvider } from './MotionProvider'
import { LenisProvider } from './LenisProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <MotionProvider>
      <LenisProvider>{children}</LenisProvider>
    </MotionProvider>
  )
}
