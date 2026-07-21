import { AppProviders } from '@/app/providers'

function App() {
  return (
    <AppProviders>
      <main className="flex min-h-svh flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="h-px w-12 bg-primary" />
        <h1 className="font-sans text-2xl font-medium text-foreground">
          DevClub — fundação pronta.{' '}
          <span className="text-foreground-emphasis">Sections chegam na Fase 2.</span>
        </h1>
      </main>
    </AppProviders>
  )
}

export default App
