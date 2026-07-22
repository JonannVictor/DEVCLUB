import { modulosBonus } from '@/constants/content'
import { Container } from '@/ui/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { BonusMarquee } from './BonusMarquee'

export function ModulosBonus() {
  return (
    <section id="modulos-bonus" className="py-section-y relative overflow-hidden">
      <Container>
        <SectionHeading eyebrow={modulosBonus.eyebrow} title={modulosBonus.title} />
      </Container>

      <div className="mt-16">
        <BonusMarquee items={modulosBonus.items} />
      </div>
    </section>
  )
}
