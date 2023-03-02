import React from 'react';
import { NavigationContainer, useLinkTo } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReduxWrapper from './modules/ReduxWrapper';
import Home from './pages/home';
import Folder from './pages/folder';
import { TouchableOpacity } from 'react-native';
import Account from './pages/account';
import Record from './pages/record';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ReduxWrapper>
      <NavigationContainer>
        {/* home */}
        <Tab.Navigator initialRouteName="home">
          <Tab.Screen
            name="home"
            component={Home}
            options={{
              headerShown: false,
              title: '최근 회의록',
              tabBarLabel: '최근 회의록',
              tabBarItemStyle: { display: 'none' },
            }}
          />
          {/* 폴더 */}
          <Tab.Screen
            name="folder"
            component={Folder}
            options={{
              headerShown: false,
              title: '폴더',
              tabBarLabel: '폴더',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="folder"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          {/* 녹음하기 */}
          <Tab.Screen
            name="record"
            component={Record}
            options={{
              title: '녹음하기',
              tabBarLabel: '녹음하기',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="microphone"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          {/* 내정보 */}
          <Tab.Screen
            name="account"
            component={Account}
            options={{
              title: '내정보',
              tabBarLabel: '내정보',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ReduxWrapper>
  );
};

export default App;
