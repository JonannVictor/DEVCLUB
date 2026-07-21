import { AnimatePresence, motion } from 'framer-motion'
import type { FaqItem } from '@/types/content'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

interface FaqRowProps {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}

export function FaqRow({ item, isOpen, onToggle }: FaqRowProps) {
  return (
    <div className="border-border border-b">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="text-body-lg text-foreground flex w-full items-center justify-between gap-4 py-6 text-left"
      >
        {item.question}
        <span
          aria-hidden
          className="text-primary shrink-0 text-2xl leading-none transition-transform duration-[var(--motion-duration-base)] ease-snap"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: durations.base, ease: easings.signature }}
            className="overflow-hidden"
          >
            <p className="text-body text-foreground-muted pb-6">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
