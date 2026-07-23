import type { CompanyItem } from '@/types/content'
import '@/styles/logo-marquee.css'

interface LogoMarqueeProps {
  companies: CompanyItem[]
}

/** Repetições suficientes para cobrir monitores ultrawide sem deixar vão vazio na faixa. */
const REPEATS = 4

/** Faixa monocromática com scroll linear contínuo e loop perfeito (blocos idênticos). */
export function LogoMarquee({ companies }: LogoMarqueeProps) {
  const track = Array.from({ length: REPEATS }, () => companies).flat()

  return (
    <div className="logo-marquee relative overflow-hidden py-2" aria-label="Empresas parceiras">
      <div className="logo-marquee__track flex w-max items-center gap-12 md:gap-16">
        {track.map((company, i) => (
          <div
            key={`${company.name}-${i}`}
            aria-hidden={i >= companies.length}
            className="flex h-7 w-36 shrink-0 items-center justify-center md:h-8 md:w-40"
          >
            {company.logo ? (
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-full max-w-full grayscale brightness-0 invert"
              />
            ) : (
              <span className="text-h3 text-foreground-muted/80 font-semibold whitespace-nowrap">
                {company.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
