import type { Meta, StoryObj } from '@storybook/react';

import MateBox from '.';

const meta: Meta<typeof MateBox> = {
  title: 'Components/MateBox',
  component: MateBox,
  parameters: {
    layout: 'padded',
  },
  args: {
    distance: '2',
    location: '광주광역시 광산구 상무대로 312',
    title: '광주소프트웨어마이스터고에서 런닝 모집',
    time: '2024-12-20T01:30:00Z',
  },
};

export default meta;

type Story = StoryObj<typeof MateBox>;

export const Primary: Story = {};
