import type { Meta, StoryObj } from '@storybook/react';

import NavigationHeader from '.';

const meta: Meta<typeof NavigationHeader> = {
  title: 'Components/NavigationHeader',
  component: NavigationHeader,
  parameters: {
    layout: 'padded',
  },
  args: {
    title: '런닝 모집하기',
  },
};

export default meta;

type Story = StoryObj<typeof NavigationHeader>;

export const Primary: Story = {};
