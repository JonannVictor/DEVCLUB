import { motion } from 'framer-motion'
import { tecnologias } from '@/constants/content'
import { Section } from '@/components/Section'
import { assemblyRowContainer, assemblyItem } from '@/animations/assemblyReveal'
import '@/styles/tech-scroll.css'

export function Tecnologias() {
  return (
    <Section
      id="tecnologias"
      eyebrow={tecnologias.eyebrow}
      title={tecnologias.title}
      description={tecnologias.description}
    >
      <motion.div
        variants={assemblyRowContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15% 0px' }}
        className="tech-scroll -mx-container-x flex snap-x snap-mandatory gap-3 overflow-x-auto px-container-x py-2"
      >
        {tecnologias.items.map((item, i) => (
          <motion.span
            key={item.name}
            variants={assemblyItem(i % 2 === 0 ? 'left' : 'right')}
            className="border-border-strong bg-elevated text-small text-foreground shrink-0 snap-start rounded-sm border px-4 py-2 font-mono whitespace-nowrap"
          >
            {item.name}
          </motion.span>
        ))}
      </motion.div>
    </Section>
  )
}
