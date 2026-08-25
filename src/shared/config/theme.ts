export const themeConfig = {
  attribute: 'class',
  defaultTheme: 'system',
  enableSystem: true,
  disableTransitionOnChange: true,
  storageKey: 'portfolio-theme'
} as const;

export const themeOptions = [
  { value: 'light', label: 'Claro' },
  { value: 'dark', label: 'Escuro' },
  { value: 'system', label: 'Sistema' }
] as const;

export type ThemeOption = (typeof themeOptions)[number]['value'];
