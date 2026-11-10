import { afterEach, describe, expect, it, vi } from 'vitest';
import { site } from '@/shared/config/site';
import { fetchTabNewsPosts, selectTabNewsPosts } from './tabnews';

afterEach(() => {
  vi.unstubAllGlobals();
});

describe('selectTabNewsPosts', () => {
  it('descarta comentários e rascunhos e monta a URL pública', () => {
    const posts = selectTabNewsPosts([
      {
        id: '1',
        title: 'Post publicado',
        slug: 'post-publicado',
        created_at: '2024-08-05T00:00:00.000Z',
        parent_id: null
      },
      {
        id: '2',
        title: 'Comentário',
        slug: 'comentario',
        created_at: '2024-08-06T00:00:00.000Z',
        parent_id: '1'
      },
      {
        id: '3',
        title: 'Rascunho',
        slug: 'rascunho',
        created_at: '2024-08-07T00:00:00.000Z',
        parent_id: null,
        status: 'draft'
      }
    ]);

    expect(posts).toEqual([
      {
        id: '1',
        title: 'Post publicado',
        slug: 'post-publicado',
        url: `${site.tabnews}/post-publicado`,
        createdAt: '2024-08-05T00:00:00.000Z'
      }
    ]);
  });
});

describe('fetchTabNewsPosts', () => {
  it('devolve Result de erro quando a API falha', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, json: async () => ({}) })
    );

    const result = await fetchTabNewsPosts();

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.message).toMatch(/TabNews/);
    }
  });
});
