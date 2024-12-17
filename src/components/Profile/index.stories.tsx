import type { Meta, StoryObj } from '@storybook/react';

import Profile from '.';

const meta: Meta<typeof Profile> = {
  title: 'Components/Profile',
  component: Profile,
  parameters: {
    layout: 'padded',
  },
  args: {
    name: '김진원',
  },
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Primary: Story = {};
