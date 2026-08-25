import { fetchGithubRepos } from '@/shared/api/github';
import { FeedbackState } from '@/shared/ui/FeedbackState';
import { PageHeader } from '@/shared/ui/PageHeader';
import { site } from '@/shared/config/site';
import { ProjectCard } from './ProjectCard';

export async function ProjectsPage() {
  const result = await fetchGithubRepos();

  return (
    <div>
      <PageHeader
        title="Projetos"
        description="Estudos, pesquisas e prática. A lista vem da API pública do GitHub."
      />

      {!result.ok ? (
        <FeedbackState title="Falha ao carregar" description={result.message} />
      ) : result.data.length === 0 ? (
        <FeedbackState
          title="Nenhum repositório público"
          description={`Nada encontrado para ${site.githubUser}.`}
        />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {result.data.map((repo) => (
            <ProjectCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
}
