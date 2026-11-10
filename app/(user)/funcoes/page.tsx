import type { Metadata } from 'next';
import { FuncoesPage } from '@/pages/funcoes';

export const metadata: Metadata = {
  title: 'Funções',
  description: 'Utilitários práticos — cotação do dólar em real e conversor USD/BRL.'
};

export default function Page() {
  return <FuncoesPage />;
}
