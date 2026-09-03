# L2 Growth Hub

Atue como UI/UX Designer Sênior e Desenvolvedor Front-end especialista em Landing Pages B2B de alta conversão. Crie o site institucional e comercial para uma consultoria sênior de Reestruturação Financeira (Turnaround) e CFO as a Service chamada "L2 Academy / Flávio Liesenberg Consulting".

Tech Stack Obrigatória: React, TypeScript, Tailwind CSS, Shadcn UI (componentes de UI) e Lucide React (ícones).

Estética Visual: Executiva, moderna, estilo "Wall Street / Big Tech". Usar paleta Slate, Navy Blue profundo, com destaques em Emerald/Teal (para indicadores de lucro e liquidez) e textos de alto contraste. Totalmente responsivo.

Requisitos de Arquitetura de Código (Para exportação limpa):

- Crie seções totalmente componentizadas na pasta `src/components/sections/`.

- Armazene textos, depoimentos, serviços e métricas em um arquivo de dados dedicado (`src/data/content.ts`).

Estrutura da Landing Page:

1. HEADER & NAVBAR:

- Logo "L2 ACADEMY" (estilo corporativo minimalista).

- Links de ancoragem: "Soluções", "Metodologia", "Casos", "Nosso Time".

- Botão CTA principal: "Agendar Diagnóstico" (destaque visual).

2. HERO SECTION (Dobra Principal):

- Headline impactante: "Estancamos o sangramento de caixa e devolvemos a previsibilidade financeira da sua empresa."

- Subheadline: "CFO as a Service e Reestruturação Estratégica (Turnaround) para empresas que faturam bem, mas não enxergam a cor do dinheiro."

- CTAs Duplos: "Agendar Diagnóstico sem Custo" (Primário) e "Conhecer Soluções" (Secundário).

- Banner de Prova Social com badges: "+R$ 12M em Passivos Renegociados", "Gestão Interina de Elite", "Atendimento Presencial e Remoto".

3. SEÇÃO "DORES DO EMPRESÁRIO" (Grid de Cards):

- Título: "Você reconhece algum destes cenários na sua operação?"

- Cards interativos com ícones de alerta: 

  * "Caixa no aperto mesmo faturando alto"

  * "Falta de clareza nas margens e no CMV"

  * "Inadimplência alta e falta de régua de cobrança"

  * "Dependência excessiva de empréstimos e cheque especial"

4. SEÇÃO "SOLUÇÕES E SERVIÇOS" (Tabs ou Grid Shadcn):

- CFO as a Service (Direção financeira interina, DRE Gerencial, Fluxo de Caixa Projetado)

- Turnaround & Reestruturação (Auditoria de passivos, renegociação com credores e haircut)

- M&A e Valuation de Carteiras (Avaliação e venda segura de ativos/carteiras de clientes)

- Blindagem e Governance (Processos de compliance e gestão de equipes financeiras)

5. METODOLOGIA DE ATAQUE (Stepper / Timeline em 4 Passos):

- Passo 1: Diagnóstico (Mapeamento de liquidez e estancamento de vazamentos em 14 dias)

- Passo 2: Estabilização de Caixa (Renegociação de fornecedores e controle do burn rate)

- Passo 3: Reestruturação Operacional (Precificação correta, margens e gestão interina)

- Passo 4: Governança & Escala (Rotinas de conselho, dashboards e autonomia do dono)

6. PERFIL DO CONSULTOR / AUTORIDADE:

- Layout de 2 colunas com foto/placeholder elegante.

- Perfil de Flávio Liesenberg: Consultor Sênior, atuação como Interim Manager/CFO, histórico em cenários críticos e reestruturação de empresas de saúde, serviços e varejo.

7. FORMULÁRIO DE CONTATO & QUALIFICAÇÃO (Lead Capture Form):

- Card destacado com formulário interativo:

  * Campo Nome Completo

  * Campo E-mail Corporativo

  * Campo WhatsApp

  * Select: Faturamento Mensal (Até 100k / 100k a 500k / 500k a 2M / Acima de 2M)

  * Select: Principal Desafio (Caixa / Dívidas / Margem / Outros)

- Botão "Solicitar Diagnóstico Estratégico".

- Botão flutuante fixo de WhatsApp no canto inferior direito.

8. FOOTER:

- Links de navegação, avisos de confidencialidade/LGPD, direitos reservados de 2026.

Gere o projeto com rotas funcionais, animações suaves de scroll e componentes limpos em TypeScript para que eu possa continuar o desenvolvimento localmente no VS Code.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/e62b077b-40de-4e2a-9238-c09bbcd15ccc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
