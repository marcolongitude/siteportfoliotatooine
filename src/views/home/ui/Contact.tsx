import Link from 'next/link';
import { Mail, MessageCircle } from 'lucide-react';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { site } from '@/shared/config/site';

export function Contact() {
  return (
    <section>
      <h2 className="mb-4 text-xl font-semibold tracking-tight">
        Entre em contato
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href={`mailto:${site.email}`}>
          <Card className="transition-colors hover:bg-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="size-4" />
                Email
              </CardTitle>
              <CardDescription>{site.email}</CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <a href={site.whatsapp} target="_blank" rel="noreferrer">
          <Card className="transition-colors hover:bg-muted/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="size-4" />
                WhatsApp
              </CardTitle>
              <CardDescription>{site.phoneDisplay}</CardDescription>
            </CardHeader>
          </Card>
        </a>
      </div>
    </section>
  );
}
