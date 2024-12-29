import type { Meta, StoryObj } from '@storybook/react';

import MyPage from '.';

const meta: Meta<typeof MyPage> = {
  title: 'Pages/MyPage',
  component: MyPage,
  args: {
    mateBoxData: [
      {
        distance: 2,
        location: '광주광역시 광산구 상무대로 312',
        title: '광주소프트웨어마이스터고에서 런닝 모집',
        time: '2024-12-20T01:30:00Z',
      },
      {
        distance: 5,
        location: '서울특별시 강남구 테헤란로 427',
        title: '강남에서 아침 런닝',
        time: '2024-12-21T01:40:00Z',
      },

      {
        distance: 10,
        location: '부산광역시 해운대구 해운대해변로 264',
        title: '해운대에서 야간 런닝',
        time: '2024-12-22T02:30:00Z',
      },
      {
        distance: 10,
        location: '부산광역시 해운대구 해운대해변로 264',
        title: '해운대에서 야간 런닝',
        time: '2024-12-22T02:30:00Z',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof MyPage>;

export const Primary: Story = {};
