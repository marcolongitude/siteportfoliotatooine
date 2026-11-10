'use client';

import { useState, useSyncExternalStore } from 'react';
import { Check, Copy, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import {
  cardBrands,
  formatCardNumber,
  generateCardNumber,
  getCardBrand,
  LAST_DIGITS,
  type CardBrandId,
  type LastDigit
} from '../model/generate-card';

const subscribe = () => () => {};

export function CardNumberGenerator() {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const [brandId, setBrandId] = useState<CardBrandId>('visa');
  const [lastDigit, setLastDigit] = useState<LastDigit>(0);
  const [copied, setCopied] = useState(false);
  const [pan, setPan] = useState('');

  if (isClient && pan === '') {
    setPan(generateCardNumber(brandId, lastDigit));
  }

  function selectBrand(id: CardBrandId) {
    setBrandId(id);
    setCopied(false);
    setPan(generateCardNumber(id, lastDigit));
  }

  function selectLastDigit(digit: LastDigit) {
    setLastDigit(digit);
    setCopied(false);
    setPan(generateCardNumber(brandId, digit));
  }

  function regenerate() {
    setCopied(false);
    setPan(generateCardNumber(brandId, lastDigit));
  }

  async function copyNumber() {
    await navigator.clipboard.writeText(pan);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Card className="lift h-full hover:border-primary/30">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Teste</Badge>
          <Badge variant="outline">Luhn</Badge>
        </div>
        <CardTitle className="text-2xl">Gerador de cartão</CardTitle>
        <CardDescription>
          Número de teste para desenvolvimento. Visa começa com 4; Mastercard
          com 51–55; American Express com 34 ou 37 (15 dígitos, formato 4-6-5).
          Todos usam dígito verificador Luhn.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <fieldset className="space-y-2">
          <legend className="text-xs font-medium text-muted-foreground">
            Bandeira
          </legend>
          <div className="flex flex-wrap gap-2">
            {cardBrands.map((brand) => {
              const selected = brand.id === brandId;
              return (
                <Button
                  key={brand.id}
                  type="button"
                  size="sm"
                  variant={selected ? 'default' : 'outline'}
                  aria-pressed={selected}
                  onClick={() => selectBrand(brand.id)}
                >
                  {brand.label}
                </Button>
              );
            })}
          </div>
        </fieldset>

        <fieldset className="space-y-2">
          <legend className="text-xs font-medium text-muted-foreground">
            Dígito final
          </legend>
          <div className="flex flex-wrap gap-1.5" role="radiogroup">
            {LAST_DIGITS.map((digit) => {
              const selected = digit === lastDigit;
              return (
                <Button
                  key={digit}
                  type="button"
                  size="icon-sm"
                  role="radio"
                  aria-checked={selected}
                  variant={selected ? 'default' : 'outline'}
                  className={cn('font-medium', selected && 'pointer-events-none')}
                  onClick={() => selectLastDigit(digit)}
                >
                  {digit}
                </Button>
              );
            })}
          </div>
        </fieldset>

        <div className="space-y-2">
          <p className="text-xs font-medium text-muted-foreground">
            Número gerado
          </p>
          <div className="flex items-center gap-1 rounded-lg border border-input bg-background pr-1">
            <p
              className="font-heading min-w-0 flex-1 px-3 py-2 text-lg tracking-wide tabular-nums"
              aria-live="polite"
            >
              {pan
                ? formatCardNumber(pan, getCardBrand(brandId).groups)
                : '•••• •••• •••• •••0'}
            </p>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label={copied ? 'Número copiado' : 'Copiar número'}
              disabled={!pan}
              onClick={copyNumber}
            >
              {copied ? <Check /> : <Copy />}
            </Button>
            <Button
              type="button"
              size="icon"
              variant="ghost"
              aria-label="Gerar outro número"
              onClick={regenerate}
            >
              <RefreshCw />
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <p className="text-xs text-muted-foreground">
          Só para testes e desenvolvimento. Não é um cartão real e não autoriza
          compra.
        </p>
      </CardFooter>
    </Card>
  );
}
