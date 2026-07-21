import { motion } from 'framer-motion'
import { BuildReveal } from '@/components/BuildReveal'
import { MaskReveal } from '@/components/MaskReveal'
import { fadeUpItem } from '@/animations/variants'
import { cn } from '@/utils/cn'
import { toTokens } from '@/utils/text'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left'

  return (
    <div className={cn('flex flex-col gap-4', alignment, className)}>
      <MaskReveal className="text-mono-label text-primary font-mono uppercase">
        {eyebrow}
      </MaskReveal>

      <BuildReveal as="h1" tokens={toTokens(title)} className="text-h1 text-foreground max-w-3xl" />

      {description && (
        <motion.p
          variants={fadeUpItem}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-body-lg text-foreground-muted max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
