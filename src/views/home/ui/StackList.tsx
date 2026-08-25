import { Badge } from '@/components/ui/badge';
import { site } from '@/shared/config/site';

export function StackList() {
  return (
    <section>
      <h2 className="mb-3 text-sm font-medium text-muted-foreground">Stacks</h2>
      <ul className="flex flex-wrap gap-2">
        {site.stacks.map((stack) => (
          <li key={stack}>
            <Badge variant="secondary">{stack}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
