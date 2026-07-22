import type { SimpleCard } from '@/types/content'
import '@/styles/bonus-marquee.css'

interface BonusMarqueeProps {
  items: SimpleCard[]
}

export function BonusMarquee({ items }: BonusMarqueeProps) {
  const track = [...items, ...items]

  return (
    <div className="bonus-marquee relative overflow-hidden py-2" aria-label="Módulos bônus">
      <div className="bonus-marquee__track flex w-max gap-6">
        {track.map((item, i) => (
          <div
            key={`${item.title}-${i}`}
            aria-hidden={i >= items.length}
            className="border-border bg-elevated w-72 shrink-0 rounded-lg border p-6 text-left sm:w-80"
          >
            <h3 className="text-h3 text-foreground">{item.title}</h3>
            <p className="text-body text-foreground-muted mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
