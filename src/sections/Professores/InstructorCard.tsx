import { useRef, type PointerEvent } from 'react'
import { motion, type Variants } from 'framer-motion'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import type { InstructorItem } from '@/types/content'

function initialsFrom(name: string): string {
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.94, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: durations.slow, ease: easings.punch },
  },
  hover: {
    y: -6,
    transition: { duration: durations.fast, ease: easings.snap },
  },
}

interface InstructorCardProps {
  instructor: InstructorItem
  featured?: boolean
}

export function InstructorCard({ instructor, featured }: InstructorCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      variants={cardVariants}
      whileHover="hover"
      className={
        'border-border bg-elevated group relative flex h-full flex-col items-center gap-4 overflow-hidden rounded-lg border p-6 text-center transition-colors duration-300 hover:border-primary/30' +
        (featured ? ' border-primary/25' : '')
      }
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(circle 200px at var(--spot-x, 50%) var(--spot-y, 30%), rgba(91, 241, 117, 0.12), rgba(152, 75, 255, 0.08) 45%, transparent 72%)',
        }}
      />

      <div
        className="relative size-20 shrink-0 rounded-full p-[2.5px] transition-transform duration-300 group-hover:scale-105"
        style={{
          background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
        }}
      >
        <div className="bg-bg-base flex size-full items-center justify-center overflow-hidden rounded-full">
          {instructor.photo ? (
            <img
              src={instructor.photo}
              alt={instructor.name}
              className="size-full rounded-full object-cover"
              style={{ objectPosition: '50% 12%' }}
            />
          ) : (
            <div
              className="text-h3 flex size-full items-center justify-center rounded-full font-mono text-foreground"
              style={{
                background:
                  'linear-gradient(135deg, rgba(57, 211, 83, 0.22), rgba(152, 75, 255, 0.16) 60%, var(--color-elevated-2) 100%)',
              }}
            >
              {initialsFrom(instructor.name)}
            </div>
          )}
        </div>
      </div>

      <div className="relative">
        <h3 className="text-h3 text-foreground">{instructor.name}</h3>
        <p className="text-mono-label text-foreground-muted/70 mt-1 font-mono uppercase">
          {instructor.role}
        </p>
      </div>

      {featured && (
        <span
          aria-hidden
          className="border-primary/40 bg-primary/10 text-primary text-mono-label absolute top-3 right-3 rounded-full border px-2 py-0.5 font-mono"
        >
          ★
        </span>
      )}
    </motion.div>
  )
}
