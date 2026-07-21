import { useState } from 'react'
import { faq } from '@/constants/content'
import { Section } from '@/components/Section'
import { FaqRow } from './FaqRow'

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" eyebrow={faq.eyebrow} title={faq.title}>
      <div className="mx-auto max-w-2xl">
        {faq.items.map((item, i) => (
          <FaqRow
            key={item.question}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
          />
        ))}
      </div>
    </Section>
  )
}
