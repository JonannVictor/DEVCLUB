import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { hero } from '@/constants/content'
import { useMotionPreferences } from '@/app/providers'
import { Button } from '@/ui/Button'
import { distances } from '@/animations/distances'
import '@/animations/gsapEases'
import { HeroMoment } from './HeroMoment'

/** Deslocamento inicial de cada dot (offset a partir da própria âncora) — puxado para 0 na convergência. */
const DOT_OFFSETS = [
  { x: -90, y: -70 },
  { x: 0, y: -95 },
  { x: 90, y: -70 },
  { x: -90, y: 70 },
  { x: 0, y: 95 },
  { x: 90, y: 70 },
]

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { prefersReducedMotion } = useMotionPreferences()

  useGSAP(
    () => {
      const navbarEl = document.getElementById('site-navbar')

      if (prefersReducedMotion) {
        gsap.set('.hero-word, .hero-subheadline, .hero-cta', {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'none',
        })
        gsap.set(
          '.hero-moment-dot, .hero-moment-bloom, .hero-moment-shockwave, .hero-boot-pulse, .hero-cta-pulse, .hero-branch-seed-line',
          { opacity: 0 },
        )
        if (navbarEl) gsap.set(navbarEl, { opacity: 1, y: 0 })
        return
      }

      gsap.set('.hero-eyebrow-inner', { yPercent: 110 })
      gsap.set('.hero-word', { opacity: 0, y: distances.md, filter: 'blur(6px)' })
      gsap.set('.hero-subheadline', { opacity: 0, y: distances.md })
      gsap.set('.hero-cta', { opacity: 0, scale: 0.94 })
      gsap.set('.hero-moment-dot', { opacity: 0 })
      DOT_OFFSETS.forEach((offset, i) => {
        gsap.set(`.hero-moment-dot-${i}`, { x: offset.x, y: offset.y })
      })
      gsap.set('.hero-moment-bloom', { opacity: 0, scale: 0.3 })
      gsap.set('.hero-moment-shockwave', { opacity: 0, scale: 0.4 })
      gsap.set('.hero-boot-pulse', { opacity: 0, x: -140, y: -110 })
      gsap.set('.hero-cta-pulse', { opacity: 0, y: 0 })
      gsap.set('.hero-branch-seed-line', { scaleY: 0, transformOrigin: 'top' })
      if (navbarEl) gsap.set(navbarEl, { opacity: 0, y: -8 })

      const tl = gsap.timeline({ defaults: { ease: 'enter' } })

      // T 0.4–0.9 — primeiro pulso do Signal Grid, nascendo perto da navbar
      tl.to('.hero-boot-pulse', { opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'snap' }, 0.4)
      tl.to('.hero-boot-pulse', { opacity: 0, duration: 0.2 }, 0.85)

      // T 0.9–1.3 — a navbar liga, o eyebrow emerge através da máscara
      if (navbarEl) tl.to(navbarEl, { opacity: 1, y: 0, duration: 0.4 }, 0.9)
      tl.to('.hero-eyebrow-inner', { yPercent: 0, duration: 0.55, ease: 'enter' }, 1.0)

      // T 1.3–1.5 — antecipação: a palavra-chave se comprime antes da ignição
      tl.to('.hero-word-keyword', { scale: 0.96, duration: 0.2, ease: 'snap' }, 1.3)

      // T 1.5–2.25 — ignição: Hero Moment converge, a keyword nasce com um punch
      tl.to(
        '.hero-word-keyword',
        { opacity: 1, y: 0, filter: 'blur(0px)', scale: 1.06, duration: 0.4, ease: 'punch' },
        1.5,
      )
      tl.to('.hero-word-keyword', { scale: 1, duration: 0.35, ease: 'punch' }, 1.9)
      tl.to('.hero-moment-dot', { opacity: 1, duration: 0.15 }, 1.5)
      tl.to(
        '.hero-moment-dot',
        { x: 0, y: 0, opacity: 0, scale: 0.3, duration: 0.65, ease: 'punch', stagger: 0.02 },
        1.55,
      )
      tl.fromTo(
        '.hero-moment-shockwave',
        { opacity: 0.8, scale: 0.4 },
        { opacity: 0, scale: 1.7, duration: 0.7, ease: 'snap' },
        1.85,
      )
      tl.fromTo(
        '.hero-moment-bloom',
        { opacity: 0, scale: 0.3 },
        { opacity: 1, scale: 1, duration: 0.3, ease: 'punch' },
        1.9,
      )
      tl.to('.hero-moment-bloom', { opacity: 0, scale: 1.5, duration: 0.55, ease: 'snap' }, 2.15)
      tl.to(
        '.hero-word:not(.hero-word-keyword)',
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.4,
          stagger: { each: 0.07, ease: 'power1.inOut' },
        },
        1.75,
      )

      // T 2.9–3.4 — subheadline
      tl.to('.hero-subheadline', { opacity: 1, y: 0, duration: 0.5, ease: 'enter' }, 2.9)

      // T 3.5–4.1 — o CTA aterrissa com peso, segundo pulso desce
      tl.to('.hero-cta', { opacity: 1, scale: 1, duration: 0.5, ease: 'punch' }, 3.5)
      tl.to('.hero-cta-pulse', { opacity: 1, y: 56, duration: 0.5, ease: 'snap' }, 3.6)
      tl.to('.hero-cta-pulse', { opacity: 0, duration: 0.2 }, 4.0)

      // T 4.1–4.9 — a trilha nasce, firmando a conexão com o resto da página
      tl.to('.hero-branch-seed-line', { scaleY: 1, duration: 0.8, ease: 'signature' }, 4.1)
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  )

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
        className="hero-boot-pulse bg-primary-glow pointer-events-none absolute top-1/4 left-1/2 size-1.5 rounded-full blur-[1px]"
      />
      <span
        aria-hidden
        className="hero-cta-pulse bg-primary-glow pointer-events-none absolute top-[calc(100%-2rem)] left-1/2 size-1 -translate-x-1/2 rounded-full"
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
