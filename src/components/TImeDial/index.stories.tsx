import type { Meta, StoryObj } from '@storybook/react';

import TimeDial from '.';

const meta: Meta<typeof TimeDial> = {
  title: 'Components/TimeDial',
  component: TimeDial,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof TimeDial>;

export const Primary: Story = {
  args: {},
};
