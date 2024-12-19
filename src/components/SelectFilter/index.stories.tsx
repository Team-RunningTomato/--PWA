import type { Meta, StoryObj } from '@storybook/react';

import SelectFilter from '.';

const meta: Meta<typeof SelectFilter> = {
  title: 'Components/SelectFilter',
  component: SelectFilter,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof SelectFilter>;

export const Primary: Story = {
  args: {},
};
