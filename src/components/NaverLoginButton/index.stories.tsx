import type { Meta, StoryObj } from '@storybook/react';

import NaverLoginButton from '.';

const meta: Meta<typeof NaverLoginButton> = {
  title: 'Components/NaverLoginButton',
  component: NaverLoginButton,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

type Story = StoryObj<typeof NaverLoginButton>;

export const Primary: Story = {};
