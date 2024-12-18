import type { Meta, StoryObj } from '@storybook/react';

import Alarm from '.';

const meta: Meta<typeof Alarm> = {
  title: 'Components/Alarm',
  component: Alarm,
  parameters: {
    layout: 'padded',
  },
  args: {
    name: '김진원',
    title: '광주소프트웨어마이스터고등학교에서 런닝해요.',
    isApplied: true,
  },
};

export default meta;

type Story = StoryObj<typeof Alarm>;

export const Primary: Story = {};

export const Cancle: Story = {
  args: {
    isApplied: false,
  },
};
