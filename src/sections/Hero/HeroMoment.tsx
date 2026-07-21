import type { ReactNode } from 'react'

const DOT_ANCHORS = ['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0']

export function HeroMoment({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="hero-moment-bloom pointer-events-none absolute top-1/2 left-1/2 -z-10 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)',
        }}
      />
      {DOT_ANCHORS.map((anchor, i) => (
        <span
          key={i}
          aria-hidden
          className={`hero-moment-dot hero-moment-dot-${i} bg-primary-glow pointer-events-none absolute size-1.5 rounded-full ${anchor}`}
        />
      ))}
      {children}
    </span>
  )
}
