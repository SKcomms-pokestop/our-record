import React from 'react';
import styled from '@emotion/native';

interface P {
  children: string;
  level?: 1 | 2 | 3 | 4 | 5;
}

const defaultLevel = 1;

export const OurTitle = ({ children, level = defaultLevel }: P) => {
  return <StyledText level={level}>{children}</StyledText>;
};

const levelSize = {
  1: '38',
  2: '30',
  3: '24',
  4: '20',
  5: '16',
};
const StyledText = styled.Text<P>`
  font-size: ${props => levelSize[props.level || defaultLevel]}px;
`;
