import { SafeAreaView, View } from 'react-native';
import React, { ReactNode } from 'react';
import styled from '@emotion/native';
import Header from './Header';

interface P {
  title: string;
  children: ReactNode;
}

const Layout = ({ children, title }: P) => {
  return (
    <StyledArea>
      <SafeAreaView>
        <Header title={title} />
        {children}
      </SafeAreaView>
    </StyledArea>
  );
};

const StyledArea = styled.View``;

export default Layout;
