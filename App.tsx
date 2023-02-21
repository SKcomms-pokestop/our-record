import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReduxWrapper from './modules/ReduxWrapper';
import Home from './pages/home';
import Folder from './pages/folder';
import { TouchableOpacity } from 'react-native';
import Account from './pages/account';
import Record from './pages/record';

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <ReduxWrapper>
      <NavigationContainer>
        {/* home은 따로 빼야? */}
        <Stack.Navigator initialRouteName="home">
          <Stack.Screen
            name="folder"
            component={Folder}
            options={{
              title: '폴더',
              tabBarLabel: '폴더',
              // headerLeft: props => (
              //   <TouchableOpacity
              //     {...props}
              //     style={{ marginLeft: 15 }}
              //     onPress={() => {
              //       // Do something
              //     }}>
              //     <MaterialCommunityIcons
              //       name="home"
              //       color="#000"
              //       size={25}
              //       {...props}
              //     />
              //   </TouchableOpacity>
              // ),
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="folder"
                  color={color}
                  size={size}
                />
              ),
            }}
          />
          <Stack.Screen
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
          <Stack.Screen
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
        </Stack.Navigator>
      </NavigationContainer>
    </ReduxWrapper>
  );
};

export default App;
