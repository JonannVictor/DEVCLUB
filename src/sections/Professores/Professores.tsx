import { professores } from '@/constants/content'
import { Section } from '@/components/Section'
import { RevealGrid } from '@/components/RevealGrid'
import { Card } from '@/ui/Card'
import { CornerFrame } from '@/components/CornerFrame'
import type { InstructorItem } from '@/types/content'

function initialsFrom(name: string): string {
  const words = name.trim().split(/\s+/)
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase()
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase()
}

export function Professores() {
  return (
    <Section id="professores" eyebrow={professores.eyebrow} title={professores.title}>
      <RevealGrid<InstructorItem>
        items={professores.instructors}
        keyExtractor={(instructor) => instructor.name}
        className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
        renderItem={(instructor) => (
          <Card interactive className="flex h-full flex-col items-center gap-3 text-center">
            <CornerFrame className="p-1.5">
              <div className="bg-elevated-2 text-foreground-muted text-small flex size-14 items-center justify-center rounded-full font-mono">
                {initialsFrom(instructor.name)}
              </div>
            </CornerFrame>
            <div>
              <h3 className="text-h3 text-foreground">{instructor.name}</h3>
              <p className="text-mono-label text-foreground-muted/70 mt-1 font-mono uppercase">
                {instructor.role}
              </p>
            </div>
          </Card>
        )}
      />
    </Section>
  )
}
