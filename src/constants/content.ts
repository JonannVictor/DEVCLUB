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
  TestimonialItem,
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
  alumniStat: '+25 mil',
  alumniLabel: 'alunos já passaram por aqui',
  title: 'Alunos nas maiores empresas do Brasil e do mundo:',
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
  title: 'Formações completas para aprender tudo do zero ao avançado.',
  description:
    'Aprenda as principais tecnologias do mercado — do zero, de forma didática, com os melhores profissionais do mercado.',
  items: [
    { name: 'Programação Front End' },
    { name: 'Programação Back End' },
    { name: 'Programação Full Stack' },
    { name: 'Programação Mobile' },
    { name: 'React' },
    { name: 'Node' },
    { name: 'JavaScript Completo' },
    { name: 'HTML5' },
    { name: 'CSS3' },
    { name: 'Gestor de IA' },
    { name: 'IA e Automações' },
    { name: 'Claude & Claude Code' },
    { name: 'Trilha N8N' },
    { name: 'Análise de Dados' },
    { name: 'PowerBI' },
  ] satisfies TechItem[],
}

export const alemDoCodigo = {
  eyebrow: 'Tudo além do código',
  title: 'Tudo que você precisa além do código para evoluir mais rápido.',
  items: [
    {
      title: 'Recrutadora dedicada',
      description: 'Acompanhamento da nossa recrutadora semanalmente, do currículo à colocação.',
    },
    {
      title: 'Terapeuta de alta performance',
      description: 'Suporte emocional focado em alta performance ao longo de toda a jornada.',
    },
    {
      title: 'Mentorias semanais',
      description: 'Encontros semanais com os melhores profissionais de tecnologia do mercado.',
    },
    {
      title: 'Agentes de IA 24h',
      description: 'Dezenas de agentes de IA prontos para te ajudar a qualquer hora do dia.',
    },
    {
      title: 'Suporte humano 7 dias',
      description: 'Dúvidas respondidas por pessoas reais, todos os dias da semana.',
    },
    {
      title: 'A maior comunidade tech',
      description: 'A maior e melhor comunidade de profissionais de tecnologia do Brasil.',
    },
    {
      title: 'Vagas exclusivas',
      description: 'Oportunidades de emprego exclusivas para alunos da formação.',
    },
  ] satisfies SimpleCard[],
}

export const plataforma = {
  eyebrow: 'Plataforma',
  title:
    'Você terá acesso a uma plataforma moderna de aulas, nossa comunidade, área de vagas, IAs para acelerar seu progresso e tudo com suporte dos professores.',
  items: [
    {
      title: 'Plataforma de ensino',
      description: 'Interface moderna, feita para você focar em aprender, não em navegar.',
    },
    {
      title: 'Trilhas e Formações',
      description: 'Cursos organizados por trilhas e formações, do zero ao avançado.',
    },
    {
      title: 'Comunidade de alunos',
      description: 'Milhares de alunos trocando conhecimento e se ajudando todos os dias.',
    },
    {
      title: 'Club Agents',
      description: 'Agentes de IA integrados à plataforma para acelerar o seu progresso.',
    },
    {
      title: 'Playground de treinamento',
      description: 'Ambiente prático para testar, errar e aprender construindo de verdade.',
    },
    {
      title: 'Mural da fama',
      description: 'Reconhecimento público para os alunos que mais se destacam.',
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
    'Milhares de vidas transformadas dentro da nossa comunidade — alunos e ex-alunos trocando conhecimento, tirando dúvidas e se ajudando a cada etapa, antes, durante e depois da formação.',
  /** Ilustrativos — depoimentos reais entram assim que o usuário fornecer. */
  testimonials: [
    {
      quote:
        'Entrei sem saber nada de programação e em 8 meses fechei minha primeira vaga como front-end. A comunidade puxava a gente pra cima o tempo todo.',
      name: 'Camila R.',
      role: 'Formação Front-end',
    },
    {
      quote:
        'O que mais mudou pra mim não foi só o código — foi ter gente pra trocar ideia às 23h numa sexta-feira porque travei num bug. Isso não tem preço.',
      name: 'Lucas M.',
      role: 'Formação Full Stack',
    },
    {
      quote:
        'Vim de outra área, achei que ia demorar anos. Com a trilha certa e o pessoal da comunidade revisando meu código, consegui migrar em menos de um ano.',
      name: 'Beatriz A.',
      role: 'Formação Back-end',
    },
    {
      quote:
        'As mentorias semanais valeram sozinhas o curso inteiro. Aprendi mais sobre carreira ali do que em anos tentando descobrir sozinho.',
      name: 'Thiago N.',
      role: 'Formação Full Stack',
    },
  ] satisfies TestimonialItem[],
}

export const professores = {
  eyebrow: 'Quem ensina',
  title: 'Aprenda com os melhores.',
  /** Nomes reais confirmados; cargo/bio/foto entram assim que o usuário fornecer. */
  instructors: [
    { name: 'Rodolfo Mori', role: 'Instrutor(a)' },
    { name: 'Fernanda', role: 'Instrutor(a)' },
    { name: 'Agustinho', role: 'Instrutor(a)' },
    { name: 'Henrique', role: 'Instrutor(a)' },
    { name: 'Márcio', role: 'Instrutor(a)' },
    { name: 'Juliana', role: 'Instrutor(a)' },
    { name: 'Mateus', role: 'Instrutor(a)' },
  ] satisfies InstructorItem[],
}

export const modulosBonus = {
  eyebrow: 'Módulos bônus',
  title: 'Módulos bônus para te levar mais longe.',
  items: [
    { title: 'Git avançado', description: 'Fluxos de versionamento usados em times reais de engenharia.' },
    { title: 'Inglês técnico', description: 'O vocabulário que você precisa para ler documentação e trabalhar fora do Brasil.' },
    { title: 'Freelancing', description: 'Como conseguir seus primeiros projetos remunerados como desenvolvedor.' },
  ] satisfies SimpleCard[],
}

export const certificacao = {
  eyebrow: 'Certificação',
  title: 'Escola reconhecida pelo MEC, com diplomas oficiais.',
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
