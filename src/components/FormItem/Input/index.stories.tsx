import type { Meta, StoryObj } from '@storybook/react';

import InputFormItem from '.';

const meta: Meta<typeof InputFormItem> = {
  component: InputFormItem,
  parameters: {
    layout: 'padded',
  },
  args: {
    inputTitle: 'Input Title',
    errorMessage: '',
    placeholder: '테스트입니다.',
  },
};

export default meta;

type Story = StoryObj<typeof InputFormItem>;

export const Primary: Story = {};

export const Errored: Story = {
  args: {
    errorMessage: 'Error Message',
  },
};

export const Success: Story = {
  args: {
    successMessage: 'Success Message',
  },
};
