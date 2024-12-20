'use client';

import { GlobalStyle, theme } from '@/styles';

import { ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren } from 'react';

const Providers = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        {children}
        <GlobalStyle />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
