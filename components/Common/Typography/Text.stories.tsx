import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OurText } from './Text';
import styled, { css } from '@emotion/native';
import { View } from 'react-native';

export default {
  parameters: {
    notes: '본문',
  },
  title: 'Typography/Text',
  component: OurText,
  decorators: [story => <CenterContainer>{story()}</CenterContainer>],
} as ComponentMeta<typeof OurText>;

export const Text: ComponentStory<typeof OurText> = args => (
  <>
    <View
      style={css`
        align-items: center;
      `}>
      <OurText {...args}>Our Record Design</OurText>
      <OurText {...args} type="secondary">
        Our Record Design
      </OurText>
      <OurText {...args} type="success">
        Our Record Design
      </OurText>
      <OurText {...args} type="danger">
        Our Record Design
      </OurText>
    </View>
  </>
);
Text.args = {};

const CenterContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;
