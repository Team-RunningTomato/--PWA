import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import type { Preview } from '@storybook/react';

import React from 'react';

import Providers from '../src/app/providers';

const customViewports = {
  'width 360px': {
    name: 'width 360px',
    styles: {
      width: '360px',
      height: '800px',
    },
  },
  ...INITIAL_VIEWPORTS,
};

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: customViewports,
      defaultViewport: 'width 360px',
    },
  },

  decorators: [
    (Story) => (
      <Providers>
        <Story />
      </Providers>
    ),
  ],
};

export default preview;
