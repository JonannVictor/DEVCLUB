import { certificacao } from '@/constants/content'
import { Container } from '@/ui/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { CertificateMark } from './CertificateMark'

export function Certificacao() {
  return (
    <section id="certificacao" className="py-section-y relative overflow-hidden">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        <div className="order-2 md:order-1">
          <CertificateMark />
        </div>
        <div className="order-1 md:order-2">
          <SectionHeading
            eyebrow={certificacao.eyebrow}
            title={certificacao.title}
            description={certificacao.description}
            align="left"
          />
        </div>
      </Container>
    </section>
  )
}
