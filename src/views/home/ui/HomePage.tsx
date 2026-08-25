import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { site } from '@/shared/config/site';
import { ExperienceTimeline } from '@/widgets/experience';
import { Contact } from './Contact';
import { Hero } from './Hero';
import { StackList } from './StackList';

export function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <StackList />
      <section>
        <h2 className="mb-3 flex items-center gap-2 text-xl font-semibold tracking-tight">
          <span className="size-2 rounded-full bg-brand-mint" aria-hidden />
          Sobre
        </h2>
        <p className="max-w-2xl text-muted-foreground">{site.about}</p>
        <Button asChild variant="link" className="mt-2 px-0">
          <Link href="/sobre">Ver perfil completo</Link>
        </Button>
      </section>
      <ExperienceTimeline />
      <Contact />
    </div>
  );
}
