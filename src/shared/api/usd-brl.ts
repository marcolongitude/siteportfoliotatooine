import type { Result } from '@/shared/api/result';

const USD_BRL_URL = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';

export type UsdBrlQuote = {
  bid: number;
  ask: number;
  high: number;
  low: number;
  pctChange: number;
  updatedAt: Date;
};

export type AwesomeUsdBrlDto = {
  USDBRL?: {
    bid: string;
    ask: string;
    high: string;
    low: string;
    pctChange: string;
    timestamp: string;
    create_date: string;
  };
};

function parseUpdatedAt(timestamp: string, createDate: string): Date | null {
  const unix = Number(timestamp);
  if (Number.isFinite(unix) && unix > 0) {
    const fromUnix = new Date(unix * 1000);
    if (!Number.isNaN(fromUnix.getTime())) {
      return fromUnix;
    }
  }

  const fromDate = new Date(createDate.replace(' ', 'T'));
  if (!Number.isNaN(fromDate.getTime())) {
    return fromDate;
  }

  return null;
}

export function parseUsdBrlQuote(payload: AwesomeUsdBrlDto): UsdBrlQuote | null {
  const row = payload.USDBRL;
  if (!row) {
    return null;
  }

  const bid = Number(row.bid);
  const ask = Number(row.ask);
  const high = Number(row.high);
  const low = Number(row.low);
  const pctChange = Number(row.pctChange);
  const updatedAt = parseUpdatedAt(row.timestamp, row.create_date);

  if (
    !updatedAt ||
    ![bid, ask, high, low, pctChange].every(Number.isFinite)
  ) {
    return null;
  }

  return { bid, ask, high, low, pctChange, updatedAt };
}

export async function fetchUsdBrlQuote(): Promise<Result<UsdBrlQuote>> {
  try {
    const token = process.env.AWESOMEAPI_TOKEN;
    const response = await fetch(USD_BRL_URL, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'siteportfoliotatooine',
        ...(token ? { 'x-api-key': token } : {})
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      return {
        ok: false,
        message: 'A cotação do dólar não pôde ser carregada agora.'
      };
    }

    const payload = (await response.json()) as AwesomeUsdBrlDto;
    const quote = parseUsdBrlQuote(payload);

    if (!quote) {
      return {
        ok: false,
        message: 'A cotação do dólar veio em um formato inesperado.'
      };
    }

    return { ok: true, data: quote };
  } catch {
    return {
      ok: false,
      message: 'A cotação do dólar não pôde ser carregada agora.'
    };
  }
}
