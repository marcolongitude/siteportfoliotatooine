# Portfólio — Marco Aurélio

Site pessoal de Marco Aurélio (frontend developer). Conteúdo em português, com MVPs publicados e posts via TabNews.

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
| next-themes | tema claro / escuro / sistema |
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
    api/                     # TabNews e perfil público do GitHub
    config/site.ts
    config/theme.ts            # next-themes (claro / escuro / sistema)
    config/palette.ts          # classes de acento que leem os tokens
    config/motion.ts           # delays da entrada em cena
    lib/format-date.ts
    ui/                      # PageHeader, ThemeProvider, ThemeToggle
components/ui/               # shadcn (Button, Card, Badge, Separator, DropdownMenu)
```

## Fontes de dados

- **Projetos** — catálogo curado dos MVPs publicados no cluster Rancher/K3s (não a lista de repositórios do GitHub). Hoje: PointBook (site + app + API) e ChatUp (API em staging). Grafana, Rancher e demais peças de infra ficam de fora.
- **TabNews** — posts em `https://www.tabnews.com.br/api/v1/contents/marcocpdti`. Comentários (`parent_id`) são filtrados.
- **GitHub** — perfil público de `marcolongitude` (`GET /users/{username}`) só para o avatar do hero. Se a API falhar, usa a foto local.

## Visual

Cores, raio, fontes e movimento vivem em `styles/globals.css`. Títulos usam Fraunces (`font-heading`); UI e corpo usam Geist (`font-sans`). Entrada de seções: utilitário `reveal`. Hover de cards: `lift`. Quem prefere menos movimento (`prefers-reduced-motion`) vê o estado estático.

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
npm run lint
```

Nenhuma variável de ambiente é obrigatória. `.env.example` documenta isso.

## O que foi feito nesta modernização

Trabalho na branch `feat/modernize-portfolio`, com atuação da IA Grok (Cursor).

1. **Higienização** — identidade do Jean Rondón removida; Pages Router morto; tokens de GitHub apagados do código (revogue PATs antigos no GitHub).
2. **Upgrade** — Next 14 → 16, React 18 → 19, Tailwind 3 → 4, TypeScript 5.9. Fonte Geist, Metadata API, `eslint .`.
3. **shadcn/ui** — preset Nova + Radix. Button, Card, Badge, Separator, DropdownMenu.
4. **Estrutura** — `shared/api` para TabNews; widgets de header/footer/timeline; páginas compostas em `src/pages`.
5. **UI** — header sticky, hero com CTAs, stacks em badges, cards de projeto e posts, timeline, estados de loading/erro/vazio.
6. **Projetos** — vitrine de MVPs no ar (PointBook em destaque e ChatUp em staging), a partir dos workloads ativos no Rancher. Lista do GitHub saiu da página e da API.
7. **Visual** — paleta pastel (rosa, lilás, menta, damasco) com temas claro e escuro; tokens centralizados; atmosfera de fundo; seletor de tema.
8. **Tipografia e movimento** — Fraunces nos títulos, Geist no restante; entrada em fade/slide, hover com elevação, atmosfera lenta; `prefers-reduced-motion` respeitado.

## Decisões de stack (resumo)

- **shadcn/ui** — casa com Tailwind, código fica no repo, ecossistema conhecido pela IA.
- **Não MUI** — visual de produto Google, bundle pesado, compete com Tailwind.
- **Não Astryx (Meta)** neste projeto — beta, mais design system de app do que portfólio.

## Post no TabNews

Este README é a fonte do post de encerramento: stack, o que mudou, o que a IA fez e o que ficou de fora.
