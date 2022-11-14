import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReduxWrapper from './modules/ReduxWrapper';
import Home from './pages/home';
import Folder from './pages/folder';
import Profile  from './pages/profile';
import Record from './pages/record';
import { Header } from './components/Header/Header';

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <ReduxWrapper>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Group screenOptions={{ headerTitle: () => <Header></Header> }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Folder" component={Folder}/>
            <Stack.Screen name="Record" component={Record}/>
            <Stack.Screen name="Profile" component={Profile}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxWrapper>
  );
};

export default App;
