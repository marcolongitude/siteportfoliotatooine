type Experience = {
  company: string;
  href?: string;
  period: string;
  role: string;
  description: string;
  current: boolean;
};

export const experiences: Experience[] = [
  {
    company: 'Esolution Tecnologia',
    href: 'https://www.esolution.com.br',
    period: 'Set 2019 — atual',
    role: 'Analista de desenvolvimento de sistemas',
    description:
      'Frontend (JavaScript, React, React Native, Next.js, CSS) e backend (Node.js, C#).',
    current: true
  },
  {
    company: 'Município de Morrinhos - GO',
    period: 'Informática',
    role: 'Setor de informática',
    description: 'Suporte e operação de TI no município.',
    current: false
  },
  {
    company: 'Município de Acreúna - GO',
    period: 'Petroquímica',
    role: 'Técnico em petroquímica',
    description: 'Atuação técnica no município.',
    current: false
  },
  {
    company: 'Município de Quirinópolis - GO',
    period: 'Administrativo',
    role: 'Supervisor administrativo',
    description: 'Supervisão administrativa no município.',
    current: false
  },
  {
    company: 'Comint Informática EIRELI',
    period: 'Mai 2008 — Out 2008',
    role: 'Supervisor administrativo',
    description: 'Supervisão administrativa.',
    current: false
  }
];
