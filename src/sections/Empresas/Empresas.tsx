import { empresas } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import type { CompanyItem } from '@/types/content'

export function Empresas() {
  return (
    <Section id="empresas" eyebrow={empresas.eyebrow} title={empresas.title}>
      <RevealGrid<CompanyItem>
        items={empresas.companies}
        keyExtractor={(company) => company.name}
        className="grid-cols-2 justify-items-center gap-x-10 gap-y-8 sm:grid-cols-4"
        renderItem={(company) => (
          <span className="text-h3 text-foreground-muted hover:text-foreground font-medium transition-colors">
            {company.name}
          </span>
        )}
      />
    </Section>
  )
}
