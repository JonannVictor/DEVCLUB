import { motion } from 'framer-motion'
import { formacoes } from '@/constants/content'
import { Section } from '@/components/Section'
import { Card } from '@/ui/Card'
import { weightedScaleContainer, weightedScaleItem } from '@/animations/variants'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import { cn } from '@/utils/cn'
import type { SimpleCard } from '@/types/content'
import { ForkConnector } from './ForkConnector'

function TrackCard({ track, accent }: { track: SimpleCard; accent?: boolean }) {
  return (
    <Card
      interactive
      className={cn('h-full text-left', accent && 'border-primary/40 shadow-glow-primary')}
    >
      <h3 className="text-h3 text-foreground">{track.title}</h3>
      <p className="text-body text-foreground-muted mt-3">{track.description}</p>
    </Card>
  )
}

// tracks: [0] Front-end, [1] Back-end, [2] Full Stack — ordem definida em constants/content.ts
export function Formacoes() {
  const [frontend, backend, fullstack] = formacoes.tracks

  return (
    <Section id="formacoes" eyebrow={formacoes.eyebrow} title={formacoes.title}>
      <motion.div
        variants={weightedScaleContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <motion.div variants={weightedScaleItem}>
          <TrackCard track={frontend} />
        </motion.div>
        <motion.div variants={weightedScaleItem}>
          <TrackCard track={backend} />
        </motion.div>
      </motion.div>

      <ForkConnector />

      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: durations.slow, ease: easings.punch }}
        className="mx-auto mt-6 max-w-2xl md:mt-0"
      >
        <TrackCard track={fullstack} accent />
      </motion.div>
    </Section>
  )
}
