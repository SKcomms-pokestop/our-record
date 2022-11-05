import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Button } from 'antd-mobile-rn';
import ReduxWrapper from './modules/ReduxWrapper';
import Home from './pages/home';

const App = () => {
  return (
    <ReduxWrapper>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </ReduxWrapper>
  );
};

export default App;
