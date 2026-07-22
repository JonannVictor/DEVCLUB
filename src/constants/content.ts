/**
 * Conteúdo temporário, estruturado conforme as seções obrigatórias do briefing.
 * Copy final entra depois — sem alterar nenhum componente que consome este arquivo.
 */
import type {
  CompanyItem,
  CtaLink,
  FaqItem,
  HeadlineToken,
  InstructorItem,
  ProjectItem,
  SimpleCard,
  StatItem,
  TechItem,
} from '@/types/content'
import nubankLogo from '@/assets/logos/nubank.svg'
import ifoodLogo from '@/assets/logos/ifood.svg'
import magaluLogo from '@/assets/logos/magalu.svg'
import mercadoLivreLogo from '@/assets/logos/mercado-livre.svg'
import itauLogo from '@/assets/logos/itau.svg'
import c6bankLogo from '@/assets/logos/c6bank.svg'
import stoneLogo from '@/assets/logos/stone.svg'
import ambevLogo from '@/assets/logos/ambev.svg'

export const hero = {
  eyebrow: 'Formação em Desenvolvimento Web',
  headline: [
    { text: 'De iniciante a' },
    { text: 'desenvolvedor', keyword: true },
    { text: 'profissional.' },
  ] satisfies HeadlineToken[],
  subheadline:
    'Aprenda a programar do zero, construa projetos reais e entre no mercado de tecnologia com uma formação completa, prática e orientada por quem já trilhou esse caminho.',
  primaryCta: { label: 'Quero começar minha jornada', href: '#formacoes' } satisfies CtaLink,
  secondaryCta: { label: 'Conhecer a formação', href: '#formacoes' } satisfies CtaLink,
}

export const empresas = {
  eyebrow: 'Onde nossos alunos estão',
  title: 'Empresas onde nossos alunos constroem suas carreiras.',
  companies: [
    { name: 'Nubank', logo: nubankLogo },
    { name: 'iFood', logo: ifoodLogo },
    { name: 'Magalu', logo: magaluLogo },
    { name: 'Mercado Livre', logo: mercadoLivreLogo },
    { name: 'Itaú', logo: itauLogo },
    { name: 'C6 Bank', logo: c6bankLogo },
    { name: 'Stone', logo: stoneLogo },
    { name: 'Ambev Tech', logo: ambevLogo },
  ] satisfies CompanyItem[],
}

export const formacoes = {
  eyebrow: 'Formações',
  title: 'Escolha o caminho da sua evolução.',
  tracks: [
    {
      title: 'Front-end',
      description:
        'Interfaces modernas, responsivas e performáticas — do HTML puro a aplicações completas em React.',
    },
    {
      title: 'Back-end',
      description:
        'Lógica de servidor, bancos de dados e APIs robustas — a fundação que sustenta qualquer produto digital.',
    },
    {
      title: 'Full Stack',
      description:
        'Domínio de ponta a ponta: front-end, back-end e a capacidade de construir um produto completo sozinho.',
    },
  ] satisfies SimpleCard[],
}

export const tecnologias = {
  eyebrow: 'Tecnologias',
  title: 'As ferramentas que o mercado realmente usa.',
  items: [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'Git & GitHub' },
    { name: 'SQL' },
    { name: 'APIs REST' },
  ] satisfies TechItem[],
}

export const alemDoCodigo = {
  eyebrow: 'Tudo além do código',
  title: 'Formação técnica não é suficiente. Preparamos você para o mercado.',
  items: [
    {
      title: 'Currículo e LinkedIn',
      description: 'Como se posicionar para recrutadores e passar pelos primeiros filtros.',
    },
    {
      title: 'Entrevista técnica',
      description: 'Simulações reais de processos seletivos, do desafio técnico à entrevista final.',
    },
    {
      title: 'Portfólio',
      description: 'Projetos que comprovam o que você sabe fazer — não apenas o que você diz saber.',
    },
    {
      title: 'Soft skills',
      description: 'Comunicação, trabalho em equipe e autonomia — o que diferencia um júnior contratável.',
    },
  ] satisfies SimpleCard[],
}

export const plataforma = {
  eyebrow: 'Plataforma',
  title: 'Estude no seu ritmo, sem perder o rumo.',
  items: [
    {
      title: 'Aulas sob demanda',
      description: 'Conteúdo gravado, disponível 24h, no seu tempo e na sua velocidade.',
    },
    {
      title: 'Trilha de progresso',
      description: 'Você sempre sabe exatamente onde está e o que vem a seguir.',
    },
    {
      title: 'Exercícios práticos',
      description: 'Cada módulo termina com prática real, não apenas teoria.',
    },
    {
      title: 'Suporte direto',
      description: 'Dúvidas respondidas por quem entende do assunto, sem enrolação.',
    },
  ] satisfies SimpleCard[],
}

export const projetos = {
  eyebrow: 'Projetos práticos',
  title: 'Você não aprende só teoria. Você constrói.',
  projects: [
    {
      title: 'E-commerce completo',
      description: 'Catálogo, carrinho, checkout e painel administrativo, do zero ao deploy.',
      stack: ['React', 'Node.js', 'SQL'],
    },
    {
      title: 'Dashboard de dados',
      description: 'Visualização de dados em tempo real consumindo uma API própria.',
      stack: ['React', 'TypeScript', 'APIs REST'],
    },
    {
      title: 'Plataforma social',
      description: 'Autenticação, perfis de usuário e interações — os fundamentos de qualquer rede.',
      stack: ['Node.js', 'SQL', 'Git & GitHub'],
    },
  ] satisfies ProjectItem[],
}

export const comunidade = {
  eyebrow: 'Comunidade',
  title: 'Você não caminha sozinho.',
  description:
    'Milhares de alunos e ex-alunos trocando conhecimento, tirando dúvidas e se ajudando a cada etapa — antes, durante e depois da formação.',
}

export const professores = {
  eyebrow: 'Quem ensina',
  title: 'Aprenda com quem constrói software todos os dias.',
  instructors: [
    {
      role: 'Especialista em Front-end',
      bio: 'Anos de experiência construindo interfaces para produtos usados por milhões de pessoas.',
    },
    {
      role: 'Especialista em Back-end',
      bio: 'Arquitetura de sistemas e bancos de dados em ambientes de alta escala.',
    },
    {
      role: 'Especialista em Carreira Tech',
      bio: 'Já esteve dos dois lados do processo seletivo — como candidato e como entrevistador.',
    },
  ] satisfies InstructorItem[],
}

export const modulosBonus = {
  eyebrow: 'Módulos bônus',
  title: 'Mais do que a formação principal.',
  items: [
    { title: 'Git avançado', description: 'Fluxos de versionamento usados em times reais de engenharia.' },
    { title: 'Inglês técnico', description: 'O vocabulário que você precisa para ler documentação e trabalhar fora do Brasil.' },
    { title: 'Freelancing', description: 'Como conseguir seus primeiros projetos remunerados como desenvolvedor.' },
  ] satisfies SimpleCard[],
}

export const certificacao = {
  eyebrow: 'Certificação',
  title: 'Um certificado que representa sua evolução real.',
  description:
    'Emitido ao final da formação, com validação de todos os projetos práticos entregues ao longo da jornada.',
}

export const mercado = {
  eyebrow: 'Mercado',
  title: 'A tecnologia não para de contratar.',
  stats: [
    { value: '+40 mil', label: 'vagas de tecnologia abertas no Brasil' },
    { value: '100%', label: 'remoto em boa parte das oportunidades' },
    { value: '+1', label: 'setor que mais cresce em contratações' },
  ] satisfies StatItem[],
}

export const garantia = {
  eyebrow: 'Garantia',
  title: 'Risco zero para começar.',
  description:
    'Se nos primeiros dias você sentir que a formação não é para você, devolvemos o seu investimento — sem burocracia.',
}

export const faq = {
  eyebrow: 'FAQ',
  title: 'Perguntas frequentes.',
  items: [
    {
      question: 'Preciso saber programar antes de começar?',
      answer: 'Não. A formação foi desenhada para começar do absoluto zero.',
    },
    {
      question: 'Quanto tempo dura a formação?',
      answer: 'Você estuda no seu ritmo — o conteúdo fica disponível para acesso contínuo.',
    },
    {
      question: 'Recebo certificado ao final?',
      answer: 'Sim, mediante a entrega dos projetos práticos de cada módulo.',
    },
    {
      question: 'Preciso de algum equipamento específico?',
      answer: 'Não. Um computador com acesso à internet é suficiente para acompanhar todo o conteúdo.',
    },
  ] satisfies FaqItem[],
}

export const ctaFinal = {
  title: 'Sua jornada como desenvolvedor começa agora.',
  description: 'Junte-se a quem já decidiu mudar de carreira e está construindo o futuro em tecnologia.',
  primaryCta: { label: 'Garantir minha vaga', href: '#formacoes' } satisfies CtaLink,
}
