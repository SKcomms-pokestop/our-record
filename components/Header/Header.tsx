import { Button } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const Header = () => {
    const navigation = useNavigation();
    return (<Button 
        title="Go home"
        onPress={() => navigation.navigate('Home')}></Button>);
}
  

