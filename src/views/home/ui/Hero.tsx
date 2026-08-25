import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { fetchGithubUser } from '@/shared/api/github';
import { site } from '@/shared/config/site';

const localAvatar = '/marcoaurelio.jpg';

export async function Hero() {
  const githubUser = await fetchGithubUser();
  const avatarSrc = githubUser.ok ? githubUser.data.avatarUrl : localAvatar;

  return (
    <section className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-5 text-center sm:text-left">
        <Badge variant="secondary" className="reveal h-6 px-2.5">
          {site.role}
        </Badge>
        <div className="reveal delay-75 space-y-2">
          <h1 className="text-5xl sm:text-6xl">{site.name}</h1>
          <p className="max-w-md text-muted-foreground">{site.tagline}</p>
        </div>
        <div className="reveal delay-150 flex flex-wrap justify-center gap-2 sm:justify-start">
          <Button asChild>
            <Link href="/projetos">Ver projetos</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight className="icon-nudge" />
            </a>
          </Button>
        </div>
      </div>
      <div className="reveal delay-200 relative">
        <div
          aria-hidden
          className="hero-glow absolute -inset-4 rounded-full bg-linear-to-br from-brand-rose/55 via-brand-lilac/45 to-brand-mint/40 blur-2xl"
        />
        <Image
          alt={site.name}
          src={avatarSrc}
          width={128}
          height={128}
          priority
          className="relative size-28 rounded-full object-cover ring-2 ring-primary/40 ring-offset-4 ring-offset-background transition-transform duration-500 motion-safe:hover:scale-105 sm:size-32"
        />
      </div>
    </section>
  );
}
