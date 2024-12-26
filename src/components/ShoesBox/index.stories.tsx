import type { Meta, StoryObj } from '@storybook/react';

import ShoesBox from '.';

const meta: Meta<typeof ShoesBox> = {
  title: 'Components/ShoesBox',
  component: ShoesBox,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof ShoesBox>;

export const Primary: Story = {
  args: {},
};
