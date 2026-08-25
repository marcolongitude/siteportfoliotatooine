import { Badge } from '@/components/ui/badge';
import { experiences } from '../model/experience';

type ExperienceTimelineProps = {
  heading?: string;
};

export function ExperienceTimeline({
  heading = 'Experiências'
}: ExperienceTimelineProps) {
  return (
    <section className="w-full">
      <h2 className="mb-6 text-xl font-semibold tracking-tight">{heading}</h2>
      <ol className="relative space-y-6 border-l border-border pl-6">
        {experiences.map((item) => (
          <li key={`${item.company}-${item.period}`} className="relative">
            <span
              className={`absolute top-1.5 -left-[31px] size-3 rounded-full ring-4 ring-background ${
                item.current ? 'bg-primary' : 'bg-muted-foreground/50'
              }`}
            />
            <p className="text-xs text-muted-foreground">{item.period}</p>
            <h3 className="mt-1 text-sm font-medium">
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline"
                >
                  {item.company}
                </a>
              ) : (
                item.company
              )}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{item.role}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              {item.description}
            </p>
            {item.current ? (
              <Badge variant="secondary" className="mt-2">
                Atual
              </Badge>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
