import type { Preview } from '@storybook/react';
import React from 'react';

import Providers from '../src/app/providers';
import { GlobalStyle } from '../src/styles/GlobalStyle';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
    },
  },

  decorators: [
    (Story) => {
      return React.createElement(Providers, {
        children: React.createElement(React.Fragment, {}, [
          React.createElement(GlobalStyle, { key: 'global-style' }),
          React.createElement(Story, { key: 'story' }),
        ]),
      });
    },
  ],
};

export default preview;
