import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from '@emotion/native';
import { useNavigation, useRoute } from '@react-navigation/native';

const Header = ({ title = '' }) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <StyledHeader>
      {route.name !== 'home' && (
        <StyledLeft onPress={() => navigation.navigate('home' as never)}>
          <MaterialCommunityIcons name="home" color="#000" size={25} />
        </StyledLeft>
      )}
      <StyledTitle>{title}</StyledTitle>
    </StyledHeader>
  );
};

const StyledHeader = styled.View`
  height: 60px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: #222;
`;
const StyledLeft = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 100%;
`;

export default Header;
