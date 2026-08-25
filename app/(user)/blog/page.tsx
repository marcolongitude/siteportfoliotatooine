import type { Metadata } from 'next';
import { BlogPage } from '@/pages/blog';

export const metadata: Metadata = {
  title: 'Blog'
};

export default function Page() {
  return <BlogPage />;
}
