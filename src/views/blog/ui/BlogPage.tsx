import { fetchTabNewsPosts } from '@/shared/api/tabnews';
import { FeedbackState } from '@/shared/ui/FeedbackState';
import { PageHeader } from '@/shared/ui/PageHeader';
import { site } from '@/shared/config/site';
import { PostCard } from './PostCard';

export async function BlogPage() {
  const result = await fetchTabNewsPosts();

  return (
    <div>
      <PageHeader
        title="Blog"
        description={`Notas e posts publicados em ${site.tabnewsUser} no TabNews.`}
      />

      {!result.ok ? (
        <FeedbackState title="Falha ao carregar" description={result.message} />
      ) : result.data.length === 0 ? (
        <FeedbackState
          title="Nenhum post ainda"
          description="Quando houver conteúdo publicado no TabNews, ele aparece aqui."
        />
      ) : (
        <div className="flex flex-col gap-4">
          {result.data.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
