import type { CSSProperties, SVGProps } from 'react'

const shared = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

function IconBrackets(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
    </svg>
  )
}

function IconTerminal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <path d="m5 7 5 5-5 5" />
      <path d="M12 17h7" />
    </svg>
  )
}

function IconBranch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M6 7.2V16.8M6 9c0 4 5 5 10 5" />
    </svg>
  )
}

function IconChip(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <rect x="7" y="7" width="10" height="10" rx="1.5" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
    </svg>
  )
}

const ORBIT_ICONS = [
  { Icon: IconBrackets, radius: 210, duration: 22, delay: 0 },
  { Icon: IconTerminal, radius: 210, duration: 22, delay: -5.5 },
  { Icon: IconBranch, radius: 210, duration: 22, delay: -11 },
  { Icon: IconChip, radius: 210, duration: 22, delay: -16.5 },
]

/** Ícones de tecnologia orbitando ao redor do mockup — só desktop, decorativo. */
export function OrbitIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
      {ORBIT_ICONS.map(({ Icon, radius, duration, delay }, i) => (
        <div
          key={i}
          className="orbit-icon"
          style={
            {
              '--orbit-radius': `${radius}px`,
              '--orbit-duration': `${duration}s`,
              '--orbit-delay': `${delay}s`,
            } as CSSProperties
          }
        >
          <div className="orbit-icon__chip border-primary/30 bg-elevated text-primary shadow-glow-primary flex size-9 items-center justify-center rounded-lg border">
            <Icon className="size-4" />
          </div>
        </div>
      ))}
    </div>
  )
}
