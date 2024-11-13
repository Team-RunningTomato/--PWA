'use client';

import Providers from './providers';

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <Providers>
        <body>{children}</body>
      </Providers>
    </html>
  );
};

export default RootLayout;
