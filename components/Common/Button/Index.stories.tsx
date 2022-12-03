import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { OurButton } from '.';
import WingBlank from '../WingBlank';

export default {
  parameters: {
    notes: '버튼 컴포넌트 모음',
  },
  title: 'Common/Button',
  component: OurButton,
  decorators: [story => <WingBlank>{story()}</WingBlank>],
} as ComponentMeta<typeof OurButton>;

export const Default: ComponentStory<typeof OurButton> = args => (
  <OurButton {...args} onPress={action('clicked')} />
);
Default.args = {
  text: '기본 버튼',
};

export const Loading: ComponentStory<typeof OurButton> = args => (
  <OurButton {...args} onPress={action('clicked')} />
);
Loading.args = {
  text: '로딩 버튼',
  loading: true,
};
