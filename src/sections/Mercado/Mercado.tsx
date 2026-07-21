import { mercado } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import type { StatItem } from '@/types/content'

export function Mercado() {
  return (
    <Section id="mercado" eyebrow={mercado.eyebrow} title={mercado.title}>
      <RevealGrid<StatItem>
        items={mercado.stats}
        keyExtractor={(stat) => stat.label}
        className="grid-cols-1 gap-10 sm:grid-cols-3"
        renderItem={(stat) => (
          <div className="text-center">
            <p className="text-h1 text-foreground-emphasis">{stat.value}</p>
            <p className="text-body text-foreground-muted mt-2">{stat.label}</p>
          </div>
        )}
      />
    </Section>
  )
}
