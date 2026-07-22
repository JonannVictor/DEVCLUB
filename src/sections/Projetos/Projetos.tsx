import { projetos } from '@/constants/content'
import { Section } from '@/components/Section'
import { ProjectDeck } from './ProjectDeck'

export function Projetos() {
  return (
    <Section id="projetos" eyebrow={projetos.eyebrow} title={projetos.title}>
      <ProjectDeck projects={projetos.projects} />
    </Section>
  )
}
