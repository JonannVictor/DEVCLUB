import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { useMotionPreferences } from '@/app/providers'
import { durations } from '@/animations/durations'
import { easings } from '@/animations/easings'

interface CountUpProps {
  value: string
  className?: string
}

/** Captura sinal (+/-), a parte numérica e o sufixo — ex: "+40 mil" → ["+", "40", " mil"]. */
const VALUE_PATTERN = /^([+-]?)(\d+(?:[.,]\d+)?)(.*)$/

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10% 0px' })
  const { prefersReducedMotion } = useMotionPreferences()
  const match = value.match(VALUE_PATTERN)

  const [display, setDisplay] = useState(() => {
    if (!match) return value
    const [, prefix, , suffix] = match
    return `${prefix}0${suffix}`
  })

  useEffect(() => {
    if (!isInView) return
    if (!match || prefersReducedMotion) {
      setDisplay(value)
      return
    }

    const [, prefix, numStr, suffix] = match
    const target = parseFloat(numStr.replace(',', '.'))
    const decimals = numStr.includes(',') || numStr.includes('.') ? 1 : 0

    const controls = animate(0, target, {
      duration: durations.cinematic,
      ease: easings.signature,
      onUpdate(latest) {
        const formatted = decimals ? latest.toFixed(decimals) : Math.round(latest).toString()
        setDisplay(`${prefix}${formatted}${suffix}`)
      },
    })

    return () => controls.stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}
