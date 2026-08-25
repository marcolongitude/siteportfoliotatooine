import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/shared/ui/PageHeader';
import { site } from '@/shared/config/site';
import { ExperienceTimeline } from '@/widgets/experience';
import { skillGroups } from '../model/skills';

export function AboutPage() {
  return (
    <div className="space-y-14">
      <PageHeader title="Sobre" description={site.about} />
      <ExperienceTimeline />
      <section>
        <h2 className="mb-2 text-xl font-semibold tracking-tight">
          Skills e ferramentas
        </h2>
        <p className="mb-6 text-sm text-muted-foreground">
          Tecnologias com as quais já trabalhei e continuo aprofundando.
        </p>
        <div className="space-y-6">
          {skillGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-2 text-sm font-medium">{group.title}</h3>
              <ul className="flex flex-wrap gap-2">
                {group.techs.map((tech) => (
                  <li key={tech}>
                    <Badge variant="outline">{tech}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-2 text-xl font-semibold tracking-tight">
          Interesses
        </h2>
        <p className="text-muted-foreground">{site.interest}</p>
      </section>
    </div>
  );
}
