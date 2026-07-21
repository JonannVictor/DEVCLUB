import { AppProviders } from '@/app/providers'

function App() {
  return (
    <AppProviders>
      <main className="max-w-container-content gap-content-gap px-container-x mx-auto flex min-h-svh flex-col items-center justify-center text-center">
        <span className="text-mono-label text-primary uppercase">Design System — v0</span>

        <h1 className="text-display text-foreground">
          Fundação pronta.{' '}
          <span className="text-foreground-emphasis">Hero chega com conteúdo real.</span>
        </h1>

        <p className="text-body-lg text-foreground-muted max-w-2xl">
          Tokens de tipografia, cor, motion, grid, elevação, sombra e glass travados.
        </p>

        <div className="mt-content-gap flex flex-wrap items-center justify-center gap-4">
          <div className="border-border bg-elevated rounded-lg border px-4 py-3 shadow-sm">
            <p className="text-small text-foreground-muted">Elevação 1</p>
          </div>
          <div className="border-border-strong bg-elevated-2 rounded-lg border px-4 py-3 shadow-md">
            <p className="text-small text-foreground-muted">Elevação 2</p>
          </div>
          <div className="bg-primary shadow-glow-primary rounded-md px-4 py-3">
            <p className="text-small text-on-primary font-medium">CTA glow</p>
          </div>
          <div className="border-glass-border bg-glass backdrop-blur-glass rounded-lg border px-4 py-3">
            <p className="text-small text-foreground-muted">Glass</p>
          </div>
        </div>
      </main>
    </AppProviders>
  )
}

export default App
