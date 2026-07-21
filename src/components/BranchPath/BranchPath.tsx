import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useMotionPreferences } from '@/app/providers'

const MAIN_SPINE =
  'M 18 0 C 18 60 16 100 18 140 C 20 180 18 220 18 258 C 18 300 18 340 18 380 C 18 420 18 460 18 500 C 20 540 18 580 18 620 C 16 660 18 700 18 740 C 18 780 18 820 18 860 L 18 1000'

const FORK_LEFT = 'M 18 258 C 10 278 8 310 8 300 C 8 320 12 336 18 340'
const FORK_RIGHT = 'M 18 258 C 26 278 28 310 28 300 C 28 320 24 336 18 340'

const CONVERGE_LEFT = 'M 8 860 C 8 900 14 940 18 960 C 18 970 18 975 18 980'
const CONVERGE_RIGHT = 'M 28 860 C 28 900 22 940 18 960 C 18 970 18 975 18 980'

const NODE_THRESHOLDS = [0.04, 0.22, 0.36, 0.52, 0.68, 0.82, 0.97]

export function BranchPath() {
  const { prefersReducedMotion } = useMotionPreferences()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.2 })

  const spineOffset = useTransform(progress, [0, 1], [1, 0])
  const forkDraw = useTransform(progress, [0.2, 0.3], [1, 0])
  const convergeDraw = useTransform(progress, [0.85, 0.96], [1, 0])

  if (prefersReducedMotion) return null

  return (
    <svg
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
      viewBox="0 0 100 1000"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d={MAIN_SPINE}
        fill="none"
        stroke="var(--color-border-strong)"
        strokeWidth="0.15"
        vectorEffect="non-scaling-stroke"
      />
      <motion.path
        d={MAIN_SPINE}
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="0.2"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray={1}
        style={{ strokeDashoffset: spineOffset }}
      />
      <motion.path
        d={FORK_LEFT}
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="0.15"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray={1}
        style={{ strokeDashoffset: forkDraw }}
      />
      <motion.path
        d={FORK_RIGHT}
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="0.15"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray={1}
        style={{ strokeDashoffset: forkDraw }}
      />
      <motion.path
        d={CONVERGE_LEFT}
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="0.15"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray={1}
        style={{ strokeDashoffset: convergeDraw }}
      />
      <motion.path
        d={CONVERGE_RIGHT}
        fill="none"
        stroke="var(--color-primary-glow)"
        strokeWidth="0.15"
        vectorEffect="non-scaling-stroke"
        pathLength={1}
        strokeDasharray={1}
        style={{ strokeDashoffset: convergeDraw }}
      />
      {NODE_THRESHOLDS.map((threshold, i) => (
        <BranchNode key={i} progress={progress} threshold={threshold} />
      ))}
    </svg>
  )
}

function BranchNode({
  progress,
  threshold,
}: {
  progress: ReturnType<typeof useSpring>
  threshold: number
}) {
  const fill = useTransform(progress, [threshold - 0.015, threshold], ['var(--color-border-strong)', 'var(--color-primary-glow)'])
  const r = useTransform(progress, [threshold - 0.015, threshold], [0.4, 0.7])

  return <motion.circle cx={18} cy={threshold * 1000} r={r} style={{ fill }} />
}
