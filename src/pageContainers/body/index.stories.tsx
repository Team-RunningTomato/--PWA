import type { Meta, StoryObj } from '@storybook/react';

import BodyPage from '.';

const meta: Meta<typeof BodyPage> = {
  title: 'Pages/Body',
  component: BodyPage,
};

export default meta;

type Story = StoryObj<typeof BodyPage>;

export const Primary: Story = {};
