'use client';

import { GlobalStyle } from '@/styles';

import Providers from './providers';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <Providers>
        <GlobalStyle />
        <body>{children}</body>
      </Providers>
    </html>
  );
};

export default RootLayout;
