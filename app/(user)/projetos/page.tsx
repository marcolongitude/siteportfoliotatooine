import type { Metadata } from 'next';
import { ProjectsPage } from '@/pages/projects';

export const metadata: Metadata = {
  title: 'Projetos'
};

export default function Page() {
  return <ProjectsPage />;
}
