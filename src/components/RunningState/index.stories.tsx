import type { Meta, StoryObj } from '@storybook/react';

import RunningState from '.';

const meta: Meta<typeof RunningState> = {
  title: 'Components/RunningState',
  component: RunningState,
  parameters: {
    layout: 'padded',
  },
  args: {},
};

export default meta;

type Story = StoryObj<typeof RunningState>;

export const Primary: Story = {};
