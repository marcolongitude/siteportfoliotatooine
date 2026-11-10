import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchUsdBrlQuote, parseUsdBrlQuote } from './usd-brl';

const samplePayload = {
  USDBRL: {
    bid: '5.5085',
    ask: '5.5091',
    high: '5.5275',
    low: '5.4898',
    pctChange: '0.063576',
    timestamp: '1794264234',
    create_date: '2026-11-09 19:43:54'
  }
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
});

describe('parseUsdBrlQuote', () => {
  it('mapeia compra, venda e o horário da cotação', () => {
    const quote = parseUsdBrlQuote(samplePayload);

    expect(quote).toEqual({
      bid: 5.5085,
      ask: 5.5091,
      high: 5.5275,
      low: 5.4898,
      pctChange: 0.063576,
      updatedAt: new Date(1794264234 * 1000)
    });
  });

  it('rejeita payload sem USDBRL ou com números inválidos', () => {
    expect(parseUsdBrlQuote({})).toBeNull();
    expect(
      parseUsdBrlQuote({
        USDBRL: { ...samplePayload.USDBRL, bid: 'abc' }
      })
    ).toBeNull();
  });
});

describe('fetchUsdBrlQuote', () => {
  it('devolve Result de erro quando a API falha', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({ ok: false, json: async () => ({}) })
    );

    const result = await fetchUsdBrlQuote();

    expect(result.ok).toBe(false);
    if (!result.ok) {
      expect(result.message).toMatch(/dólar/);
    }
  });

  it('envia x-api-key quando AWESOMEAPI_TOKEN existe', async () => {
    vi.stubEnv('AWESOMEAPI_TOKEN', 'secret-token');
    const fetchMock = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => samplePayload
    });
    vi.stubGlobal('fetch', fetchMock);

    const result = await fetchUsdBrlQuote();

    expect(result.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL',
      expect.objectContaining({
        headers: expect.objectContaining({
          'x-api-key': 'secret-token'
        })
      })
    );
  });
});
