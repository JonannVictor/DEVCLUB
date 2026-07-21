import { comunidade } from '@/constants/content'
import { Section } from '@/components/Section'

export function Comunidade() {
  return (
    <Section
      id="comunidade"
      eyebrow={comunidade.eyebrow}
      title={comunidade.title}
      description={comunidade.description}
    />
  )
}
