import React, { ReactNode } from 'react';
import styled from '@emotion/native';

interface P {
  children: ReactNode;
}

const WingBlank = ({ children }: P) => {
  return <StyledWingBlank>{children}</StyledWingBlank>;
};

const StyledWingBlank = styled.View`
  padding: 0 15px;
`;

export default WingBlank;
