import { useState } from 'react'
import { motion } from 'framer-motion'
import { faq } from '@/constants/content'
import { Section } from '@/components/Section'
import { slideRevealContainer, slideRevealItem } from '@/animations/variants'
import { FaqRow } from './FaqRow'

const itemVariant = slideRevealItem('left')

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" eyebrow={faq.eyebrow} title={faq.title}>
      <motion.div
        variants={slideRevealContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-10% 0px' }}
        className="mx-auto max-w-2xl"
      >
        {faq.items.map((item, i) => (
          <motion.div key={item.question} variants={itemVariant}>
            <FaqRow
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
