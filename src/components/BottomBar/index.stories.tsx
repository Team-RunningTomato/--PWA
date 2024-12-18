import type { Meta, StoryObj } from '@storybook/react';

import BottomBar from '.';

const meta: Meta<typeof BottomBar> = {
  title: 'Components/BottomBar',
  component: BottomBar,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof BottomBar>;

export const Primary: Story = {
  args: {},
};
