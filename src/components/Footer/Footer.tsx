import { Container } from '@/ui/Container'

export function Footer() {
  return (
    <footer className="border-border border-t py-10">
      <Container className="text-small text-foreground-muted flex flex-col items-center justify-between gap-4 sm:flex-row">
        <span className="font-mono">DevClub</span>
        <span>&copy; {new Date().getFullYear()} DevClub. Todos os direitos reservados.</span>
      </Container>
    </footer>
  )
}
