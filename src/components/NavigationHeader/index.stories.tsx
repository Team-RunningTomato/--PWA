import type { Meta, StoryObj } from '@storybook/react';

import TopBar from '.';

const meta: Meta<typeof TopBar> = {
  title: 'Components/TopBar',
  component: TopBar,
  parameters: {
    layout: 'padded',
  },
  args: {
    navigateUrl: '/',
    title: '런닝 모집하기',
  },
};

export default meta;

type Story = StoryObj<typeof TopBar>;

export const Primary: Story = {};
