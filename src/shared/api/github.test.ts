import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchGithubUser, toGithubUser } from './github';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('toGithubUser', () => {
  it('fixa o tamanho do avatar para o next/image', () => {
    const user = toGithubUser({
      login: 'marcolongitude',
      avatar_url: 'https://avatars.githubusercontent.com/u/16108311?v=4',
      html_url: 'https://github.com/marcolongitude'
    });

    expect(user.login).toBe('marcolongitude');
    expect(user.profileUrl).toBe('https://github.com/marcolongitude');
    expect(user.avatarUrl).toBe(
      'https://avatars.githubusercontent.com/u/16108311?v=4&s=256'
    );
  });
});

describe('fetchGithubUser', () => {
  it('devolve Result de erro quando a API falha', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, json: async () => ({}) })
    );

    const result = await fetchGithubUser();

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.message).toMatch(/GitHub/);
    }
  });
});
