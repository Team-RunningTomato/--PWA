import type { Meta, StoryObj } from '@storybook/react';

import Wrapper from '.';

const meta: Meta<typeof Wrapper> = {
  component: Wrapper,
  parameters: {
    layout: 'padded',
  },
  args: {
    title: 'Title',
    errorMessage: '',
  },
};

export default meta;
type Story = StoryObj<typeof Wrapper>;

export const Primary: Story = {};

export const Errored: Story = {
  args: {
    errorMessage: 'Error Message',
  },
};
