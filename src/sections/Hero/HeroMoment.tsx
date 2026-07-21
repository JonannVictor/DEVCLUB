import type { ReactNode } from 'react'

const DOT_POSITIONS = [
  'top-0 left-0 -translate-x-8 -translate-y-6',
  'top-0 right-0 translate-x-8 -translate-y-6',
  'bottom-0 left-0 -translate-x-8 translate-y-6',
  'bottom-0 right-0 translate-x-8 translate-y-6',
]

export function HeroMoment({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="hero-moment-bloom pointer-events-none absolute top-1/2 left-1/2 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full opacity-0"
        style={{
          background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)',
        }}
      />
      {DOT_POSITIONS.map((position, i) => (
        <span
          key={i}
          aria-hidden
          className={`hero-moment-dot bg-primary-glow pointer-events-none absolute size-1.5 rounded-full opacity-0 ${position}`}
        />
      ))}
      {children}
    </span>
  )
}
