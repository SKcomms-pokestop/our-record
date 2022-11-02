import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MyButton } from './Button';
import { WingBlank } from 'antd-mobile-rn';

export default {
  parameters: {
    notes: '버튼 컴포넌트 모음',
  },
  title: 'components/Button',
  component: MyButton,
  decorators: [story => <WingBlank>{story()}</WingBlank>],
} as ComponentMeta<typeof MyButton>;

export const Default: ComponentStory<typeof MyButton> = args => (
  <MyButton {...args} onPress={action('clicked')} />
);
Default.args = {
  text: '기본 버튼',
};

export const Loading: ComponentStory<typeof MyButton> = args => (
  <MyButton {...args} onPress={action('clicked')} />
);
Loading.args = {
  text: '로딩 버튼',
  loading: true,
};
