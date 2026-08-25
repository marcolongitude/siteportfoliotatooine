import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import type { TabNewsPost } from '@/shared/api/tabnews';
import { formatDatePt } from '@/shared/lib/format-date';

type PostCardProps = {
  post: TabNewsPost;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="lift hover:border-brand-lilac/40">
      <CardHeader>
        <Badge variant="outline" className="w-fit">
          {formatDatePt(post.createdAt)}
        </Badge>
        <CardTitle className="text-lg">{post.title}</CardTitle>
        <CardDescription>Publicado no TabNews</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button asChild variant="outline" size="sm">
          <a href={post.url} target="_blank" rel="noreferrer">
            Ler post
            <ArrowUpRight className="icon-nudge" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
