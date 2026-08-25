import { ArrowUpRight, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import type { GithubRepo } from '@/shared/api/github';

type ProjectCardProps = {
  repo: GithubRepo;
};

export function ProjectCard({ repo }: ProjectCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-start justify-between gap-3">
          <span>{repo.name}</span>
          <span className="flex items-center gap-1 text-xs font-normal text-muted-foreground">
            <Star className="size-3.5" />
            {repo.stars}
          </span>
        </CardTitle>
        <CardDescription>
          {repo.description ?? 'Sem descrição no GitHub.'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {repo.language ? (
          <Badge variant="secondary">{repo.language}</Badge>
        ) : (
          <Badge variant="outline">Outro</Badge>
        )}
      </CardContent>
      <CardFooter className="gap-2">
        <Button asChild variant="outline" size="sm">
          <a href={repo.htmlUrl} target="_blank" rel="noreferrer">
            Repositório
            <ArrowUpRight />
          </a>
        </Button>
        {repo.homepage ? (
          <Button asChild variant="ghost" size="sm">
            <a href={repo.homepage} target="_blank" rel="noreferrer">
              Demo
              <ArrowUpRight />
            </a>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
