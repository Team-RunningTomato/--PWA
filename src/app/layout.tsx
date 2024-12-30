import { Metadata } from 'next';

import { Layout } from '@/components';

import Providers from './providers';

export const metadata: Metadata = {
  title: '런닝할래',
  description: '친구들과 함께 런닝할래?',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: [
    'nextjs',
    '런닝',
    '런닝화',
    '마라톤',
    '5km',
    '10km',
    '21.0975km',
    '42.195㎞',
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  applicationName: '런닝할래',
  openGraph: {
    title: '런닝할래',
    description: '친구들과 함께 런닝할래?',
    locale: 'ko',
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='ko'>
      <head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0 , maximum-scale=1.0, user-scalable=no'
        />
        <meta name='viewport' content='user-scalable=no' />
      </head>
      <body>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
