import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { weightedScaleContainer, weightedScaleItem } from '@/animations/variants'
import { cn } from '@/utils/cn'

interface RevealGridProps<T> {
  items: T[]
  renderItem: (item: T, index: number) => ReactNode
  keyExtractor: (item: T, index: number) => string | number
  className?: string
}

export function RevealGrid<T>({ items, renderItem, keyExtractor, className }: RevealGridProps<T>) {
  return (
    <motion.div
      variants={weightedScaleContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-10% 0px' }}
      className={cn('grid gap-6', className)}
    >
      {items.map((item, i) => (
        <motion.div key={keyExtractor(item, i)} variants={weightedScaleItem} className="h-full">
          {renderItem(item, i)}
        </motion.div>
      ))}
    </motion.div>
  )
}
