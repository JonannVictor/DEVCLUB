import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { hero } from '@/constants/content'
import { useMotionPreferences } from '@/app/providers'
import { Button } from '@/ui/Button'
import { distances } from '@/animations/distances'
import '@/animations/gsapEases'
import { HeroMoment } from './HeroMoment'

/** Deslocamento inicial de cada dot de convergência (offset a partir da própria âncora). */
const DOT_OFFSETS = [
  { x: -90, y: -70 },
  { x: 0, y: -95 },
  { x: 90, y: -70 },
  { x: -90, y: 70 },
  { x: 0, y: 95 },
  { x: 90, y: 70 },
]

const REDUCED_MOTION_HIDDEN =
  '.hero-moment-dot, .hero-moment-bloom, .hero-moment-shockwave, .hero-cta-pulse, ' +
  '.hero-branch-seed-line, .hero-grid-seed, .hero-grid-sweep, .hero-grid-region, .hero-grid-residual, ' +
  '.hero-handoff-glow'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { prefersReducedMotion } = useMotionPreferences()

  useGSAP(
    () => {
      const navbarEl = document.getElementById('site-navbar')
      const signalGridEl = document.getElementById('signal-grid-ambient')

      if (prefersReducedMotion) {
        gsap.set('.hero-word, .hero-subheadline, .hero-cta', {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'none',
        })
        gsap.set(REDUCED_MOTION_HIDDEN, { opacity: 0 })
        if (navbarEl) gsap.set(navbarEl, { opacity: 1, y: 0 })
        if (signalGridEl) gsap.set(signalGridEl, { opacity: 1 })
        return
      }

      // ---- Estados iniciais ----
      gsap.set('.hero-eyebrow-inner', { yPercent: 110 })
      gsap.set('.hero-word:not(.hero-word-keyword)', {
        opacity: 0,
        y: distances.md,
        filter: 'blur(6px)',
      })
      gsap.set('.hero-word-keyword', { opacity: 0, y: 0, filter: 'blur(10px)' })
      gsap.set('.hero-subheadline', { opacity: 0, y: distances.md })
      gsap.set('.hero-cta', { opacity: 0, scale: 0.94 })
      gsap.set('.hero-moment-dot', { opacity: 0 })
      DOT_OFFSETS.forEach((offset, i) => {
        gsap.set(`.hero-moment-dot-${i}`, { x: offset.x, y: offset.y })
      })
      gsap.set('.hero-moment-bloom', { opacity: 0, scale: 0.3 })
      gsap.set('.hero-moment-shockwave', { opacity: 0, scale: 0.4 })
      gsap.set('.hero-grid-seed', { opacity: 0, scale: 0.5 })
      gsap.set('.hero-grid-region', { opacity: 0 })
      gsap.set('.hero-grid-residual', { opacity: 0 })
      gsap.set('.hero-handoff-glow', { opacity: 0 })
      gsap.set('.hero-cta-pulse', { opacity: 0, y: 0 })
      gsap.set('.hero-branch-seed-line', { scaleY: 0, transformOrigin: 'top' })
      if (navbarEl) gsap.set(navbarEl, { opacity: 0, y: -8 })
      if (signalGridEl) gsap.set(signalGridEl, { opacity: 0 })

      const tl = gsap.timeline({ defaults: { ease: 'enter' } })

      // ============ ATO 1 — O SISTEMA DESPERTA ============
      // T 0.0–0.6 — silêncio real: nada acontece.

      // T 0.6–0.95 — a semente: um único ponto da malha desperta.
      tl.to('.hero-grid-seed', { opacity: 1, scale: 1, duration: 0.35, ease: 'enter' }, 0.6)

      // T 0.9–1.3 — a interface desperta em seguida (navbar + eyebrow).
      if (navbarEl) tl.to(navbarEl, { opacity: 1, y: 0, duration: 0.4 }, 0.9)
      tl.to('.hero-eyebrow-inner', { yPercent: 0, duration: 0.55, ease: 'enter' }, 1.05)

      // ============ ATO 2 — O SISTEMA RECONHECE ============
      // T 1.3–2.15 — o pulso arqueológico percorre a malha existente (beat longo, deliberado).
      tl.to(
        '.hero-grid-sweep',
        { strokeDashoffset: 0, duration: 0.85, ease: 'signature' },
        1.3,
      )
      tl.to('.hero-word-keyword', { opacity: 0.16, duration: 0.4, ease: 'enter' }, 1.3)
      tl.to('.hero-grid-seed', { opacity: 0, duration: 0.3 }, 2.0)

      // T 2.15–2.75 — reconhecimento por regiões: a malha percebe um padrão antes de confirmá-lo.
      tl.to('.hero-grid-region-0', { opacity: 0.75, duration: 0.4, ease: 'enter' }, 2.15)
      tl.to('.hero-grid-region-1', { opacity: 0.75, duration: 0.4, ease: 'enter' }, 2.33)
      tl.to('.hero-grid-region-2', { opacity: 0.75, duration: 0.4, ease: 'enter' }, 2.54)
      tl.to('.hero-word-keyword', { opacity: 0.34, duration: 0.6, ease: 'signature' }, 2.2)

      // T 2.82–3.04 — materialização: um único beat curto e decidido, sem overshoot.
      // A palavra não se move — ela apenas resolve para nitidez, como algo que sempre esteve ali.
      tl.to(
        '.hero-word-keyword',
        { opacity: 1, filter: 'blur(0px)', duration: 0.22, ease: 'snap' },
        2.82,
      )
      tl.to('.hero-grid-region', { opacity: 0, duration: 0.2, ease: 'snap' }, 2.82)
      tl.to('.hero-moment-dot', { opacity: 1, duration: 0.12 }, 2.82)
      tl.to(
        '.hero-moment-dot',
        { x: 0, y: 0, opacity: 0, scale: 0.3, duration: 0.55, ease: 'punch', stagger: 0.02 },
        2.85,
      )
      tl.fromTo(
        '.hero-moment-shockwave',
        { opacity: 0.8, scale: 0.4 },
        { opacity: 0, scale: 1.7, duration: 0.65, ease: 'snap' },
        2.88,
      )
      tl.fromTo(
        '.hero-moment-bloom',
        { opacity: 0, scale: 0.3 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'punch' },
        2.92,
      )
      tl.to('.hero-moment-bloom', { opacity: 0, scale: 1.5, duration: 0.55, ease: 'snap' }, 3.15)

      // ============ ATO 3 — O SISTEMA ENTREGA O CONTROLE ============
      // T 3.05–3.6 — respiro: o restante do headline chega, o Grid volta ao repouso ambiente,
      // e as conexões residuais surgem discretamente.
      tl.to(
        '.hero-word:not(.hero-word-keyword)',
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.4,
          stagger: { each: 0.09, ease: 'power1.inOut' },
        },
        3.05,
      )
      if (signalGridEl) tl.to(signalGridEl, { opacity: 1, duration: 1.1, ease: 'signature' }, 3.1)
      tl.to('.hero-grid-residual', { opacity: 0.22, duration: 0.8, ease: 'signature' }, 3.3)

      // T 3.7–4.9 — subheadline, CTA e a semente do Branch Path.
      tl.to('.hero-subheadline', { opacity: 1, y: 0, duration: 0.5, ease: 'enter' }, 3.7)
      tl.to('.hero-cta', { opacity: 1, scale: 1, duration: 0.5, ease: 'punch' }, 4.2)
      tl.to('.hero-cta-pulse', { opacity: 1, y: 56, duration: 0.5, ease: 'snap' }, 4.3)
      tl.to('.hero-cta-pulse', { opacity: 0, duration: 0.2 }, 4.7)
      tl.to('.hero-branch-seed-line', { scaleY: 1, duration: 0.8, ease: 'signature' }, 4.7)
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  )

  // ---- Ato 3, epílogo — a passagem de bastão: dispara na primeira intenção de navegação. ----
  useEffect(() => {
    if (prefersReducedMotion) return

    function handoff() {
      gsap.to('.hero-grid-residual', {
        opacity: 0,
        duration: 0.6,
        ease: 'signature',
        stagger: 0.05,
      })
      gsap.fromTo(
        '.hero-handoff-glow',
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: 'enter', delay: 0.18, yoyo: true, repeat: 1 },
      )
      cleanup()
    }

    const scrollKeys = new Set(['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp', ' ', 'End', 'Home'])
    function handleKeydown(event: KeyboardEvent) {
      if (scrollKeys.has(event.key)) handoff()
    }

    function cleanup() {
      window.removeEventListener('wheel', handoff)
      window.removeEventListener('touchstart', handoff)
      window.removeEventListener('keydown', handleKeydown)
    }

    window.addEventListener('wheel', handoff, { once: true, passive: true })
    window.addEventListener('touchstart', handoff, { once: true, passive: true })
    window.addEventListener('keydown', handleKeydown)

    return cleanup
  }, [prefersReducedMotion])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-svh flex-col items-center justify-center gap-8 px-container-x text-center"
    >
      <span className="hero-eyebrow text-mono-label text-primary font-mono inline-block overflow-hidden uppercase">
        <span className="hero-eyebrow-inner inline-block">{hero.eyebrow}</span>
      </span>

      <h1 className="text-display max-w-4xl text-foreground">
        {hero.headline.map((token, i) => (
          <span key={i}>
            {token.keyword ? (
              <HeroMoment>
                <span className="hero-word hero-word-keyword text-foreground-emphasis inline-block">
                  {token.text}
                </span>
              </HeroMoment>
            ) : (
              <span className="hero-word inline-block">{token.text}</span>
            )}
            {i < hero.headline.length - 1 && ' '}
          </span>
        ))}
      </h1>

      <p className="hero-subheadline text-body-lg text-foreground-muted max-w-2xl">
        {hero.subheadline}
      </p>

      <div className="hero-cta flex flex-wrap items-center justify-center gap-4">
        <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
        {hero.secondaryCta && (
          <Button href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        )}
      </div>

      <span
        aria-hidden
        className="hero-cta-pulse bg-primary-glow pointer-events-none absolute top-[calc(100%-2rem)] left-1/2 size-1 -translate-x-1/2 rounded-full"
      />
      <span
        aria-hidden
        className="hero-handoff-glow bg-primary-glow pointer-events-none absolute top-[calc(100%+5.5rem)] left-1/2 size-1.5 -translate-x-1/2 rounded-full"
      />
      <svg
        aria-hidden
        className="pointer-events-none absolute top-full left-1/2 h-24 w-px -translate-x-1/2 overflow-visible"
      >
        <line
          className="hero-branch-seed-line"
          x1="0"
          y1="0"
          x2="0"
          y2="96"
          stroke="var(--color-primary)"
          strokeWidth="1"
        />
      </svg>
    </section>
  )
}
