import { empresas } from '@/constants/content'
import { Container } from '@/ui/Container'
import { LogoMarquee } from './LogoMarquee'

/**
 * Sem o wrapper Section: aqui a frase de contexto é deliberadamente pequena e discreta —
 * a faixa de logos é a protagonista, não o título.
 */
export function Empresas() {
  return (
    <section id="empresas" className="py-section-y relative">
      <Container>
        <p className="text-small text-foreground-muted mx-auto mb-16 max-w-sm text-center md:mb-20 md:max-w-md">
          {empresas.title}
        </p>
      </Container>

      <LogoMarquee companies={empresas.companies} />
    </section>
  )
}
