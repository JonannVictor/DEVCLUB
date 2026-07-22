import { comunidade } from '@/constants/content'
import { Container } from '@/ui/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { AvatarCluster } from './AvatarCluster'

export function Comunidade() {
  return (
    <section id="comunidade" className="py-section-y relative overflow-hidden">
      <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        <SectionHeading
          eyebrow={comunidade.eyebrow}
          title={comunidade.title}
          description={comunidade.description}
          align="left"
        />
        <AvatarCluster />
      </Container>
    </section>
  )
}
