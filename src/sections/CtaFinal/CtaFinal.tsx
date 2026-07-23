import { motion } from 'framer-motion'
import { ctaFinal } from '@/constants/content'
import { BuildReveal } from '@/components/BuildReveal'
import { Button } from '@/ui/Button'
import { Container } from '@/ui/Container'
import { toTokens } from '@/utils/text'
import { fadeUpItem } from '@/animations/variants'

export function CtaFinal() {
  return (
    <section id="cta-final" className="py-section-y relative">
      <Container className="flex flex-col items-center gap-6 text-center">
        <BuildReveal
          as="h1"
          tokens={toTokens(ctaFinal.title)}
          className="text-h1 text-foreground max-w-3xl"
        />

        <motion.p
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-body-lg text-foreground-muted max-w-xl"
        >
          {ctaFinal.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-4"
        >
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10 rounded-full"
            style={{ background: 'radial-gradient(circle, var(--color-primary-glow), transparent 70%)' }}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: [0, 0.8, 0], scale: [0.4, 1.6, 1.8] }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
          <Button href={ctaFinal.primaryCta.href} size="lg" magnetic>
            {ctaFinal.primaryCta.label}
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
