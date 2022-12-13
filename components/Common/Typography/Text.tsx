import React from 'react';
import styled from '@emotion/native';

interface P {
  children: string;
  type: 'default' | 'secondary' | 'success' | 'danger';
}

export const OurText = ({ children, type = 'default' }: P) => {
  return <StyledText type={type}>{children}</StyledText>;
};

const colorType = {
  default: 'rgba(0, 0, 0, 0.88)',
  secondary: 'rgba(0,0,0,.45)',
  success: '#52c41a',
  danger: '#ff4d4f',
};
const StyledText = styled.Text<P>`
  font-size: 14px;
  color: ${props => colorType[props.type]};
  word-break: break-word;
  line-height: 22px;
`;
