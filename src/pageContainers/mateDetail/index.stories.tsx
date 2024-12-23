import type { Meta, StoryObj } from '@storybook/react';

import MateDetailPage from '.';

const meta: Meta<typeof MateDetailPage> = {
  title: 'Pages/MateDetail',
  component: MateDetailPage,
};

export default meta;

type Story = StoryObj<typeof MateDetailPage>;

export const Primary: Story = {};
