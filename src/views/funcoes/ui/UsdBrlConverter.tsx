'use client';

import { useState } from 'react';
import { ArrowRightLeft } from 'lucide-react';
import {
  convertBrlToUsd,
  convertUsdToBrl,
  formatAmountInput,
  parseAmount
} from '../model/convert-usd-brl';

type UsdBrlConverterProps = {
  rate: number;
};

const inputClassName =
  'h-9 w-full rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50';

export function UsdBrlConverter({ rate }: UsdBrlConverterProps) {
  const [usd, setUsd] = useState('1');
  const [brl, setBrl] = useState(() =>
    formatAmountInput(convertUsdToBrl(1, rate))
  );

  function onUsdChange(value: string) {
    setUsd(value);
    const amount = parseAmount(value);
    if (amount === null) {
      return;
    }
    setBrl(formatAmountInput(convertUsdToBrl(amount, rate)));
  }

  function onBrlChange(value: string) {
    setBrl(value);
    const amount = parseAmount(value);
    if (amount === null) {
      return;
    }
    setUsd(formatAmountInput(convertBrlToUsd(amount, rate)));
  }

  return (
    <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-end">
      <label className="space-y-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Dólar (USD)
        </span>
        <input
          className={inputClassName}
          inputMode="decimal"
          value={usd}
          onChange={(event) => onUsdChange(event.target.value)}
          aria-label="Valor em dólar"
        />
      </label>
      <ArrowRightLeft
        className="mx-auto hidden size-4 text-muted-foreground sm:mb-2.5 sm:block"
        aria-hidden
      />
      <label className="space-y-1.5">
        <span className="text-xs font-medium text-muted-foreground">
          Real (BRL)
        </span>
        <input
          className={inputClassName}
          inputMode="decimal"
          value={brl}
          onChange={(event) => onBrlChange(event.target.value)}
          aria-label="Valor em real"
        />
      </label>
    </div>
  );
}
