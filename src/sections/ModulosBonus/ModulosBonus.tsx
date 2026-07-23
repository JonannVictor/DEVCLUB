import { modulosBonus } from '@/constants/content'
import { Container } from '@/ui/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { BonusMarquee } from './BonusMarquee'

export function ModulosBonus() {
  return (
    <section id="modulos-bonus" className="py-section-y relative overflow-hidden">
      <div
        aria-hidden
        className="bg-primary/10 pointer-events-none absolute top-1/2 left-1/2 size-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
      />

      <Container className="relative">
        <SectionHeading eyebrow={modulosBonus.eyebrow} title={modulosBonus.title} />
      </Container>

      <div className="relative mt-16">
        <BonusMarquee items={modulosBonus.items} />
      </div>
    </section>
  )
}
