import type { Meta, StoryObj } from '@storybook/react';

import MateCard from '.';

const meta: Meta<typeof MateCard> = {
  title: 'Components/MateCard',
  component: MateCard,
  parameters: {
    layout: 'padded',
  },
  args: {
    distance: 2,
    title: '광주소프트웨어마이스터고에서 런닝 모집',
    startAt: '2024-12-20T01:30:00Z',
    url: '/running',
  },
};

export default meta;

type Story = StoryObj<typeof MateCard>;

export const Primary: Story = {};

export const Applied: Story = {
  args: {
    isApplied: true,
  },
};
