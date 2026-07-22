import type { TestimonialItem } from '@/types/content'
import { RevealGrid } from '@/components/RevealGrid'
import { Card } from '@/ui/Card'

interface TestimonialsProps {
  items: TestimonialItem[]
}

export function Testimonials({ items }: TestimonialsProps) {
  return (
    <RevealGrid<TestimonialItem>
      items={items}
      keyExtractor={(item) => item.name}
      className="mt-16 grid-cols-1 sm:grid-cols-2"
      renderItem={(item) => (
        <Card className="flex h-full flex-col gap-4 text-left">
          <span aria-hidden className="text-primary/40 text-h1 leading-none">
            "
          </span>
          <p className="text-body text-foreground-muted -mt-4">{item.quote}</p>
          <div className="mt-auto">
            <p className="text-small text-foreground font-medium">{item.name}</p>
            <p className="text-mono-label text-foreground-muted/70 font-mono uppercase">
              {item.role}
            </p>
          </div>
        </Card>
      )}
    />
  )
}
