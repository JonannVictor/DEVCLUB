import { garantia } from '@/constants/content'
import { Container } from '@/ui/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { GuaranteeShield } from './GuaranteeShield'

export function Garantia() {
  return (
    <section id="garantia" className="py-section-y relative overflow-hidden">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        <SectionHeading
          eyebrow={garantia.eyebrow}
          title={garantia.title}
          description={garantia.description}
          align="left"
        />
        <GuaranteeShield />
      </Container>
    </section>
  )
}
