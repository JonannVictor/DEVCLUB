import { useEffect, useRef, useState } from 'react'
import { jornada } from '@/constants/content'
import { useMotionPreferences } from '@/app/providers'

const frameModules = import.meta.glob<string>('@/assets/frames/*.jpg', {
  eager: true,
  import: 'default',
})

const FRAME_URLS: string[] = Object.entries(frameModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

const FRAME_COUNT = FRAME_URLS.length
const FRAME_WIDTH = 1280
const FRAME_HEIGHT = 720
const SCROLL_HEIGHT_VH = 350

export function ScrollFrameCanvas() {
  const { prefersReducedMotion } = useMotionPreferences()
  const containerRef = useRef<HTMLElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const imagesRef = useRef<HTMLImageElement[]>([])
  const targetFrameRef = useRef(0)
  const currentFrameRef = useRef(-1)
  const rafRef = useRef<number | null>(null)
  const dirtyRef = useRef(false)

  const [loaded, setLoaded] = useState(0)
  const [ready, setReady] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)

  // Só começa a baixar os 192 frames quando a seção se aproxima da viewport —
  // não faz sentido gastar ~19MB de rede logo no carregamento da página.
  useEffect(() => {
    const el = containerRef.current
    if (!el || prefersReducedMotion) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          io.disconnect()
        }
      },
      { rootMargin: '100% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [prefersReducedMotion])

  useEffect(() => {
    if (!shouldLoad || prefersReducedMotion) return
    let cancelled = false
    let count = 0
    const imgs: HTMLImageElement[] = new Array(FRAME_COUNT)

    FRAME_URLS.forEach((src, i) => {
      const img = new Image()
      img.decoding = 'async'
      const done = () => {
        if (cancelled) return
        count += 1
        setLoaded(count)
        if (count === FRAME_COUNT) setReady(true)
      }
      img.onload = done
      img.onerror = done
      img.src = src
      imgs[i] = img
    })
    imagesRef.current = imgs

    return () => {
      cancelled = true
    }
  }, [shouldLoad, prefersReducedMotion])

  useEffect(() => {
    if (!ready) return
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    let canvasW = 0
    let canvasH = 0
    let scale = 1
    let dw = 0
    let dh = 0
    let offX = 0
    let offY = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const rect = canvas.getBoundingClientRect()
      canvasW = rect.width
      canvasH = rect.height
      canvas.width = Math.round(canvasW * dpr)
      canvas.height = Math.round(canvasH * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      scale = Math.max(canvasW / FRAME_WIDTH, canvasH / FRAME_HEIGHT)
      dw = FRAME_WIDTH * scale
      dh = FRAME_HEIGHT * scale
      offX = (canvasW - dw) / 2
      offY = (canvasH - dh) / 2
      currentFrameRef.current = -1
      dirtyRef.current = true
    }

    const draw = (index: number) => {
      const img = imagesRef.current[index]
      if (!img || !img.complete || img.naturalWidth === 0) return
      ctx.clearRect(0, 0, canvasW, canvasH)
      ctx.drawImage(img, offX, offY, dw, dh)
      currentFrameRef.current = index
    }

    const tick = () => {
      rafRef.current = null
      if (dirtyRef.current) {
        dirtyRef.current = false
        const target = targetFrameRef.current
        if (target !== currentFrameRef.current) draw(target)
      }
    }
    const schedule = () => {
      if (rafRef.current == null && !document.hidden) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    const update = () => {
      const rect = container.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height - vh
      const scrolled = -rect.top
      const clamped = Math.min(Math.max(scrolled, 0), Math.max(total, 0))
      const progress = total > 0 ? clamped / total : 0
      const idx = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.round(progress * (FRAME_COUNT - 1))),
      )
      if (idx !== targetFrameRef.current) {
        targetFrameRef.current = idx
        dirtyRef.current = true
        schedule()
      }
    }

    const onResize = () => {
      resize()
      update()
      schedule()
    }
    const onVisibility = () => {
      if (!document.hidden) schedule()
    }

    resize()
    update()
    schedule()

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', onResize)
    document.addEventListener('visibilitychange', onVisibility)
    const ro = new ResizeObserver(onResize)
    ro.observe(container)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', onResize)
      document.removeEventListener('visibilitychange', onVisibility)
      ro.disconnect()
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [ready])

  const pct = FRAME_COUNT ? Math.round((loaded / FRAME_COUNT) * 100) : 0

  if (prefersReducedMotion) {
    return (
      <section className="relative w-full overflow-hidden py-section-y">
        <img
          src={FRAME_URLS[FRAME_COUNT - 1]}
          alt=""
          aria-hidden
          className="mx-auto max-w-4xl rounded-xl border border-border opacity-80"
        />
        <div className="mx-auto mt-8 max-w-2xl text-center">
          <h2 className="text-h1 text-foreground">{jornada.title}</h2>
          <p className="text-body-lg text-foreground-muted mt-4">{jornada.subtitle}</p>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${SCROLL_HEIGHT_VH}vh` }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-bg-base">
        <div className="pointer-events-none absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full bg-primary/25 opacity-40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-24 h-[600px] w-[600px] rounded-full bg-primary-glow/20 opacity-35 blur-3xl" />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full"
          aria-label="Animação sincronizada com o scroll: da primeira linha de código ao deploy"
          style={{
            maskImage:
              'radial-gradient(ellipse 78% 82% at 50% 50%, #000 45%, rgba(0,0,0,0.55) 72%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 78% 82% at 50% 50%, #000 45%, rgba(0,0,0,0.55) 72%, transparent 100%)',
          }}
        />

        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-64"
          style={{
            background: 'linear-gradient(to bottom, var(--color-bg-base), transparent)',
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72"
          style={{
            background: 'linear-gradient(to top, var(--color-bg-base), transparent)',
          }}
        />

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-end p-6 pb-16 text-center sm:pb-24">
          <h2 className="text-h1 text-foreground max-w-2xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
            {jornada.title}
          </h2>
          <p className="text-body-lg text-foreground-muted mt-4 max-w-xl drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            {jornada.subtitle}
          </p>
        </div>

        {!ready && (
          <div className="bg-bg-base absolute inset-0 flex flex-col items-center justify-center gap-4">
            <div className="text-primary-glow text-mono-label font-mono uppercase tracking-[0.3em]">
              carregando jornada
            </div>
            <div className="bg-elevated h-1 w-64 overflow-hidden rounded-full">
              <div
                className="bg-primary h-full transition-[width] duration-150"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
