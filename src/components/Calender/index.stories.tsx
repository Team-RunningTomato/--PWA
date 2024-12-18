import type { Meta, StoryObj } from '@storybook/react';

import Calender from '.';

const meta: Meta<typeof Calender> = {
  title: 'Components/Calender',
  component: Calender,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof Calender>;

export const Primary: Story = {
  args: {},
};
