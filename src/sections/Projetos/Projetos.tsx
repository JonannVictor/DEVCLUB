import { projetos } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import { Card } from '@/ui/Card'
import { Badge } from '@/ui/Badge'
import type { ProjectItem } from '@/types/content'

export function Projetos() {
  return (
    <Section id="projetos" eyebrow={projetos.eyebrow} title={projetos.title}>
      <RevealGrid<ProjectItem>
        items={projetos.projects}
        keyExtractor={(project) => project.title}
        className="grid-cols-1 md:grid-cols-3"
        renderItem={(project) => (
          <Card interactive className="flex h-full flex-col gap-4 text-left">
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
        )}
      />
    </Section>
  )
}
