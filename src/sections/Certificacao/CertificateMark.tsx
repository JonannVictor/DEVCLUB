import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useMotionPreferences } from '@/app/providers'
import { useScrollTilt } from '@/hooks/useScrollTilt'

/** Progresso 0–1 mapeado à passagem do elemento pela janela de leitura confortável da tela. */
const SCRUB_OFFSET: ['start 0.85', 'end 0.35'] = ['start 0.85', 'end 0.35']

export function CertificateMark() {
  const { prefersReducedMotion } = useMotionPreferences()
  const containerRef = useRef<HTMLDivElement>(null)
  const tilt = useScrollTilt({ strength: 2 })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: SCRUB_OFFSET,
  })

  const borderDraw = useTransform(scrollYProgress, [0, 0.18], [1, 0])
  const fieldsOpacity = useTransform(scrollYProgress, [0.16, 0.34], [0, 1])
  const fieldsX = useTransform(scrollYProgress, [0.16, 0.34], [-10, 0])
  const sealScale = useTransform(scrollYProgress, [0.34, 0.54], [0.5, 1])
  const sealOpacity = useTransform(scrollYProgress, [0.34, 0.5], [0, 1])
  const sealRotate = useTransform(scrollYProgress, [0.34, 0.54], [-30, 0])
  const checkDraw = useTransform(scrollYProgress, [0.46, 0.72], [1, 0])
  const glowOpacity = useTransform(scrollYProgress, [0.6, 0.8, 1], [0, 0.9, 0.55])
  const shineX = useTransform(scrollYProgress, [0.68, 1], [-140, 340])
  const shineOpacity = useTransform(scrollYProgress, [0.68, 0.8, 1], [0, 0.8, 0])

  const staticProps = prefersReducedMotion
    ? {
        border: 0,
        fields: { opacity: 1, x: 0 },
        seal: { scale: 1, opacity: 1, rotate: 0 },
        check: 0,
        glow: 0.4,
      }
    : null

  return (
    <div className="relative mx-auto w-full max-w-sm sm:max-w-md">
      <div
        aria-hidden
        className="bg-primary/15 pointer-events-none absolute top-1/2 left-1/2 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      />

      <motion.div ref={containerRef} style={{ rotate: prefersReducedMotion ? 0 : tilt }}>
        <svg viewBox="0 0 320 220" fill="none" className="relative w-full" aria-hidden>
          <defs>
            <linearGradient id="cert-card-fill" x1="0" y1="0" x2="320" y2="220" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="var(--color-elevated)" />
              <stop offset="100%" stopColor="var(--color-elevated-2)" />
            </linearGradient>
            <clipPath id="cert-card-clip">
              <rect x={4} y={4} width={312} height={212} rx={12} />
            </clipPath>
          </defs>

          <rect x={4} y={4} width={312} height={212} rx={12} fill="url(#cert-card-fill)" />

          <motion.rect
            x={4}
            y={4}
            width={312}
            height={212}
            rx={12}
            stroke="var(--color-border-strong)"
            strokeWidth={1.5}
            pathLength={1}
            strokeDasharray={1}
            style={{ strokeDashoffset: staticProps?.border ?? borderDraw }}
          />

          <g clipPath="url(#cert-card-clip)">
            <motion.g
              style={{
                opacity: staticProps?.fields.opacity ?? fieldsOpacity,
                x: staticProps?.fields.x ?? fieldsX,
              }}
            >
              <text x={32} y={36} fontSize={11} fill="var(--color-primary)" fontFamily="var(--font-mono)" letterSpacing="0.06em">
                DEVCLUB · CERTIFICADO
              </text>
              <line x1={32} y1={64} x2={200} y2={64} stroke="var(--color-foreground-muted)" strokeWidth={1.5} opacity={0.5} />
              <line x1={32} y1={84} x2={160} y2={84} stroke="var(--color-border)" strokeWidth={1} />
              <line x1={32} y1={168} x2={140} y2={168} stroke="var(--color-border)" strokeWidth={1} />
              <line x1={32} y1={184} x2={110} y2={184} stroke="var(--color-border)" strokeWidth={1} />
            </motion.g>

            <motion.g
              style={{
                scale: staticProps?.seal.scale ?? sealScale,
                opacity: staticProps?.seal.opacity ?? sealOpacity,
                rotate: staticProps?.seal.rotate ?? sealRotate,
                transformOrigin: '252px 156px',
              }}
            >
              <circle cx={252} cy={156} r={40} stroke="var(--color-primary)" strokeWidth={1.5} />
              <circle cx={252} cy={156} r={31} stroke="var(--color-primary)" strokeWidth={1} opacity={0.5} />
              <motion.path
                d="M236 156l11 11 22-24"
                stroke="var(--color-primary-glow)"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                pathLength={1}
                strokeDasharray={1}
                style={{ strokeDashoffset: staticProps?.check ?? checkDraw }}
              />
            </motion.g>

            <motion.circle
              cx={252}
              cy={156}
              r={40}
              fill="var(--color-primary-glow)"
              style={{ opacity: staticProps?.glow ?? glowOpacity }}
              filter="blur(16px)"
            />

            {!staticProps && (
              <motion.rect
                y={-20}
                width={50}
                height={260}
                fill="var(--color-foreground)"
                opacity={0.07}
                style={{ x: shineX, opacity: shineOpacity }}
              />
            )}
          </g>
        </svg>
      </motion.div>
    </div>
  )
}
