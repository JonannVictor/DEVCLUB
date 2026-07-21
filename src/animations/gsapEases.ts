import gsap from 'gsap'
import { CustomEase } from 'gsap/CustomEase'
import { easings } from './easings'

gsap.registerPlugin(CustomEase)

/**
 * Registra as mesmas curvas de easings.ts como CustomEase nomeadas no GSAP,
 * para que a Hero e o Framer Motion compartilhem literalmente a mesma Motion Language
 * em vez de eases genéricas do GSAP (power2.out etc).
 */
for (const [name, [x1, y1, x2, y2]] of Object.entries(easings)) {
  CustomEase.create(name, `M0,0,C${x1},${y1},${x2},${y2},1,1`)
}
