import {
  Activity,
  AlertTriangle,
  BadgeDollarSign,
  Banknote,
  BarChart3,
  Briefcase,
  Building2,
  CreditCard,
  Gauge,
  HandCoins,
  Handshake,
  LineChart,
  PieChart,
  Scale,
  ShieldCheck,
  Target,
  TrendingDown,
  Users,
  type LucideIcon,
} from "lucide-react";

export const site = {
  brand: "L2 ACADEMY",
  brandSuffix: "Consultoria Financeira e Reestruturação de empresas",
  whatsapp: "5547991640213",
  whatsappMessage:
    "Olá, gostaria de agendar um Diagnóstico de Caixa com a L2 Academy.",
  email: "flavio@l2consultorias.com.br",
  city: "Joinville — SC | Atendimento nacional",
};

export const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Casos", href: "#casos" },
  { label: "Nosso Time", href: "#sobre" },
];

export const hero = {
  eyebrow: "Reestruturação Financeira • CFO as a Service",
  headline:
    "Estancamos o sangramento de caixa e devolvemos a previsibilidade financeira da sua empresa.",
  subheadline:
    "CFO as a Service e Reestruturação Estratégica (Turnaround) para empresas que faturam bem, mas não enxergam a cor do dinheiro.",
  primaryCta: "Agendar Diagnóstico sem Custo",
  secondaryCta: "Conhecer Soluções",
  badges: [
    { icon: HandCoins, label: "+R$ 12M em Passivos Renegociados" },
    { icon: Briefcase, label: "Gestão Interina de Elite" },
    { icon: Users, label: "Atendimento Presencial e Remoto" },
  ] satisfies { icon: LucideIcon; label: string }[],
  metrics: [
    { value: "+R$ 12M", label: "Passivos renegociados" },
    { value: "14 dias", label: "Para o diagnóstico" },
    { value: "10+ anos", label: "Em cenários críticos" },
    { value: "3 setores", label: "Saúde, serviços e varejo" },
  ],
};

export const pains = {
  title: "Você reconhece algum destes cenários na sua operação?",
  subtitle:
    "Quando o caixa aperta, o problema raramente é falta de faturamento — é falta de gestão financeira profissional.",
  items: [
    {
      icon: AlertTriangle,
      title: "Caixa no aperto mesmo faturando alto",
      description:
        "O faturamento cresce, mas o saldo bancário nunca acompanha. O lucro existe no papel e desaparece no extrato.",
    },
    {
      icon: PieChart,
      title: "Falta de clareza nas margens e no CMV",
      description:
        "Sem DRE gerencial confiável, você vende produtos e serviços que destroem margem sem perceber.",
    },
    {
      icon: TrendingDown,
      title: "Inadimplência alta e falta de régua de cobrança",
      description:
        "Recebíveis atrasados financiam o cliente e sufocam o seu capital de giro mês após mês.",
    },
    {
      icon: CreditCard,
      title: "Dependência de empréstimos e cheque especial",
      description:
        "A dívida rola, os juros comem a operação e cada mês começa com o caixa já comprometido.",
    },
  ] satisfies { icon: LucideIcon; title: string; description: string }[],
};

export type Solution = {
  id: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
};

export const solutions: { title: string; subtitle: string; items: Solution[] } = {
  title: "Como colocamos sua empresa de volta nos trilhos, lado a lado com você.",
  subtitle:
    "Não entregamos diagnósticos teóricos para você resolver sozinho. Entramos na sua operação, organizamos as contas e assumimos a responsabilidade pelos números ao seu lado.",
  items: [
    {
      id: "cfo",
      icon: LineChart,
      title: "CFO as a Service",
      tagline: "Direção financeira sênior sem custo de estrutura fixa",
      description:
        "Com nosso CFO as a Service, você conta com um CFO especializado que aplica nossa metodologia na sua empresa, trazendo a visão estratégica que você precisa para impulsionar seus resultados.",
      deliverables: [
        "Análise e construção de precificação",
        "DRE Gerencial por unidade de negócio",
        "Fluxo de caixa projetado",
        "Planejamento orçamentário",
        "Implantação de KPIs e painéis de controle de margem",
      ],
    },
    {
      id: "turnaround",
      icon: Activity,
      title: "Turnaround & Reestruturação",
      tagline: "Estancar o sangramento e reorganizar o passivo",
      description:
        "Mapeamento completo da dívida, priorização de credores e negociação estruturada para devolver oxigênio ao caixa.",
      deliverables: [
        "Auditoria completa de passivos",
        "Renegociação com bancos e fornecedores",
        "Negociação de haircut e alongamento",
        "Controle de burn rate semanal",
        "Revisão de pricing e canais de venda",
      ],
    },
    {
      id: "ma",
      icon: Scale,
      title: "M&A e Valuation",
      tagline: "Vender ativo bom pelo preço certo",
      description:
        "Avaliação técnica e condução de venda de ativos e carteiras de clientes com segurança jurídica e financeira.",
      deliverables: [
        "Valuation de carteiras e unidades",
        "Preparação de data room e dossiê",
        "Condução de negociação com compradores",
        "Estruturação de earn-out e garantias",
        "Acompanhamento em rodadas de negociação",
      ],
    },
    {
      id: "governance",
      icon: ShieldCheck,
      title: "Consultoria 360º",
      tagline: "SOLUÇÃO SOB MEDIDA E EXCLUSIVA PARA A SUA NECESSIDADE",
      description:
        "Atuamos em cada área da sua empresa com um plano sob medida. Conectamos o desenvolvimento do time a disciplina do caixa para o seu negócio rodar com lucro sem depender do heroísmo do dono.",
      deliverables: [
        "Diagnóstico completo do negócio",
        "Mapeamento de gargalos em todas as áreas da empresa",
        "Construção de indicadores, dashboards e rotinas de gestão",
        "Treinamento e capacitação de equipes e gestores",
        "Acompanhamento executivo lado a lado com o dono",
      ],
    },
  ],
};

export const methodology = {
  title: "Metodologia de ataque em 4 passos",
  subtitle:
    "Um caminho claro, com entregas em cada etapa — do socorro imediato à governança definitiva.",
  steps: [
    {
      icon: Gauge,
      step: "Passo 01",
      title: "Diagnóstico",
      duration: "Primeiros 20 dias",
      description:
        "Mapeamento de liquidez, identificação e estancamento dos vazamentos de caixa em até 14 dias.",
    },
    {
      icon: Banknote,
      step: "Passo 02",
      title: "Estabilização de Caixa",
      duration: "Dias 21 a 60",
      description:
        "Renegociação de fornecedores e credores, controle do queima de caixa e reconstrução do capital de giro.",
    },
    {
      icon: BarChart3,
      step: "Passo 03",
      title: "Reestruturação Operacional",
      duration: "Mês 3 ao 6",
      description:
        "Precificação correta, recuperação de margem, corte de desperdício e gestão interina das áreas críticas.",
    },
    {
      icon: Target,
      step: "Passo 04",
      title: "Governança & Escala",
      duration: "Mês 6 em diante",
      description:
        "Rotinas de conselho, dashboards gerenciais e transferência de autonomia definitiva para o dono e o time.",
    },
  ] satisfies {
    icon: LucideIcon;
    step: string;
    title: string;
    duration: string;
    description: string;
  }[],
};

export const cases = {
  title: "Casos e resultados",
  subtitle:
    "Números reais de operações em cenário crítico. Nomes preservados por acordo de confidencialidade.",
  items: [
    {
      icon: Building2,
      sector: "Rede de saúde • 3 unidades",
      headline: "R$ 7M de passivo reestruturado em 3 meses",
      result: "Haircut médio de 32% e caixa positivo a partir do 4º mês.",
    },
    {
      icon: BadgeDollarSign,
      sector: "Varejo de moda multimarcas",
      headline: "Crescimento de 10x no Faturamento",
      result: "Revisão de precificação, mix e CMV com treinamentos e estratégias de venda.",
    },
    {
      icon: Handshake,
      sector: "Clinica Ocupacional",
      headline: "Retomada da confiança de stakeholders",
      result: "Renegociação de prazos, alinhamento de expectativas e cumprimento de compromissos.",
    },
  ] satisfies {
    icon: LucideIcon;
    sector: string;
    headline: string;
    result: string;
  }[],
  testimonials: [
    {
      quote:
        "Em duas semanas entendemos, pela primeira vez, para onde o dinheiro estava indo. Em três meses saímos do cheque especial.",
      author: "Sócio-fundador",
      role: "Rede de clínicas — SC",
    },
    {
      quote:
        "Em janeiro eu pensava em fechar a loja, em fevereiro iniciamos a consultoria e em junho meu faturamento já havia crescido 10x. Em agosto fizemos nosso recorde de vendas histórico",
      author: "Dona de Loja",
      role: "Loja de moda infantil — SC",
    },
    {
      quote:
        "A operação chegou a travar por falta de fornecimento de insumos básicos... A renegociação com credores devolveu o fôlego que precisávamos para voltar a operar e crescer com segurança.",
      author: "Gerente Administrativa",
      role: "Rede de clínicas — SC",
    },
  ],
};

// NOVA ESTRUTURA PARA O TIME (ACORDEÃO EXPANSÍVEL)
export const about = {
  eyebrow: "Nosso Time",
  title: "Especialistas em Turnaround e Gestão de Crise",
  members: [
    {
      id: "flavio",
      name: "Flávio Liesenberg",
      role: "Consultor Sênior • Interim Manager & CFO as a Service",
      image: "/imagens/flavio.jpg", // Substitua pelo caminho real da sua foto
      shortDescription:
        "Mais de duas décadas conduzindo operações financeiras em cenários críticos, atuando como Interim Manager e CFO em empresas de saúde, serviços e varejo.",
      paragraphs: [
        "Mais de duas décadas conduzindo operações financeiras em cenários críticos, atuando como Interim Manager e CFO em empresas de saúde, serviços e varejo.",
        "Especialista em reestruturação de passivos, recuperação de margem e implantação de governança financeira em empresas familiares e de médio porte que cresceram mais rápido do que sua gestão.",
        "Atuação hands-on: entra na operação, assume a cadeira, reorganiza o time e sai deixando processo, rotina e autonomia instalados.",
      ],
      highlights: [
        "Interim CFO em operações de R$ 20M a R$ 300M de faturamento",
        "+R$ 12M em passivos auditados e renegociados",
        "Condução de M&A e valuation de carteiras de clientes",
        "Implantação de governança e comitês financeiros",
      ],
    },
    {
      id: "membro-2",
      name: "Nome do Parceiro 2",
      role: "Especialista em Planejamento Estratégico",
      image: "/images/socio2.jpg", // Substitua pelo caminho real
      shortDescription:
        "Com mais de 27 anos de experiência, especialista em planejamento estratégico, marketing e gestão corporativa.",
      paragraphs: [
        "Com vasta experiência conduzindo o crescimento e a estruturação de grandes empresas no mercado nacional.",
        "Foco em estratégia operacional para garantir que a reestruturação financeira esteja perfeitamente alinhada com as metas de negócio da companhia."
      ],
      highlights: [
        "Especialista em Turnaround de Negócios",
        "Gestão de equipes de alta performance",
        "Planejamento estratégico de longo prazo"
      ],
    },
    {
      id: "membro-3",
      name: "Nome do Parceiro 3",
      role: "Consultor de Controladoria",
      image: "/images/socio3.jpg", // Substitua pelo caminho real
      shortDescription:
        "Consultor e administrador de empresas com 20 anos de carreira. Especialista em controladoria e compliance.",
      paragraphs: [
        "Consultor e administrador de empresas com 20 anos de carreira. Especialista em controladoria, planejamento e estruturação de dados.",
        "Garante a segurança da informação e a precisão dos relatórios que baseiam a tomada de decisão em cenários de crise."
      ],
      highlights: [
        "Controladoria e Compliance",
        "Estruturação de DRE Gerencial",
        "Auditoria de processos internos"
      ],
    }
  ]
};

export const form = {
  title: "Solicite seu Diagnóstico Estratégico",
  subtitle:
    "Análise inicial sem custo e sem compromisso. Retornamos em até 1 dia útil com uma leitura objetiva do seu cenário.",
  revenueOptions: [
    { value: "ate-100k", label: "Até R$ 100 mil" },
    { value: "100k-500k", label: "R$ 100 mil a R$ 500 mil" },
    { value: "500k-2m", label: "R$ 500 mil a R$ 2 milhões" },
    { value: "acima-2m", label: "Acima de R$ 2 milhões" },
  ],
  challengeOptions: [
    { value: "caixa", label: "Caixa / Liquidez" },
    { value: "dividas", label: "Dívidas e credores" },
    { value: "margem", label: "Margem e precificação" },
    { value: "outros", label: "Outros" },
  ],
  submitLabel: "Solicitar Diagnóstico Estratégico",
  trust: [
    "Sigilo absoluto — NDA disponível",
    "Sem custo e sem compromisso",
    "Resposta em até 1 dia útil",
  ],
};

export const footer = {
  columns: [
    {
      title: "Navegação",
      links: navLinks,
    },
    {
      title: "Soluções",
      links: solutions.items.map((s) => ({ label: s.title, href: "#solucoes" })),
    },
  ],
  confidentiality:
    "Todas as informações compartilhadas são tratadas sob sigilo profissional. Contratos de confidencialidade (NDA) disponíveis desde o primeiro contato.",
  lgpd:
    "Tratamos dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD — Lei 13.709/2018), exclusivamente para contato comercial e qualificação de atendimento.",
  rights: "© 2026 L2 Academy — L2 Academy. Todos os direitos reservados.",
};