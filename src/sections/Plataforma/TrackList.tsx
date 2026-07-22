import { motion } from 'framer-motion'
import type { SimpleCard } from '@/types/content'
import { fadeUpContainer, fadeUpItem } from '@/animations/variants'

interface TrackListProps {
  items: SimpleCard[]
}

export function TrackList({ items }: TrackListProps) {
  return (
    <motion.ol
      variants={fadeUpContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      className="relative flex flex-col gap-8"
    >
      <span aria-hidden className="bg-border absolute top-1 bottom-1 left-[15px] w-px" />

      {items.map((item, index) => (
        <motion.li key={item.title} variants={fadeUpItem} className="relative flex gap-5 pl-0">
          <span
            aria-hidden
            className="border-primary/40 bg-elevated text-primary text-mono-label relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border font-mono"
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="pt-1">
            <h3 className="text-h3 text-foreground">{item.title}</h3>
            <p className="text-body text-foreground-muted mt-2">{item.description}</p>
          </div>
        </motion.li>
      ))}
    </motion.ol>
  )
}
