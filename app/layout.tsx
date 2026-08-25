import { Geist } from 'next/font/google';
import type { Metadata, Viewport } from 'next';
import Header from '@/components/ui/Header';
import Footer from '@/components/ui/Footer';
import { cn } from '@/lib/utils';
import '../styles/globals.css';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-sans'
});

const siteUrl = 'https://marcoaureliodev.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Marco Aurélio',
    template: 'Marco Aurélio · %s'
  },
  description:
    'Olá! Meu nome é Marco Aurélio, moro no Brasil e trabalho com JavaScript, TypeScript, React e C# .NET.',
  keywords: [
    'Marco Aurélio',
    'frontend',
    'portfólio',
    'React',
    'TypeScript',
    'Next.js',
    'C#'
  ],
  authors: [{ name: 'Marco Aurélio', url: siteUrl }],
  creator: 'Marco Aurélio',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: 'Marco Aurélio',
    title: 'Marco Aurélio',
    description:
      'Olá! Meu nome é Marco Aurélio, moro no Brasil e trabalho com JavaScript, TypeScript, React e C# .NET.',
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
      <body className="bg-background text-foreground antialiased min-h-screen">
        <Header />
        <main className="min-w-xs flex flex-col justify-center items-center mx-auto">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
