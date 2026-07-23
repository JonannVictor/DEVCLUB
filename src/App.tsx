import { AppProviders } from '@/app/providers'
import { SignalGrid } from '@/components/SignalGrid'
import { ScrollProgress } from '@/components/ScrollProgress'
import { BranchPath } from '@/components/BranchPath'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'
import { Empresas } from '@/sections/Empresas'
import { Formacoes } from '@/sections/Formacoes'
import { Tecnologias } from '@/sections/Tecnologias'
import { AlemDoCodigo } from '@/sections/AlemDoCodigo'
import { Plataforma } from '@/sections/Plataforma'
import { Projetos } from '@/sections/Projetos'
import { ScrollFrameCanvas } from '@/components/ScrollFrameCanvas'
import { Comunidade } from '@/sections/Comunidade'
import { Professores } from '@/sections/Professores'
import { ModulosBonus } from '@/sections/ModulosBonus'
import { Certificacao } from '@/sections/Certificacao'
import { Mercado } from '@/sections/Mercado'
import { Garantia } from '@/sections/Garantia'
import { Faq } from '@/sections/Faq'
import { CtaFinal } from '@/sections/CtaFinal'

function App() {
  return (
    <AppProviders>
      <SignalGrid />
      <ScrollProgress />
      <Navbar />

      <div className="relative">
        <BranchPath />
        <main>
          <Hero />
          <Empresas />
          <Formacoes />
          <Tecnologias />
          <AlemDoCodigo />
          <Plataforma />
          <Projetos />
          <ScrollFrameCanvas />
          <Comunidade />
          <Professores />
          <ModulosBonus />
          <Certificacao />
          <Mercado />
          <Garantia />
          <Faq />
          <CtaFinal />
        </main>
      </div>

      <Footer />
    </AppProviders>
  )
}

export default App
