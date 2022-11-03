import React from 'react';
import { SafeAreaView, ScrollView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Button } from 'antd-mobile-rn';

const Home = ({ navigation } : any) => {
  console.log(navigation)
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button>button</Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const Folder = () => {
  return (
    <View>
      <Text>Folder Component</Text>
    </View>
  )
}

const Stack = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Folder" component={Folder}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
