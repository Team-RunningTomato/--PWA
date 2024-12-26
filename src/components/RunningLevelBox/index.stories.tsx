import type { Meta, StoryObj } from '@storybook/react';

import RunningLevelBox from '.';

const meta: Meta<typeof RunningLevelBox> = {
  title: 'Components/RunningLevelBox',
  component: RunningLevelBox,
  parameters: {
    layout: 'padded',
  },
  args: {
    totalDistance: 15,
    bestDistance: 10,
    worstDistance: 5,
    percent: 10,
  },
};

export default meta;

type Story = StoryObj<typeof RunningLevelBox>;

export const Primary: Story = {};
