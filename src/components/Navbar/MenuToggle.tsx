import { motion } from 'framer-motion'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

interface MenuToggleProps {
  open: boolean
  onClick: () => void
}

const transition = { duration: durations.fast, ease: easings.snap }

export function MenuToggle({ open, onClick }: MenuToggleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={open}
      aria-controls="mobile-menu"
      className="relative flex size-9 items-center justify-center md:hidden"
    >
      <motion.span
        aria-hidden
        className="bg-foreground absolute h-px w-5 rounded-full"
        animate={{ y: open ? 0 : -5, rotate: open ? 45 : 0 }}
        transition={transition}
      />
      <motion.span
        aria-hidden
        className="bg-foreground absolute h-px w-5 rounded-full"
        animate={{ opacity: open ? 0 : 1 }}
        transition={transition}
      />
      <motion.span
        aria-hidden
        className="bg-foreground absolute h-px w-5 rounded-full"
        animate={{ y: open ? 0 : 5, rotate: open ? -45 : 0 }}
        transition={transition}
      />
    </button>
  )
}
