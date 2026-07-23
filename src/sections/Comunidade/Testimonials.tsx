import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import type { TestimonialItem } from '@/types/content'
import { useMotionPreferences } from '@/app/providers'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

interface TestimonialsProps {
  items: TestimonialItem[]
}

const AUTOPLAY_MS = 5500

export function Testimonials({ items }: TestimonialsProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const { prefersReducedMotion } = useMotionPreferences()
  const total = items.length

  useEffect(() => {
    if (paused || prefersReducedMotion) return
    const id = setInterval(() => setIndex((i) => (i + 1) % total), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, prefersReducedMotion, total])

  function go(direction: number) {
    setIndex((i) => (i + direction + total) % total)
  }

  return (
    <div
      className="relative mt-16"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative h-[280px] sm:h-[220px]">
        {items.map((item, i) => {
          const offset = i - index
          const dist = Math.abs(offset)
          const isActive = i === index
          if (dist > 2) return null

          return (
            <motion.div
              key={item.name}
              aria-hidden={!isActive}
              className="border-border bg-elevated absolute inset-0 rounded-lg border p-6 sm:p-8"
              animate={{
                x: offset * 32,
                y: dist * 10,
                scale: isActive ? 1 : 0.94 - dist * 0.04,
                rotate: offset * 1.2,
                opacity: isActive ? 1 : 0.35,
                filter: isActive ? 'blur(0px)' : `blur(${dist * 2}px)`,
              }}
              transition={{ duration: durations.slow, ease: easings.punch }}
              style={{ zIndex: total - dist, pointerEvents: isActive ? 'auto' : 'none' }}
            >
              <span aria-hidden className="text-primary/40 text-h1 leading-none">
                "
              </span>
              <p className="text-body text-foreground-muted -mt-4">{item.quote}</p>
              <div className="mt-4">
                <p className="text-small text-foreground font-medium">{item.name}</p>
                <p className="text-mono-label text-foreground-muted/70 font-mono uppercase">
                  {item.role}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Depoimento anterior"
          className="border-border text-foreground-muted hover:border-primary hover:text-primary flex size-9 items-center justify-center rounded-full border transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M10 3 5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex items-center gap-2">
          {items.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver depoimento ${i + 1}`}
              className="bg-border relative h-1.5 overflow-hidden rounded-full transition-[width]"
              style={{ width: i === index ? 24 : 6 }}
            >
              <motion.span
                aria-hidden
                className="bg-primary absolute inset-0"
                animate={{ x: i === index ? 0 : '-100%' }}
                transition={{ duration: durations.base, ease: easings.snap }}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Próximo depoimento"
          className="border-border text-foreground-muted hover:border-primary hover:text-primary flex size-9 items-center justify-center rounded-full border transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  )
}
