import { certificacao } from '@/constants/content'
import { Section } from '@/components/Section'

export function Certificacao() {
  return (
    <Section
      id="certificacao"
      eyebrow={certificacao.eyebrow}
      title={certificacao.title}
      description={certificacao.description}
    />
  )
}
