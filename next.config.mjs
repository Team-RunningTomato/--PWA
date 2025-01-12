import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

export default withPWA({
  rewrites: async () => [
    {
      source: '/api/:path*',
      destination: `${process.env.NEXT_PUBLIC_API_BASE_URL}/:path*`,
    },
    {
      source: '/kakao/:path*',
      destination: `${process.env.NEXT_PUBLIC_KAKAO_BASE_URL}/:path*`,
    },
    {
      source: '/nominatim/:path*',
      destination: `${process.env.NEXT_PUBLIC_NOMINATIM_BASE_URL}/:path*`,
    },
  ],
});
