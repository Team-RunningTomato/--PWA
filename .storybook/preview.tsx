import type { Preview } from '@storybook/react';

import React from 'react';

import Providers from '../src/app/providers';
import { GlobalStyle } from '../src/styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <Providers>
        <GlobalStyle />
        <Story />
      </Providers>
    ),
  ],
};

export default preview;
