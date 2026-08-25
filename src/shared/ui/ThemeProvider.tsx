'use client';

import type { ReactNode } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { themeConfig } from '@/shared/config/theme';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <NextThemesProvider {...themeConfig}>{children}</NextThemesProvider>;
}
