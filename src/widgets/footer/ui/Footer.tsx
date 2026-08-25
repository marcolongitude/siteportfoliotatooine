import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { site } from '@/shared/config/site';

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="page-wrap pb-10">
        <Separator className="mb-6" />
        <div className="flex flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <nav className="flex flex-wrap gap-x-4 gap-y-2">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              GitHub
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              LinkedIn
            </a>
            <a
              href={site.tabnews}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary"
            >
              TabNews
            </a>
          </div>
        </div>
        <p className="mt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
