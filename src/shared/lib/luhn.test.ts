import { describe, expect, it } from 'vitest';
import { isLuhnValid } from './luhn';

describe('isLuhnValid', () => {
  it('aceita o Visa de teste clássico', () => {
    expect(isLuhnValid('4111111111111111')).toBe(true);
  });

  it('rejeita número inválido ou com letras', () => {
    expect(isLuhnValid('4111111111111112')).toBe(false);
    expect(isLuhnValid('4111abcd')).toBe(false);
  });
});
