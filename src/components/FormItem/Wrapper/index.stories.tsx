import type { Meta, StoryObj } from '@storybook/react';

import Wrapper from '.';

const meta: Meta<typeof Wrapper> = {
  title: 'Components/Wrapper',
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

export const Error: Story = {
  args: {
    errorMessage: 'Error Message',
  },
};

export const Success: Story = {
  args: {
    successMessage: 'Success Message',
  },
};
