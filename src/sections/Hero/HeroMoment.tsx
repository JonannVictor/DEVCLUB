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

/** Posição horizontal (%) das três regiões de reconhecimento ao longo da palavra-chave. */
const REGION_POSITIONS = [22, 50, 78]

export function HeroMoment({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-block">
      {/* Ato 2 — o pulso arqueológico percorre a malha e ramifica em direção à palavra. */}
      <svg
        aria-hidden
        className="hero-grid-svg pointer-events-none absolute top-1/2 left-1/2 -z-10 overflow-visible"
        style={{ width: '260%', height: '260%', transform: 'translate(-50%, -50%)' }}
        viewBox="0 0 200 200"
        fill="none"
      >
        <path
          className="hero-grid-sweep"
          d="M20,20 L90,20 L90,80 L100,80 L100,100"
          stroke="var(--color-primary-glow)"
          strokeWidth="1"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
        />
        <line
          className="hero-grid-residual hero-grid-residual-0"
          x1="100"
          y1="105"
          x2="70"
          y2="145"
          stroke="var(--color-primary-glow)"
          strokeWidth="1"
        />
        <line
          className="hero-grid-residual hero-grid-residual-1"
          x1="100"
          y1="105"
          x2="132"
          y2="150"
          stroke="var(--color-primary-glow)"
          strokeWidth="1"
        />
      </svg>

      {/* Ato 1 — a semente: o único ponto que desperta antes de tudo. */}
      <span
        aria-hidden
        className="hero-grid-seed bg-primary-glow pointer-events-none absolute size-1.5 rounded-full"
        style={{ top: '-50%', left: '-30%' }}
      />

      {/* Ato 2 — três regiões do Grid reconhecem um padrão antes da confirmação visual. */}
      {REGION_POSITIONS.map((left, i) => (
        <span
          key={i}
          aria-hidden
          className={`hero-grid-region hero-grid-region-${i} pointer-events-none absolute top-1/2 -z-10 rounded-full`}
          style={{
            left: `${left}%`,
            width: 'clamp(2.5rem, 2rem + 4vw, 5rem)',
            height: 'clamp(2.5rem, 2rem + 4vw, 5rem)',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)',
            filter: 'blur(2px)',
          }}
        />
      ))}

      {/* Materialização — a confirmação do Grid (mantidos da Sprint 1). */}
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
