# Beatriz Mobile — Site institucional

Projeto Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion,
construído a partir do PRD do projeto.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Estrutura

```
src/
├── app/
│   ├── page.tsx          → Home
│   ├── sobre/            → Sobre
│   ├── servicos/         → Serviços
│   ├── portfolio/        → Portfólio + página de projeto individual
│   ├── contato/          → Contato
│   ├── layout.tsx        → Layout raiz (fontes, Navbar, Footer, WhatsApp)
│   └── globals.css
├── components/           → Componentes reutilizáveis
└── data/                 → Conteúdo editável (serviços, projetos, contato)
```

## Antes de publicar — pendências reais (não inventadas)

Estes itens estão marcados como placeholder no código e precisam de
informação real da cliente antes do site ir ao ar:

- **`src/data/contact.ts`** — número de WhatsApp, Instagram e e-mail reais.
- **`src/data/projects.ts`** — projetos reais do portfólio (título, cliente,
  descrição, fotos/vídeos). Substituir os arquivos em `/public/images` e
  `/public/videos`.
- **`src/app/sobre/page.tsx`** — biografia real da Beatriz.
- **Formulário de contato** (`src/components/ContactForm.tsx`) — hoje só
  simula o envio. Para funcionar de verdade, ligue a uma API route (Next.js)
  que envie por e-mail (Resend, SendGrid) ou a uma integração com WhatsApp
  Business API.
- **Depoimentos** — o PRD pede para não criar depoimentos fictícios; a
  seção não foi incluída até haver depoimentos reais e autorizados.

## Deploy sugerido

Vercel (import do repositório Git → deploy automático).

## Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS (paleta customizada: musgo, vinho, creme, preto)
- Framer Motion (animações de entrada)
- Lucide React (ícones do menu mobile)
