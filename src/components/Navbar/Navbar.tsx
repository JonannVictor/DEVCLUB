import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from '@/ui/Button'
import { Container } from '@/ui/Container'

export function Navbar() {
  const { scrollY } = useScroll()
  const glassOpacity = useTransform(scrollY, [0, 80], [0, 1])

  return (
    <header id="site-navbar" className="navbar fixed inset-x-0 top-0 z-50 opacity-0">
      <motion.div
        className="border-glass-border absolute inset-0 border-b backdrop-blur-glass"
        style={{ backgroundColor: 'var(--color-glass)', opacity: glassOpacity }}
      />
      <Container className="relative flex items-center justify-between py-4">
        <span className="text-body font-mono font-medium text-foreground">DevClub</span>
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#formacoes" className="text-small text-foreground-muted transition-colors hover:text-foreground">
            Formações
          </a>
          <a href="#professores" className="text-small text-foreground-muted transition-colors hover:text-foreground">
            Professores
          </a>
          <a href="#faq" className="text-small text-foreground-muted transition-colors hover:text-foreground">
            FAQ
          </a>
        </nav>
        <Button href="#formacoes" size="md" variant="ghost">
          Começar agora
        </Button>
      </Container>
    </header>
  )
}
