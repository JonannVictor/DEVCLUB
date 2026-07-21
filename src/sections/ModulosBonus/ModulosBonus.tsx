import { modulosBonus } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import { Card } from '@/ui/Card'
import type { SimpleCard } from '@/types/content'

export function ModulosBonus() {
  return (
    <Section id="modulos-bonus" eyebrow={modulosBonus.eyebrow} title={modulosBonus.title}>
      <RevealGrid<SimpleCard>
        items={modulosBonus.items}
        keyExtractor={(item) => item.title}
        className="grid-cols-1 md:grid-cols-3"
        renderItem={(item) => (
          <Card interactive className="h-full text-left">
            <h3 className="text-h3 text-foreground">{item.title}</h3>
            <p className="text-body text-foreground-muted mt-3">{item.description}</p>
          </Card>
        )}
      />
    </Section>
  )
}
