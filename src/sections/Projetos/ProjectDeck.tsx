import { motion } from 'framer-motion'
import type { ProjectItem } from '@/types/content'
import { Card } from '@/ui/Card'
import { Badge } from '@/ui/Badge'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

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
        return (
          <motion.div
            key={project.title}
            className={layout.offsetClass}
            initial={{ opacity: 0, y: 56, rotate: layout.rotate * 3, scale: 0.92 }}
            whileInView={{
              opacity: 1,
              y: 0,
              rotate: layout.rotate,
              scale: 1,
              transition: { duration: durations.slow, ease: easings.punch, delay: i * 0.12 },
            }}
            viewport={{ once: true, margin: '-10% 0px' }}
            whileHover={{
              rotate: 0,
              y: -8,
              scale: 1.03,
              transition: { duration: durations.fast, ease: easings.snap },
            }}
          >
            <Card className="flex h-full flex-col gap-4 text-left">
              <div>
                <h3 className="text-h3 text-foreground">{project.title}</h3>
                <p className="text-body text-foreground-muted mt-3">{project.description}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </Card>
          </motion.div>
        )
      })}
    </div>
  )
}
