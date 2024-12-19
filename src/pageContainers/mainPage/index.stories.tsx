import type { Meta, StoryObj } from '@storybook/react';

import MainPage from '.';

const meta: Meta<typeof MainPage> = {
  title: 'Pages/Main',
  component: MainPage,
  parameters: {
    layout: 'padded',
  },
};

export default meta;

type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {};
