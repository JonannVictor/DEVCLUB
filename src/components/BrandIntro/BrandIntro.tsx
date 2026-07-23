import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useMotionPreferences } from '@/app/providers'
import '@/animations/gsapEases'
import './brand-intro.css'

const SESSION_KEY = 'devclub-intro-seen'

function hasSeenIntro(): boolean {
  if (typeof window === 'undefined') return true
  try {
    return sessionStorage.getItem(SESSION_KEY) === '1'
  } catch {
    return false
  }
}

function markIntroSeen() {
  try {
    sessionStorage.setItem(SESSION_KEY, '1')
  } catch {
    /* sessionStorage indisponível (modo privado etc.) — sem problema, só roda de novo */
  }
}

/**
 * Brand intro cinematográfica — toca uma única vez por sessão, antes do site aparecer.
 * Sequência: silêncio → semente verde → o símbolo `</>` se constrói a partir dela →
 * pulso de energia no clímax → a própria explosão de luz vira a máscara que revela o site.
 */
export function BrandIntro() {
  const { prefersReducedMotion } = useMotionPreferences()
  const [active, setActive] = useState(() => !hasSeenIntro())

  const containerRef = useRef<HTMLDivElement>(null)
  const purpleGlowRef = useRef<HTMLDivElement>(null)
  const greenGlowRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const flashRef = useRef<HTMLDivElement>(null)
  const linesGroupRef = useRef<SVGGElement>(null)
  const leftBracketRef = useRef<SVGPathElement>(null)
  const rightBracketRef = useRef<SVGPathElement>(null)

  function finish() {
    markIntroSeen()
    setActive(false)
  }

  useEffect(() => {
    if (!active) return
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [active])

  useGSAP(
    () => {
      if (!active) return
      const overlay = containerRef.current
      const leftBracket = leftBracketRef.current
      const rightBracket = rightBracketRef.current
      if (!overlay || !leftBracket || !rightBracket) return

      if (prefersReducedMotion) {
        gsap.set([leftBracket, rightBracket], { opacity: 1, strokeDashoffset: 0 })
        gsap.set(dotRef.current, { opacity: 1, scale: 1 })
        gsap.set(greenGlowRef.current, { opacity: 0.3, scale: 1 })
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.35,
          delay: 0.3,
          ease: 'power1.out',
          onComplete: finish,
        })
        return
      }

      const leftLen = leftBracket.getTotalLength()
      const rightLen = rightBracket.getTotalLength()
      gsap.set(leftBracket, { strokeDasharray: leftLen, strokeDashoffset: leftLen, opacity: 1 })
      gsap.set(rightBracket, { strokeDasharray: rightLen, strokeDashoffset: rightLen, opacity: 1 })
      gsap.set(dotRef.current, { scale: 0, opacity: 0 })
      gsap.set(purpleGlowRef.current, { opacity: 0 })
      gsap.set(greenGlowRef.current, { opacity: 0, scale: 0.5 })
      gsap.set(flashRef.current, { opacity: 0 })

      const lineEls = linesGroupRef.current ? Array.from(linesGroupRef.current.children) : []
      lineEls.forEach((el) => {
        const len = (el as unknown as SVGGeometryElement).getTotalLength()
        gsap.set(el, { strokeDasharray: len, strokeDashoffset: len, opacity: 0 })
      })

      const tl = gsap.timeline({ delay: 0.3 })

      // A semente: um único ponto verde desperta no centro.
      tl.to(dotRef.current, { scale: 1, opacity: 1, duration: 0.16, ease: 'punch' })

      // O símbolo se constrói a partir do ponto — glows, linhas estruturais e o traço em si.
      tl.to(purpleGlowRef.current, { opacity: 0.4, duration: 0.65, ease: 'enter' }, '<')
      tl.to(greenGlowRef.current, { opacity: 0.28, scale: 1, duration: 0.65, ease: 'enter' }, '<')
      tl.to(
        lineEls,
        { opacity: 0.45, strokeDashoffset: 0, duration: 0.5, stagger: 0.04, ease: 'signature' },
        '<0.05',
      )
      tl.to(
        [leftBracket, rightBracket],
        { strokeDashoffset: 0, duration: 0.55, stagger: 0.06, ease: 'signature' },
        '<0.1',
      )

      // Clímax: um pulso curto de energia atravessa o símbolo.
      tl.to([leftBracket, rightBracket], { stroke: '#ffffff', duration: 0.08, ease: 'snap' }, '+=0.04')
      tl.to(greenGlowRef.current, { scale: 1.6, opacity: 0.7, duration: 0.16, ease: 'punch' }, '<')
      tl.to(flashRef.current, { opacity: 0.55, duration: 0.08, ease: 'snap' }, '<')
      tl.to(
        [leftBracket, rightBracket],
        { stroke: '#5bf175', duration: 0.14, ease: 'enter' },
        '+=0.04',
      )
      tl.to(flashRef.current, { opacity: 0, duration: 0.16, ease: 'enter' }, '<')

      // Transição: o próprio pulso se expande e revela o site por baixo (máscara, não fade pra preto).
      tl.add(() => {
        overlay.classList.add('brand-intro--revealing')
        const maxRadius = Math.max(window.innerWidth, window.innerHeight) * 0.75
        const state = { r: 50 }
        overlay.style.setProperty('--reveal-r', '50px')
        gsap.to(state, {
          r: maxRadius,
          duration: 0.6,
          ease: 'power2.inOut',
          onUpdate: () => overlay.style.setProperty('--reveal-r', `${state.r}px`),
        })
      })
      tl.to(overlay, { opacity: 0, duration: 0.2, ease: 'power1.in', onComplete: finish }, '+=0.4')
    },
    { scope: containerRef, dependencies: [active, prefersReducedMotion] },
  )

  if (!active) return null

  return (
    <div ref={containerRef} className="brand-intro" aria-hidden="true">
      <div ref={purpleGlowRef} className="brand-intro__glow brand-intro__glow--purple" />
      <div ref={greenGlowRef} className="brand-intro__glow brand-intro__glow--green" />

      <svg className="brand-intro__lines" viewBox="0 0 200 200">
        <g ref={linesGroupRef} stroke="#5bf175" strokeWidth="0.6" strokeLinecap="round">
          <line x1="100" y1="4" x2="100" y2="72" />
          <line x1="100" y1="128" x2="100" y2="196" />
          <line x1="4" y1="100" x2="72" y2="100" />
          <line x1="128" y1="100" x2="196" y2="100" />
          <line className="brand-intro__line--diag" x1="24" y1="24" x2="76" y2="76" />
          <line className="brand-intro__line--diag" x1="176" y1="176" x2="124" y2="124" />
        </g>
      </svg>

      <div ref={dotRef} className="brand-intro__dot" />

      <svg className="brand-intro__symbol" viewBox="0 0 200 200" fill="none">
        <path
          ref={leftBracketRef}
          d="M82 62 44 100l38 38"
          stroke="#39d353"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          ref={rightBracketRef}
          d="M118 62l38 38-38 38"
          stroke="#39d353"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div ref={flashRef} className="brand-intro__flash" />
    </div>
  )
}
