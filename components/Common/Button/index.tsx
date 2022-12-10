import React from 'react';
import styled from '@emotion/native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  loading?: boolean;
};

export const OurButton = ({ text, onPress, loading }: ButtonProps) => (
  <StyledButton onPress={onPress} disabled={loading}>
    {loading && <StyledLoading />}
    <StyledText>{text}</StyledText>
  </StyledButton>
);

const StyledButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 35px;
  padding: 4px 15px;
  border-radius: 6px;
  border: 1px solid transparent;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-color: #d9d9d9;
`;

const StyledLoading = styled.ActivityIndicator`
  margin: 0 5px 0 0;
`;

const StyledText = styled.Text`
  color: #1f1f1f;
  font-size: 16px;
`;
