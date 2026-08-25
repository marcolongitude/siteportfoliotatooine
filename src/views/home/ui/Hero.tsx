import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { site } from '@/shared/config/site';

export function Hero() {
  return (
    <section className="flex flex-col-reverse items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-5 text-center sm:text-left">
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {site.name}
          </h1>
          <p className="flex items-center justify-center gap-2 text-muted-foreground sm:justify-start">
            <Code2 className="size-4" />
            {site.role}
          </p>
        </div>
        <p className="max-w-md text-muted-foreground">{site.tagline}</p>
        <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
          <Button asChild>
            <Link href="/projetos">Ver projetos</Link>
          </Button>
          <Button asChild variant="outline">
            <a href={site.github} target="_blank" rel="noreferrer">
              GitHub
              <ArrowUpRight />
            </a>
          </Button>
        </div>
      </div>
      <Image
        alt={site.name}
        src="/marcoaurelio.jpg"
        width={128}
        height={128}
        priority
        className="size-28 rounded-full object-cover ring-2 ring-border grayscale transition duration-500 hover:grayscale-0 sm:size-32"
      />
    </section>
  );
}
