import { site } from '@/shared/config/site';
import type { Result } from '@/shared/api/result';

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  htmlUrl: string;
  homepage: string | null;
  stars: number;
  updatedAt: string;
};

type GithubRepoDto = {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  owner?: { login?: string };
};

function normalizeHomepage(url: string | null): string | null {
  if (!url) return null;
  if (/^https?:\/\//i.test(url)) return url;
  return `https://${url}`;
}

export async function fetchGithubRepos(): Promise<Result<GithubRepo[]>> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${site.githubUser}/repos?per_page=100&sort=updated`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {})
        },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      return {
        ok: false,
        message: 'Não foi possível carregar os repositórios do GitHub agora.'
      };
    }

    const payload = (await response.json()) as GithubRepoDto[];

    const repos = payload
      .filter(
        (repo) =>
          !repo.fork && repo.owner?.login === site.githubUser
      )
      .map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        language: repo.language,
        htmlUrl: repo.html_url,
        homepage: normalizeHomepage(repo.homepage),
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at
      }));

    return { ok: true, data: repos };
  } catch {
    return {
      ok: false,
      message: 'Não foi possível carregar os repositórios do GitHub agora.'
    };
  }
}
