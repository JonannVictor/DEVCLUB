import { motion, type Variants } from 'framer-motion'
import { empresas } from '@/constants/content'
import { Section } from '@/components/Section'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import { cn } from '@/utils/cn'

/** As duas empresas com maior peso de reconhecimento assumem os blocos-âncora. */
const ANCHOR_NAMES = ['Nubank', 'Mercado Livre']

const ANCHOR_TILE = 'col-span-2 row-span-1 md:col-span-3 md:row-span-2'
const REGULAR_TILE = 'col-span-1 row-span-1 md:col-span-2 md:row-span-1'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
}

const tileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.base, ease: easings.snap },
  },
}

export function Empresas() {
  const anchors = empresas.companies.filter((c) => ANCHOR_NAMES.includes(c.name))
  const rest = empresas.companies.filter((c) => !ANCHOR_NAMES.includes(c.name))
  const tiles = [...anchors, ...rest]

  return (
    <Section id="empresas" eyebrow={empresas.eyebrow} title={empresas.title}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="bg-border-strong grid grid-cols-2 gap-px overflow-hidden rounded-xl md:grid-cols-6"
      >
        {tiles.map((company, i) => {
          const isAnchor = i < anchors.length
          return (
            <motion.div
              key={company.name}
              variants={tileVariants}
              className={cn(
                'bg-elevated flex items-center justify-center px-6 transition-colors',
                isAnchor ? 'bg-elevated-2 py-8' : 'hover:bg-elevated-2 py-6',
                isAnchor ? ANCHOR_TILE : REGULAR_TILE,
              )}
            >
              <span
                className={cn(
                  'font-medium',
                  isAnchor ? 'text-h1 text-foreground' : 'text-h3 text-foreground-muted',
                )}
              >
                {company.name}
              </span>
            </motion.div>
          )
        })}
      </motion.div>
    </Section>
  )
}
