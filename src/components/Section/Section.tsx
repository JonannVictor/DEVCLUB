import type { ReactNode } from 'react'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/ui/Container'

interface SectionProps {
  id: string
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  children?: ReactNode
}

export function Section({ id, eyebrow, title, description, align, children }: SectionProps) {
  return (
    <section id={id} className="py-section-y relative">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} description={description} align={align} />
        {children && <div className="mt-16">{children}</div>}
      </Container>
    </section>
  )
}
