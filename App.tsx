import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReduxWrapper from './modules/ReduxWrapper';
import Home from './pages/home';
import Folder from './pages/folder';

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <ReduxWrapper>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Folder" component={Folder} />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxWrapper>
  );
};

export default App;
