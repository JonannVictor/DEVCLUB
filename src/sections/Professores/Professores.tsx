import { professores } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import { Card } from '@/ui/Card'
import type { InstructorItem } from '@/types/content'

export function Professores() {
  return (
    <Section id="professores" eyebrow={professores.eyebrow} title={professores.title}>
      <RevealGrid<InstructorItem>
        items={professores.instructors}
        keyExtractor={(instructor) => instructor.role}
        className="grid-cols-1 md:grid-cols-3"
        renderItem={(instructor) => (
          <Card className="h-full text-left">
            <div className="bg-elevated-2 mb-4 size-12 rounded-full" aria-hidden />
            <h3 className="text-h3 text-foreground">{instructor.role}</h3>
            <p className="text-body text-foreground-muted mt-3">{instructor.bio}</p>
          </Card>
        )}
      />
    </Section>
  )
}
