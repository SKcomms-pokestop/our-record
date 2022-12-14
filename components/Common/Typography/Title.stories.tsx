import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OurTitle } from './Title';
import styled, { css } from '@emotion/native';
import { View } from 'react-native';

export default {
  parameters: {
    notes: '제목',
  },
  title: 'Typography/Title',
  component: OurTitle,
  decorators: [story => <CenterContainer>{story()}</CenterContainer>],
} as ComponentMeta<typeof OurTitle>;

export const Title: ComponentStory<typeof OurTitle> = args => (
  <>
    <View
      style={css`
        align-items: center;
      `}>
      <OurTitle {...args}>H1 title</OurTitle>
      <OurTitle {...args} level={2}>
        H2 title
      </OurTitle>
      <OurTitle {...args} level={3}>
        H3 title
      </OurTitle>
      <OurTitle {...args} level={4}>
        H4 title
      </OurTitle>
      <OurTitle {...args} level={5}>
        H5 title
      </OurTitle>
    </View>
  </>
);
Title.args = {};

const CenterContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;
