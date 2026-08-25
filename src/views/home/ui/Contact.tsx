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
    <section className="reveal">
      <h2 className="mb-4 flex items-center gap-2 text-xl">
        <span className="size-2 rounded-full bg-brand-apricot" aria-hidden />
        Entre em contato
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        <Link href={`mailto:${site.email}`}>
          <Card className="lift hover:border-primary/30 hover:bg-primary/5">
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
          <Card className="lift hover:border-primary/30 hover:bg-primary/5">
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
