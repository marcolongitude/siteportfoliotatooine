export type ProductLink = {
  label: string;
  href: string;
  primary?: boolean;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'mvp' | 'api';
  featured?: boolean;
  stack: string[];
  links: ProductLink[];
};

export const products: Product[] = [
  {
    id: 'pointbook',
    name: 'PointBook',
    tagline: 'Pontos e cashback para o varejo',
    description:
      'O cliente acumula pontos no PDV do parceiro e acompanha o saldo no app. Site, aplicativo e API de integração já estão publicados — dá para abrir e usar.',
    status: 'mvp',
    featured: true,
    stack: ['Site', 'App', 'API', 'PostgreSQL', 'Redis'],
    links: [
      {
        label: 'Abrir o site',
        href: 'https://site.147.15.92.201.sslip.io',
        primary: true
      },
      {
        label: 'Abrir o app',
        href: 'https://app.147.15.92.201.sslip.io'
      },
      {
        label: 'Docs da API',
        href: 'https://api.147.15.92.201.sslip.io/docs/integracao/'
      }
    ]
  },
  {
    id: 'chatup',
    name: 'ChatUp',
    tagline: 'API de chat em staging',
    description:
      'API de chat em Go, com presença, upload e métricas. Ainda sem frontend público — o recorte é o serviço vivo, não um repositório de estudo.',
    status: 'api',
    stack: ['Go', 'PostgreSQL'],
    links: [
      {
        label: 'API',
        href: 'https://chatup-api.147.15.92.201.sslip.io',
        primary: true
      },
      {
        label: 'GitHub',
        href: 'https://github.com/marcolongitude/chatUp'
      }
    ]
  }
];
