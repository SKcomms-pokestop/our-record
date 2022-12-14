import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { OurButton } from '.';
import WingBlank from '../WingBlank';
import { View } from 'react-native';
import { css } from '@emotion/native';

export default {
  parameters: {
    notes: '버튼 컴포넌트 모음',
  },
  title: 'Common/Button',
  component: OurButton,
  decorators: [story => <WingBlank>{story()}</WingBlank>],
} as ComponentMeta<typeof OurButton>;

export const Default: ComponentStory<typeof OurButton> = args => (
  <>
    <View
      style={css`
        margin: 0 0 10px;
      `}>
      <OurButton {...args} onPress={action('clicked')} />
    </View>
    <View
      style={css`
        margin: 0 0 10px;
        flex-direction: row;
        justify-content: space-between;
      `}>
      <OurButton
        {...args}
        onPress={action('clicked')}
        style={css`
          flex: 1;
          margin: 0 10px 0 0;
        `}
      />
      <OurButton
        {...args}
        onPress={action('clicked')}
        style={css`
          flex: 1;
          margin: 0 10px 0 0;
        `}
      />
      <OurButton
        {...args}
        onPress={action('clicked')}
        style={css`
          flex: 1;
        `}
      />
    </View>
    <View
      style={css`
        margin: 0 0 10px;
        flex-direction: row;
        align-items: flex-start;
      `}>
      <OurButton
        onPress={action('clicked')}
        text="default"
        style={css`
          margin: 0 10px 0 0;
        `}
      />
      <OurButton
        onPress={action('clicked')}
        text="primary"
        color="primary"
        style={css`
          margin: 0 10px 0 0;
        `}
      />
      <OurButton onPress={action('clicked')} text="danger" color="danger" />
    </View>
    <View
      style={css`
        margin: 0 0 10px;
        flex-direction: row;
        align-items: flex-start;
      `}>
      <OurButton
        onPress={action('clicked')}
        text="disabled"
        style={css`
          margin: 0 10px 0 0;
        `}
        disabled
      />
      <OurButton
        onPress={action('clicked')}
        text="disabled"
        color="primary"
        disabled
      />
    </View>
    <View
      style={css`
        margin: 0 0 10px;
        flex-direction: row;
        align-items: center;
      `}>
      <OurButton
        onPress={action('clicked')}
        text="mini"
        size="mini"
        color="primary"
        style={css`
          margin: 0 10px 0 0;
        `}
      />
      <OurButton
        onPress={action('clicked')}
        text="small"
        size="small"
        color="primary"
        style={css`
          margin: 0 10px 0 0;
        `}
      />
      <OurButton
        onPress={action('clicked')}
        text="middle"
        size="middle"
        color="primary"
        style={css`
          margin: 0 10px 0 0;
        `}
      />
      <OurButton
        onPress={action('clicked')}
        text="large"
        size="large"
        color="primary"
        style={css`
          margin: 0 10px 0 0;
        `}
      />
    </View>
  </>
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
