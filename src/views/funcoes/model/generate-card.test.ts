import { describe, expect, it } from 'vitest';
import { isLuhnValid } from '@/shared/lib/luhn';
import {
  formatCardNumber,
  generateCardNumber,
  LAST_DIGITS
} from './generate-card';

const nextDigit = (() => {
  let index = 0;
  const sequence = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return () => sequence[index++ % sequence.length]!;
})();

describe('generateCardNumber', () => {
  it('gera Visa com prefixo 4, 16 dígitos, Luhn e dígito final escolhido', () => {
    const pan = generateCardNumber('visa', 0, nextDigit);

    expect(pan).toHaveLength(16);
    expect(pan.startsWith('4')).toBe(true);
    expect(pan.endsWith('0')).toBe(true);
    expect(isLuhnValid(pan)).toBe(true);
  });

  it('gera Mastercard com prefixo 51–55 e o dígito final pedido', () => {
    for (const lastDigit of LAST_DIGITS) {
      const pan = generateCardNumber('mastercard', lastDigit, () => 4);

      expect(pan).toHaveLength(16);
      expect(pan.startsWith('55')).toBe(true);
      expect(pan.endsWith(String(lastDigit))).toBe(true);
      expect(isLuhnValid(pan)).toBe(true);
    }
  });

  it('gera American Express com 15 dígitos, prefixo 34/37, Luhn e dígito final', () => {
    for (const lastDigit of LAST_DIGITS) {
      const pan = generateCardNumber('amex', lastDigit, () => 4);

      expect(pan).toHaveLength(15);
      expect(pan.startsWith('34')).toBe(true);
      expect(pan.endsWith(String(lastDigit))).toBe(true);
      expect(isLuhnValid(pan)).toBe(true);
    }
  });
});

describe('formatCardNumber', () => {
  it('agrupa de 4 em 4', () => {
    expect(formatCardNumber('4111111111111111')).toBe('4111 1111 1111 1111');
  });

  it('agrupa American Express em 4-6-5', () => {
    expect(formatCardNumber('378282246310005', [4, 6, 5])).toBe(
      '3782 822463 10005'
    );
  });
});
