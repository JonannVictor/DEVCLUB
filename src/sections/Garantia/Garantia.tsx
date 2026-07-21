import { garantia } from '@/constants/content'
import { Section } from '@/components/Section'

export function Garantia() {
  return (
    <Section
      id="garantia"
      eyebrow={garantia.eyebrow}
      title={garantia.title}
      description={garantia.description}
    />
  )
}
