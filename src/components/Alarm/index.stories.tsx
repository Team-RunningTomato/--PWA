import type { Meta, StoryObj } from '@storybook/react';

import Alarm from '.';

const meta: Meta<typeof Alarm> = {
  title: 'Components/Alarm',
  component: Alarm,
  parameters: {
    layout: 'padded',
  },
  args: {
    title:
      '김진원님의 “광주소프트웨어마이스터고등학교에서 런닝해요” 신청의 성공했습니다.',
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
