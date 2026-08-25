import type { Metadata } from 'next';
import { AboutPage } from '@/pages/about';

export const metadata: Metadata = {
  title: 'Sobre'
};

export default function Page() {
  return <AboutPage />;
}
