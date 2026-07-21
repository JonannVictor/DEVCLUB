import { empresas } from '@/constants/content'
import { Section } from '@/components/Section'
import { CompanyMark } from './CompanyMark'

/**
 * Coordenadas curadas manualmente, soltas mas intencionais, alinhadas à mesma escala
 * de malha do Signal Grid — não um grid uniforme, uma constelação.
 */
const DESKTOP_LAYOUT = [
  { top: '6%', left: '10%', size: 'text-h2' },
  { top: '20%', left: '64%', size: 'text-h3' },
  { top: '50%', left: '32%', size: 'text-body-lg' },
  { top: '10%', left: '85%', size: 'text-h3' },
  { top: '64%', left: '6%', size: 'text-h3' },
  { top: '72%', left: '56%', size: 'text-h2' },
  { top: '40%', left: '76%', size: 'text-body-lg' },
  { top: '84%', left: '30%', size: 'text-body-lg' },
] as const

/** Atrasos de assentamento não-uniformes — como se cada nome "acendesse" em seu próprio tempo. */
const ENTRANCE_DELAYS = [0, 0.24, 0.12, 0.36, 0.18, 0.42, 0.3, 0.06]

export function Empresas() {
  return (
    <Section id="empresas" eyebrow={empresas.eyebrow} title={empresas.title}>
      {/* Desktop — constelação alinhada à malha do Signal Grid. */}
      <div className="relative hidden min-h-[clamp(20rem,18rem+10vw,30rem)] md:block">
        {empresas.companies.map((company, i) => {
          const layout = DESKTOP_LAYOUT[i % DESKTOP_LAYOUT.length]
          return (
            <CompanyMark
              key={company.name}
              name={company.name}
              size={layout.size}
              delay={ENTRANCE_DELAYS[i % ENTRANCE_DELAYS.length]}
              position={{ top: layout.top, left: layout.left }}
            />
          )
        })}
      </div>

      {/* Mobile — sem dispersão 2D; a mesma respiração, numa lista que centraliza. */}
      <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:hidden">
        {empresas.companies.map((company, i) => (
          <CompanyMark
            key={company.name}
            name={company.name}
            size="text-h3"
            delay={ENTRANCE_DELAYS[i % ENTRANCE_DELAYS.length]}
          />
        ))}
      </div>
    </Section>
  )
}
