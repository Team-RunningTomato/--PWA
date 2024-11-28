import type { Meta, StoryObj } from '@storybook/react';

import RecruitBox from '.';

const meta: Meta<typeof RecruitBox> = {
  component: RecruitBox,
  parameters: {
    layout: 'padded',
  },
  args: {
    distance: '2',
    location: '광주광역시 광산구 상무대로 312',
    title: '광주소프트웨어마이스터고에서 런닝 모집',
    date: '11월 27일 수요일',
    time: '오전 02시 10분',
  },
};

export default meta;

type Story = StoryObj<typeof RecruitBox>;

export const Primary: Story = {};
