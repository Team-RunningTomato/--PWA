import type { Meta, StoryObj } from '@storybook/react';

import TimeBox from '.';

const meta: Meta<typeof TimeBox> = {
  title: 'Components/TimeBox',
  component: TimeBox,
  parameters: {
    layout: 'padded',
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof TimeBox>;

export const Primary: Story = {};
