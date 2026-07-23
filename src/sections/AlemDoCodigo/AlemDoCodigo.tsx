import { useEffect, useRef, type PointerEvent } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { alemDoCodigo } from '@/constants/content'
import { Section } from '@/components/Section'
import { useMotionPreferences } from '@/app/providers'
import { BenefitCard } from './BenefitCard'
import { JourneyLine } from './JourneyLine'
import {
  IconRecruiter,
  IconTherapist,
  IconMentorship,
  IconAiAgent,
  IconHumanSupport,
  IconCommunity,
  IconExclusiveJobs,
} from './icons'

const ICONS = [
  IconRecruiter,
  IconTherapist,
  IconMentorship,
  IconAiAgent,
  IconHumanSupport,
  IconCommunity,
  IconExclusiveJobs,
]

/** Índices destacados (cards maiores) — Agentes de IA 24h e A maior comunidade tech. */
const FEATURED = new Set([3, 5])

/** Posicionamento explícito no grid de 4 colunas × 3 linhas — quebra a simetria perfeita de propósito. */
const LAYOUT: Record<number, string> = {
  0: 'md:col-start-1 md:row-start-1',
  1: 'md:col-start-2 md:row-start-1',
  2: 'md:col-start-1 md:row-start-2',
  3: 'md:col-start-3 md:row-start-1 md:col-span-2 md:row-span-2',
  4: 'md:col-start-2 md:row-start-2',
  5: 'md:col-start-1 md:row-start-3 md:col-span-2',
  6: 'md:col-start-3 md:row-start-3',
}

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

export function AlemDoCodigo() {
  const { prefersReducedMotion } = useMotionPreferences()
  const wrapperRef = useRef<HTMLDivElement>(null)

  const rawAmbX = useMotionValue(0)
  const rawAmbY = useMotionValue(0)
  const ambX = useSpring(rawAmbX, { stiffness: 40, damping: 20, mass: 0.8 })
  const ambY = useSpring(rawAmbY, { stiffness: 40, damping: 20, mass: 0.8 })

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    rawAmbX.set(rect.width / 2)
    rawAmbY.set(rect.height * 0.3)
  }, [rawAmbX, rawAmbY])

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (prefersReducedMotion) return
    const el = wrapperRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    rawAmbX.set(event.clientX - rect.left)
    rawAmbY.set(event.clientY - rect.top)
  }

  return (
    <Section id="alem-do-codigo" eyebrow={alemDoCodigo.eyebrow} title={alemDoCodigo.title}>
      <div ref={wrapperRef} onPointerMove={handlePointerMove} className="alem-canvas relative">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -z-10 hidden size-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-70 md:block"
          style={{
            left: ambX,
            top: ambY,
            background:
              'radial-gradient(circle, rgba(91, 241, 117, 0.1), rgba(152, 75, 255, 0.08) 45%, transparent 72%)',
            filter: 'blur(20px)',
          }}
        />

        <JourneyLine />

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3"
        >
          {alemDoCodigo.items.map((item, i) => {
            const Icon = ICONS[i]
            return (
              <BenefitCard
                key={item.title}
                icon={<Icon />}
                title={item.title}
                description={item.description}
                featured={FEATURED.has(i)}
                className={LAYOUT[i]}
              />
            )
          })}
        </motion.div>
      </div>
    </Section>
  )
}
