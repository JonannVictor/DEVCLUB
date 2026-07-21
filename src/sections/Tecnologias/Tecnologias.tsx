import { tecnologias } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import { Badge } from '@/ui/Badge'
import type { TechItem } from '@/types/content'

export function Tecnologias() {
  return (
    <Section id="tecnologias" eyebrow={tecnologias.eyebrow} title={tecnologias.title}>
      <RevealGrid<TechItem>
        items={tecnologias.items}
        keyExtractor={(tech) => tech.name}
        className="flex flex-wrap justify-center gap-3"
        renderItem={(tech) => <Badge>{tech.name}</Badge>}
      />
    </Section>
  )
}
