import { useRef } from 'react'
import { useScroll } from 'framer-motion'
import { certificacao } from '@/constants/content'
import { Container } from '@/ui/Container'
import { SectionHeading } from '@/components/SectionHeading'
import { useMotionPreferences } from '@/app/providers'
import { cn } from '@/utils/cn'
import { CertificateMark } from './CertificateMark'

export function Certificacao() {
  const { prefersReducedMotion } = useMotionPreferences()
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section
      id="certificacao"
      ref={containerRef}
      className="relative"
      style={prefersReducedMotion ? undefined : { height: '220vh' }}
    >
      <div
        className={cn(
          'py-section-y',
          !prefersReducedMotion && 'sticky top-0 flex h-screen items-center overflow-hidden',
        )}
      >
        <Container className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
          <div className="order-2 md:order-1">
            <CertificateMark progress={scrollYProgress} />
          </div>
          <div className="order-1 md:order-2">
            <SectionHeading
              eyebrow={certificacao.eyebrow}
              title={certificacao.title}
              description={certificacao.description}
              align="left"
            />
          </div>
        </Container>
      </div>
    </section>
  )
}
