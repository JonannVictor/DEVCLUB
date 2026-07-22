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
        <p className="text-body text-foreground-muted mb-10 text-center md:mb-14">
          {empresas.title}
        </p>
      </Container>

      <LogoMarquee companies={empresas.companies} />
    </section>
  )
}
