import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/ui/Button'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

interface NavLink {
  label: string
  href: string
}

interface MobileMenuProps {
  open: boolean
  links: NavLink[]
  onLinkClick: () => void
}

export function MobileMenu({ open, links, onLinkClick }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: durations.base, ease: easings.snap }}
          className="border-glass-border bg-glass absolute inset-x-0 top-full border-b backdrop-blur-glass md:hidden"
        >
          <nav className="flex flex-col px-container-x py-6">
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={onLinkClick}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: durations.base, ease: easings.snap, delay: 0.03 * i }}
                className="text-body text-foreground-muted border-border hover:text-foreground border-b py-4 transition-colors first:pt-0 last:border-b-0"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: durations.base,
                ease: easings.snap,
                delay: 0.03 * links.length,
              }}
              className="mt-6"
            >
              <Button href="#formacoes" size="md" className="w-full" onClick={onLinkClick}>
                Quero ser aluno
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
