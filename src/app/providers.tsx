'use client';

import { GlobalStyle, theme } from '@/styles';

import { ThemeProvider } from '@emotion/react';

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default Providers;
