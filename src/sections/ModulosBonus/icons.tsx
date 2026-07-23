import type { SVGProps } from 'react'

const shared = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function IconGitBranch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <circle cx="6" cy="5" r="2.2" />
      <circle cx="6" cy="19" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M6 7.2V16.8M6 9c0 4 5 5 10 5" />
    </svg>
  )
}

export function IconLanguage(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.4 5.2 3.4 8.5s-1.2 6.2-3.4 8.5c-2.2-2.3-3.4-5.2-3.4-8.5S9.8 5.8 12 3.5Z" />
    </svg>
  )
}

export function IconBriefcase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...shared} {...props}>
      <rect x="3" y="8" width="18" height="11" rx="2" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12.5c2.5 1.3 5.6 2 9 2s6.5-.7 9-2" />
    </svg>
  )
}

