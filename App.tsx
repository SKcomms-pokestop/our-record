import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReduxWrapper from './modules/ReduxWrapper';
import Home from './pages/home';
import Folder from './pages/folder';

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <ReduxWrapper>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          <Stack.Screen
            name="Folder"
            component={Folder}
            options={{
              tabBarLabel: 'folder',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="folder"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxWrapper>
  );
};

export default App;
