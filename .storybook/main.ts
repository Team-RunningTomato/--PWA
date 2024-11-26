import path from 'path';

import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  webpackFinal: async (config) => {
    if (config.resolve?.alias)
      config.resolve.alias['@'] = path?.resolve(__dirname, '../src/');
    return config;
  },
  babel: async (config) => ({
    ...config,
    presets: [
      [
        'next/babel',
        {
          'preset-react': {
            runtime: 'automatic',
            importSource: '@emotion/react',
          },
        },
      ],
    ],
  }),
};
export default config;
