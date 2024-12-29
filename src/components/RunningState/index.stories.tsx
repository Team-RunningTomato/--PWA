import type { Meta, StoryObj } from '@storybook/react';

import RunningState from '.';

const meta: Meta<typeof RunningState> = {
  title: 'Components/RunningState',
  component: RunningState,
  parameters: {
    layout: 'padded',
  },
  args: {
    location: '광주광역시 광산구 상무대로 312',
    distance: 2,
    title: '광주소프트웨어마이스터고',
    date: '11월 27일 수요일 / 오전 02시 10분',
    level: 1,
    totalDistance: 15,
    longestDistance: 10,
    shortestDistance: 1,
    todayRunning: [
      '광주소프트웨어마이스터고에서 런닝 모집',
      '광주소프트웨어마이스터고에서 런닝 모집',
      '광주소프트웨어마이스터고에서 런닝 모집',
    ],
  },
};

export default meta;

type Story = StoryObj<typeof RunningState>;

export const Primary: Story = {};
