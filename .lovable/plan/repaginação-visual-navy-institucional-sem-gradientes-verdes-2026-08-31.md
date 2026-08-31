# Repaginação visual: navy institucional, sem gradientes verdes

Direcionamento confirmado: sair da estética "gerada por IA" (gradientes verde/teal, glows, texto com gradiente) e adotar uma paleta navy institucional com acento azul sóbrio, cores sólidas e hierarquia mais editorial, inspirada nas referências enviadas (as imagens são referência de estilo, não serão embutidas no site).

## Decisões

- Paleta: fundo `#0f1b3d`, superfícies `#1e3a5f`, acento `#3b6fa0`, texto claro `#e8edf3`.
- Verde eliminado do site inteiro, incluindo o botão de WhatsApp (passa a azul institucional sólido).
- Nenhum gradiente de cor: fundos, botões, badges e ícones em cores sólidas.
- Layout das seções permanece o mesmo; muda cor, tipografia e acabamento.

## O que muda

**Design system (`src/styles.css`)**
- Redefinir os tokens `--background`, `--surface`, `--card`, `--primary`, `--accent`, `--border` etc. para a paleta navy/azul em oklch.
- Renomear/reapontar os tokens de destaque: `--emerald`/`--teal` deixam de ser verdes e passam a azul institucional (mantendo os nomes de classe para não quebrar componentes) ou são substituídos por `--brand`/`--brand-strong` com atualização dos usos.
- Remover `--gradient-emerald`, `--gradient-hero` e `--shadow-glow` (glow verde). No lugar: fundo sólido com uma faixa de contraste discreta, borda superior de acento e sombra neutra.
- Remover a utility `text-gradient-emerald`; o destaque no H1 passa a ser cor sólida de acento (ou peso/underline).
- `grid-lines` fica mais discreto; `eyebrow` em azul de acento com tracking menor.

**Tipografia**
- Trocar Sora/Inter Tight por um par mais institucional e menos "template de IA": títulos em Urbanist (geométrico, grotesco denso, como na referência) e corpo em Epilogue, carregados via `<link>` no `__root.tsx` e declarados em `@theme`.
- Títulos com peso 700 e leading mais fechado; menos `text-balance` decorativo.

**Componentes**
- `Header`: logo com marca sólida (sem gradiente), CTA em botão sólido de acento.
- `Hero`: sem gradiente radial verde, sem texto em gradiente; badges e cartões de métrica com fundo sólido e borda; números das métricas na cor de acento.
- `Solutions`: aba ativa com fundo sólido de acento; ícone em caixa com borda sólida.
- `About`, `Pains`, `Methodology`, `Cases`, `ContactForm`, `Footer`: substituir todo `bg-[image:var(--gradient-emerald)]`, `text-emerald` verde, blurs e glows por acento sólido; ícones de check/alerta em acento e em `warning` neutro.
- `WhatsAppButton`: botão azul institucional sólido, sem pulso/glow verde.
- Botão `variant="hero"` deixa de usar gradiente: fundo sólido de acento com hover mais escuro; `variant="executive"` como outline sóbrio.

**Metadados**
- Ajuste apenas se necessário; sem mudança de conteúdo textual das seções.

## Verificação

Após as alterações, varredura por `emerald`, `teal`, `gradient`, `glow` e por classes de cor hardcoded nos componentes para garantir que nada verde ou em gradiente sobrou, e conferência visual da página no preview.
