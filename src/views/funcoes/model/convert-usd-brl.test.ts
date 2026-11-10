import { describe, expect, it } from 'vitest';
import {
  convertBrlToUsd,
  convertUsdToBrl,
  formatAmountInput,
  parseAmount
} from './convert-usd-brl';

describe('parseAmount', () => {
  it('aceita vírgula e ponto', () => {
    expect(parseAmount('1,50')).toBe(1.5);
    expect(parseAmount(' 2.5 ')).toBe(2.5);
  });

  it('rejeita vazio e texto inválido', () => {
    expect(parseAmount('')).toBeNull();
    expect(parseAmount('abc')).toBeNull();
  });
});

describe('conversão USD/BRL', () => {
  it('converte dólar para real com duas casas', () => {
    expect(convertUsdToBrl(10, 5.5)).toBe(55);
    expect(convertUsdToBrl(1, 5.1234)).toBe(5.12);
    expect(convertUsdToBrl(1, 5.126)).toBe(5.13);
  });

  it('converte real para dólar e protege divisão por zero', () => {
    expect(convertBrlToUsd(55, 5.5)).toBe(10);
    expect(convertBrlToUsd(10, 0)).toBe(0);
  });
});

describe('formatAmountInput', () => {
  it('usa vírgula no padrão brasileiro', () => {
    expect(formatAmountInput(55.09)).toBe('55,09');
  });
});
