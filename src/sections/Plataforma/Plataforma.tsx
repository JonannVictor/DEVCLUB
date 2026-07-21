import { plataforma } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import { Card } from '@/ui/Card'
import type { SimpleCard } from '@/types/content'

export function Plataforma() {
  return (
    <Section id="plataforma" eyebrow={plataforma.eyebrow} title={plataforma.title}>
      <RevealGrid<SimpleCard>
        items={plataforma.items}
        keyExtractor={(item) => item.title}
        className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
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
