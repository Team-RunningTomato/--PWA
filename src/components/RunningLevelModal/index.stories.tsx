import type { Meta, StoryObj } from '@storybook/react';

import RunningLevelModal from '.';

const meta: Meta<typeof RunningLevelModal> = {
  title: 'Components/RunningLevelModal',
  component: RunningLevelModal,
  parameters: {
    layout: 'padded',
  },
  args: {
    percent: 20,
  },
};

export default meta;

type Story = StoryObj<typeof RunningLevelModal>;

export const Primary: Story = {
  args: {},
};
