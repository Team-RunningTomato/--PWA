import type { Meta, StoryObj } from '@storybook/react';

import FilterBottomSheet from '.';

const meta: Meta<typeof FilterBottomSheet> = {
  title: 'Components/FilterBottomSheet',
  component: FilterBottomSheet,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof FilterBottomSheet>;

export const Primary: Story = {
  args: {},
};
