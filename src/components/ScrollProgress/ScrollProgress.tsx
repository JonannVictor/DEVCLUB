import { motion, useScroll, useSpring } from 'framer-motion'

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 })

  return (
    <motion.div
      aria-hidden
      className="from-primary via-primary-glow to-primary fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r"
      style={{ scaleX }}
    />
  )
}
