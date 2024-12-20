import type { Meta, StoryObj } from '@storybook/react';

import MateBottomSheet from '.';

const meta: Meta<typeof MateBottomSheet> = {
  title: 'Components/MateBottomSheet',
  component: MateBottomSheet,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MateBottomSheet>;

export const Primary: Story = {};
