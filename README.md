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
| ESLint | 9.39.x (eslint-config-next 16 ainda não fecha com ESLint 10) |
| Node | >= 20.9 |

Origem: fork de um template de portfólio. Identidade, metadados e dependências mortas do autor original foram removidos nesta modernização.

## Estrutura

Feature-Sliced Design no mínimo (`app` do Next + `src/pages` + `src/widgets` + `src/shared`). Sem `entities`/`features` vazios.

```text
app/                         # rotas Next (finas)
src/
  pages/                     # composição das páginas (pasta física: src/views, para não colidir com o Next)
  widgets/                   # header, footer, experience
  shared/
    api/                     # GitHub e TabNews
    config/site.ts
    lib/format-date.ts
    ui/                      # PageHeader, FeedbackState
components/ui/               # shadcn (Button, Card, Badge, Separator)
```

## Fontes de dados

- **GitHub** — repositórios públicos de `marcolongitude` (`GET /users/{user}/repos`). Token opcional em `GITHUB_TOKEN` (veja `.env.example`) para evitar rate limit anônimo. Forks ficam de fora. Erro e lista vazia têm UI própria.
- **TabNews** — posts em `https://www.tabnews.com.br/api/v1/contents/marcocpdti`. Comentários (`parent_id`) são filtrados.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

Copie `.env.example` para `.env.local` se for usar o token do GitHub.

## O que foi feito nesta modernização

Trabalho na branch `feat/modernize-portfolio`, com atuação da IA Grok (Cursor).

1. **Higienização** — identidade do Jean Rondón removida; Pages Router morto; tokens de GitHub apagados do código (revogue PATs antigos no GitHub).
2. **Upgrade** — Next 14 → 16, React 18 → 19, Tailwind 3 → 4, TypeScript 5.9. Fonte Geist, Metadata API, `eslint .`.
3. **shadcn/ui** — preset Nova + Radix, tema dark. Button, Card, Badge, Separator.
4. **Estrutura** — `shared/api` para GitHub e TabNews; widgets de header/footer/timeline; páginas compostas em `src/pages`.
5. **UI** — header sticky, hero com CTAs, stacks em badges, cards de projeto e posts, timeline, estados de loading/erro/vazio.

## Decisões de stack (resumo)

- **shadcn/ui** — casa com Tailwind, código fica no repo, ecossistema conhecido pela IA.
- **Não MUI** — visual de produto Google, bundle pesado, compete com Tailwind.
- **Não Astryx (Meta)** neste projeto — beta, mais design system de app do que portfólio.

## Post no TabNews

Este README é a fonte do post de encerramento: stack, o que mudou, o que a IA fez e o que ficou de fora.
