import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { hero } from '@/constants/content'
import { useMotionPreferences } from '@/app/providers'
import { Button } from '@/ui/Button'
import { distances } from '@/animations/distances'
import { HeroMoment } from './HeroMoment'

export function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const { prefersReducedMotion } = useMotionPreferences()

  useGSAP(
    () => {
      const navbarEl = document.getElementById('site-navbar')

      if (prefersReducedMotion) {
        gsap.set('.hero-eyebrow, .hero-word, .hero-subheadline, .hero-cta', {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'none',
        })
        if (navbarEl) gsap.set(navbarEl, { opacity: 1, y: 0 })
        return
      }

      gsap.set('.hero-eyebrow', { opacity: 0, y: distances.sm })
      gsap.set('.hero-word', { opacity: 0, y: distances.md, filter: 'blur(6px)' })
      gsap.set('.hero-subheadline', { opacity: 0, y: distances.md })
      gsap.set('.hero-cta', { opacity: 0, scale: 0.96 })
      gsap.set('.hero-moment-dot', { opacity: 0 })
      gsap.set('.hero-moment-dot-0', { x: -32, y: -24 })
      gsap.set('.hero-moment-dot-1', { x: 32, y: -24 })
      gsap.set('.hero-moment-dot-2', { x: -32, y: 24 })
      gsap.set('.hero-moment-dot-3', { x: 32, y: 24 })
      gsap.set('.hero-moment-bloom', { opacity: 0, scale: 0 })
      gsap.set('.hero-boot-pulse', { opacity: 0, x: -140, y: -110 })
      gsap.set('.hero-cta-pulse', { opacity: 0, y: 0 })
      gsap.set('.hero-branch-seed-line', { scaleY: 0, transformOrigin: 'top' })
      if (navbarEl) gsap.set(navbarEl, { opacity: 0, y: -8 })

      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      // T 0.4–0.9 — primeiro pulso do Signal Grid, nascendo perto da navbar
      tl.to('.hero-boot-pulse', { opacity: 1, x: 0, y: 0, duration: 0.5, ease: 'power1.in' }, 0.4)
      tl.to('.hero-boot-pulse', { opacity: 0, duration: 0.2 }, 0.85)

      // T 0.9–1.3 — a navbar liga
      if (navbarEl) tl.to(navbarEl, { opacity: 1, y: 0, duration: 0.4 }, 0.9)
      tl.to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.3 }, 1.1)

      // T 1.3–2.6 — Build Reveal: a palavra-chave nasce primeiro (Hero Moment)
      tl.to('.hero-word-keyword', { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.5 }, 1.3)
      tl.to('.hero-moment-dot', { opacity: 1, duration: 0.15 }, 1.3)
      tl.to(
        '.hero-moment-dot',
        { x: 0, y: 0, opacity: 0, scale: 0.4, duration: 0.55, ease: 'power2.in' },
        1.35,
      )
      tl.fromTo(
        '.hero-moment-bloom',
        { opacity: 0, scale: 0 },
        { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' },
        1.75,
      )
      tl.to('.hero-moment-bloom', { opacity: 0, scale: 1.4, duration: 0.5, ease: 'power2.out' }, 1.95)
      tl.to(
        '.hero-word:not(.hero-word-keyword)',
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.4, stagger: 0.07 },
        1.55,
      )

      // T 2.6–3.4 — subheadline
      tl.to('.hero-subheadline', { opacity: 1, y: 0, duration: 0.5 }, 2.6)

      // T 3.4–4.0 — o CTA se planta, segundo pulso desce
      tl.to('.hero-cta', { opacity: 1, scale: 1, duration: 0.4 }, 3.4)
      tl.to('.hero-cta-pulse', { opacity: 1, y: 56, duration: 0.5, ease: 'power1.in' }, 3.5)
      tl.to('.hero-cta-pulse', { opacity: 0, duration: 0.2 }, 3.9)

      // T 4.0–5.0 — a trilha nasce
      tl.to('.hero-branch-seed-line', { scaleY: 1, duration: 0.8, ease: 'power2.out' }, 4.0)
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] },
  )

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-svh flex-col items-center justify-center gap-8 px-container-x text-center"
    >
      <span className="hero-eyebrow text-mono-label text-primary font-mono uppercase">
        {hero.eyebrow}
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
