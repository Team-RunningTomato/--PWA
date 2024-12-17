import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from '.';

const meta: Meta<typeof LoginPage> = {
  title: 'Pages/Login',
  component: LoginPage,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof LoginPage>;

export const Primary: Story = {};
