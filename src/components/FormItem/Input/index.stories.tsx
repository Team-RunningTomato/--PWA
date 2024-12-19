import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'padded',
  },
  args: {
    inputTitle: 'Input Title',
    errorMessage: '',
    placeholder: '테스트입니다.',
    rightArea: <>test</>,
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {};

export const Error: Story = {
  args: {
    errorMessage: 'Error Message',
  },
};

export const Success: Story = {
  args: {
    successMessage: 'Success Message',
  },
};
