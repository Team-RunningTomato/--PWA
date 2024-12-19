import type { Meta, StoryObj } from '@storybook/react';

import PromiseBottomSheet from '.';

const meta: Meta<typeof PromiseBottomSheet> = {
  title: 'Components/PromiseBottomSheet',
  component: PromiseBottomSheet,
  parameters: {
    layout: 'padded',
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof PromiseBottomSheet>;

export const Primary: Story = {};
