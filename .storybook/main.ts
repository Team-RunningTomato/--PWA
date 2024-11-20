import type { StorybookConfig } from '@storybook/nextjs';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: '../next.config.js',
    },
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
  staticDirs: ['../src'],
};

export default config;
