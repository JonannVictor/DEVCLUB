import type { ReactNode, CSSProperties } from 'react'

/**
 * Âncoras não-transform (top/left %) espalhadas além dos 4 cantos da palavra-chave —
 * o GSAP anima apenas x/y (transform) sobre elas, nunca as próprias âncoras,
 * para evitar conflito com o cache de transform do GSAP.
 */
const DOT_ANCHORS: CSSProperties[] = [
  { top: '-45%', left: '-25%' },
  { top: '-52%', left: '50%' },
  { top: '-45%', left: '125%' },
  { top: '145%', left: '-25%' },
  { top: '152%', left: '50%' },
  { top: '145%', left: '125%' },
]

export function HeroMoment({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      <span
        aria-hidden
        className="hero-moment-bloom pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: 'clamp(11rem, 6rem + 18vw, 24rem)',
          height: 'clamp(11rem, 6rem + 18vw, 24rem)',
          background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)',
        }}
      />
      <span
        aria-hidden
        className="hero-moment-shockwave pointer-events-none absolute top-1/2 left-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border"
        style={{
          width: 'clamp(6rem, 4rem + 8vw, 13rem)',
          height: 'clamp(6rem, 4rem + 8vw, 13rem)',
          borderColor: 'var(--color-primary-glow)',
        }}
      />
      {DOT_ANCHORS.map((anchor, i) => (
        <span
          key={i}
          aria-hidden
          className={`hero-moment-dot hero-moment-dot-${i} bg-primary-glow pointer-events-none absolute size-2 rounded-full`}
          style={anchor}
        />
      ))}
      {children}
    </span>
  )
}
