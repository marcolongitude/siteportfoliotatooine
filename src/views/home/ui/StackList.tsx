import { Badge } from '@/components/ui/badge';
import { stackTones } from '@/shared/config/palette';
import { site } from '@/shared/config/site';

export function StackList() {
  return (
    <section>
      <h2 className="mb-3 flex items-center gap-2 text-sm font-medium text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden />
        Stacks
      </h2>
      <ul className="flex flex-wrap gap-2">
        {site.stacks.map((stack, index) => (
          <li key={stack}>
            <Badge
              variant="outline"
              className={stackTones[index % stackTones.length]}
            >
              {stack}
            </Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
