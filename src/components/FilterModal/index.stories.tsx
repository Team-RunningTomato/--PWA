import type { Meta, StoryObj } from '@storybook/react';

import FilterModal from '.';

const meta: Meta<typeof FilterModal> = {
  title: 'Components/FilterModal',
  component: FilterModal,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof FilterModal>;

export const Primary: Story = {
  args: {},
};
