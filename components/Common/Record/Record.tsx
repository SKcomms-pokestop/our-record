import { PressableProps, View } from 'react-native';
import React from 'react';
import styled from '@emotion/native';

interface P extends PressableProps {
  state: 'stop' | 'play';
}

export const OurRecordButton = (props: P) => {
  return (
    <View>
      <StyledButton {...props}>
        <StyledIcon state={props.state} />
      </StyledButton>
    </View>
  );
};

const StyledButton = styled.Pressable<P>`
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: #222;
  border-radius: 50px;
`;
const StyledIcon = styled.View<P>`
  width: 30px;
  height: 30px;
  background-color: ${props => (props.state === 'play' ? '#ff0000' : '#fff')};
  border-radius: ${props => (props.state === 'play' ? '50' : '0')}px;
`;
