import type { HeadlineToken } from '@/types/content'

export function toTokens(text: string): HeadlineToken[] {
  return text.split(' ').map((word) => ({ text: word }))
}
