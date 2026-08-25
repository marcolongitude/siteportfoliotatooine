import { Geist } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { site } from '@/shared/config/site';
import { cn } from '@/lib/utils';
import '../styles/globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `${site.name} · %s`
  },
  description: `${site.tagline} Trabalho com JavaScript, TypeScript, React e C# .NET.`,
  keywords: [
    site.name,
    'frontend',
    'portfólio',
    'React',
    'TypeScript',
    'Next.js',
    'C#'
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.tagline,
    images: [{ url: '/banner-portfolio.jpg' }]
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR" className={cn('dark font-sans', geist.variable)}>
      <body className="flex min-h-screen flex-col bg-background text-foreground antialiased">
        <Header />
        <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 md:py-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
