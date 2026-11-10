export function parseAmount(raw: string): number | null {
  const normalized = raw.trim().replace(/\s/g, '').replace(',', '.');
  if (normalized === '' || normalized === '-' || normalized === '.') {
    return null;
  }

  const value = Number(normalized);
  return Number.isFinite(value) ? value : null;
}

export function roundMoney(value: number): number {
  return Math.round(value * 100) / 100;
}

export function convertUsdToBrl(usd: number, rate: number): number {
  return roundMoney(usd * rate);
}

export function convertBrlToUsd(brl: number, rate: number): number {
  if (rate === 0) {
    return 0;
  }

  return roundMoney(brl / rate);
}

export function formatAmountInput(value: number): string {
  return value.toFixed(2).replace('.', ',');
}

export function formatRate(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    minimumFractionDigits: 4,
    maximumFractionDigits: 4
  }).format(value);
}
