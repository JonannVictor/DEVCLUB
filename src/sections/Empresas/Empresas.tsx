import { empresas } from '@/constants/content'
import { Container } from '@/ui/Container'
import { Badge } from '@/ui/Badge'
import { CountUp } from '@/components/CountUp'
import { LogoMarquee } from './LogoMarquee'

/**
 * Sem o wrapper Section: aqui a frase de contexto é deliberadamente pequena e discreta —
 * a faixa de logos é a protagonista, não o título.
 */
export function Empresas() {
  return (
    <section id="empresas" className="py-section-y relative">
      <Container className="flex flex-col items-center">
        <Badge className="mb-5">
          <CountUp value={empresas.alumniStat} className="mr-1" />
          {empresas.alumniLabel}
        </Badge>
        <p className="text-small text-foreground-muted mx-auto mb-16 max-w-sm text-center md:mb-20 md:max-w-md">
          {empresas.title}
        </p>
      </Container>

      <LogoMarquee companies={empresas.companies} />
    </section>
  )
}
