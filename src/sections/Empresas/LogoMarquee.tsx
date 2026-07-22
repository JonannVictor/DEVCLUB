import type { CompanyItem } from '@/types/content'
import '@/styles/logo-marquee.css'

interface LogoMarqueeProps {
  companies: CompanyItem[]
}

/** Faixa monocromática com scroll linear contínuo e loop perfeito (dois blocos idênticos). */
export function LogoMarquee({ companies }: LogoMarqueeProps) {
  const track = [...companies, ...companies]

  return (
    <div className="logo-marquee relative overflow-hidden" aria-label="Empresas parceiras">
      <div className="logo-marquee__track flex w-max items-center gap-20">
        {track.map((company, i) => (
          <div
            key={`${company.name}-${i}`}
            aria-hidden={i >= companies.length}
            className="flex shrink-0 items-center"
          >
            {company.logo ? (
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 w-auto grayscale brightness-0 invert md:h-9"
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
