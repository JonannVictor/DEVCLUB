import { motion, type Variants } from 'framer-motion'
import type { HeadlineToken } from '@/types/content'
import { useMotionPreferences } from '@/app/providers'
import { buildRevealWord } from '@/animations/variants'
import { cn } from '@/utils/cn'

interface BuildRevealProps {
  tokens: HeadlineToken[]
  as?: 'h1' | 'h2'
  className?: string
}

export function BuildReveal({ tokens, as = 'h2', className }: BuildRevealProps) {
  const { prefersReducedMotion } = useMotionPreferences()
  const MotionTag = motion[as]

  /**
   * Frases curtas (Hero, CTAs) mantêm o stagger de 0.07s por palavra, que dá o efeito
   * cinematográfico de "construção". Títulos longos (sentenças de briefing) comprimem o
   * stagger para não deixar a última palavra pendurada em blur por segundos.
   */
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: Math.min(0.07, 0.5 / tokens.length),
        delayChildren: 0.04,
      },
    },
  }

  if (prefersReducedMotion) {
    const Tag = as
    return (
      <Tag className={className}>
        {tokens.map((token, i) => (
          <span key={i} className={token.keyword ? 'text-foreground-emphasis' : undefined}>
            {token.text}
            {i < tokens.length - 1 && ' '}
          </span>
        ))}
      </Tag>
    )
  }

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
    >
      {tokens.map((token, i) => (
        <motion.span
          key={i}
          variants={buildRevealWord}
          className={cn('relative inline-block', token.keyword && 'text-foreground-emphasis')}
        >
          {token.keyword && (
            <motion.span
              aria-hidden
              className="bg-primary/25 absolute inset-x-[-4px] inset-y-[8%] -z-10 rounded-sm"
              style={{ transformOrigin: 'left' }}
              initial={{ scaleX: 0, opacity: 1 }}
              animate={{ scaleX: [0, 1, 1], opacity: [1, 1, 0] }}
              transition={{ duration: 0.7, times: [0, 0.45, 1], delay: 0.35 }}
            />
          )}
          {token.text}
          {i < tokens.length - 1 && ' '}
        </motion.span>
      ))}
    </MotionTag>
  )
}
