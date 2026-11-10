import { isLuhnValid } from '@/shared/lib/luhn';

export const LAST_DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export type LastDigit = (typeof LAST_DIGITS)[number];
export type CardBrandId = 'visa' | 'mastercard';

export type CardBrand = {
  id: CardBrandId;
  label: string;
  prefixes: readonly string[];
  length: number;
};

export const cardBrands: readonly CardBrand[] = [
  {
    id: 'visa',
    label: 'Visa',
    prefixes: ['4'],
    length: 16
  },
  {
    id: 'mastercard',
    label: 'Mastercard',
    prefixes: ['51', '52', '53', '54', '55'],
    length: 16
  }
];

const randomDigit = () => Math.floor(Math.random() * 10);

export function getCardBrand(id: CardBrandId): CardBrand {
  const brand = cardBrands.find((item) => item.id === id);
  if (!brand) {
    throw new Error(`Bandeira desconhecida: ${id}`);
  }
  return brand;
}

export function formatCardNumber(pan: string): string {
  return pan.replace(/(\d{4})(?=\d)/g, '$1 ');
}

export function generateCardNumber(
  brandId: CardBrandId,
  lastDigit: LastDigit,
  nextDigit: () => number = randomDigit
): string {
  const brand = getCardBrand(brandId);
  const prefix = brand.prefixes[nextDigit() % brand.prefixes.length]!;
  const payloadLength = brand.length - prefix.length - 1;
  const payload = Array.from({ length: payloadLength }, () => nextDigit());

  for (let adjuster = 0; adjuster <= 9; adjuster += 1) {
    payload[payloadLength - 1] = adjuster;
    const pan = `${prefix}${payload.join('')}${lastDigit}`;
    if (isLuhnValid(pan)) {
      return pan;
    }
  }

  throw new Error('Não foi possível gerar um número com Luhn válido.');
}
