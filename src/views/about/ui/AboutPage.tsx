import { Badge } from '@/components/ui/badge';
import { PageHeader } from '@/shared/ui/PageHeader';
import { stackTones } from '@/shared/config/palette';
import { site } from '@/shared/config/site';
import { ExperienceTimeline } from '@/widgets/experience';
import { skillGroups } from '../model/skills';

export function AboutPage() {
  return (
    <div className="space-y-14">
      <PageHeader title="Sobre" description={site.about} />
      <ExperienceTimeline />
      <section>
        <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold tracking-tight">
          <span className="size-2 rounded-full bg-brand-lilac" aria-hidden />
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
                {group.techs.map((tech, index) => (
                  <li key={tech}>
                    <Badge
                      variant="outline"
                      className={stackTones[index % stackTones.length]}
                    >
                      {tech}
                    </Badge>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="mb-2 flex items-center gap-2 text-xl font-semibold tracking-tight">
          <span className="size-2 rounded-full bg-brand-mint" aria-hidden />
          Interesses
        </h2>
        <p className="text-muted-foreground">{site.interest}</p>
      </section>
    </div>
  );
}
