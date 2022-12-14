import React from 'react';
import styled from '@emotion/native';
import { StyleProp, ViewStyle } from 'react-native';

const buttonBgColorType = {
  default: '#fff',
  primary: '#000f9d',
  danger: '#ff3141',
};

const buttonSizeType = {
  mini: {
    gap: '3px',
    size: '13px',
  },
  small: {
    gap: '3px',
    size: '15px',
  },
  middle: {
    gap: '7px',
    size: '17px',
  },
  large: {
    gap: '11px',
    size: '18px',
  },
};

type ButtonProps = {
  onPress: () => void;
  text: string;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;
  color?: keyof typeof buttonBgColorType;
  disabled?: boolean;
  size?: keyof typeof buttonSizeType;
};

export const OurButton = ({
  text,
  onPress,
  loading = false,
  style,
  color = 'default',
  size = 'middle',
  disabled,
}: ButtonProps) => (
  <StyledButton
    onPress={onPress}
    disabled={disabled}
    style={style}
    color={color}
    size={size}>
    {loading && <StyledLoading />}
    <StyledText color={color} size={size}>
      {text}
    </StyledText>
  </StyledButton>
);

type TStyledButton = {
  color: keyof typeof buttonBgColorType;
  size: keyof typeof buttonSizeType;
};

const StyledButton = styled.TouchableOpacity<TStyledButton>`
  flex-direction: row;
  padding: ${props => buttonSizeType[props.size].gap} 12px;
  border-radius: 6px;
  border: 1px solid transparent;
  align-items: center;
  justify-content: center;
  background-color: ${props => buttonBgColorType[props.color]};
  border-color: ${props =>
    props.color === 'default' ? '#d9d9d9' : buttonBgColorType[props.color]};
  opacity: ${props => (props.disabled ? '.3' : 1)};
`;

const StyledLoading = styled.ActivityIndicator`
  margin: 0 5px 0 0;
`;

const StyledText = styled.Text<TStyledButton>`
  color: ${props =>
    props.color === 'default' ? 'rgba(0, 0, 0, 0.88)' : '#fff'};
  font-size: ${props => buttonSizeType[props.size].size};
`;
