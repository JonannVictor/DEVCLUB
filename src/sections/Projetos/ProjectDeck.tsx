import { useRef, type PointerEvent } from 'react'
import { motion } from 'framer-motion'
import type { ProjectItem } from '@/types/content'
import { Badge } from '@/ui/Badge'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'
import './project-glow.css'

interface ProjectDeckProps {
  projects: ProjectItem[]
}

const LAYOUT = [
  { rotate: -3, offsetClass: 'md:mt-10' },
  { rotate: 2, offsetClass: 'md:mt-0' },
  { rotate: -2, offsetClass: 'md:mt-16' },
]

export function ProjectDeck({ projects }: ProjectDeckProps) {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
      {projects.map((project, i) => {
        const layout = LAYOUT[i % LAYOUT.length]
        return <ProjectCard key={project.title} project={project} layout={layout} index={i} />
      })}
    </div>
  )
}

interface ProjectCardProps {
  project: ProjectItem
  layout: { rotate: number; offsetClass: string }
  index: number
}

function ProjectCard({ project, layout, index }: ProjectCardProps) {
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
      onPointerMove={handlePointerMove}
      className={`group ${layout.offsetClass}`}
      initial={{ opacity: 0, y: 56, rotate: layout.rotate * 3, scale: 0.92 }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: layout.rotate,
        scale: 1,
        transition: { duration: durations.slow, ease: easings.punch, delay: index * 0.12 },
      }}
      viewport={{ once: true, margin: '-10% 0px' }}
      whileHover={{
        rotate: 0,
        y: -8,
        scale: 1.03,
        transition: { duration: durations.fast, ease: easings.snap },
      }}
    >
      <div
        ref={ref}
        className="border-border bg-elevated shadow-sm relative flex h-full flex-col gap-4 overflow-hidden rounded-lg border p-6 text-left"
      >
        <span aria-hidden className="project-card-ring pointer-events-none" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle 240px at var(--spot-x, 50%) var(--spot-y, 30%), rgba(91, 241, 117, 0.12), rgba(152, 75, 255, 0.09) 45%, transparent 72%)',
          }}
        />

        <div className="relative">
          <h3 className="text-h3 text-foreground">{project.title}</h3>
          <p className="text-body text-foreground-muted mt-3">{project.description}</p>
        </div>
        <div className="relative mt-auto flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
