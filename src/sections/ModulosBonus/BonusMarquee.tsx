import { useRef, type PointerEvent } from 'react'
import type { SimpleCard } from '@/types/content'
import { IconGitBranch, IconLanguage, IconBriefcase } from './icons'
import '@/styles/bonus-marquee.css'

const BONUS_ICONS = [IconGitBranch, IconLanguage, IconBriefcase]

interface BonusMarqueeProps {
  items: SimpleCard[]
}

export function BonusMarquee({ items }: BonusMarqueeProps) {
  const track = [...items, ...items]

  return (
    <div className="bonus-marquee relative overflow-hidden py-2" aria-label="Módulos bônus">
      <div className="bonus-marquee__track flex w-max gap-6">
        {track.map((item, i) => (
          <BonusCard
            key={`${item.title}-${i}`}
            item={item}
            icon={BONUS_ICONS[i % BONUS_ICONS.length]}
            hidden={i >= items.length}
          />
        ))}
      </div>
    </div>
  )
}

interface BonusCardProps {
  item: SimpleCard
  icon: (typeof BONUS_ICONS)[number]
  hidden: boolean
}

function BonusCard({ item, icon: Icon, hidden }: BonusCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      aria-hidden={hidden}
      className="group border-border bg-elevated relative w-72 shrink-0 overflow-hidden rounded-lg border p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-glow-primary sm:w-80"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle 220px at var(--spot-x, 50%) var(--spot-y, 30%), rgba(91, 241, 117, 0.12), rgba(152, 75, 255, 0.08) 45%, transparent 72%)',
        }}
      />

      <span
        aria-hidden
        className="border-primary/25 bg-bg-base text-primary group-hover:border-primary/50 relative flex size-11 items-center justify-center rounded-md border transition-colors"
      >
        <Icon className="size-5" />
      </span>

      <h3 className="text-h3 text-foreground relative mt-4">{item.title}</h3>
      <p className="text-body text-foreground-muted relative mt-2">{item.description}</p>
    </div>
  )
}
