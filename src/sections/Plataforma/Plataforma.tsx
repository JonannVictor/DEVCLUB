import { plataforma } from '@/constants/content'
import { Container } from '@/ui/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { TrackList } from './TrackList'
import { AppMockup } from './AppMockup'

export function Plataforma() {
  return (
    <section id="plataforma" className="py-section-y relative overflow-x-hidden">
      <Container>
        <SectionHeading eyebrow={plataforma.eyebrow} title={plataforma.title} align="left" />

        <div className="mt-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <TrackList items={plataforma.items} />
          <AppMockup />
        </div>
      </Container>
    </section>
  )
}
