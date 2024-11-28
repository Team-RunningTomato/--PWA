import type { Meta, StoryObj } from '@storybook/react';

import TimeScrollBox from '.';

const meta: Meta<typeof TimeScrollBox> = {
  component: TimeScrollBox,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof TimeScrollBox>;

export const Primary: Story = {};
