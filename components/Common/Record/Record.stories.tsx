import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { OurRecordButton } from './Record';
import styled from '@emotion/native';

export default {
  parameters: {
    notes: '녹음 버튼',
  },
  title: 'Common/Record',
  component: OurRecordButton,
  decorators: [story => <CenterContainer>{story()}</CenterContainer>],
} as ComponentMeta<typeof OurRecordButton>;

export const Play: ComponentStory<typeof OurRecordButton> = args => (
  <OurRecordButton {...args} />
);
Play.args = {
  state: 'play',
};

export const Stop: ComponentStory<typeof OurRecordButton> = args => (
  <OurRecordButton {...args} />
);
Stop.args = {
  state: 'stop',
};

const CenterContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 100%;
`;
