import { site } from '@/shared/config/site';
import type { Result } from '@/shared/api/result';

export type TabNewsPost = {
  id: string;
  title: string;
  slug: string;
  url: string;
  createdAt: string;
};

type TabNewsContentDto = {
  id: string;
  title: string;
  slug: string;
  created_at: string;
  parent_id: string | null;
  status?: string;
};

export async function fetchTabNewsPosts(): Promise<Result<TabNewsPost[]>> {
  try {
    const response = await fetch(
      `https://www.tabnews.com.br/api/v1/contents/${site.tabnewsUser}`,
      {
        headers: { Accept: 'application/json' },
        next: { revalidate: 3600 }
      }
    );

    if (!response.ok) {
      return {
        ok: false,
        message: 'Não foi possível carregar os posts do TabNews agora.'
      };
    }

    const payload = (await response.json()) as TabNewsContentDto[];

    const posts = payload
      .filter(
        (item) =>
          item.parent_id === null &&
          Boolean(item.title) &&
          item.status !== 'draft'
      )
      .map((item) => ({
        id: item.id,
        title: item.title,
        slug: item.slug,
        url: `${site.tabnews}/${item.slug}`,
        createdAt: item.created_at
      }));

    return { ok: true, data: posts };
  } catch {
    return {
      ok: false,
      message: 'Não foi possível carregar os posts do TabNews agora.'
    };
  }
}
