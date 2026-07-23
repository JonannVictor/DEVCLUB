import { tecnologias } from '@/constants/content'
import { Section } from '@/components/Section'
import '@/styles/tech-marquee.css'

export function Tecnologias() {
  const track = [...tecnologias.items, ...tecnologias.items]

  return (
    <Section
      id="tecnologias"
      eyebrow={tecnologias.eyebrow}
      title={tecnologias.title}
      description={tecnologias.description}
    >
      <div className="tech-marquee relative overflow-hidden py-2" aria-label="Tecnologias e trilhas">
        <div className="tech-marquee__track flex w-max gap-3">
          {track.map((item, i) => (
            <span
              key={`${item.name}-${i}`}
              aria-hidden={i >= tecnologias.items.length}
              className="border-border-strong bg-elevated text-small text-foreground shrink-0 rounded-sm border px-4 py-2 font-mono whitespace-nowrap"
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}
