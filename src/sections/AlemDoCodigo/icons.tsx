import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const shared = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function IconRecruiter(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="9" cy="7.5" r="3" />
      <path d="M3.5 19c0-3.3 2.46-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <path d="M15.5 9.5 17.25 11.25 21 7.5" />
    </svg>
  )
}

export function IconTherapist(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M7 12h2.2l1.3-3 2.3 6 1.3-3H17" />
    </svg>
  )
}

export function IconMentorship(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M8 15H5.5A2.5 2.5 0 0 1 3 12.5V6.5A2.5 2.5 0 0 1 5.5 4h9A2.5 2.5 0 0 1 17 6.5V8" />
      <path d="M9.5 20 8 15h9.5A2.5 2.5 0 0 0 20 12.5v-3A2.5 2.5 0 0 0 17.5 7h-4" />
    </svg>
  )
}

export function IconAiAgent(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="2.25" />
      <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M19.4 4.6l-1.8 1.8M6.4 17.6l-1.8 1.8" />
    </svg>
  )
}

export function IconHumanSupport(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="2.5" y="13" width="4" height="5.5" rx="1.5" />
      <rect x="17.5" y="13" width="4" height="5.5" rx="1.5" />
      <path d="M18 18.5a4 4 0 0 1-4 3.5h-2" />
    </svg>
  )
}

export function IconCommunity(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <circle cx="6" cy="7" r="2.25" />
      <circle cx="18" cy="7" r="2.25" />
      <circle cx="12" cy="16.5" r="2.25" />
      <path d="M7.6 8.7 10.6 14.8M16.4 8.7 13.4 14.8M8.25 7h7.5" />
    </svg>
  )
}

export function IconExclusiveJobs(props: IconProps) {
  return (
    <svg {...shared} {...props}>
      <rect x="3" y="8" width="18" height="11" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12.5c2.5 1.3 5.6 2 9 2s6.5-.7 9-2" />
    </svg>
  )
}
