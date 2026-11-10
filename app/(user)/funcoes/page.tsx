import type { Metadata } from 'next';
import { FuncoesPage } from '@/pages/funcoes';

export const metadata: Metadata = {
  title: 'Funções',
  description:
    'Utilitários práticos — cotação USD/BRL e gerador de cartão de teste (Visa, Mastercard e American Express).'
};

export default function Page() {
  return <FuncoesPage />;
}
