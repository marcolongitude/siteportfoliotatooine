import { site } from '@/shared/config/site';
import type { Result } from '@/shared/api/result';

export type GithubUser = {
  login: string;
  avatarUrl: string;
  profileUrl: string;
};

type GithubUserDto = {
  login: string;
  avatar_url: string;
  html_url: string;
};

function withAvatarSize(url: string, size: number) {
  const parsed = new URL(url);
  parsed.searchParams.set('s', String(size));
  return parsed.toString();
}

export async function fetchGithubUser(): Promise<Result<GithubUser>> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${site.githubUser}`,
      {
        headers: {
          Accept: 'application/vnd.github+json',
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': 'siteportfoliotatooine'
        },
        next: { revalidate: 86400 }
      }
    );

    if (!response.ok) {
      return {
        ok: false,
        message: 'Não foi possível carregar o perfil do GitHub agora.'
      };
    }

    const payload = (await response.json()) as GithubUserDto;

    return {
      ok: true,
      data: {
        login: payload.login,
        avatarUrl: withAvatarSize(payload.avatar_url, 256),
        profileUrl: payload.html_url
      }
    };
  } catch {
    return {
      ok: false,
      message: 'Não foi possível carregar o perfil do GitHub agora.'
    };
  }
}
