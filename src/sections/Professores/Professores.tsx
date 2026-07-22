import { professores } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import { Card } from '@/ui/Card'
import { CornerFrame } from '@/components/CornerFrame'
import type { InstructorItem } from '@/types/content'

const STOPWORDS = new Set(['especialista', 'em', 'de', 'da', 'do'])

function meaningfulWords(role: string): string[] {
  return role
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => !STOPWORDS.has(word))
}

function initialsFrom(role: string): string {
  return meaningfulWords(role)
    .join(' ')
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase() ?? '')
    .join('')
}

function handleFrom(role: string): string {
  return `@${meaningfulWords(role).join('-')}`
}

export function Professores() {
  return (
    <Section id="professores" eyebrow={professores.eyebrow} title={professores.title}>
      <RevealGrid<InstructorItem>
        items={professores.instructors}
        keyExtractor={(instructor) => instructor.role}
        className="grid-cols-1 md:grid-cols-3"
        renderItem={(instructor) => (
          <Card interactive className="h-full text-left">
            <div className="flex items-center gap-4">
              <CornerFrame className="p-1.5">
                <div className="bg-elevated-2 text-foreground-muted text-small flex size-12 items-center justify-center rounded-full font-mono">
                  {initialsFrom(instructor.role)}
                </div>
              </CornerFrame>
              <span className="text-mono-label text-foreground-muted/70 font-mono">
                {handleFrom(instructor.role)}
              </span>
            </div>
            <h3 className="text-h3 text-foreground mt-4">{instructor.role}</h3>
            <p className="text-body text-foreground-muted mt-3">{instructor.bio}</p>
          </Card>
        )}
      />
    </Section>
  )
}
