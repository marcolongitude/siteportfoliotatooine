# Portfólio — Marco Aurélio

Site pessoal de Marco Aurélio (frontend developer). Conteúdo em português, com projetos via GitHub e posts via TabNews.

Repositório: [marcolongitude/siteportfoliotatooine](https://github.com/marcolongitude/siteportfoliotatooine)

---

## Stack atual

| Peça | Versão |
| --- | --- |
| Next.js (App Router) | 16.3.2 |
| React | 19.2.8 |
| TypeScript | 5.9.3 |
| Tailwind CSS | 4.3.3 |
| shadcn/ui | 4.19 (preset Nova, Radix) |
| Framer Motion | 13.1.1 |
| ESLint | 9.39.x (eslint-config-next 16 ainda não fecha com ESLint 10) |
| Node | >= 20.9 |

Origem: fork de um template de portfólio. Identidade, metadados e dependências mortas do autor original foram removidos nesta modernização.

## Fontes de dados

- **GitHub** — repositórios públicos de `marcolongitude` (`GET /users/marcolongitude/repos`). Token opcional em `GITHUB_TOKEN` (veja `.env.example`) para evitar rate limit anônimo.
- **TabNews** — posts em `https://www.tabnews.com.br/api/v1/contents/marcocpdti`.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

Copie `.env.example` para `.env.local` se for usar o token do GitHub.

## O que já foi feito nesta modernização

Trabalho na branch `feat/modernize-portfolio`, com atuação da IA Grok (Cursor) a partir de um diagnóstico do código e da UI.

1. **Higienização**
   - `package.json` deixou de apontar para Jean Rondón / `jeandv`.
   - SEO (`metadata` do App Router) com nome, e-mail e Open Graph corretos.
   - Removidos leftovers do Pages Router (`pages/404`, `pages/api/hello`).
   - Removidas libs não usadas (Mantine/lockfile órfão, styled-components, embla, portabletext, line-clamp, purgecss).
   - Tokens de GitHub que estavam no código foram **apagados**. Se algum PAT antigo ainda estiver ativo, **revogue no GitHub** (Settings → Developer settings → Personal access tokens). Tokens commitados devem ser tratados como vazados.
2. **Upgrade de libs** (o site quase não é mexido; a regra passou a ser atualizar sempre que houver trabalho)
   - Next 14 → 16, React 18 → 19, Tailwind 3 → 4, TypeScript 5.4 → 5.9.
   - Layout raiz com `next/font` (Inter), `lang="pt-BR"` e Metadata API.
   - `next lint` trocado por `eslint .` (Next 16 removeu o comando).

## Em andamento

- shadcn/ui iniciado (preset Nova + Radix, tema dark, Geist). Componentes base: Button, Card, Badge, Separator.
- Estrutura enxuta (`shared/api` para GitHub e TabNews; páginas finas).
- Aplicar a nova UI nas seções (header, hero, cards, timeline, blog).
- Estados de loading/erro/vazio nas listas de projetos e posts.

## Decisões de stack (resumo)

- **shadcn/ui** — casa com Tailwind, código fica no repo, ecossistema conhecido pela IA.
- **Não MUI** — visual de produto Google, bundle pesado, compete com Tailwind.
- **Não Astryx (Meta)** neste projeto — beta, mais design system de app do que portfólio. Vale um parágrafo no post final.

## Post no TabNews

Este README é a fonte do post de encerramento: stack, o que mudou, o que a IA fez e o que ficou de fora. Atualizado a cada etapa até o merge.
