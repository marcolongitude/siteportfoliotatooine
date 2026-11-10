import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import type { UsdBrlQuote as Quote } from '@/shared/api/usd-brl';
import { formatDateTimePt } from '@/shared/lib/format-date';
import { formatPctChange } from '@/shared/lib/format-number';
import { formatRate } from '../model/convert-usd-brl';
import { UsdBrlConverter } from './UsdBrlConverter';

type UsdBrlQuoteProps = {
  quote: Quote;
};

export function UsdBrlQuote({ quote }: UsdBrlQuoteProps) {
  const up = quote.pctChange >= 0;

  return (
    <Card className="lift h-full hover:border-primary/30">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>USD → BRL</Badge>
          <Badge variant={up ? 'secondary' : 'destructive'}>
            {formatPctChange(quote.pctChange)}
          </Badge>
        </div>
        <CardTitle className="text-2xl">Dólar para real</CardTitle>
        <CardDescription>
          Cotação comercial da AwesomeAPI. A conversão usa o valor de compra.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <p className="text-xs font-medium text-muted-foreground">Compra</p>
          <p className="font-heading text-4xl tracking-tight">
            R$ {formatRate(quote.bid)}
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Venda R$ {formatRate(quote.ask)}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <dt className="text-muted-foreground">Máxima</dt>
            <dd>R$ {formatRate(quote.high)}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Mínima</dt>
            <dd>R$ {formatRate(quote.low)}</dd>
          </div>
        </dl>
        <UsdBrlConverter rate={quote.bid} />
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Atualizado em {formatDateTimePt(quote.updatedAt)}. Fonte:{' '}
          <a
            href="https://docs.awesomeapi.com.br/api-de-moedas"
            className="underline-offset-4 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            AwesomeAPI
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
}
