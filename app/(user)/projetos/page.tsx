import type { Metadata } from 'next';
import { ProjectsPage } from '@/pages/projects';

export const metadata: Metadata = {
  title: 'Projetos',
  description:
    'MVPs no ar — PointBook e outros produtos publicados, não a lista de repositórios do GitHub.'
};

export default function Page() {
  return <ProjectsPage />;
}
