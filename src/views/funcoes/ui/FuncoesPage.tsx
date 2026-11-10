import { fetchUsdBrlQuote } from '@/shared/api/usd-brl';
import { FeedbackState } from '@/shared/ui/FeedbackState';
import { PageHeader } from '@/shared/ui/PageHeader';
import { UsdBrlQuote } from './UsdBrlQuote';

export async function FuncoesPage() {
  const result = await fetchUsdBrlQuote();

  return (
    <div>
      <PageHeader
        title="Funções"
        description="Utilitários práticos. O primeiro: cotação do dólar em real, com conversor."
      />

      {!result.ok ? (
        <FeedbackState title="Falha ao carregar" description={result.message} />
      ) : (
        <div className="reveal delay-100">
          <UsdBrlQuote quote={result.data} />
        </div>
      )}
    </div>
  );
}
