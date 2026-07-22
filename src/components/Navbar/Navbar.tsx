import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { Button } from '@/ui/Button'
import { Container } from '@/ui/Container'
import { MenuToggle } from './MenuToggle'
import { MobileMenu } from './MobileMenu'

const NAV_LINKS = [
  { label: 'Formações', href: '#formacoes' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Professores', href: '#professores' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const { scrollY } = useScroll()
  const glassOpacity = useTransform(scrollY, [0, 80], [0, 1])
  const [menuOpen, setMenuOpen] = useState(false)
  const lenis = useLenis()

  useEffect(() => {
    if (menuOpen) {
      lenis?.stop()
      document.body.style.overflow = 'hidden'
    } else {
      lenis?.start()
      document.body.style.overflow = ''
    }
    return () => {
      lenis?.start()
      document.body.style.overflow = ''
    }
  }, [menuOpen, lenis])

  useEffect(() => {
    if (!menuOpen) return
    function handleKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [menuOpen])

  return (
    <header id="site-navbar" className="navbar fixed inset-x-0 top-0 z-50 opacity-0">
      <motion.div
        className="border-glass-border absolute inset-0 border-b backdrop-blur-glass"
        style={{ backgroundColor: 'var(--color-glass)', opacity: glassOpacity }}
      />
      <Container className="relative flex items-center justify-between py-4">
        <a href="#hero" className="text-body font-mono font-medium text-foreground">
          DevClub
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-small text-foreground-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button href="#formacoes" size="md" variant="ghost">
            Começar agora
          </Button>
        </div>
        <MenuToggle open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
      </Container>

      <MobileMenu open={menuOpen} links={NAV_LINKS} onLinkClick={() => setMenuOpen(false)} />
    </header>
  )
}
