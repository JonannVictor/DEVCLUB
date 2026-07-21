import { formacoes } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import { Card } from '@/ui/Card'
import type { SimpleCard } from '@/types/content'

export function Formacoes() {
  return (
    <Section id="formacoes" eyebrow={formacoes.eyebrow} title={formacoes.title}>
      <RevealGrid<SimpleCard>
        items={formacoes.tracks}
        keyExtractor={(track) => track.title}
        className="grid-cols-1 md:grid-cols-3"
        renderItem={(track) => (
          <Card interactive className="h-full text-left">
            <h3 className="text-h3 text-foreground">{track.title}</h3>
            <p className="text-body text-foreground-muted mt-3">{track.description}</p>
          </Card>
        )}
      />
    </Section>
  )
}
