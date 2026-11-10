import { fetchUsdBrlQuote } from '@/shared/api/usd-brl';
import { FeedbackState } from '@/shared/ui/FeedbackState';
import { PageHeader } from '@/shared/ui/PageHeader';
import { CardNumberGenerator } from './CardNumberGenerator';
import { UsdBrlQuote } from './UsdBrlQuote';

export async function FuncoesPage() {
  const result = await fetchUsdBrlQuote();

  return (
    <div>
      <PageHeader
        title="Funções"
        description="Utilitários para o dia a dia e para desenvolvimento: cotação USD/BRL e gerador de cartão de teste."
      />

      <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
        {!result.ok ? (
          <FeedbackState
            title="Falha ao carregar"
            description={result.message}
          />
        ) : (
          <div className="reveal delay-100">
            <UsdBrlQuote quote={result.data} />
          </div>
        )}
        <div className="reveal delay-200">
          <CardNumberGenerator />
        </div>
      </div>
    </div>
  );
}
