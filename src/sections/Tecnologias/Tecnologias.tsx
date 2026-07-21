import { motion } from 'framer-motion'
import { tecnologias } from '@/constants/content'
import { Section } from '@/components/Section'
import { assemblyRowContainer, assemblyItem } from '@/animations/assemblyReveal'

/** Agrupamento estrutural local — content.ts guarda a lista, a seção decide o sistema. */
const TIERS = [
  { label: 'Fundamentos', names: ['HTML', 'CSS'] },
  { label: 'Linguagem', names: ['JavaScript', 'TypeScript'] },
  { label: 'Framework', names: ['React'] },
  { label: 'Backend & Dados', names: ['Node.js', 'SQL', 'APIs REST'] },
  { label: 'Ferramentas', names: ['Git & GitHub'] },
]

export function Tecnologias() {
  return (
    <Section id="tecnologias" eyebrow={tecnologias.eyebrow} title={tecnologias.title}>
      <div className="mx-auto flex max-w-3xl flex-col">
        {TIERS.map((tier, rowIndex) => {
          const items = tecnologias.items.filter((item) => tier.names.includes(item.name))
          const itemVariant = assemblyItem(rowIndex % 2 === 0 ? 'left' : 'right')

          return (
            <div
              key={tier.label}
              className="border-border flex flex-wrap items-center gap-x-4 gap-y-2 border-b py-4 first:pt-0 last:border-b-0"
            >
              <span className="text-mono-label text-foreground-muted font-mono uppercase md:w-36 md:shrink-0">
                {tier.label}
              </span>
              <motion.div
                variants={assemblyRowContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-15% 0px' }}
                className="flex flex-wrap gap-2"
              >
                {items.map((item) => (
                  <motion.span
                    key={item.name}
                    variants={itemVariant}
                    className="border-border-strong bg-elevated text-small text-foreground rounded-sm border px-3 py-1.5 font-mono"
                  >
                    {item.name}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          )
        })}
      </div>
    </Section>
  )
}
