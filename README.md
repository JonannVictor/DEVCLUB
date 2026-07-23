# DevClub — Site Institucional

Landing page institucional da **DevClub**, escola de programação. Single-page, dark theme, construída em torno de animação e microinteração: intro cinematográfica, scroll suave, reveals coreografados por seção e uma animação de 192 frames dirigida por scroll.

## Stack

| Camada       | Tecnologia                                   |
| ------------ | --------------------------------------------- |
| Framework    | React 19 + TypeScript                          |
| Build        | Vite 8                                         |
| Estilo       | Tailwind CSS v4 (`@theme` tokens)              |
| Animação     | Framer Motion + GSAP (`@gsap/react`)           |
| Scroll suave | Lenis                                          |
| Lint / format| Oxlint + Prettier (`prettier-plugin-tailwindcss`) |

## Começando

```bash
npm install
npm run dev
```

| Comando              | O que faz                                  |
| -------------------- | ------------------------------------------- |
| `npm run dev`         | Servidor de desenvolvimento (Vite + HMR)    |
| `npm run build`       | Type-check (`tsc -b`) + build de produção   |
| `npm run preview`     | Serve o build de produção localmente        |
| `npm run lint`        | Lint com Oxlint                             |
| `npm run format`      | Formata o projeto com Prettier              |
| `npm run format:check`| Verifica formatação sem escrever arquivos   |

## Estrutura

```
src/
├── app/providers/     # Lenis, preferências de movimento (prefers-reduced-motion) etc.
├── animations/        # Easings compartilhados entre Framer Motion e GSAP (CustomEase)
├── components/         # Peças reutilizáveis de UI e efeito (não são seções da página)
│   ├── BrandIntro/      # Intro cinematográfica, roda uma vez por sessão
│   ├── ScrollFrameCanvas/  # Animação de 192 frames dirigida por scroll
│   ├── Navbar/, Footer/, SignalGrid/, ScrollProgress/, BranchPath/, ...
├── sections/            # Uma pasta por seção da página, na ordem em que aparecem
│   ├── Hero/ Empresas/ Formacoes/ Tecnologias/ AlemDoCodigo/
│   ├── Plataforma/ Projetos/ Comunidade/ Professores/ ModulosBonus/
│   ├── Certificacao/ Mercado/ Garantia/ Faq/ CtaFinal/
├── assets/frames/      # Sequência de imagens da animação de scroll
└── App.tsx             # Composição final: intro + navbar + seções + footer
```

Cada seção e componente maior segue o padrão `Nome/Nome.tsx` + `index.ts` (re-export), com CSS dedicado ao lado quando a animação é complexa demais para classes utilitárias (ex.: `brand-intro.css`, `project-glow.css`, `app-mockup-fx.css`).

## Convenções de animação

- **GSAP** é usado via o hook `useGSAP` (de `@gsap/react`), sempre escopado a um `ref` do container (`{ scope, dependencies }`), seguindo o padrão já estabelecido em `Hero.tsx`.
- `src/animations/gsapEases` registra as mesmas curvas de easing do Framer Motion (`signature`, `snap`, `enter`, `punch`) como `CustomEase` do GSAP, para as duas bibliotecas falarem a mesma "língua" de movimento.
- Toda animação orientada por scroll (certificado, `ScrollFrameCanvas`, etc.) trava o scroll da página (`overflow: hidden` no body) enquanto está em execução, e libera ao terminar.
- Componentes com animação de entrada respeitam `prefers-reduced-motion`, geralmente com uma versão estática/curta no lugar da coreografia completa.
- Marquees infinitos (Empresas, Tecnologias, Módulos Bônus) duplicam o conteúdo o suficiente para cobrir monitores ultrawide sem deixar vão vazio no loop.

## Brand Intro

`src/components/BrandIntro` é uma camada cinematográfica (SVG + GSAP) que toca **uma única vez por sessão** antes do site aparecer: um ponto verde desperta no centro, o símbolo `</>` se constrói a partir dele com glow roxo/verde controlado, um pulso de energia marca o clímax, e esse mesmo pulso vira uma máscara que revela o site por baixo — sem loading bar, sem fade para preto. Controlada por `sessionStorage` (não recarrega em refresh na mesma sessão) e colapsa para uma transição curta sob `prefers-reduced-motion`.

## Idioma

Conteúdo e nomes de seções em português (público-alvo brasileiro); código, commits e este README também.
