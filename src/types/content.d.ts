export interface HeadlineToken {
  text: string
  keyword?: boolean
}

export interface CtaLink {
  label: string
  href: string
}

export interface SimpleCard {
  title: string
  description: string
}

export interface TechItem {
  name: string
}

export interface CompanyItem {
  name: string
  /** Caminho para o SVG oficial do logotipo. Ausente = usa o nome como placeholder tipográfico. */
  logo?: string
}

export interface ProjectItem {
  title: string
  description: string
  stack: string[]
}

export interface InstructorItem {
  role: string
  bio: string
}

export interface StatItem {
  value: string
  label: string
}

export interface FaqItem {
  question: string
  answer: string
}

export type SectionId =
  | 'hero'
  | 'empresas'
  | 'formacoes'
  | 'tecnologias'
  | 'alem-do-codigo'
  | 'plataforma'
  | 'projetos'
  | 'comunidade'
  | 'professores'
  | 'modulos-bonus'
  | 'certificacao'
  | 'mercado'
  | 'garantia'
  | 'faq'
  | 'cta-final'
