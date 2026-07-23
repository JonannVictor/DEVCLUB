import type { CSSProperties } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { useMotionPreferences } from '@/app/providers'
import { cn } from '@/utils/cn'
import '@/styles/signal-grid.css'

interface Pulse {
  top: string
  left: string
  axis: 'x' | 'y'
  distance: number
  duration: number
  delay: number
}

const PULSES: Pulse[] = [
  { top: '18%', left: '8%', axis: 'x', distance: 256, duration: 6, delay: 0 },
  { top: '42%', left: '76%', axis: 'y', distance: 192, duration: 7, delay: 1.5 },
  { top: '68%', left: '30%', axis: 'x', distance: 320, duration: 8, delay: 3 },
  { top: '30%', left: '55%', axis: 'y', distance: 256, duration: 5.5, delay: 2 },
  { top: '82%', left: '62%', axis: 'x', distance: 192, duration: 6.5, delay: 4 },
]

export function SignalGrid() {
  const { prefersReducedMotion } = useMotionPreferences()
  const intensity = useMotionValue(0.5)
  const smoothIntensity = useSpring(intensity, { stiffness: 80, damping: 20 })

  useLenis((lenis) => {
    const normalized = Math.min(Math.abs(lenis.velocity) / 40, 1)
    intensity.set(0.5 + normalized * 0.5)
  })

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
        <div
          className="signal-grid__glow"
          style={{ width: 560, height: 560, top: '-12%', left: '-10%' }}
        />
        <div
          className="signal-grid__glow"
          style={{ width: 420, height: 420, bottom: '-10%', right: '-8%' }}
        />
        <div className="signal-grid__mesh" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div
        className="signal-grid__glow"
        style={{ width: 560, height: 560, top: '-12%', left: '-10%' }}
      />
      <div
        className="signal-grid__glow"
        style={{ width: 420, height: 420, bottom: '-10%', right: '-8%' }}
      />
      <div className="signal-grid__mesh" />
      <div className="signal-grid__noise" />
      {/* Dormente até a Hero acordar o sistema (Ato 1) — ver Hero.tsx, que controla esta opacidade via GSAP. */}
      <div id="signal-grid-ambient" className="absolute inset-0 opacity-0">
        <motion.div className="absolute inset-0" style={{ opacity: smoothIntensity }}>
          {PULSES.map((pulse, i) => (
            <span
              key={i}
              className={cn(
                'signal-grid__pulse',
                pulse.axis === 'y' && 'signal-grid__pulse--vertical',
              )}
              style={
                {
                  top: pulse.top,
                  left: pulse.left,
                  animationDuration: `${pulse.duration}s`,
                  animationDelay: `${pulse.delay}s`,
                  '--pulse-distance': `${pulse.distance}px`,
                } as CSSProperties
              }
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}
