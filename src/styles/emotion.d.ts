import { theme } from '@/styles';

import '@emotion/react';

type ExtendedTheme = typeof theme;

declare module '@emotion/react' {
  interface Theme extends ExtendedTheme {}
}
