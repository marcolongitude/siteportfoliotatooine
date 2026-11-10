import { describe, expect, it } from 'vitest';
import { products } from './products';

describe('products', () => {
  it('mantém uma vitrine com um MVP em destaque e links https', () => {
    const featured = products.filter((product) => product.featured);

    expect(featured).toHaveLength(1);
    expect(featured[0]?.status).toBe('mvp');
    expect(featured[0]?.links.some((link) => link.primary)).toBe(true);

    const ids = products.map((product) => product.id);
    expect(new Set(ids).size).toBe(ids.length);

    for (const product of products) {
      expect(product.links.length).toBeGreaterThan(0);
      expect(product.links.some((link) => link.primary)).toBe(true);
      expect(
        product.links.every((link) => link.href.startsWith('https://'))
      ).toBe(true);
    }
  });
});
