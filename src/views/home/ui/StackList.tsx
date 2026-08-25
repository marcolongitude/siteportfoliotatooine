import { Badge } from '@/components/ui/badge';
import { revealDelay } from '@/shared/config/motion';
import { stackTones } from '@/shared/config/palette';
import { site } from '@/shared/config/site';
import { cn } from '@/lib/utils';

export function StackList() {
  return (
    <section>
      <h2 className="mb-3 flex items-center gap-2 text-sm font-sans font-medium tracking-normal text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        Stacks
      </h2>
      <ul className="flex flex-wrap gap-2">
        {site.stacks.map((stack, index) => (
          <li key={stack} className={cn('reveal', revealDelay(index))}>
            <Badge
              variant="outline"
              className={cn(
                stackTones[index % stackTones.length],
                'transition-transform duration-300 motion-safe:hover:scale-105'
              )}
            >
              {stack}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
